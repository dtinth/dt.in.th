---
public: true
title: Request and response logging in Elysia
---

# Request and response logging in Elysia

One of the criteria of whether I consider a web framework to be **production grade** or not is whether it has a **built-in logger**[^loggers]. Unfortunately, [Elysia](Elysia) does not come with any built-in logger[^otel]. Although [community plugins are available](https://elysiajs.com/plugins/overview.html#community-plugins), there are at least 4 options that you have to choose from.

[^loggers]: Some examples:

    - [**Fastify**](https://fastify.dev/docs/latest/Reference/Logging/#logging) has a built-in configurable logger based on [Pino](https://getpino.io/). Additionally, it provides a request-scoped logger attached to each request object, so it's easy to see which log belongs to which request.
    - [**Hono**](https://hono.dev/docs/middleware/builtin/logger) also has a built-in simple logger, albeit not as configurable.
    - [**NestJS**](https://docs.nestjs.com/techniques/logger) has a built-in logger that can be easily replaced with your own logger.
    - [**Firebase Functions Framework**](Firebase) also has a built-in logger, which encourages [structured logging on Google Cloud Observability](https://cloud.google.com/logging/docs/structured-logging).

[^otel]: To its credit, [Elysia does have an official integration for OpenTelemetry](https://elysiajs.com/recipe/opentelemetry.html#opentelemetry).

However, for more control, you may want to create your own logger, or maybe you already have a logger that you want to integrate with Elysia. As of writing, this is not well-documented yet, and the ingredients are spread across multiple pages in the Elysia documentation, so here goes: To set up logging, you can [create a plugin](https://elysiajs.com/essential/plugin.html#plugin) that [hooks](https://elysiajs.com/essential/life-cycle.html) into the [onRequest](https://elysiajs.com/essential/life-cycle.html#request) and [onAfterResponse](https://elysiajs.com/essential/life-cycle.html#after-response) life cycle events:

```ts
import Elysia from 'elysia'

export function createLogger() {
  return new Elysia()
    .onRequest(({ request }) => {
      // … do something when request begins …
    })
    .onAfterResponse(({ request, response }) => {
      // … do something after response is sent …
    })
    .as('plugin')
}
```

For example, here is how to integrate [Hono's built-in logger](https://hono.dev/docs/middleware/builtin/logger) with Elysia:

```ts
import Elysia from 'elysia'
import { logger } from 'hono/logger'

export function createLogger() {
  const log = logger()
  interface RequestState {
    // Emulates the requested context object for Hono's logger
    c: {
      req: { raw: Request; method: string }
      res?: Response
    }
    resolve: () => void
  }

  const stateMap = new WeakMap<Request, RequestState>()
  return new Elysia()
    .onRequest(({ request }) => {
      let resolve: () => void
      const state: RequestState = {
        c: { req: { raw: request, method: request.method } },
        resolve: () => resolve(),
      }
      const promise = new Promise<void>((r) => (resolve = r))
      stateMap.set(request, state)
      log(state.c as any, () => promise)
    })
    .onAfterResponse(({ request, response }) => {
      const state = stateMap.get(request)
      if (!state) return
      state.c.res = response as Response
      state.resolve()
    })
    .as('plugin')
}
```

Another example, this time integrating with [unjs](https://unjs.io/)' [consola](https://www.npmjs.com/package/consola) logger:

```ts
import { consola } from 'consola'
import Elysia from 'elysia'
import { getPath } from 'hono/utils/url'

export function createLogger() {
  const map = new WeakMap<Request, { prefix: string; start: number }>()
  return new Elysia()
    .onRequest(({ request }) => {
      const state = {
        prefix: `[${request.method}] ${getPath(request)}`,
        start: performance.now(),
      }
      consola.start(state.prefix)
      map.set(request, state)
    })
    .onAfterResponse(({ request, response: r }) => {
      const state = map.get(request)
      if (!state) return
      const response = r as Response
      const time = `${Math.round(performance.now() - state.start)}ms`
      if (response.status >= 400) {
        consola.fail(state.prefix, response.status, time)
      } else {
        consola.success(state.prefix, response.status, time)
      }
    })
    .as('plugin')
}
```

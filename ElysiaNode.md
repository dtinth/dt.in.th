---
title: Using Elysia in Node.js
public: true
---

# Using [Elysia](Elysia) in [Node.js](Nodejs)

## After v1.1.11

**Elysia now supports running on Node.js natively** without needing Hono as a wrapper, using [@elysiajs/node](https://github.com/elysiajs/node) (which is, in turn, based on [@hono/node-server](https://github.com/elysiajs/node/blob/5a3d4e8af720358ff1ed0f5a3efc0fbf4423a8f5/package.json#L14)) with `{ adapter: node() }`.

```ts
import { Elysia, t } from 'elysia'
import { node } from '@elysiajs/node'

const port = +process.env.PORT! || 3000
const app = new Elysia({ adapter: node() })
  .get('/', 'Hello Elysia')
  .get('/user/:id', ({ params: { id } }) => id)
  .post('/form', ({ body }) => body)
  .listen(port)

console.log(`🦊 Elysia is running at port ${port}`)
```

The instructions for before v1.1.11 are still kept below for reference.

## Before v1.1.11

**tl;dr:** Mount Elysia onto Hono and run using `tsx`. Also [available on StackBlitz](https://stackblitz.com/edit/elysia).

```ts
import { Elysia, t } from 'elysia'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'

const app = new Elysia()
  .get('/', 'Hello Elysia')
  .get('/user/:id', ({ params: { id } }) => id)
  .post('/form', ({ body }) => body)

serve(
  {
    fetch: new Hono().use(logger()).mount('/', app.fetch).fetch,
    port: +process.env.PORT! || 3000,
  },
  (info) => console.log(`http://${info.address}:${info.port}`)
)
```

```sh
# Run the app
tsx app.ts

# Run the app in watch mode, restarting on file changes
tsx watch app.ts
```

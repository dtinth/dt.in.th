---
title: How I render HTML in Elysia
public: true
---

# How I render HTML in Elysia

For small, server-heavy web applications that primarily read from databases and generate reports, separating frontend and backend often adds unnecessary complexity. Instead of creating a dedicated frontend project, I prefer rendering HTML directly from the server side. My [@thai/html](https://jsr.io/@thai/html) library provides a solution with tagged template literals, automatic string escaping, and streamable rendering support.

Here’s the [Elysia](Elysia) plugin to integrate HTML rendering:

```ts
// ./elysiaPlugins/html.ts
import { fromAnyIterable } from '@sec-ant/readable-stream'
import { Hypertext, renderHtmlStream, type Html } from '@thai/html'
import { Elysia } from 'elysia'

async function* toBinary(
  stream: AsyncIterable<string>
): AsyncIterable<Uint8Array> {
  for await (const chunk of stream) {
    yield new TextEncoder().encode(chunk)
  }
}

export function htmlResponse(html: Html) {
  return new Response(fromAnyIterable(toBinary(renderHtmlStream(html))), {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
}

export const htmlPlugin = new Elysia({ name: 'html' })
  .mapResponse(async ({ response }) => {
    if (response instanceof Hypertext) {
      return htmlResponse(response)
    }
  })
  .as('scoped')
```

And here’s how to use the plugin:

```ts
import { html } from '@thai/html'
import Elysia from 'elysia'
import { htmlPlugin } from './elysiaPlugins/html'

export default new Elysia().use(htmlPlugin).get('/', () =>
  layout({
    title: 'Elysia HTML Example',
    body: html`<h1>Hello, Elysia!</h1>`,
  })
)

function layout({
  head,
  title,
  body,
}: {
  head?: Html
  title: string
  body: Html
}) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${head}
      </head>
      <body>
        ${body}
      </body>
    </html>
  `
}
```

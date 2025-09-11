---
title: Using Elysia in Node.js
public: true
---

# Using [Elysia](Elysia) in [Node.js](Nodejs)

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

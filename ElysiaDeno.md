---
title: Using Elysia in Deno
public: true
---

# Using [Elysia](Elysia) in [Deno](Deno)

**tl;dr:** `export default` the Elysia app and run it with `deno serve`.

```ts
import { Elysia } from 'elysia'

export default new Elysia()
  .get('/', 'Hello Elysia')
  .get('/user/:id', ({ params: { id } }) => id)
  .post('/form', ({ body }) => body)
```

```sh
# Run the app
deno serve --allow-env main.ts

# Run the app in watch mode, restarting on file changes
deno serve --watch --allow-env main.ts
```

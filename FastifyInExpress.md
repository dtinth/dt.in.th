---
public: true
title: Fastify-in-Express
aliases:
  - 20220727T080336Z7229
---

In one of my [Node.js](Nodejs) projects, I have a legacy Express app (serves an API) that I would rather not touch. Instead, I want future endpoints to be built with Fastify instead.

Plan:

- Requests to `/v2/` go to Fastify.
- The rest of the requests go to Express.
- Once legacy routes are no longer used, I can delete the Express app.

Here’s what I did:

1. Separate Express app listening process:

   - Replace this:

     ```js
     const server = app.listen(21001, () => {
       console.log(server.address())
     })
     ```

   - With this:

     ```js
     const server = http.createServer((req, res) => {
       app(req, res)
     })

     server.listen(21001, () => {
       console.log(server.address())
     })
     ```

2. Create a Fastify app:

   ```js
   // serverV2.mjs
   import Fastify from 'fastify'

   export const app = Fastify({
     logger: true,
   })

   app.get('/v2/hello', async () => {
     return 'meow'
   })
   ```

3. Make the http server dispatch to the Fastify app if `req.url` starts with `/v2/`:

   - Replace this:

     ```js
     const server = http.createServer((req, res) => {
       app(req, res)
     })
     ```

   - With this:

     ```js
     const server = http.createServer((req, res) => {
       if (req.url?.startsWith('/v2/')) {
         import('./serverV2.mjs').then(async ({ app }) => {
           await app.ready()
           app.server.emit('request', req, res)
         })
       } else {
         app(req, res)
       }
     })
     ```

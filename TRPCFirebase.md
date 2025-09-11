---
title: Using tRPC on Firebase Functions v2
public: true
---

```ts
import { onRequest } from 'firebase-functions/v2/https'
import * as logger from 'firebase-functions/logger'
import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'

export interface Context {}

const t = initTRPC.context<Context>().create()

const appRouter = t.router({
  info: t.procedure.query(async () => {
    return { name: 'my-app' }
  }),
})

const trpcHandler = trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext: async () => {
    return {}
  },
})

export const trpc = onRequest({ cors: true }, (request, response) => {
  trpcHandler(request, response, (err) => {
    if (err) {
      logger.error(err)
      response.status(500).send({ message: 'An error occurred' })
    }
  })
})
```
---
public: true
title: Session management in Elysia using Remix’s session storage
created: 2025-05-10
giscus: true
---

:::lead
[Remix](https://remix.run/) has a pretty robust & easy-to-use [session management utilities](https://remix.run/docs/en/main/utils/sessions) that can be easily integrated into an [Elysia](Elysia) application:
:::

```ts
import { Elysia } from 'elysia'

interface ISessionStorage<S> {
  getSession(cookieHeader: string | null): Promise<S>
  commitSession(session: S): Promise<string | null>
}

export function remixSession<T>(sessionStorage: ISessionStorage<T>) {
  return new Elysia({ name: 'remixSession' })
    .derive(async ({ request }) => {
      const cookieHeader = request.headers.get('cookie')
      return {
        session: await sessionStorage.getSession(cookieHeader),
      }
    })
    .onAfterHandle(async ({ session, set }) => {
      const cookie = await sessionStorage.commitSession(session)
      if (cookie) {
        set.headers['set-cookie'] ??= []
        if (!Array.isArray(set.headers['set-cookie'])) {
          set.headers['set-cookie'] = [set.headers['set-cookie']]
        }
        set.headers['set-cookie'].push(cookie)
      }
    })
    .as('scoped')
}
```

To use:

```ts
import { createCookieSessionStorage } from '@remix-run/node'

const sessionStorage = createCookieSessionStorage({
  cookie: { name: '__session', secrets: ['ELYSIAr0ck5'] },
})

export default new Elysia()
  .use(remixSession(sessionStorage))
  .get('/count', async ({ session }) => {
    const count = (await session.get('count')) || 0
    session.set('count', count + 1)
    return `Count: ${count}`
  })
```

I like that I don’t have to manage cookies directly — using Remix’s session abstraction keeps my code less coupled to Elysia itself. Plus, Remix provides built-in runtime warnings and robust error handling, so I’m less likely to misconfigure things.

Remix provides several session storage APIs, allowing you to store session data either as signed data in cookies or in a backing store like a filesystem, database, or key-value store. Here’s a quick reference table:

<!-- prettier-ignore -->
| API | Storage Type |
|-----|--------------|
| [**`createCookieSessionStorage`**](https://remix.run/docs/en/main/utils/sessions#createcookiesessionstorage) | Signed data in cookie |
| [**`createFileSessionStorage`**](https://remix.run/docs/en/main/utils/sessions#createfilesessionstorage-nodejs-deno) | File system (Node.js/Deno) |
| [**`createWorkersKVSessionStorage`**](https://remix.run/docs/en/main/utils/sessions#createworkerskvsessionstorage-cloudflare) | Cloudflare Workers KV |
| [**`createArcTableSessionStorage`**](https://remix.run/docs/en/main/utils/sessions#createarctablesessionstorage-architect-amazon-dynamodb) | DynamoDB (Architect/AWS) |

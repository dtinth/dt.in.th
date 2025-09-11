---
title: Accessing user ID in NextAuth.js with JWT session
public: true
---

:::lead
When using [NextAuth.js](https://next-auth.js.org) to manage authentication in a [Next.js](Next) app, **by default, the current user ID is not included in the session data.** To access the user ID, some extra configuration is required.
:::

**Important:** This note assumes a [JWT](JWT) session, not a database-backed session.

```ts
declare module 'next-auth' {
  export interface Session {
    userId?: string
  }
}

export const authOptions: NextAuthOptions = {
  // ...
  callbacks: {
    async session({ session, token }) {
      session.userId = token.sub
      return session
    },
  },
}
```

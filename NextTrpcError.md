---
public: true
title: Configuring tRPC error logging in T3 apps
---

# Configuring tRPC error logging in T3 apps

Developers building apps on the using [`create-t3-app`](https://create.t3.gg/) should be aware that **[tRPC error logging is disabled in production by default.](https://github.com/t3-oss/create-t3-app/issues/936)** This default can make it difficult to debug errors [in production](NextInProduction), as any errors thrown by tRPC will be swallowed (silently discarded) and not logged to the server console.

To enable [tRPC](TRPC) error logging in production, edit the [`src/pages/api/trpc/[trpc].ts`](https://github.com/fresh-app/fresh-t3-app/blob/main/src/pages/api/trpc/%5Btrpc%5D.ts) and set an `onError` handler:

<!-- prettier-ignore -->
```ts
  onError: ({ path, error }) => {
    if (env.NODE_ENV === "development") {
      console.error(`❌ tRPC failed on ${path}`);
    }
    console.error(error);
  }
```

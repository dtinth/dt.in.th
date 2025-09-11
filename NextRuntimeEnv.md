---
public: true
title: Runtime Environment Variables in Next.js
---

# Runtime Environment Variables in Next.js

<div class="lead">

**In [Next.js](Next), [environment variables are evaluated and inlined at build time.](https://nextjs.org/docs/basic-features/environment-variables#:~:text=environment%20variables%20are%20evaluated%20at%20build%20time)**
This means that if you want to change the value of an environment variable, you will need to rebuild the app.

</div>

When building a [production-grade Next.js app](NextInProduction), this way of environment variable handling is not ideal for [Docker](Docker)-based deployments for the following reasons:

- You will need to build separate Docker images for each environment (e.g. dev, staging, prod).
- You will need to rebuild the Docker image every time you want to change an environment variable.
- Your secrets would end up in the Docker image.

**More ideally, we want to create a single Docker image and reuse them across multiple environments.** This requires our app to be able to access environment variables that are injected at run-time. This note describes how to do that in a Next.js app.

## How to access environment variables at runtime

### Don’t use `process.env`

<div class="indented">

Again, they are evaluated and inlined into the bundle at build time.

</div>

### Don’t use `serverRuntimeConfig` or `publicRuntimeConfig`

<div class="indented">

[These features](https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration) are now [considered “legacy”](https://github.com/vercel/next.js/pull/43443) and do not work with [Output File Tracing](https://nextjs.org/docs/advanced-features/output-file-tracing)[^nft], [Automatic Static Optimization](https://nextjs.org/docs/advanced-features/automatic-static-optimization), or [React Server Components](https://nextjs.org/docs/advanced-features/react-18/server-components).

</div>

[^nft]: Using Output File Tracing is pretty important for keeping images small, because otherwise your Docker image would be pretty large — 60 MB for TypeScript and another 60 MB for `swc` binaries.

### API routes: Use `global.process.env`

<div class="indented">

Unlike `process.env`, references to `global.process.env` are not inlined into the bundle at build time, so you can use them in your API routes instead.

</div>

### Server-side-rendered pages: Use `global.process.env` in `getServerSideProps`

<div class="indented">

`getServerSideProps` is evaluated on the server-side, so you can use `global.process.env` there too. You can then pass the environment variables to the client-side code via `props`.

</div>

### Client-side-rendered components: Fetch the data you need from an API

<div class="indented">

You can create an API route that returns the data you need. Then in the client-side code, you can request the data from that API route with [client-side fetching](https://nextjs.org/docs/basic-features/data-fetching/client-side). Libraries like [React Query](https://react-query.tanstack.com/), [SWR](https://swr.vercel.app/), or [@trpc/next](https://trpc.io/docs/nextjs) can help you with accomplishing this.

If you don’t like the idea of making an extra request to the server, there’s an advanced solution below (warning: advanced).

</div>

### (Advanced) Isomorphic components that are not statically-prerendered: Inject the public environment variables into the global scope or the DOM so that they can also be accessed by client-side code

1. During server-side rendering of the page, inject the public runtime environment variables into the global scope or the DOM.

2. Create an isomorphic function that can access the public environment variable.

   - When called on the server-side, the function can access the environment variable from `global.process.env`. To ensure consistent behavior between the server and the client, it should prevent access to non-public environment variables.
   - When called on the client-side, the function can access the environment variable from wherever you injected it in step 1.

3. Use the isomorphic function you created in step 2 in your components.

### Statically-prerendered pages:

<div class="indented">

Unfortunately, there is no way to access runtime environment variables in static pages (or pages that gets optimized with [Automatic Static Optimization](https://nextjs.org/docs/advanced-features/automatic-static-optimization)). This is because static pages are pre-rendered at build time.

You can either:

- Use [`dynamic()` with `ssr: false`](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr) to [force the component that needs the environment variables to be loaded and rendered on the client-side.](NextClientSideOnly)
- Turn the page into a server-side-rendered page by using `getServerSideProps`.

</div>

## Further reading

Relevant discussions on the Next.js GitHub repo:

- [Not possible to use different configurations in staging + production??](https://github.com/vercel/next.js/discussions/22243)
- [docker image with `NEXT_PUBLIC_` env variables](https://github.com/vercel/next.js/discussions/17641)
- [Allow dynamic `serverRuntimeConfig` and `publicRuntimeConfig` values from `process.env.*` with `outputStandalone: true`](https://github.com/vercel/next.js/discussions/34894)

<style>
  .indented { padding-left: 40px; }
</style>

---
public: true
title: Server-side source maps in Next.js
---

[Next.js](Next) has a [`productionBrowserSourceMaps` option](https://nextjs.org/docs/advanced-features/source-maps) which generates source maps for the client-side code. However, it does not generate source maps for the server-side code, which makes debugging server-side code in [production](NextInProduction) difficult.

To generate source maps for the server-side code, directly modify Next.js’s webpack config:

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.devtool = 'source-map'
    }
    return config
  },
}
```

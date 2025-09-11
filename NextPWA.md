---
title: Making a Next.js app a PWA
public: true
---

How to turn a [Next.js](Next) app into a [PWA](PWA) using [next-pwa](https://github.com/shadowwalker/next-pwa) plugin:

1. Install `next-pwa`

   ```sh
   yarn add next-pwa
   ```

2. Update `next.config.js`

   ```js
   const withPWA = require('next-pwa')({ dest: 'public' })

   // ...

   module.exports = withPWA(nextConfig)
   ```

3. [Create a `.webmanifest` file](https://manifest-gen.netlify.app/) and place it in the `public` directory

4. Add a `<link>` tag to the `<head>` of `pages/_document.js`

   ```ts
   <link rel="manifest" href="/manifest.json">
   ```

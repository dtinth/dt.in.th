---
public: true
title: Fixing SvelteKit problem not able to require pure-ES module packages
aliases:
  - 20220715T183753Z9898
---

I ran into an error when deploying a [SvelteKit](Svelte) app:

```
require() of ES Module /var/task/node_modules/p-memoize/dist/index.js from /var/task/.netlify/server/entries/endpoints/wiki/_...slug_.ts.js not supported.
Instead change the require of index.js in /var/task/.netlify/server/entries/endpoints/wiki/_...slug_.ts.js to a dynamic import() which is available in all CommonJS modules.
```

This error happens because the dependency in question, [`p-memoize`](https://www.npmjs.com/package/p-memoize) is a [**pure-ESM package**](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) in a SvelteKit app. This causes a runtime error in the SSR bundle.

To solve this, add it to `vite.config.js`:

```js
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  ssr: {
    noExternal: ['p-memoize'],
  },
}

export default config
```

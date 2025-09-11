---
public: true
title: Analyzing and optimizing Vite bundle size
---

# Analyzing and optimizing Vite bundle size

Sometimes when building a [JavaScript](JavaScript) app with Vite, it complains about bundle size:

![](https://static.dt.in.th/uploads/2022/12/12/bef-console.png)

## Analyzing

1. Install `rollup-plugin-visualizer`

   ```sh
   pnpm add rollup-plugin-visualizer
   ```

2. Add `rollup-plugin-visualizer` to `vite.config.ts`:

   ```ts
   import { visualizer } from 'rollup-plugin-visualizer'

   export default defineConfig({
     // ...
     plugins: [
       // ...
       visualizer(),
     ],
   })
   ```

3. Run `pnpm build` and open `stats.html` in browser. (Add `stats.html` to `.gitignore`)

This should show a graph of bundle size. You can see which packages are taking up the most space.

## Optimizing

Update `vite.config.ts` and add `build.rollupOptions.output.manualChunks`:

```ts
export default defineConfig({
  // ...
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          zxing: ['@zxing/browser', '@zxing/library'],
          react: ['react', 'react-dom'],
        },
      },
    },
  },
})
```

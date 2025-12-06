---
public: true
title: How I initialize my Bun projects
giscus: true
created: 2024-10-05
---

# How I initialize my Bun projects

:::lead
[Bun](Bun) has a [`bun init`](https://bun.sh/docs/cli/init) command that helps you initialize a new project. However, afterwards I also do these:
:::

1. **Use `@tsconfig/bun` instead of provided `tsconfig.json`.** This provides a stricter TypeScript configuration and also reduces the need to maintain our own tsconfig file.

   ```sh
   bun add @tsconfig/bun --dev
   echo '{ "extends": "@tsconfig/bun/tsconfig.json" }' > tsconfig.json
   ```

2. **Also install `@types/node`.** Without it, sometimes TypeScript would emit type errors, saying that [“Buffer is not assignable to Uint8Array”](https://stackoverflow.com/questions/78790943/in-typescript-5-6-buffer-is-not-assignable-to-arraybufferview-or-uint8arr).

   ```sh
   bun add @types/node --dev
   ```

3. **Pin the Bun version in [mise-en-place](Mise) config.** This helps with reproducability when working with multiple projects and when deploying.

   ```sh
   mise use bun@latest
   ```

   Later, the correct version of Bun will be installed when you run `mise install`.

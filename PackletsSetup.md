---
public: true
title: Setting up packlets
aliases:
  - 20220818T035637Z1227
---

[Packlets](https://www.npmjs.com/package/@rushstack/eslint-plugin-packlets) are a nice way to keep your [JavaScript](JavaScript) codebase somewhat loosely-coupled, without having to separate things into different npm packages.

You follow these [5 rules](https://www.npmjs.com/package/@rushstack/eslint-plugin-packlets#:~:text=5-,rules%20for%20packlets,-With%20packlets%2C%20our):

1. Packlets live in `./src/packlets/<name>/` and the entry point is `index.ts`.

2. Files outside a packlet can only import from packlet’s entry point, `index.ts`.

3. Files inside a packlet may not import its own entry point, `index.ts`.

4. Packlets can import other packlets but cannot create circular dependencies.

5. Packlets can only import other packlets and npm packages.

[There is an ESLint plugin to enforce these rules.](https://www.npmjs.com/package/@rushstack/eslint-plugin-packlets)

---

Setting up a project for packlets:

```sh
mkdir -p src/packlets
yarn add --dev @rushstack/eslint-plugin-packlets
```

Then in `.eslintrc`, add `"plugin:@rushstack/eslint-plugin-packlets/recommended"` to the `extends` section.

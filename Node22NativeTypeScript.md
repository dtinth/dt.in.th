---
title: Using TypeScript natively in Node.js 22
public: true
---

:::lead
Since [Node.js](Nodejs) v22.7.0, [there's a `--experimental-transform-types` flag](https://nodejs.org/docs/latest-v22.x/api/typescript.html) that lets me run [TypeScript](TypeScript) files natively in Node.js without the need for extra tools like `tsx` or `ts-node`.
:::

:::info
**Update (August 2025)**: [Node.js v22.18.0](https://nodejs.org/en/blog/release/v22.18.0) now runs TypeScript files without needing any command line flags! However, it uses type stripping (`--experimental-strip-types`) by default, which means some TypeScript features like class parameter properties are not available. For full TypeScript transformation support, `--experimental-transform-types` still needs to be used. The information below is still applicable for older versions of Node.js.
:::

This means I can now:

- Build and run Node.js applications in TypeScript without extra build steps
- Deploy functions (like AWS Lambda or Google Cloud Run Functions) written in TypeScript without extra build steps

This is how I set it up Node.js projects:

- I add this in `package.json` to ensure Node treats the files in the project as an ES module by default:

  ```json
  "type": "module",
  ```

- I install the type definitions and tsconfig preset:

  ```sh
  pnpm add -D @types/node@22 @tsconfig/node22
  ```

- I use this `tsconfig.json`:

  ```json
  {
    "extends": "@tsconfig/node22/tsconfig.json",
    "compilerOptions": {
      "verbatimModuleSyntax": true,
      "allowImportingTsExtensions": true,
      "noEmit": true
    }
  }
  ```

  This config ensures compatibility with Node 22's module system and TypeScript's latest features.

  <!-- prettier-ignore -->
  | Option | Why it is needed |
  | --- | --- |
  | `verbatimModuleSyntax` | Must be set to `true`, otherwise, [TypeScript will let you import types without the `type` keyword](https://nodejs.org/dist/latest-v22.x/docs/api/typescript.html#importing-types-without-type-keyword), which is not supported in Node 22. All non-type imports must be a value, otherwise you will get a _“SyntaxError: The requested module does not provide an export named '...'”_ error. |
  | `allowImportingTsExtensions` | Must be set to `true`, otherwise, TypeScript will tell you to import `.ts` files with the `.js` extension. But since `.ts` files are now run natively without being compiled to `.js`, the `.js` files do not exist. By setting this to `true`, TypeScript will let you import `.ts` files with the `.ts` extension. |
  | `noEmit` | Must be set to `true`, otherwise TypeScript will try to compile the files to `.js` files, which is not needed since Node can now run `.ts` files directly. |

- To run TypeScript files, the `--experimental-transform-types` flag must be passed to Node CLI. There are many ways to do this:

  - By setting the `NODE_OPTIONS` environment variable
  - By passing the flag directly on the CLI

  In some projects, I add this to the `scripts` section of my `package.json`:

  ```json
  "node": "node --experimental-transform-types --env-file=.env"
  ```

  This lets me run TypeScript files and [load environment variables from a `.env` file](https://nodejs.org/dist/latest-v22.x/docs/api/cli.html#--env-fileconfig).

  Now, I can just run:

  ```sh
  pnpm node src/index.ts
  ```

  …and Node will execute my TypeScript code directly, with no build step or extra tooling required.

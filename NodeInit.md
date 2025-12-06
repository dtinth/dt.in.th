---
title: How I initialize a Node.js project (Node 24.x + TypeScript without build step)
public: true
giscus: true
created: 2025-10-13
updates:
  - date: 2025-11-20
    description: Updated to Node.js 24.x
---

This is how I initialize a [Node.js](Nodejs) project:

1. Initialize a new Node.js project using pnpm:

   ```bash
   pnpm init --init-type=module --init-package-manager
   ```

2. If the project is not going to be open source, remove the default `license` field from `package.json`:

   ```bash
   pnpm pkg delete license
   ```

3. Install [TypeScript](TypeScript) and types for Node.js:

   ```bash
   pnpm add -D typescript @types/node@24.x @tsconfig/node24
   ```

4. Set up `tsconfig.json` file ([more info](Node22NativeTypeScript)):

   ```bash
   cat > tsconfig.json <<'EOF'
   {
     "extends": "@tsconfig/node24/tsconfig.json",
     "compilerOptions": {
       "verbatimModuleSyntax": true,
       "allowImportingTsExtensions": true,
       "noEmit": true
     }
   }
   EOF
   ```

5. Add `.gitignore`:

   ```bash
   wget -O .gitignore https://raw.githubusercontent.com/github/gitignore/refs/heads/main/Node.gitignore
   ```

6. Add `node` script to let me use `pnpm node` command to [run Node.js with TypeScript support](Node22NativeTypeScript):

   ```bash
   pnpm pkg set scripts.node="node --experimental-transform-types"
   ```

---
title: Deploying a Bun app to AWS App Runner
public: true
created: 2025-02-08
giscus: true
---

As of February 2025, [AWS App Runner](https://docs.aws.amazon.com/apprunner/latest/dg/service-source-code-nodejs-releases.html) supports Node.js 18 runtime. We can use it to run a Bun server.

- In AWS App Runner’s revised build process, building and running are done on **separate containers.** This means that commands installed by `npm install -g` during build time are not available during runtime.
- Bun binaries are also [published to npm](https://www.npmjs.com/package/bun), so we can make use of that.

So deploying a Bun server to AWS App Runner consists of:

1. **A Node.js project to install the Bun runtime.** Its sole purpose is to have the Bun runtime binaries available during runtime.

   `deployment/bun-runtime/package.json`:

   ```json
   {
     "dependencies": {
       "bun": "1.1.40"
     }
   }
   ```

2. **An install script.** It installs Bun and uses Bun to install the project dependencies:

   `deployment/scripts/install.sh`:

   ```sh
   #!/bin/bash -e
   bash -c 'cd deployment/bun-runtime && npm install'
   exec ./deployment/bun-runtime/node_modules/.bin/bun install
   ```

3. **A start script.** It configures the `$PATH` to include Bun binaries and starts the Bun server:

   `deployment/scripts/start.sh`:

   ```sh
   #!/bin/bash -e
   export PATH="$PWD/deployment/bun-runtime/node_modules/.bin:$PATH"
   exec bun start
   ```

---
title: Building a Docker image for a Node.js application using Nixpacks
public: true
wide: true
---

:::lead
[Nixpacks](Nixpacks) is pretty cool. Instead of having to write my own Dockerfile, [Nixpacks analyzes the source code](https://nixpacks.com/docs/how-it-works) and generates a Docker image from the source code.
:::

- **It works with [Node.js](Nodejs) out-of-the-box,** among other runtimes.
- **All 3 major package managers** (npm, Yarn and pnpm) are supported^[by checking for the presence of the appropriate lock file or Corepack configuration].
- **Nx and Turborepo** are supported out-of-the-box.
- **Caching** is set up automatically.

## Installation

:::split
[Install](https://nixpacks.com/docs/install) Nixpacks using the system package manager.

::::aside
```sh
# Homebrew (macOS)
brew install railwayapp/tap/nixpacks

# In Codespaces
curl -sSL https://nixpacks.com/install.sh | bash
```
::::
:::

## Build an image

:::split
Use the `nixpacks build .` command to build the app.

Additional configuration can be provided via environment variables or using `-e NAME=VALUE`.

- To build a single package in a Turborepo project, set `NIXPACKS_TURBO_APP_NAME` and override `NIXPACKS_BUILD_CMD` so just that service is built.

::::aside
```sh
# Build the root
nixpacks build . --name my-app

# Build a package in a turborepo project
nixpacks build . \
  -e NIXPACKS_TURBO_APP_NAME=web-service \
  -e NIXPACKS_BUILD_CMD='pnpm turbo build --filter web-service' \
  --name my-app
```
::::
:::

## Learn more

Documentation: <https://nixpacks.com/docs/providers/node>

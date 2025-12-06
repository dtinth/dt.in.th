---
public: true
title: Using Bun on Cloudflare Pages
giscus: true
created: 2025-09-15
---

# Using Bun on Cloudflare Pages

As of September 2025, Cloudflare Pages doesn't natively support [Bun](Bun) as a package manager yet. When deploying a project that uses Bun, Cloudflare's build system defaults to npm[^npmfallback].

[^npmfallback]: When installing dependencies, the build log shows: “Installing project dependencies: `npm install --progress=false`”.

Thanks to [this community thread](https://community.cloudflare.com/t/no-bun-support-how/554291/4?u=root10), here’s my workaround based on their suggestion:

1. **Skip automatic dependency installation** by setting the `SKIP_DEPENDENCY_INSTALL` environment variable to `true` in your Cloudflare Pages project settings:

   :::figure[Set SKIP_DEPENDENCY_INSTALL=true environment variable]{.framed}
   ![Environment variable configuration](https://im.dt.in.th/ipfs/bafybeiewi72xgrxjxnexeuxs6vmjboowsjtcnr42ewtzmpsj6udjiifc3q/image.webp)
   :::

2. **Update build configuration** to install manually install Bun during the build step by updating the **Build command** to:

   ```bash
   npm install -g bun && bun install && bun run build
   ```

   :::figure[Build command configuration]{.framed}
   ![Build command setup](https://im.dt.in.th/ipfs/bafybeidkdzogevqfhgltqyz74bsfoduzjsrma6w3et55pqlglgxjqsn2mi/image.webp)
   :::

---
public: true
title: Deploying modern Single Page Applications to Azure Static Web Apps
created: 2025-09-12
giscus: true
---

# Deploying modern Single Page Applications to Azure Static Web Apps

I had a need to deploy a single page application to [Azure](Azure) Static Web Apps. At first I thought I wouldn't have to write this note as it's already 2025 (as of writing) — I expected Azure to have caught up to the polish of [Vercel](https://vercel.com) and [Netlify](https://netlify.com). But here we are.

## What I liked

- **Generous free tier** — Their Free and Standard [plans](https://azure.microsoft.com/en-us/pricing/details/app-service/static/) are separate but switchable. On the Free plan you never get charged; they just stop serving your app when you hit limits (whereas Netlify and Vercel might bill-shock you [[1]](https://www.reddit.com/r/webdev/comments/1b14bty/netlify_just_sent_me_a_104k_bill_for_a_simple/) [[2]](https://www.reddit.com/r/nextjs/comments/12dngvg/small_mistake_leads_to_3000_bill_from_vercel_and/))
- **Streamlined GitHub Actions setup** — I just connect my GitHub Account, and Azure portal auto-generates the workflow file for me. No need to copy and paste workflow files out of documentation.
- **Latest LTS Node.js support** — Works with Node.js 22 out of the box.

## Hurdles to overcome

### PNPM support

Nowadays, many developers have switched from npm and Yarn to [pnpm](https://pnpm.io). Unfortunately, [Oryx](https://github.com/microsoft/Oryx), the build tool used by Azure Static Web Apps, [still does not support pnpm or Corepack](https://github.com/microsoft/Oryx/issues/2340) even in 2025.

I had to dig into its source code and documentation to find a [workaround](https://github.com/microsoft/Oryx/issues/2340#issuecomment-3280884912). The solution for now is to set environment variables to [configure Oryx](https://github.com/microsoft/Oryx/blob/main/doc/configuration.md):

```yaml
env:
  CUSTOM_BUILD_COMMAND: 'corepack enable && pnpm install && pnpm run build'
```

:::info
I tried using the `CUSTOM_BUILD_COMMAND` and `RUN_BUILD_COMMAND` variables separately but it did not work for building Static Web Apps.
:::

### Single Page Application routing

SPAs need all routes to fallback to `index.html` to avoid 404s on page refresh, but this is not the default on Azure Static Web Apps. I had manually [configure a fallback route](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration#fallback-routes) by creating a `staticwebapp.config.json` file in my project root:

```json
{
  "navigationFallback": {
    "rewrite": "/index.html"
  }
}
```

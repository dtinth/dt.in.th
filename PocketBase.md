---
title: PocketBase
topic: true
public: true
created: 2025-11-13
updates:
  - date: 2026-05-30
    description: Switched from Docker Compose to Dokploy; added inline environment variable generator with auto-detected timezone and random password.
---

My notes about [**PocketBase**](https://pocketbase.io/), an “open-source [backend](BaaS) in 1 file.”

- [PocketBase with LINE Login](PocketBaseLINELogin)
- [PocketBase TypeScript Type Generator](PocketBaseTypeGen)
- [Implementing Conditional Updates in PocketBase](PocketBaseConditionalUpdates)

## My setup

Here's how I run PocketBase on my VPS using [Dokploy](Dokploy):

```yaml
services:
  pocketbase:
    image: ghcr.io/muchobien/pocketbase:latest
    restart: unless-stopped
    environment:
      - PB_HOST=0.0.0.0
      - PB_PORT=8090
      - PB_ADMIN_EMAIL=${PB_ADMIN_EMAIL:?"PB_ADMIN_EMAIL missing"}
      - PB_ADMIN_PASSWORD=${PB_ADMIN_PASSWORD:?"PB_ADMIN_PASSWORD missing"}
      - TZ=${TZ:?"TZ missing"}
    expose:
      - 8090
    volumes:
      - pb_data:/pb_data
    healthcheck:
      test:
        [
          'CMD',
          'wget',
          '--no-verbose',
          '--tries=1',
          '--spider',
          'http://localhost:8090/api/health',
        ]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 30s
volumes:
  pb_data:
```

(Or use [dtinth/pocketbase-dokploy](https://github.com/dtinth/pocketbase-dokploy) directly as a Git source for a Compose service)

<div ref="envBlock">
<details>
<summary>Environment variables generator</summary>

```sh
PB_ADMIN_EMAIL=admin@localhost
PB_ADMIN_PASSWORD=__PASSWORD__
TZ=__TZ__
```

Password is randomly generated on each page load; timezone is auto-detected from your browser.

</details>
</div>

<script setup>
const envBlock = Vue.ref(null)
Vue.onMounted(() => {
  if (!envBlock.value) return
  const code = envBlock.value.querySelector('code')
  if (!code) return
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const rand = new Uint32Array(24)
  crypto.getRandomValues(rand)
  const password = Array.from(rand, (n) => chars[n % 62]).join('')
  code.innerHTML = code.innerHTML.replace('__PASSWORD__', password).replace('__TZ__', tz)
})
</script>

## Snippets

Importing PocketBase JS SDK:

```ts
import PocketBase from 'pocketbase'
export const pb = new PocketBase('…')
```

Authenticating as superuser:

```ts
await pb
  .collection('_superusers')
  .authWithPassword(process.env.PB_ADMIN_EMAIL!, process.env.PB_ADMIN_PASSWORD!)
```

## Bookmarks

- 🔖 [PocketBase GitHub](https://github.com/pocketbase/pocketbase)
- 🔖 [PocketBase Documentation](https://pocketbase.io/docs/)

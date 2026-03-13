---
title: Semi-Automated RPA with Puppeteer and Playwright
public: true
created: 2026-03-13
---

Sometimes I have a task that I want to automate, but I don’t want to create a fully-automated script; I want to run a script that interacts with a browser that I have already opened and logged into. I settled with a combination of Puppeteer and [Playwright](Playwright) to achieve this:

- **Puppeteer** for launching a browser.
- **Playwright** for connecting to the browser and automating it.

:::details[Why not just one or the other?]

Personally I prefer Playwright’s [Locators](https://playwright.dev/docs/locators), [Auto-waiting](https://playwright.dev/docs/actionability), and ability to work with [ARIA snapshot](https://playwright.dev/docs/api/class-locator#locator-aria-snapshot). However, when it comes to launching a browser, Playwright’s [launchServer](https://playwright.dev/docs/api/class-browsertype#browser-type-launch-server) doesn’t allow running a server that allows the browser contexts to outlive the clients.

If a Playwright client script connects to a Playwright server, it will not see the existing contexts created by other script, so it needs to create its own context. Moreover, the context also gets closed when the client disconnects. [playwright-cli](https://github.com/microsoft/playwright-cli) works around this by launching a separate persistent daemon. However, the code that can connect to such daemon is not yet available as a library, so I can’t use it in my own scripts.

Thankfully, Playwright does have a [connectOverCDP](https://playwright.dev/docs/api/class-browsertype#browser-type-connect-over-cdp) method that can connect to a browser launched by Puppeteer, and it can also reuse the existing context.

:::

## Launching a server with Puppeteer

Here’s a Puppeteer script that launches a browser and prints the WebSocket endpoint:

```ts
import puppeteer from 'puppeteer'
import { parseArgs } from 'node:util'

const { values } = parseArgs({
  options: {
    profile: {
      type: 'string',
      description: 'Profile directory path',
    },
  },
})

const browser = await puppeteer.launch({
  headless: false,
  userDataDir: values.profile,
})

const wsUrl = browser.wsEndpoint()
console.log(wsUrl)
```

## Connecting with Playwright

The environment variables:

```ts
// env.ts
import 'dotenv/config'

export const env = process.env as {
  BROWSER_WS_ENDPOINT: string
}
```

The browser connection module:

```ts
// browser.ts
import { Browser, chromium } from 'playwright-core'
import { env } from './env.ts'

const endpoint = env.BROWSER_WS_ENDPOINT
if (!endpoint) {
  throw new Error('BROWSER_WS_ENDPOINT environment variable is not set')
}

let browserPromise: Promise<{
  browser: Browser
  [Symbol.asyncDispose]: () => Promise<void>
}> | null = null
export async function getBrowser() {
  if (!browserPromise) {
    browserPromise = (async () => {
      console.log('[browser] Connecting')
      const browser = await chromium.connectOverCDP(endpoint)
      console.log('[browser] Connected')
      return {
        browser,
        [Symbol.asyncDispose]: async () => {
          console.log('[browser] Closing')
          await browser.close()
          console.log('[browser] Closed')
        },
      }
    })()
  }
  return browserPromise
}
```

The script:

```ts
await using connection = await getBrowser();
const { browser } = connection;
const page = browser.contexts()[0].pages()[0];
```

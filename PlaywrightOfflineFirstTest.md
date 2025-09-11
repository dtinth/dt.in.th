---
public: true
title: Testing that PWAs work offline using Playwright
aliases:
  - 20220621T182122Z4107
---

I am [resolving an issue with a PWA not working offline properly](https://github.com/dtinth/ppqr.app/issues/42) and thought it would be a good idea to add a test to ensure that the [PWA](PWA) works offline. I use [Playwright](Playwright).

```ts
test('works offline', async ({ page }) => {
  // Go to the webpage
  await page.goto('http://localhost:3000/')

  // Go offline
  await page.context().setOffline(true)

  // Keep a list of all failed requests
  const failed: string[] = []
  page.context().on('requestfailed', (r) => {
    if (r.url().startsWith('http://localhost')) {
      failed.push(r.url() + ' ' + r.failure()!.errorText)
    }
  })

  // Reload the page
  await page.reload()

  // Ensure that the app still kinda works
  // expect(...)

  // Ensure that there are no failed requests
  expect(failed).toHaveLength(0)
})
```

When the app fails to load some asset files while offline, it will result in a test failure that looks like this:

![](https://static.dt.in.th/uploads/2022/06/21/playwright-not-work-offline2.png)

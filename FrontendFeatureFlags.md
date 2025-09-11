---
public: true
title: Simple front-end feature flags
aliases:
  - 20220427T191347Z4847
---

# Simple front-end feature flags

**To embrace [trunk based development](https://trunkbaseddevelopment.com/) and gain its benefits** we must be able to [merge pull requests quickly](https://trunkbaseddevelopment.com/short-lived-feature-branches/) (or [pushing straight to the main branch](https://trunkbaseddevelopment.com/committing-straight-to-the-trunk/)). However, in a project that doesn’t have a facility to allow this, it can be challenging.

Let’s say you are rewriting a complex piece of [JavaScript](JavaScript) code.

Now you’re not sure if your re-written version is correct. You fear that your new version will break on production^[Especially if you work on projects that deploys the main branch to production automatically thanks to tools like [Vercel](https://vercel.com/) and [Netlify](https://netlify.com/)], so you don’t have the confidence to merge your code until it is very thoroughly tested. [Your branch ends up being long-lived rather than short-lived.](https://trunkbaseddevelopment.com/youre-doing-it-wrong/#duration-of-short-lived-feature-branches)

One way to solve this issue is to **allow two versions of code to exist** and create [**feature flags**](https://trunkbaseddevelopment.com/feature-flags/). You can go fancy and use tools like [Unleash](https://www.getunleash.io/) or [LaunchDarkly](https://launchdarkly.com/), or you can use a simple client-side feature flag implementation shown here.

## Client-side feature flag implementation

```ts
let flagSet: Set<string> | undefined

export function isQueryFlagEnabled(flagName: string) {
  if (!flagSet) {
    flagSet = new Set(
      (new URLSearchParams(window.location.search).get('flags') || '')
        .split(',')
        .filter(Boolean)
    )
  }
  return flagSet.has(flagName)
}
```

<details><summary>JavaScript version</summary>

```js
let flagSet

export function isQueryFlagEnabled(flagName) {
  if (!flagSet) {
    flagSet = new Set(
      (new URLSearchParams(window.location.search).get('flags') || '')
        .split(',')
        .filter(Boolean)
    )
  }
  return flagSet.has(flagName)
}
```

</details>

## Allowing two versions of code to exist at the same time

Instead of rewriting your component in place, replacing the old version, you can keep both versions in your codebase and use the `isQueryFlagEnabled` function to switch between them like this:

```js
// Layout.js
import { isQueryFlagEnabled } from './QueryFlags'
import LayoutOld from './LayoutOld'
import LayoutNew from './LayoutNew'

export default isQueryFlagEnabled('new-layout') ? LayoutNew : LayoutOld
```

## Activating the flag

To activate the flag, add the `?flags=new-layout` query parameter to the URL.

Most users will see the old layout, while you can activate the flag during development to work on the new layout.
Now you can safely merge your unfinished code into the main branch without the fear of breaking production.

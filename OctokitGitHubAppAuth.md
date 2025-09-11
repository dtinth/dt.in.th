---
public: true
title: Authenticating as a GitHub App in Octokit.js
aliases:
  - 20220728T075738Z6111
---

I usually find myself writing [Node.js](Nodejs) scripts that needs to perform some API calls on [GitHub](GitHub) as a GitHub App. I use Octokit.

```js
import fs from 'fs'
import { App } from 'octokit'

const appId = ___
const privateKey = fs.readFileSync(
  process.env.GITHUB_APPLICATION_CREDENTIALS,
  'utf8'
)
const installationId = ___

const app = new App({
  appId,
  privateKey,
})

const octokit = await app.getInstallationOctokit(installationId)
```

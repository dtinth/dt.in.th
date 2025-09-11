---
public: true
title: Using Google APIs in Node.js with a service account
aliases:
  - 20220828T144815Z5348
---

Normally, when using `googleapis` in [Node.js](Nodejs), the client will be unauthenticated by default (unlike [Google Cloud](GoogleCloud) [JS](JavaScript) libraries, which automatically picks up the service account).

To use a service account with `googleapis`, some configuration has to be done:

```js
import { google } from 'googleapis'

const googleAuth = new google.auth.GoogleAuth({
  // If `keyFile` is omitted, then the client will look for the
  // `GOOGLE_APPLICATION_CREDENTIALS` environment variable.
  keyFile: './.private/credentials/service-account.json',

  // Set up the scopes needed to access the APIs.
  scopes: ['https://www.googleapis.com/auth/firebase'],
})

google.options({ auth: googleAuth })
```

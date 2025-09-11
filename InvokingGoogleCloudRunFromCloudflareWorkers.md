---
public: true
aliases:
  - 20220525T152418Z0339
title: How to make authenticated API calls to Google Cloud Function (2nd generation) or Google Cloud Run services from Cloudflare Workers (or other non-Node.js JavaScipt runtimes)
---

# How to make authenticated API calls to Google Cloud Function (2nd generation) or Google Cloud Run services from Cloudflare Workers (or other non-Node.js JavaScipt runtimes)

<style>
  h1 { font-size: 1em; }
</style>

[Google Cloud](20220706T181442Z3592) [Function’s](https://cloud.google.com/functions/docs/securing/authenticating) and Cloud [Run’s](https://cloud.google.com/run/docs/authenticating/service-to-service) documentation suggests using [google-auth-library](https://www.npmjs.com/package/google-auth-library) to make authenticated API calls. However, **google-auth-library** is made for Node.js. What if we want to make authenticated API calls from a non-Node.js runtime like [Cloudflare Workers](https://workers.cloudflare.com/)?

The basic steps are as follows:

1. Extract relevant data from the JSON service account key file
2. Generate a self-signed [JWT](JWT)
3. Exchange that for a Google-signed JWT (the “ID token”)
4. Use that JWT to invoke the service

[![JWT Flow](https://developers.google.com/identity/protocols/oauth2/images/flows/jwt.png)](https://developers.google.com/identity/protocols/oauth2/service-account#httprest)

We will use the libraries `jose` to work with JWTs and `redaxios` to make HTTP requests.

```ts
import { importPKCS8, SignJWT } from 'jose'
import redaxios from 'redaxios'
```

Also assume that the endpoint we want to invoke is stored in the `endpoint` variable.

```ts
const endpoint = 'https://screenshotter-q3aroeegia-an.a.run.app/'
```

## Extract relevant data from the JSON service account key file

Given the contents of a JSON service account key file in the `serviceAccountFileContents` variable, we extrac the following data:

```ts
const serviceAccount = JSON.parse(serviceAccountFileContents)
const privateKey = await importPKCS8(serviceAccount.private_key, 'RS256')
const email = serviceAccount.client_email
```

## Generate a self-signed JWT

Generate a JWT according to the [docs](https://cloud.google.com/functions/docs/securing/authenticating):

```ts
const payload = {
  iss: email,
  sub: email,
  aud: 'https://www.googleapis.com/oauth2/v4/token',
  target_audience: endpoint,
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + 3600,
}
const token = await new SignJWT(payload)
  .setProtectedHeader({ alg: 'RS256', typ: 'JWT' })
  .sign(privateKey)
```

## Exchange the sign-signed JWT for a Google-signed JWT

Make a request to Google’s OAuth API according to the [docs](https://cloud.google.com/functions/docs/securing/authenticating):

```ts
const idTokenResponse = await redaxios.post(
  'https://www.googleapis.com/oauth2/v4/token',
  {
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion: token,
  }
)
const idToken = idTokenResponse.data.id_token
```

## Use the Google-signed JWT to invoke the service

```ts
const response = await redaxios.post(
  endpoint,
  {},
  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
    responseType: 'stream',
  }
)

return new Response(response.data, {
  headers: response.headers,
  status: response.status,
  statusText: response.statusText,
})
```

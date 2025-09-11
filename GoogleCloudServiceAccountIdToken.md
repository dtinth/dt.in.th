---
public: true
title: Using Google Cloud Service Accounts to authenticate between your own services
---

# Using Google Cloud Service Accounts to authenticate between your own services

If you are already using a [Google Cloud](GoogleCloud) (or [Firebase](Firebase)) service account to access Google or Firebase APIs, you can also use the same service account to authenticate requests between your own services (machine-to-machine authentication).

<details><summary>Why?</summary>

When developing a solution with different services, oftentimes you want Service A to be able to securely call Service B.

- You could use a shared secret, but then you have to manage that secret.
- You could use a public/private key pair, but when you rotate the keys in Service A you also have to update the public key in Service B to trust the new credentials.
- You could make Service A publish a JWKS (JSON Web Key Set) and have Service B fetch the new signing keys periodically, but then Service A has to manage the JWKS.
- Or you can reuse a Google Cloud service account that you already have.

</details>

In [Node.js](Nodejs), you can use `google-auth-library` to get an ID token for a service account:

```js
import { GoogleAuth } from "google-auth-library";

/**
 * @param {string} audience
 */
async function getServiceAccountIdToken(audience) {
  const auth = new GoogleAuth();
  const client = await auth.getClient();
  if (!("fetchIdToken" in client)) throw new Error("No fetchIdToken");
  const token = await client.fetchIdToken(audience);
  return token;
}
```

Make sure your service account has the [**Service Account OpenID Connect Identity Token Creator**](https://cloud.google.com/iam/docs/service-account-permissions#id-token-creator-role) or [**Service Account Token Creator**](https://cloud.google.com/iam/docs/service-account-permissions#token-creator-role) role.

The result is a Google-issued, RS256-signed [JWT](JWT) that you can pass to your own services. The JWT contain these claims:

```json
{
  "aud": "https://example.com",
  "azp": "oidc-testing@myproject.iam.gserviceaccount.com",
  "email": "oidc-testing@myproject.iam.gserviceaccount.com",
  "email_verified": true,
  "exp": 1686418117,
  "iat": 1686414517,
  "iss": "https://accounts.google.com",
  "sub": "111111111111111111111"
}
```

The receiving service can [use Google’s public keys to verify the JWT’s signature and check the `aud` claim to ensure that the token was intended for it.](https://developers.google.com/identity/sign-in/web/backend-auth#verify-the-integrity-of-the-id-token)

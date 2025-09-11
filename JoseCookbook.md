---
public: true
aliases:
  - 20220331T134431Z5441
---

# jose (JWT) cookbook

This note contains various snippets for doing [JWT](JWT) stuff using the [jose](https://www.npmjs.com/package/jose) library.

## Verifying JWT

```ts
import { jwtVerify } from 'jose'
import { createPublicKey } from 'crypto'

const publicKey = createPublicKey(publicKeyStr)
const result = await jwtVerify(authToken, async () => publicKey)
```

## Generating JWT

```ts
import { SignJWT } from 'jose'
import { createPrivateKey } from 'crypto'

const privateKey = createPrivateKey(privateKeyStr)
const payload = {
  /* ... */
}
const kid = '...'
const expiresIn = 86400

const token = await new SignJWT(payload)
  .setProtectedHeader({ alg: 'RS256', kid })
  .setExpirationTime(Math.floor(Date.now() / 1000) + expiresIn)
  .sign(privateKey)
```

## HS256

For HS256, use `createSecretKey` instead of `createPrivateKey` or `createPublicKey`:

```ts
import { createSecretKey } from 'crypto'
const secretKey = createSecretKey('my random string', 'utf-8')
```

## Generating keypairs

See [Generating keypairs for JWT](20220225T065443Z1811)

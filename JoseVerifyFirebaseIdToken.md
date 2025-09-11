---
public: true
title: Verifying Firebase ID tokens in Node.js without Firebase Admin SDK
aliases:
  - 20220706T055644Z4887
---

Verifying [Firebase](Firebase) [ID tokens](JWT#openid-connect) in [Node.js](Nodejs) without Firebase Admin SDK

```js
import { jwtVerify } from 'jose'
import pMemoize from 'p-memoize'
import axios from 'axios'
import { has } from 'lodash-es'
import { createPublicKey } from 'crypto'

const getPublicKeys = pMemoize(async () => {
  const response = await axios.get(
    'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com'
  )
  return response.data
})

const getPublicKey = pMemoize(async (kid) => {
  const publicKeys = await getPublicKeys()
  if (!kid || !has(publicKeys, kid)) {
    throw new Error('Invalid kid')
  }
  return createPublicKey(publicKeys[kid])
})

export function verifyIdToken(projectId, idToken) {
  return jwtVerify(idToken, async (header) => getPublicKey(header.kid), {
    issuer: `https://securetoken.google.com/${projectId}`,
    audience: projectId,
  })
}
```

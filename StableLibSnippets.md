---
public: true
title: StableLib snippets
---

# StableLib snippets

[StableLib](https://www.stablelib.com/) is a [JavaScript](JavaScript) library that provides a set of tools for working with binary data and cryptographic utilities, made by the same people who brought you [TweetNaCl.js](https://tweetnacl.js.org/).

```js
import * as hex from '@stablelib/hex'
import * as sha256 from '@stablelib/sha256'

// Calculate SHA256 hash of a string
function hashString(str) {
  return hex.encode(sha256.hash(new TextEncoder().encode(id)), true)
}
```

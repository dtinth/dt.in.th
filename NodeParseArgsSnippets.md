---
public: true
title: util.parseArgs snippets
aliases:
  - 20220828T145531Z4175
---

`util.parseArgs` is a new utility function that is used to parse command line arguments, available in newer versions of [Node.js](Nodejs) (v16.17+, v18.3+).

- Tutorial: <https://2ality.com/2022/08/node-util-parseargs.html>
- API reference: <https://nodejs.org/api/util.html#utilparseargsconfig>
- Polyfill: <https://github.com/pkgjs/parseargs>

```js
import { parseArgs } from 'util'
const { positionals } = parseArgs({ allowPositionals: true })
```

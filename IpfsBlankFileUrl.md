---
title: A URL to a blank file on IPFS
public: true
---

:::lead
The following <abbr title="content identifier">CID</abbr> refers to a **blank file** on the IPFS network:
:::

```
bafkreihdwdcefgh4dqkjv67uzcmw7ojee6xedzdetojuzjevtenxquvyku
```

Try it: \
<https://cloudflare-ipfs.com/ipfs/bafkreihdwdcefgh4dqkjv67uzcmw7ojee6xedzdetojuzjevtenxquvyku>

## Code

I generated the CID using the following code:

```js
import { createHelia } from 'helia'
import { unixfs } from '@helia/unixfs'

const helia = await createHelia({ start: false })
const fs = unixfs(helia)
const cid = await fs.addBytes(Buffer.from([]))
console.log(cid)
```

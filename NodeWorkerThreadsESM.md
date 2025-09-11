---
public: true
title: Observations from using Node.js worker_threads with ESM
aliases:
  - 20220727T084923Z8008
---

I played around with [worker_threads](https://nodejs.org/docs/latest-v16.x/api/worker_threads.html) in [Node.js](Nodejs). This note documents some of my observations.

I am using the following code:

```js
// index.mjs
import { Worker } from 'node:worker_threads'

for (;;) {
  const worker = new Worker('./f.mjs', {
    workerData: 10,
  })

  const result = await new Promise((resolve, reject) => {
    worker.on('message', resolve)
    worker.on('error', reject)
    worker.on('exit', (code) => {
      console.log('worker exit', code)
    })
  })

  console.log(result)

  await new Promise((r) => setTimeout(r, 1000))
}
```

```js
// f.mjs
import { workerData, parentPort } from 'node:worker_threads'

parentPort.postMessage(workerData * workerData)
```

StackBlitz: <https://stackblitz.com/edit/node-hr1nxh?file=index.mjs,f.mjs>

Observations:

- ESM just works.
- They don’t share the same module cache.
- Files are always loaded, so if I changed `f.mjs`, the next loop iteration would load the new version.

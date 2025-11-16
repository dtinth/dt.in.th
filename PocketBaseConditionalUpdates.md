---
public: true
title: 'Implementing Conditional Updates in PocketBase'
---

# Implementing Conditional Updates in PocketBase

To avoid race conditions when multiple clients attempt to update the same record simultaneously, we need some kind of concurrency control. These concurrency control mechanisms can be implemented with a concurrency primitive called **conditional updates** (also known as [_compare-and-swap_](https://en.wikipedia.org/wiki/Compare-and-swap)). Most databases, as well as [backend-as-a-service](BaaS) platforms, support this feature in one way or another, for example:

- [DynamoDB has conditional put/deletes/updates via `condition-expression`](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html#Expressions.ConditionExpressions.SimpleComparisons)
- [Firebase RTDB has `runTransaction` with optimistic locking](https://firebase.google.com/docs/database/web/read-and-write#save_data_as_transactions)
- [Firestore has conditional updates](https://docs.cloud.google.com/firestore/docs/samples/firestore-transaction-document-update-conditional)
- [Supabase allows setting `WHERE` clause in updates](https://supabase.com/docs/reference/javascript/update)
- [Redis has `SETNX`](https://redis.io/docs/latest/commands/setnx/)
- [MongoDB has `findOneAndUpdate`](https://www.mongodb.com/docs/manual/reference/method/db.collection.findoneandupdate/)

With proper conditional updates, we can implement these on top of any database system ([so you don't need to rely on external services like Redis or RabbitMQ](https://www.amazingcto.com/postgres-for-everything/)):

- Distributed locks
- Distributed task queues
- [Optimistic concurrency control](https://en.wikipedia.org/wiki/Optimistic_concurrency_control)

Unfortunately, in [PocketBase](PocketBase), their [Web APIs](https://pocketbase.io/docs/api-records/) currently do not support conditional updates [^fn0]. I previously submitted a feature request for conditional updates. However, the maintainer has indicated that he's not intending to implement this feature in the near future, suggested a few alternatives (which will be discussed here), and have since deleted the [issue](https://github.com/pocketbase/pocketbase/issues/7320) [^fn1]. Thankfully, the feature request is now tracked on the [roadmap](https://github.com/orgs/pocketbase/projects/2/views/1?pane=issue&itemId=139211429) for future reevaluation.

[^fn0]: The proposal suggested two options: (a) adding a `?filter=...` query parameter to the [Update record](https://pocketbase.io/docs/api-records/#update-record) endpoint which works similarly to the existing [List/Search records](https://pocketbase.io/docs/api-records/#listsearch-records) endpoint, or (b) adding an _Assert record value_ endpoint which fails if the record value does not match the expected value to be used as part of the [Batch Web API](https://pocketbase.io/docs/api-records/#batch-createupdateupsertdelete-records) (in which multiple operations are performed in a single database transaction), similar to how [JSON Patch](https://jsonpatch.com/#test) works.
[^fn1]: Per the [FAQ](https://pocketbase.io/faq/) and [discussion](https://github.com/pocketbase/pocketbase/discussions/7287#discussioncomment-14816920), PocketBase is a hobby non-commercial project built for the maintainer's own use cases. Thus, feature requests may not be prioritized unless they align with the maintainer's personal needs.

This note discusses implementation approaches (both failed and working) to achieve conditional updates in PocketBase, despite the lack of built-in support.

## Problem with naïve approach: Race conditions

**Consider a distributed task queue use case.** Let's assume that there are 100 tasks to be done. There are 10 workers trying to pick up tasks concurrently. Each worker tries to pick up a task by looking for an unassigned task, and updating the task to assign it to themselves, before working on it. For simplicity, a task is either _unclaimed_ or _claimed_ by a worker.

![](https://im.dt.in.th/ipfs/bafybeihvyxisknsojrdvwcntryoxuwwo7y7sygizm26nzyaxwxh6k6vbue/image.webp)

With this design, a worker can be implemented like this:

```ts
// ⚠️ Warning: Naïve implementation, suffers from race conditions!

// Keep track of how many tasks have been done
let tasksDone = 0

// The entry point for each worker
async function runWorker(workerId) {
  while (await workerLoopIteration(workerId)) {}
}

// One iteration of the worker loop
async function workerLoopIteration(workerId) {
  // (1) Find an unclaimed task
  const task = await pb
    .collection('tasks')
    .getFirstListItem("status = 'unclaimed'", { requestKey: null })
    .catch(() => null)
  if (!task) {
    console.log(`[Worker ${workerId}] No more unclaimed tasks, exiting`)
    return false
  }

  // (2) Claim it to work on that task
  console.log(`[Worker ${workerId}] Claiming task`, task.id)
  const updated = await pb
    .collection('tasks')
    .update(
      task.id,
      { status: 'claimed', worker: workerId },
      { requestKey: null }
    )
  console.log(`[Worker ${workerId}] Claimed task`, updated.id)

  // (3) Work on that task...
  tasksDone++
  await new Promise(process.nextTick)

  return true
}

// Simulate 10 workers running concurrently
const workerIds = Array.from({ length: 10 }, () => crypto.randomUUID())
await Promise.all(workerIds.map((id) => runWorker(id)))

console.log('Total tasks done:', tasksDone)
```

Since there are 100 tasks in total, regardless of how many workers are running concurrently, we'd expect that the total number of tasks done will always be 100…

But this is what actually happens:

```diff
+ Expected: "Total tasks done: 100"
- Actual:   "Total tasks done: 661" ❌
```

**There is a sixfold increase in the number of tasks done.** This is due to a race condition: During step (1), multiple workers may read the same unclaimed task before any of them updates it in step (2). As a result, multiple workers may end up claiming and working on the same task, resulting in duplicate work.

:::warning[Caveats]

- Even without the race condition, _ALL_ of the examples in this note are _NOT_ good ways to implement a distributed task queue; it is **unsafe** and **inefficient**. However, it is intentionally written this way because (1) it makes race conditions more likely to happen, which is the focus here, and (2) it is simpler to understand.
  - Re. **unsafe**: There is no guarantee that a worker will complete a task after claiming it. If a worker crashes after claiming a task but before completing it, that task will remain claimed indefinitely and will never be picked up by other workers. A more robust implementation would include timeout mechanisms (i.e. using leases instead of locks), retries, and failure handling. By the way, really recommend the [_How do you cut a monolith in half?_](https://programmingisterrible.com/post/162346490883/how-do-you-cut-a-monolith-in-half) article.
  - Re. **inefficient**: If 10 workers start at the exact same time, they would all read the same unclaimed task first, resulting in 9 wasted attempts to claim the same task. One improvement is to query multiple unclaimed tasks at once and then randomly pick one to reduce contention. A further improvement is to let the database pick and assign an unclaimed task to you in one go, further reducing the time gap between (1) and (2).
- For an example of a better way of implementing a task queue atop a database, I recommend reading [_Do You Really Need Redis? How to Get Away with Just PostgreSQL._](https://spin.atomicobject.com/redis-postgresql/) While it is written for PostgreSQL, the same principles can be applied to SQLite and/or PocketBase with some adjustments.

:::

## Unsuccessful workaround: Using API rules

One way to mitigate this issue is to leverage [API rules](https://pocketbase.io/docs/api-rules/) to restrict updates based on the current state of the record [as suggested in this discussion](https://github.com/pocketbase/pocketbase/discussions/5178#discussioncomment-9971000). For example, this rule only allows transitioning a task from _unclaimed_ to _claimed_ status:

```
@request.body.status='claimed' && status='unclaimed'
```

The worker will have to be modified to handle the failed update attempt (results in 404 error):

```ts
// (2) Claim it to work on that task
console.log(`[Worker ${workerId}] Claiming task`, task.id)
const updated = await pb
  .collection('tasks')
  .update(
    task.id,
    { status: 'claimed', worker: workerId },
    { requestKey: null }
  )
  // 👇 If API rule rejects the update, treat it as someone else claimed the task
  .catch((err) => {
    if (err.status === 404) return null // someone else claimed it
    throw err
  })
// 👇 Don't work on the task if claiming it failed
if (!updated) {
  console.log(`[Worker ${workerId}] Failed to claim task`, task.id)
  return true // try again
}
console.log(`[Worker ${workerId}] Claimed task`, updated.id)
```

```diff
+ Expected: "Total tasks done: 100"
- Actual:   "Total tasks done: 374" ❌
```

While this approach reduced the number of duplicate claims, it does not completely eliminate them. **This is due to the race condition in PocketBase itself.** The API rule is checked separately from the record update operation. Thus, two workers can still pass the API rule check simultaneously before either of them updates the record.

## Working solution 1: Using API rules + Batch Web API

The maintainer [noted](https://github.com/pocketbase/pocketbase/issues/7320#issuecomment-3530823222) that the [Batch Web API](https://pocketbase.io/docs/api-records/#batch-createupdateupsertdelete-records) performs multiple operations in a single database transaction and further [clarified](https://github.com/pocketbase/pocketbase/issues/7320#issuecomment-3531287782) that _“the API rules of the collection(s) will be also checked as part of the transaction”_.

We can exploit this behavior to implement conditional updates by combining the API rule and the Batch Web API. The worker code is modified as follows:

```ts
// (2) Claim it to work on that task
console.log(`[Worker ${workerId}] Claiming task`, task.id)

// 👇 Use the Batch API instead of the normal Update API.
const batch = pb.createBatch()
batch
  .collection('tasks')
  .update(task.id, { status: 'claimed', worker: workerId })
const result = await batch.send({ requestKey: null }).catch((err) => {
  if (err.response?.data?.requests?.[0]?.response?.status === 404) {
    return null // someone else claimed it
  }
  throw err
})
if (!result) {
  console.log(`[Worker ${workerId}] Failed to claim task`, task.id)
  return true // try again
}
console.log(`[Worker ${workerId}] Claimed task`, updated.id)
```

This time, the output is correct and there is no race condition:

```
Total tasks done: 100 ✅
```

However, there are a few caveats to this approach:

:::warning[Caveats]

- The batch API [has to be explicitly enabled and comes with performance implications](https://pocketbase.io/docs/api-records/#batch-createupdateupsertdelete-records).
- [The API Rules are **ignored** when the action is performed by an authorized superuser](https://pocketbase.io/docs/api-rules-and-filters/). Thus, this approach only works if the workers are authenticated as normal users with the appropriate permissions. (You can create an auxilirary Auth collection for the workers if needed.)

:::

## Working solution 2: Custom endpoints using `pb_hooks`

PocketBase supports adding JavaScript files (`*.pb.js`) to `pb_hooks` directory to [extend](https://pocketbase.io/docs/js-overview/) its behavior. This includes:

- [Setting up new routes](https://pocketbase.io/docs/js-routing/) with [`routerAdd`](https://pocketbase.io/docs/js-routing/#registering-new-routes)
- [Working with collection records](https://pocketbase.io/docs/js-records/) inside a transaction using [`$app.runInTransaction`](https://pocketbase.io/docs/js-records/#running-in-transaction), respecting the configured API rules by invoking [`$app.canAccessRecord`](https://pocketbase.io/docs/js-records/#check-if-record-can-be-accessed).

Here is an example of a hook that implements a custom `/api/tasks/claim` endpoint which claims a task inside a transaction:

```js
// @ts-check
/// <reference path="../pb_data/types.d.ts" />

routerAdd('POST', '/api/tasks/claim', (e) => {
  const body = e.requestInfo().body
  const taskId = body.taskId
  const workerId = body.workerId
  if (!taskId || !workerId)
    return e.json(400, { error: 'taskId and workerId required' })

  let responseFn = () => e.json(500, { error: 'internal server error' })
  $app.runInTransaction((txApp) => {
    const tasks = txApp.findCollectionByNameOrId('tasks')
    const task = txApp.findRecordById(tasks.id, taskId)

    if (!task) {
      throw new Error('task not found')
    }

    // Check authorization using e.app
    if (!e.app.canAccessRecord(task, e.requestInfo(), tasks.updateRule)) {
      responseFn = () => e.json(403, { error: 'forbidden' })
      return
    }

    // Compare-and-swap
    if (task.get('status') !== 'unclaimed') {
      responseFn = () => e.json(409, { error: 'task already claimed' })
      return
    }

    task.set('status', 'claimed')
    task.set('worker', workerId)
    txApp.save(task)
    responseFn = () => e.json(200, task)
  })

  return responseFn()
})
```

The worker code is modified to call this new endpoint using `pb.send()`:

```ts
// (2) Claim it to work on that task
console.log(`[Worker ${workerId}] Claiming task`, task.id)
// 👇 Call the custom claim endpoint
const updated = await pb
  .send('/api/tasks/claim', {
    method: 'POST',
    body: { taskId: task.id, workerId },
    requestKey: null,
  })
  .catch((err) => {
    if (err.status === 409) return null // someone else claimed it
    throw err
  })
// 👇 Don't work on the task if claiming it failed
if (!updated) {
  console.log(`[Worker ${workerId}] Failed to claim task`, task.id)
  return true // try again
}
console.log(`[Worker ${workerId}] Claimed task`, updated.id)
```

Although more code is required, it works correctly even if the workers are authenticated as superusers, because our endpoint directly enforces the atomicity using a transaction without relying on API rules.

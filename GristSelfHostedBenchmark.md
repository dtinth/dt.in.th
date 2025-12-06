---
public: true
title: Self-hosted Grist benchmarks
created: 2024-11-16
giscus: true
---

# Self-hosted Grist benchmarks

[Grist](Grist) is a spreadsheet-like database that can be self-hosted. I was considering if it was practical to use Grist as a backend instead of a database.

The **hosted** version of Grist has a [rate limit](https://support.getgrist.com/limits/#api-limits) of 5 requests per second and 5000 requests per day for the free plan. However, its documentation does not mention any rate limits for the **self-hosted** version, so I decided to test it. Here are the results. On the self-hosted version:

- There is no rate limit per second.
- There is no rate limit per day.
- There is a [concurrency limit of 10 active requests per document](https://support.getgrist.com/limits/#:~:text=Separately%2C%20there%20is%20a%20concurrency%20limit%20of%2010%20for%20all%20plans) which is [hardcoded](https://github.com/gristlabs/grist-core/blob/fcc1f34159424fc89adecc00e5a508adbecaa1f8/app/server/lib/DocApi.ts#L112) and applies to everyone.
- There is no limit on the number of rows.

I also ran some performance tests. The self-hosted Grist was running on a $10/mo Linode instance which is also used for other services. With that, I was able to make:

- 70 GET requests per second.
- 40 POST requests per second.

This shows that Grist is a viable option for using as a backend, with a few considerations:

- Use an in-memory asynchronous task queue such as [p-queue](https://www.npmjs.com/package/p-queue) to avoid hitting the concurrency limit, if you will have a sudden surge in requests. Importantly, set a cap on the queue size to prevent excessive queuing[^1]. This helps maintain responsiveness and avoids wasting resources on potentially stale requests[^2]. Note that the app may still hit the concurrency limit anyways especially if it is serverless or runs in multiple processes, so they must still be prepared to handle the occasional 429 responses.
- If there's a surge of users, then requests may start queuing up. If most users are making the same request, consider using an in-memory cache that coalesces requests, such as [async-cache-dedupe](https://www.npmjs.com/package/async-cache-dedupe).

[^1]: A bounded queue prevents scenarios where requests wait an unreasonably long time, potentially exceeding client timeout limits.
[^2]: Alternative approaches, such as retracting timed-out requests from the queue, are possible but more complex to implement. A simple queue size cap offers a good balance between implementation simplicity and effective resource management.

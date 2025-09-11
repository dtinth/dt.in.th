---
public: true
title: Building a quick and dirty endpoint with Bun
---

Oftentimes, especially when running an event, I have to create ad-hoc endpoints that returns some data that I can send it to teammate, so that they can access live data they need without me having to give them the whole API credentials.

:::details[Example use case]

At one event, my friend wants to run a lucky draw, so I created an endpoint that provides access to the attendee list, filtered only those who have checked in and only including the basic information.

:::

With [Bun](Bun), I can easily do this.

```ts
Bun.serve({
  port: 44401,
  async fetch(req) {
    const pathname = new URL(req.url).pathname

    // Protect the endpoint with a secret path.
    // Replace this path by mashing your keyboard.
    if (pathname === '/qg67238hfew9jdiosnuehr78gj9fiwomjrht') {
      // Load data here and put it in `out`
      const out = []

      return new Response(JSON.stringify(out, null, 2), {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
      })
    }
    return new Response('nope', {
      status: 404,
    })
  },
})

console.log('hi')
```

Then run it with:

```sh
bun --watch adhoc.ts
```

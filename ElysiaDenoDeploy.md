---
public: true
title: Quickly deploying API endpoints online with Elysia on Deno Deploy
created: 2025-07-09
giscus: true
---

Sometimes I need to quickly deploy a small API endpoint without the overhead of setting up a full server. [**Deno Deploy**](https://deno.com/deploy) is perfect for this. Upon logging in, you create a **New Playground**, which lets you write and test your code directly in the browser.

![Deno Deploy user dashboard showing the user's name, user ID, and navigation tabs for Overview, Projects, and Settings. Two large buttons on the right labeled New Playground and New Project, with New Playground highlighted by a blue hand-drawn circle. The interface is clean and modern, designed for ease of use.](https://im.dt.in.th/ipfs/bafybeig6bw7wgnj5tvjenprou6oc4mzlxlmfrhuhau3dgrylehqy4c4jsm/image.webp)

To use [Elysia](Elysia), just `import { Elysia } from 'npm:elysia'` and `export default` your Elysia app. [Deno automatically detects the `export default` and runs your app.](ElysiaDeno)

![Code editor in Deno Deploy with Elysia API code. The left side displays TypeScript code for API endpoints, including import statements and route definitions. The right side shows a black terminal-like output area with the text Hello Elysia.](https://im.dt.in.th/ipfs/bafybeibagn7adm3k3rg6gt6l7ydwzjdcg7mf7jzulbfpzq4gvkajq7etzq/image.webp)

Here’s a simple example:

```ts
import { Elysia } from 'npm:elysia'

export default new Elysia()
  .get('/', 'Hello Elysia')
  .get('/user/:id', ({ params: { id } }) => id)
  .post('/form', ({ body }) => body)
```

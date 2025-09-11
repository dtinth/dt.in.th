---
public: true
topic: true
title: Fastify
---

**[Fastify](https://www.fastify.io/)** is a “fast and low overhead web framework, for [Node.js](Nodejs)”

- [Fastify-in-Express](FastifyInExpress)

## Code snippets

```
yarn add fastify
```

```ts
const fastify = Fastify({ logger: true })
fastify.listen({ port: +process.env.PORT || 3000 })
```
---
title: 'Using Zod validation with Elysia and OpenAPI'
public: true
---

# Using Zod validation with Elysia and OpenAPI

I tried out [Elysia](Elysia) [v1.4](https://elysiajs.com/blog/elysia-14.html) which adds support for [Standard Schema](https://github.com/standard-schema/standard-schema), so type validation and coercion works out of the box with Zod.

```javascript
import { z } from 'zod'
import { Elysia } from 'elysia'

export default new Elysia().get(
  '/thing',
  ({ query }) => {
    return { id: query.id }
  },
  {
    query: z.object({ id: z.coerce.number() }),
  }
)
```

## OpenAPI docs generation integration issues

When integrating with [OpenAPI generation plugin `@elysiajs/openapi`](https://elysiajs.com/plugins/openapi.html), I ran into 2 problems:

1. It generates docs for the `OPTIONS` method, which is distracting (they came from [@elysiajs/cors](https://elysiajs.com/plugins/cors.html))
2. The Zod schema does not get serialized into OpenAPI docs, leading to missing documentation for request parameters.

It turns out that **some extra configuration is needed**r:

```javascript
.use(
  openapi({
    // Use a more standardized path
    specPath: "/openapi.json",

    // Serialize Zod schema
    mapJsonSchema: { zod: z.toJSONSchema },

    // Skip documenting CORS endpoints
    exclude: {
      methods: ["OPTIONS"],
    },
  })
)
```

The key parts:

- `mapJsonSchema: { zod: z.toJSONSchema }` - enables Zod schema serialization for OpenAPI
- `exclude: { methods: ["OPTIONS"] }` - removes CORS OPTIONS endpoints from documentation

---
public: true
title: Setting up CORS in Caddy
---

**Setting up CORS in [Caddy](Caddy):**

## Allow from any origin

```
header Access-Control-Allow-Origin "*"
```

## Allow from specific origins

The example for this configuration is buried in the [`import` directive examples](https://caddyserver.com/docs/caddyfile/directives/import#examples). We declare a `(cors)` [snippet](https://caddyserver.com/docs/caddyfile/concepts#snippets) which is then imported by the site.

```
(cors) {
  @origin header Origin {args.0}
  header @origin Access-Control-Allow-Origin "{args.0}"
  header @origin Access-Control-Allow-Methods "OPTIONS,HEAD,GET,POST,PUT,PATCH,DELETE"
}

site.tld {
  import cors origin1.tld
  import cors origin2.tld
}
```

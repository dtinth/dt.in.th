---
public: true
title: Enabling gzip/zstd compression in Caddy
created: 2024-10-17
giscus: true
---

Sometimes a web service doesn’t implement compression, but if you use [Caddy](Caddy) as a reverse proxy, you can enable compression on the fly:

```
mydomain.tld {
  encode gzip zstd
  reverse_proxy backend:8080
}
```

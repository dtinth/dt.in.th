---
public: true
title: Enabling gzip/zstd compression in Caddy
---

Sometimes a web service doesn’t implement compression, but if you use [Caddy](Caddy) as a reverse proxy, you can enable compression on the fly:

```
mydomain.tld {
  encode gzip zstd
  reverse_proxy backend:8080
}
```

---
public: true
title: Making Caddy use a self-signed SSL certificate
---

**[Caddy](Caddy) web server has the [automatic HTTPS server](https://caddyserver.com/docs/automatic-https) feature which automatically obtains and renews TLS certificates for your sites.** But sometimes you want to disable it and use a self-signed certificate instead.

To do that, use the [`tls internal` directive](https://caddyserver.com/docs/caddyfile/directives/tls#syntax) in your Caddyfile:

```
orangecloud.example.com {
  tls internal
}
```

## Further reading

- [Sam Mckenzie (2020). “How to use Caddy with Cloudflare's SSL settings.”](https://samjmck.com/en/blog/using-caddy-with-cloudflare/)

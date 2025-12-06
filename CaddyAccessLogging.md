---
public: true
title: Enabling access logging in Caddy
created: 2025-02-16
giscus: true
---

To configure basic **access logging** in [Caddy](Caddy), first [configure the default logger](https://caddyserver.com/docs/caddyfile/options#log) in the global options:

```
{
  log {
    output file /var/log/caddy/access.log
    format filter {
      request>headers delete
      resp_headers delete
    }
  }
}
```

then, in your site configuration, [add the `log` directive](https://caddyserver.com/docs/caddyfile/directives/log) to each site you want to log:

```
mydomain.tld {
  log
}
```

By default, [logs are rotated](https://caddyserver.com/docs/caddyfile/directives/log#file) as follows:

- Log files are rotated once they reach 100 MB
- Rotated files are automatically compressed with gzip
- Old log files are removed when either:
  - They are older than 90 days, or
  - There are more than 10 newer log files

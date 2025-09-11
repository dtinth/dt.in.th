---
public: true
topic: true
title: Caddy web server
aliases:
  - 20201124T051207Z5031
---

**[Caddy](https://caddyserver.com/)** is "a powerful, enterprise-ready, open source web server with automatic HTTPS written in Go"

- [Setting up a reverse proxy using Caddy](CaddyReverseProxy)
- [Setting up CORS in Caddy](CaddyCORS)
- [Making Caddy use a self-signed SSL certificate](CaddySelfSigned)
- [Enabling gzip/zstd compression in Caddy](CaddyCompression)
- [Enabling access logging in Caddy](CaddyAccessLogging)

## Installation script on Debian/Ubuntu

```sh
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

## `handle` and `handle_path`

The [`handle`](https://caddyserver.com/docs/caddyfile/directives/handle) and [`handle_path`](https://caddyserver.com/docs/caddyfile/directives/handle_path) directives are similar. However, `handle_path` will strip the path prefix from the request when matched.

```
handle_path /foo/* {
	# The path has the "/foo" prefix stripped
}

handle /bar/* {
	# The path still retains "/bar"
}
```

## Further reading

- [`redir`](https://caddyserver.com/docs/caddyfile/directives/redir) for redirects.
- [`reverse_proxy`](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy) for [proxying](CaddyReverseProxy) requests to another server.

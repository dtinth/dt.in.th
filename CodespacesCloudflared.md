---
public: true
title: Installing cloudflared in Codespaces
aliases:
  - 20220810T165332Z4928
---

[To install cloudflared:](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/local/#deb-install)

```sh
wget -q https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb && sudo dpkg -i cloudflared-linux-amd64.deb
```

[To create a quick tunnel:](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/do-more-with-tunnels/trycloudflare/)

```sh
cloudflared tunnel --url http://localhost:7000
```

---
public: true
facebook: https://www.facebook.com/dtinth/posts/10215797763731229
title: Setting up a reverse proxy using Caddy
aliases:
  - 20201121T173226Z1294
created: 2020-11-21
updates:
  - date: 2025-12-22
    description: Updated for usage with Dokploy and Docker Compose.
---

**To run [Caddy](Caddy) as a reverse proxy** with [Docker Compose](DockerCompose) and [Dokploy](Dokploy), I use this compose file:

```yaml
services:
  proxy:
    image: caddy
    command: 'caddy reverse-proxy --from :80 --to https://192.168.8.2:8379'
```

_Original note content follows:_

---

**The most boring thing about setting up a web server on a new cloud server for me is the initial configuration.**
From [installing][nginx-install] and [configuring nginx][nginx-config] to [setting up Let's Encrypt with certbot][certbot][^certbot-notes]. There are so many steps involved and so much boilerplate code in the config[^boilerplate].

<!-- prettier-ignore-start -->

[^boilerplate]:

    Boilerplate include but not limited to:

    - Creating a file in `sites-available`.
    - Setting up a server block.
    - Setting up redirect from HTTP to HTTPS.
    - Setting up the path to the SSL certificate file.
    - Setting up HTTP headers for the reverse proxy, such as `Host`, `X-Real-IP`, `X-Forwarded-For`.
    - Setting up WebSocket support.
    - Symlinking the file to `sites-enabled`.

<!-- prettier-ignore-end -->

[nginx-install]: https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04
[nginx-config]: https://nginxconfig.io/
[certbot]: https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04

[^certbot-notes]: [A commenter](https://web.facebook.com/dtinth/posts/10215797763731229) recommended me try out [acme.sh](https://github.com/acmesh-official/acme.sh) should I need to use nginx again.

This has changed now that [Caddy](Caddy) exists.
It is an open source web server written in Go that has built-in Let's Encrypt support.
And **it has the simplest config file format I've ever seen** for a web server:

<div class="grid grid-cols-1 lg:grid-cols-24 gap-2">
<div class="lg:col-span-11">

**Before: nginx.conf**

<div style="font-size: 0.5em;" class="post-limit-size">

```bash
# HTTP -> HTTPS
server {
  listen       80;
  listen       [::]:80;
  server_name  vps.dt.in.th;
  location ^~ /.well-known/acme-challenge/ {
    root /var/www/html;
  }
  location / {
    return 301 https://vps.dt.in.th$request_uri;
  }
}

# HTTPS server
server {
  listen       443 ssl http2;
  listen       [::]:443 ssl http2;
  server_name  vps.dt.in.th;
  root         /var/www/html;

  ssl_certificate          /etc/letsencrypt/live/vps.dt.in.th/fullchain.pem;
  ssl_certificate_key      /etc/letsencrypt/live/vps.dt.in.th/privkey.pem;
  ssl_trusted_certificate  /etc/letsencrypt/live/vps.dt.in.th/chain.pem;

  location /api {
    proxy_pass http://api:8080/api;
    proxy_http_version  1.1;
    proxy_cache_bypass  $http_upgrade;
    proxy_set_header  Upgrade            $http_upgrade;
    proxy_set_header  Connection         "upgrade";
    proxy_set_header  Host               $host;
    proxy_set_header  X-Real-IP          $remote_addr;
    proxy_set_header  X-Forwarded-For    $proxy_add_x_forwarded_for;
    proxy_set_header  X-Forwarded-Proto  $scheme;
    proxy_set_header  X-Forwarded-Host   $host;
    proxy_set_header  X-Forwarded-Port   $server_port;
    proxy_connect_timeout  60s;
    proxy_send_timeout     60s;
    proxy_read_timeout     60s;
  }
}
```

</div>

</div>
<div class="lg:col-span-2 text-center text-2xl text-[#d7fc70] font-bold hidden lg:block">
  <p>&nbsp;</p>
  <p>&rarr;</p>
</div>
<div class="lg:col-span-11">

**After: Caddyfile**

```sh
# ingress/Caddyfile
vps.dt.in.th
root * /var/www/html
file_server
reverse_proxy /api/* api:8080
```

</div>
</div>

Built with Go, it is available as a [standalone binary](https://github.com/caddyserver/caddy/releases). [Packages for popular package managers](https://caddyserver.com/docs/download) are available. And there is also a ready-to-use [Docker image](https://hub.docker.com/_/caddy).

## Usage with [Docker](Docker) Compose

Here's a basic docker-compose file that runs Caddy:

```yaml
# ingress/docker-compose.yml
version: '3.7'
services:
  caddy:
    image: caddy
    restart: unless-stopped
    ports:
      - '80:80'
      - '443:443'
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - ./public:/var/www/html
      - caddy_data:/data
      - caddy_config:/config
volumes:
  caddy_data:
  caddy_config:
```

Now when I run `docker-compose up -d`, Caddy starts up and:

- Listens to port 80 and 443.
- Obtains a Let's Encrypt certificate for domain `vps.dt.in.th`.
- Sets up HTTP to HTTPS redirection on port 80.
- Serves files from `public` folder (mounted to `/var/www/html` inside container).
- Proxies requests to `/api/` to the `api` hostname.

### Configuring Docker networks for reverse proxy

Now, other projects I run on this VPS have their own `docker-compose` file. We need to make the container join Caddy's Docker network for Caddy to be able to look it up via hostname.

This can be done by joining an external network and setting a network alias for that network.

```yaml
# api/docker-compose.yml
version: '3.8'
services:
  server:
    restart: unless-stopped
    build: .
    networks:
      default:
      ingress:
        aliases:
          - api
networks:
  ingress:
    external: true
    name: ingress_default
```

<style>
.post-limit-size pre > code {
  overflow-y: auto;
  max-height: 24rem;
}
</style>

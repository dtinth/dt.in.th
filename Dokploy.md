---
title: Dokploy
public: true
created: 2025-12-10
giscus: true
topic: true
---

My notes about setting up [Dokploy](https://dokploy.com/), an open source alternative to Heroku, Vercel, and Netlify, on a [Linux](Linux) VPS. It uses [Docker](Docker) under the hood.

Before [installing](https://docs.dokploy.com/docs/core/installation) Dokploy on a VPS, I like to [set up Tailscale](LinuxTailscale) first. This is because after installation, Dokploy will ask me to set up an admin user via `http://<public-ip>:3000`, and I prefer not to do that over an unencrypted connection.

```sh
# This will install Docker along with Dokploy
curl -sSL https://dokploy.com/install.sh -o install-dokploy.sh
sudo sh install-dokploy.sh
```

After installing I do this:

1. **Set custom domain.** Assuming there is a domain already pointing to the VPS, I go to **Settings** → **Web Server** → **Domains** and set up the server domain + Let's Encrypt
2. **Set up S3 Destination.** This allows Dokploy to upload database and volume backups to an S3-compatible storage. Add that in **Settings** → **S3 Destinations**.

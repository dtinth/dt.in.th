---
title: PocketBase
topic: true
public: true
---

My notes about [**PocketBase**](https://pocketbase.io/), an “open-source [backend](BaaS) in 1 file.”

- [PocketBase with LINE Login](PocketBaseLINELogin) – Set up OAuth2 authentication using LINE

## My setup

Here's how I run PocketBase on my VPS using [Docker Compose](DockerCompose):

```yaml
services:
  pocketbase:
    image: ghcr.io/muchobien/pocketbase:latest
    restart: unless-stopped
    environment:
      - PB_HOST=0.0.0.0
      - PB_PORT=8090
      - PB_ADMIN_EMAIL=${PB_ADMIN_EMAIL:?"PB_ADMIN_EMAIL missing"}
      - PB_ADMIN_PASSWORD=${PB_ADMIN_PASSWORD:?"PB_ADMIN_PASSWORD missing"}
      - TZ=${TZ:?"TZ missing"}
    ports:
      - '127.0.0.1:8090:8090'
    volumes:
      - pb_data:/pb_data
    healthcheck:
      test:
        [
          'CMD',
          'wget',
          '--no-verbose',
          '--tries=1',
          '--spider',
          'http://localhost:8090/api/health',
        ]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 30s
volumes:
  pb_data:
```

## Bookmarks

- 🔖 [PocketBase GitHub](https://github.com/pocketbase/pocketbase)
- 🔖 [PocketBase Documentation](https://pocketbase.io/docs/)

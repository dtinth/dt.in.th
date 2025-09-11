---
public: true
title: Running Node.js app in a Docker container without building the image
---

I have a [Node.js](Nodejs) script that I want to put on a cloud server. However, that server may not have Node.js installed, or it may have a different version of Node.js installed. So, I want to run my script in a [Docker](Docker) container.

Start with a Docker Compose file:

```yaml
# docker-compose.yml
services:
  worker:
    image: node:16
    working_dir: /app
    init: true
    command: yarn start
    restart: always
    volumes:
      - .:/app
      - node_modules:/app/node_modules
volumes:
  node_modules:
```

Install the dependencies:

```bash
docker compose run --rm worker yarn
```

Run it:

```bash
docker compose up
```

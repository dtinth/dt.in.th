---
public: true
topic: true
title: Docker
aliases:
  - 20220720T084147Z0715
---

**[Docker](https://www.docker.com/)** “makes development efficient and predictable”

- [Setting up a reverse proxy using Caddy](CaddyReverseProxy)
- [Codespaces-like development container setup](Codebox)
- [Running Node.js app in a Docker container without building the image](NodeInDocker)
- [A snippet to install Docker on a Linux machine](DockerInstall)
- [Enabling sudo in Docker images](20221010T053934Z5044)
- [Replacing Docker Desktop on Mac with Colima](DockerMacOSColima)
- [Running pgAdmin in Docker Compose](20230117T061333Z2948)
- [Using Docker CLI locally against a remote Docker Daemon via SSH](DockerRemoteContext)

## One-liner to install Docker on a VPS

```sh
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
```

## Related topics

- [Docker Compose](DockerCompose)
- [Dokploy](Dokploy)
- [Nixpacks](Nixpacks)

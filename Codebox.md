---
public: true
title: Codespaces-like development container setup
aliases:
  - 20220714T084525Z3523
---

Sometimes I am working with some organizations that doesn’t pay for [GitHub Codespaces](Codespaces) yet. However, I’m already spoiled; I _want_ to have a cloud-based development environment.

I want to use a cloud-based [Linux](Linux) virtual machine and I want its environment to closely match the one I use on GitHub Codespaces. Fortunately, Microsoft provides [the exact image used by GitHub Codespace](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux). Time to set it up.

## Install Docker

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

## Add swap space for some extra RAM

```sh
sudo fallocate -l 12G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

## Launch a Docker container

```yaml
# docker-compose.yml
services:
  dev:
    image: mcr.microsoft.com/vscode/devcontainers/universal:1-linux
    ports:
      - 127.0.0.1:10022:2222
    volumes:
      - ./docker:/var/lib/docker
      - ./workspace:/workspace
    cap_add:
      - SYS_PTRACE
    security_opt:
      - seccomp=unconfined
    privileged: true
    init: true
    tmpfs: /tmp
```

```sh
docker compose up -d
```

This will launch a [Docker](Docker) container that [runs the same image as GitHub Codespace](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux).

This container has already been configured with an SSH server, however, to access it I had to inject my SSH key into `/home/codespace/.ssh/authorized_keys` inside the container.

## Connect to it from VS Code

My VM is configured as `mybox` in `~/.ssh/config` file, so I added another entry to connect to the container:

```
Host mybox-codebox
  Hostname 127.0.0.1
  Port 10022
  HostKeyAlias mybox-codebox
  User codespace
  ProxyJump mybox
```

Now I can use VS Code to connect to the container via SSH. VS Code will also forward the authentication credentials into the container. This lets me `git clone` repositories over HTTPS right away.

---
public: true
title: Dockerized virtual desktop
---

Sometimes I want to start a virtual desktop on a [Linux](Linux) server. I created the [**virtual-desktop**](https://github.com/dtinth/virtual-desktop) project which builds a Debian-based virtual desktop in a [Docker](Docker) container.

## Usage

```sh
mkdir -p ~/virtual-desktop && cd ~/virtual-desktop
cat > docker-compose.yml <<EOF
services:
  desktop:
    image: ghcr.io/dtinth/virtual-desktop:main
    privileged: true
    ipc: host
    tmpfs: /tmp
  novnc:
    image: geek1011/easy-novnc
    command: -a :5800 -h desktop --no-url-password
    ports:
      - 127.0.0.1:5800:5800
EOF
docker compose up -d
```

## Snippets

```sh
# Run a shell in the container
docker compose exec desktop bash
```

```sh
# Install VS Code
cd /tmp && wget 'https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64' -O code.deb && sudo apt install ./code.deb

# Install Discord
cd /tmp && wget 'https://discord.com/api/download?platform=linux&format=deb' -O discord.deb && sudo apt install ./discord.deb

# Install OBS Studio
sudo apt update && apt install -y obs-studio

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash - && sudo apt install -y nodejs && sudo corepack enable
```

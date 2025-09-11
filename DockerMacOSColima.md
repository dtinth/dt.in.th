---
public: true
title: Replacing Docker Desktop on Mac with Colima
aliases:
  - 20220822T070048Z8092
---

**Update:** I no longer use Colima on my [Mac](MacOS). I just launch a [Linux](Linux) virtual machine using [UTM](https://mac.getutm.app/) and [install](DockerInstall) [Docker](Docker) in there. When developing, I use [VS Code](VSCode)’s Remote - SSH extension to connect to the Linux VM and run Docker commands there.

---

These instructions are based on the swyx’s article [“Running Docker without Docker Desktop”](https://www.swyx.io/running-docker-without-docker-desktop/).

1. Uninstall [Docker](Docker) Desktop: **Docker menu** &rarr; **Troubleshoot** &rarr; **Uninstall**

2. Install these:

   ```
   brew install colima docker docker-compose
   ```

3. Make CLI plugin available:

   ```sh
   bash -c 'mkdir -p ~/.docker/cli-plugins
   ln -sfn $(brew --prefix)/opt/docker-compose/bin/docker-compose ~/.docker/cli-plugins/docker-compose'
   ```

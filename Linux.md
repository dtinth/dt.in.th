---
topic: true
public: true
title: Linux
---

My notes on working with a **Linux** system. When I set up a new Linux VPS, these are the things I usually do:

- Set up the [hostname](LinuxHostname)
- Set up [Tailscale](LinuxTailscale) so I have an encrypted connection to the VPS
- Set up memory compression using [zram](LinuxZram) and/or [zswap](LinuxZswap)
- [Install Docker](DockerInstall) (can be skipped if using [Dokploy](Dokploy) instead, as it installs Docker for you)

Other notes:

- [Dockerized virtual desktop](VirtualDesktop)
- [Recording screen in Linux using ffmpeg](20220923T125342Z4946)
- [Codespaces-like development container setup](Codebox)
- [Adding a Desktop environment to a Debian/Ubuntu server](20221015T091530Z4968)
- [Which one to use, useradd or adduser?](LinuxAddUser)
- [Creating encrypted directories with gocryptfs](20221209T090307Z6968)
- [My asdf snippets](AsdfSnippets)
- [TIL: pgrep and pkill](20220204T170710Z2789)

## Related topics

- [Caddy web server](Caddy)
- [Docker](Docker)
- [GitHub Codespaces](Codespaces)
- [Mosh](Mosh)
- [tmux](Tmux)

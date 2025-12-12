---
title: 'Setting hostname on a Linux machine'
public: true
---

After I created a new VPS (running Debian), it often comes with a default hostname, so one of the first things I do when setting up a new [Linux](Linux) machine is to change the hostname.

**Use `hostnamectl` to set the hostname:**

```bash
# Update the hostname
sudo hostnamectl set-hostname mynewhost

# View the current hostname and other info
hostnamectl
```

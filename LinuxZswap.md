---
title: Using zswap for compressed RAM-cached swap space in Linux
public: true
created: 2025-12-12
---

When setting up a new [Linux](Linux) VPS, I usually set up [zram](LinuxZram). However, I recently read the article [_I was wrong! zswap IS better than zram_](https://linuxblog.io/zswap-better-than-zram/), which led me to try out **zswap** instead.

Prerequisites:

- A Linux kernel with zswap support. Note that in Debian Bookworm, zswap is included in the standard kernel, _but not the `-cloud` variant,_ so the command belows may not work on all VPS providers.
- A swap space configured, as zswap works as a cache for an existing swap space (unlike zram which creates its own swap device).

These commands should be run as root:

```sh
# Check current parameters
grep -r . /sys/module/zswap/parameters/

# Activate zswap with zstd compression and 25% max pool size
echo 1 | tee /sys/module/zswap/parameters/enabled
echo zstd | tee /sys/module/zswap/parameters/compressor
echo 25 | tee /sys/module/zswap/parameters/max_pool_percent
```

To activate zswap automatically on boot, normally one would add kernel parameters to the bootloader configuration. However, on a VPS this may not be as convenient. Instead, I created a simple systemd service to configure zswap at startup:

```ini
# /etc/systemd/system/zswap-config.service
[Unit]
Description=Configure zswap
DefaultDependencies=no
After=local-fs.target

[Service]
Type=oneshot
ExecStart=/bin/bash -c 'echo 1 > /sys/module/zswap/parameters/enabled'
ExecStart=/bin/bash -c 'echo zstd > /sys/module/zswap/parameters/compressor'
ExecStart=/bin/bash -c 'echo 25 > /sys/module/zswap/parameters/max_pool_percent'
RemainAfterExit=yes

[Install]
WantedBy=sysinit.target
```

Then enable the service:

```sh
systemctl daemon-reload
systemctl enable zswap-config.service
```

To verify if the setup is correct, I reboot the VPS and check the zswap parameters afterwards.

To check the stats:

```sh
# Check stats
sudo grep -r . /sys/kernel/debug/zswap/
```

References:

- [Kernel Documentation - zswap](https://docs.kernel.org/admin-guide/mm/zswap.html)
- [Debian Wiki - zswap](https://wiki.debian.org/Zswap)

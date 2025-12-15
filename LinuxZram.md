---
public: true
title: Using zram for compressed RAM-backed swap space in Linux
created: 2025-02-22
giscus: true
---

# Using zram for compressed RAM-backed swap space in Linux

**When using a cheap VPS, available RAM is often limited.** While [adding a disk-backed swap space][swap] can help, it's much slower than RAM.

**[zram][zram]** is a [Linux](Linux) kernel feature that creates a compressed block device in RAM that can be used as swap space. When memory is swapped to and from the zram device, it is compressed and decompressed on-the-fly.

[swap]: https://www.digitalocean.com/community/tutorial-collections/how-to-add-swap-space
[zram]: https://en.wikipedia.org/wiki/Zram
[szg]: https://github.com/systemd/zram-generator

In my case, 1.1 GB of swap data is being compressed down to just 93 MB using the zstd compression algorithm:

```sh
$ /sbin/zramctl
NAME       ALGORITHM DISKSIZE  DATA COMPR TOTAL STREAMS MOUNTPOINT
/dev/zram0 zstd            4G  1.1G   93M 98.4M       2 [SWAP]
```

This compression ratio of over 10:1 means you can effectively get more usable memory without upgrading your VPS plan. zram is particularly effective because many applications nowadays allocate memory without fully utilizing it, making it highly compressible.

:::note[Also check out zswap]
Another Linux kernel feature, **[zswap](https://www.kernel.org/doc/html/latest/admin-guide/mm/zswap.html)**, provides a compressed cache for swap pages before they are written to disk. Unlike zram, which creates a separate compressed block device, zswap works as a cache layer for existing swap devices. I have a separate note here: [Using zswap for compressed swap caching in Linux](LinuxZswap). I haven't yet made up my mind on which one is better for my use case.
:::

A simple way to enable zram on a modern Linux system is to use the [`systemd-zram-generator`][szg] package:

```sh
sudo apt install systemd-zram-generator
```

Then create a configuration file to specify the zram device size and compression algorithm:

```ini
# /etc/systemd/zram-generator.conf
[zram0]
zram-size = 4096
compression-algorithm = zstd
```

After rebooting, you should see the zram device created and mounted as swap space.

```sh
$ cat /proc/swaps
Filename     Type       Size     Used     Priority
/dev/zram0   partition  4194300  1170944  100
```

References:

- [Debian Wiki - ZRam](https://wiki.debian.org/ZRam)
- [Reddit discussion on ZRAM performance benefits](https://www.reddit.com/r/lowendgaming/comments/13d5brx/enable_zram_on_low_end_linux_machines_for_a_free/)
- [Arch Wiki - zram](https://wiki.archlinux.org/title/Zram)
- [ZRAM article on _Make Debian Fun Again And Learn How To Do Other Cool Stuff Too_](https://makedebianfunagainandlearnhowtodoothercoolstufftoo.computer/doku.php?id=start:zramswap)

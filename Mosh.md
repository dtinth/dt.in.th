---
title: Mosh
public: true
---

:::lead
[Mosh](https://mosh.org/) is a mobile shell that provides better connectivity over unreliable networks. Here's how I install and configure it for better user experience.
:::

## Installation

To install mosh-server on a remote machine:

```bash
sudo wget -O /usr/local/bin/mosh-server \
  https://github.com/blinksh/mosh-static-multiarch/releases/download/1.4.0%2Bblink-17.3.0/mosh-server-1.4.0+blink-17.3.0-linux-amd64 \
  && sudo chmod +x /usr/local/bin/mosh-server
```

## Configuration for better UX

For better user experience, I configure mosh with prediction settings. In [fish](https://fishshell.com/) shell:

```fish
set -Ux MOSH_PREDICTION_DISPLAY always
set -Ux MOSH_PREDICTION_OVERWRITE yes
```

These settings:
- `MOSH_PREDICTION_DISPLAY always` - Always show local echo predictions
- `MOSH_PREDICTION_OVERWRITE yes` - Overwrite existing text instead of inserting before it

From the man page, the `--predict` option controls speculative local echo:
- `adaptive` (default) - Show predictions on slower links and smooth out network glitches
- `always` - Always show predictions when confident
- `never` - Never show predictions

The `--predict-overwrite` option makes predictions overwrite existing text instead of inserting before it, which provides smoother typing experience.
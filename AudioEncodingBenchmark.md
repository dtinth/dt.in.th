---
public: true
title: Audio encoding benchmark with FFmpeg
aliases:
  - 20220823T063103Z7135
---

This is a rough way to measure CPU speed, by using FFmpeg to encode white noise into Opus.

- Install ffmpeg locally using npm

  ```
  npm install @ffmpeg-installer/ffmpeg
  ```

- Obtain binary path:

  ```
  FFMPEG=$(node -p 'require("@ffmpeg-installer/ffmpeg").path')
  ```

- Run ffmpeg

  ```
  $FFMPEG -t 300 -f lavfi -vn -i 'anoisesrc=color=white' -f ogg -c:a libopus -b:a 96K /dev/null -y
  ```

Check the speed on the progress output line:

```
size=    3154kB time=00:05:00.01 bitrate=  86.1kbits/s speed=  60x
                                                               ^^^
```

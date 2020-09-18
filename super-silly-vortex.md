---
parents: [projects, talks]
title: super-silly-vortex
created: 2019-12-14T03:00:00.000Z
updated: 2019-12-15T16:00:00.000Z
description: >-
  A silly recreation of the Rain Vortex at Jewel Changi Airport, but it’s
  `node_modules` instead of water. Made at Super Silly Hackathon 2019.
featured: true
image: /uploads/super-silly-vortex.png
tags:
  - Hackathon
---

A silly recreation of the **Rain Vortex** at Jewel Changi Airport, but it’s `node_modules` instead of water.

Made at [Super Silly Hackathon 2019](https://supersillyhackathon.sg).

<template>
  <YouTube id="8as2nAU6cZA" />
</template>

<template>
  <CallToAction href="https://github.com/dtinth/super-silly-vortex/tree/master/presentation">
    Presentation slides
  </CallToAction>
  <CallToAction href="https://super-silly-vortex.netlify.com/">
    Open the demo
  </CallToAction>
</template>

## Motivation

I had a spark of motivation after seeing this tweet:

<template>
  <TwitterEmbed>
    <p lang="en" dir="ltr">Good news everyone, I finally found where all of our node_modules go! They’re in the Jewel Rain Vortex at the Singapore airport. <a href="https://t.co/53j8MnMThI">pic.twitter.com/53j8MnMThI</a></p>&mdash; Monica Dinculescu (@notwaldorf) <a href="https://twitter.com/notwaldorf/status/1140336804026937344?ref_src=twsrc%5Etfw">June 16, 2019</a>
  </TwitterEmbed>
</template>

I wanted to create a visualization of what `yarn install` does to your filesystem but make it looks like files are falling down from Changi Jewel’s Rain Vortex (instead of water).

The end result is a 3D recreation of the Jewel using THREE.js where filenames dropping down from the top whenever a file is created on the file system.

<template>
  <TwitterEmbed>
    <p lang="en" dir="ltr">I have a winner now: <a href="https://twitter.com/hashtag/Jewel?src=hash&amp;ref_src=twsrc%5Etfw">#Jewel</a> but node_modules <a href="https://twitter.com/hashtag/SuperSillyHackathon?src=hash&amp;ref_src=twsrc%5Etfw">#SuperSillyHackathon</a> <a href="https://t.co/HUuVOHF68b">pic.twitter.com/HUuVOHF68b</a></p>&mdash; Fred Baa (@fredbaa) <a href="https://twitter.com/fredbaa/status/1205819492590178305?ref_src=twsrc%5Etfw">December 14, 2019</a>
  </TwitterEmbed>
</template>

<template>
  <TwitterEmbed>
    <p lang="en" dir="ltr">Dang, always wanted to see all the files changes when I init a CRA project. <a href="https://twitter.com/dtinth?ref_src=twsrc%5Etfw">@dtinth</a> makes this dream a reality and throws in a bonus changi jewel <a href="https://t.co/teGtV6WMF9">pic.twitter.com/teGtV6WMF9</a></p>&mdash; Yishu See (@yishusee) <a href="https://twitter.com/yishusee/status/1205820747379134464?ref_src=twsrc%5Etfw">December 14, 2019</a>
  </TwitterEmbed>
</template>

<template>
  <CallToAction href="https://github.com/dtinth/super-silly-vortex">
    GitHub repository
  </CallToAction>
</template>

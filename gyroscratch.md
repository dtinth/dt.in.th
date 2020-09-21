---
title: Gyroscratch
created: 2017-03-24T00:00:00.000Z
updated: 2020-03-25T00:00:00.000Z
image: /uploads/gyroscratch.jpg
description: >-
  A rhythm game turntable built by putting a phone in a ceramic plate.
---

Want to play beatmania-style games, but don’t have the turntable? Got a phone? Got a circle-shaped object? Now you have a turntable.

## Gyroscratch for Android

<template>
  <TwitterEmbed>
    <p lang="ja" dir="ltr">本当の皿。<br><br>Music: OVERCOLORED／P4koo [PABAT2017] <a href="https://t.co/Fz2qtfnETz">pic.twitter.com/Fz2qtfnETz</a></p>&mdash; Bemuse · flicknote (@bemusegame) <a href="https://twitter.com/bemusegame/status/841693301707223041?ref_src=twsrc%5Etfw">March 14, 2017</a></blockquote>
  </TwitterEmbed>
</template>

The first version was built for Android phones, written in Kotlin.
It communicates with the computer via [Bluetooth LE MIDI](https://www.midi.org/specifications-old/item/bluetooth-le-midi).
It assumes that the game you’re playing supports MIDI input ([Bemuse](./bemuse.md) does).
Otherwise, you can use an app that translates MIDI messages into gamepad input or keystrokes.

<template>
  <call-to-action href="https://github.com/dtinth/GyroscratchAndroid">
    Source code on GitHub
  </call-to-action>
</template>

I also tried it with a more challenging song:

<template>
  <TwitterEmbed>
    <p lang="en" dir="ltr">Some people asked me about the performance of Gyroscratch… Works quite well!<br><br>Music: diSTractiOn PoInT／<br>Arctures vs DJ KemoNOiZE [BOFU2016] <a href="https://t.co/9wubSR6wwY">pic.twitter.com/9wubSR6wwY</a></p>&mdash; Bemuse · flicknote (@bemusegame) <a href="https://twitter.com/bemusegame/status/845541512591003648?ref_src=twsrc%5Etfw">March 25, 2017</a>
  </TwitterEmbed>
</template>

It was quite a hassle to set up. So, the project remained a proof-of-concept…

Until 3 years later.

## Gyroscratch for Web

With the [Web MIDI API](https://www.w3.org/TR/webmidi/), the [MIDI BLE Connect app on Android](https://play.google.com/store/apps/details?id=com.mobileer.example.midibtlepairing&hl=en) and the [Web MIDI Browser on iOS](https://apps.apple.com/us/app/web-midi-browser/id953846217), mobile web applications can now make use of Bluetooth LE MIDI.

So, in March 2020, I ported Gyroscratch to the web.

<template>
  <YouTube id="bTlyNiUXLws" />
</template>

<template>
  <call-to-action href="https://github.com/bemusic/gyroscratch-for-web">
    Source code on GitHub
  </call-to-action>
</template>

---
public: true
title: vx (project)
created: 2018-12-18
updated: 2020-04-05
---

:::warning[Superseded]
In July 2023, I built [my own Raycast extension](https://github.com/dtinth/what-you-said) that integrates with [macOS’ built-in speech recognition API](https://github.com/dtinth/transcribe), which is what I’ve been using since, as of September 2024.
:::

In 2017, I wanted to be a fast typist, so I practiced typing a lot. Then one day I started feeling pain in my finger joints when I type. Unfortunately, it never went away from that point onward.

Among many ways to manage this, I try to type less. This means using my voice more. And hence I started the `vx` project.

This project began as a CLI application [vxcli](#vxcli). Then an Electron application [vxtron](#vxtron). Finally, [the vx Chrome extension](#vxchrome) is its current form, is what I use to type on a day-to-day basis.

::cta[Get the Chrome extension]{href="https://chrome.google.com/webstore/detail/vx/obopnfigmanifpiojfhebcegjepgaiif"}

## Problems with existing offerings

I use a MacBook, and [macOS comes with Dictation](https://support.apple.com/guide/mac-help/use-dictation-mh40584/mac).
[Google Docs also has Voice Typing](https://support.google.com/docs/answer/4492226?hl=en).
You press a key to make it start listening. You speak. It types what you say. Pretty simple, right?

Here’s the problem: **I am not a native speaker.** A lot of times the computer would misrecognize what I said.
And each time I had to hit the undo button.

This is me struggling to voice-type “Here’s the problem” in the paragraph above… ugh!

<figure class="framed">

![Just the punim, she has the problem, she has to pop him, he is the problem, ...](https://im.dt.in.th/ipfs/bafybeidn5ysw6aur6sjrldl3ezog3wegqtts33qqxfuk3qwyhofy6o63qi/vx-heres-the-problem.gif)

</figure>

macOS’s Dictation also seems to have a few problems with rich text fields and web applications.

## Maybe I can do something to solve this…

I had an idea. Why not make computer just listen to me, and then copy what I said to the clipboard?
Don't try to be smart by typing into the fields directly.

- **If it misrecognized what I said, I can just say it again.** No need to press Undo.

- **If it got the results right, I just hit Paste.** This way I can use it with most applications.

…with the plan in mind, I then got to work.

## vxcli

<figure class="framed">

![vxcli demo](https://im.dt.in.th/ipfs/bafybeihahv2vemqpgi6fyypj3ndvadeskzbiy2zay462zogeq7mokgyylq/vxcli.gif)

</figure>

**vxcli** is a simple command line application written in Node.js.
To run it I just type `vx` into the terminal.

Speech recognition is done by the [Google Cloud’s Speech-To-Text API](https://cloud.google.com/speech-to-text/).
The accuracy is very high, but it’s also quite expensive.

::cta[vxcli’s GitHub repository]{href="https://github.com/dtinth/vxcli"}

The result is so great, it led me to pursue this project further.
Having to run a command in the terminal every time I want to write something… that’s just isn’t quite convenient!

## vxtron

**vxtron** is, you guessed it, an Electron application.

Now, instead of running a command, I can just run vxtron and leave it in the background.
It registers a global hotkey which I can press to make it start/stop listening.

I developed it live on stream (Thai language).

- [Part 1](https://web.facebook.com/dtinth/videos/10211294382149504/) — Prototyping as a web application
- [Part 2](https://web.facebook.com/dtinth/videos/10211295354453811/) — Porting to Electron application

::cta[vxtron’s GitHub repository]{href="https://github.com/dtinth/vxtron"}

I also made it about to listen to 2 different languages (a hotkey for each language).
I also had my sister try out vxtron. She told me that because of it she can input text almost twice as fast.

It was designed for macOS. But I also had a Chromebook, and Chromebooks don’t run Electron apps…

## vxchrome

**vxchrome** is a Chrome extension. I was able to turn it into a Chrome extension because:

1. Chrome extensions can register keyboard shortcuts, and a user can configure these shortcuts to be **system-wide.**
   That means you can use in **any application**, not just Google Chrome.

2. Google Chrome implements the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).
   It allows web applications (and Chrome extensions) to perform speech recognition **for free.**
   (This isn't available in Electron.)

::cta[vxchrome’s GitHub repository]{href="https://github.com/dtinth/vxchrome"}

Being a Chrome extension, it works on macOS, Windows, Linux, as well as Chrome OS.

In April 2020, I polished the extension and published it to the Chrome Web Store.

<figure class="framed">

[![Get the Chrome extension](https://im.dt.in.th/ipfs/bafybeic7g6tusfhz5uaeca2siv55nbwtf5bbwojmw6vl5eagrhx3tdkgki/vxchrome-cta.webp)](https://chrome.google.com/webstore/detail/vx/obopnfigmanifpiojfhebcegjepgaiif)

</figure>

---
title: iPedal
public: true
created: 2013-09-21
aliases:
  - ipedal
---

# iPedal

A programmable foot pedal for your iPad and [Node.js](NodeJS).

iPedal creates a web server that can be accessed through an iPad, which is then used as a foot pedal.

![](https://dt.in.th/uploads/ipedal.jpeg)

It also exposes a socket.io-based API that other applications can connect to be notified when the pedal is being pressed or released. The [`ipedal` npm package](https://www.npmjs.com/package/ipedal) provides an easy-to-use client library for [Node.js](NodeJS).

```js
const pedal = require('ipedal').client('http://localhost:10001/')
pedal.on('down', () => console.log('pedal is down'))
pedal.on('up', () => console.log('pedal is up'))
```

## History

I created iPedal for use in my talk [VIM tips, technique, scripts, plugins](VimTalk2013).

In that talk, there was a lot of live demos. To make the demos easy-to-understand, I created a software that display the keystrokes typed. But since in the demos I need both of my hands to type Vim commands, I needed a way to control it without using my hands. And hence this project was born.

::cta[GitHub repository]{href="https://github.com/dtinth/iPedal"}
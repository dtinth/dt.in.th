---
id: ipedal
title: iPedal
created: 2013-09-21T15:42:44Z
updated: 2013-09-25T02:47:50Z
description: A programmable foot pedal for your iPad and Node.js.
tags:
  - Project
---

A programmable foot pedal for your iPad and Node.js.

iPedal creates a web server that can be accessed with an iPad, which is then used as a foot pedal.

![](/uploads/ipedal.jpeg)

It also exposes a socket.io-based API that other applications can connect to be notified when the pedal is being pressed or released. The [`ipedal` npm package](https://www.npmjs.com/package/ipedal) provides an easy-to-use client library for Node.js.

```js
const pedal = require('ipedal').client('http://localhost:10001/')
pedal.on('down', () => console.log('pedal is down'))
pedal.on('up', () => console.log('pedal is up'))
```

## History

I created iPedal for use in my talk [VIM tips, technique, scripts, plugins](/p/vim-tips-technique-scripts-plugins/).

In that talk, there was a lot of live demos. To make the demos easy-to-understand, I created a software that display the keystrokes typed. But since in the demos I need both of my hands to type Vim commands, I needed a way to control it without using my hands. And hence this project was born.

<call-to-action href="https://github.com/dtinth/iPedal">
  GitHub repository
</call-to-action>

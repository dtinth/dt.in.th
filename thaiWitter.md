---
id: thaiWitter
title: thaiWitter
created: 2019-12-14T03:00:00.000Z
updated: 2019-12-15T16:00:00.000Z
description: 'A super-smooth, web-based Twitter client that I have written in 2009, back when I was 16 years old. It is designed to scroll smoothly (perform at 60fps) handling thousands of tweets on the timeline. It’s my first project of considerable size, over 7000 lines of code.'
sidebar: auto
tags:
  - Project
---

**thaiWitter** is a web-based Twitter client that I have written back in 2009, when I was 16 years old. It is one of my first project of considerable size (codebase is more than 7000 lines).

I have got several happy users who gave me a lot of great feedback for me to improve it. I felt really good about improving this project. They are mentioned in the [Changelog](https://github.com/dtinth/thaiWitter3/blob/master/CHANGELOG.md) page.

Needless to say, this is one of the project I’m most proud about.

But back at that time I lacked software engineering skills. I just threw a bunch of things I learned into this project. So, the project becomes less maintainable, and eventually, I stopped maintaining it in 2013 due to its immense technical debt.

In 2018, I decided to open-source this project for posterity.

## Features

Here is a list of feature with some (edited/paraphrased) testimonials (text in brackets are my interpretations).

### Super smooth

A lot of animation in this app. The aim is to create a Twitter client with a fast and responsive UI. It runs at 45fps in Firefox 3. It has a [custom scrolling equation](http://me.dt.in.th/page/thaiWitterScrollingEquation) to ensure the smoothest timeline scrolling experience!

> thaiWitter runs on Prism, an ancient technology, but it’s just the best Twitter client... (Mozilla Prism is discontinued since 2010, this tweet is in 2014.)

<template>
  <TwitterEmbed>
    <p lang="th" dir="ltr">จริงๆ thaiWitter ก็ prism ซึ่งกุอี๋แหวะ mozilla สัด แต่มันดีที่สุดแล้วอะ.........</p>&mdash; stay noided (@notnonene) <a href="https://twitter.com/notnonene/status/453873974343000064?ref_src=twsrc%5Etfw">April 9, 2014</a>
  </TwitterEmbed>
</template>

> Some people asked me, “Isn’t it cumbersome to use Twitter on the web?” Answer: No! Because I use thaiWitter.

<template>
  <TwitterEmbed>
    <p lang="th" dir="ltr">บางคนถามว่าเล่นทวิตบนเว็บไม่ลำบากหรอ ตอบ !! ไม่ลำบากครับ เพราะผมใช้ thaiWitter .</p>&mdash; มิน (@minxkung) <a href="https://twitter.com/minxkung/status/350082128253427712?ref_src=twsrc%5Etfw">June 27, 2013</a>
  </TwitterEmbed>
</template>

> Temporarily switched to thaiWitter. This computer has a low spec and this is the smoothest client.

<template>
  <TwitterEmbed>
    <p lang="th" dir="ltr">ย้ายมาใช้ thaiWitter ชั่วคราว คอมพ์กากส์.. ตัวนี้แหละลื่นสุดละ</p>&mdash; มด (@AdmOd) <a href="https://twitter.com/AdmOd/status/124538495908843521?ref_src=twsrc%5Etfw">October 13, 2011</a>
  </TwitterEmbed>
</template>

### Real-time streaming

With Twitter Stream API, new tweets gets displayed instantly. This makes Twitter feel very much like a chat room, so you can keep on tweeting! Requires an [extension](https://github.com/dtinth/twclient2) to be able to do streaming.

> thaiWitter is so great for enjoying TV dramas [together], even better than a chat room!

<template>
  <TwitterEmbed>
    <p lang="th" dir="ltr">เปิด tab thaiwitter ไว้ข้างๆ เม้าท์ละคร ยิ่งกว่ากล่องแชทอีกคร่ะ</p>&mdash; 🐟mameaw (@nimomiao) <a href="https://twitter.com/nimomiao/status/361142814265974785?ref_src=twsrc%5Etfw">July 27, 2013</a>
  </TwitterEmbed>
</template>

> I just hit my API rate limit for the first time. Aww...

<template>
  <TwitterEmbed>
    <p lang="th" dir="ltr">เพิ่งเคยทำ thaiwitter ติดลิมิต api ว้าาา</p>&mdash; 🐟mameaw (@nimomiao) <a href="https://twitter.com/nimomiao/status/361802052696948736?ref_src=twsrc%5Etfw">July 29, 2013</a>
  </TwitterEmbed>
</template>

> You can’t answer to tweets that fast because you are not using thaiWitter. I’m serious!

<template>
  <TwitterEmbed>
    <p lang="th" dir="ltr">ก็ที่พวกมึงตอบกันได้ช้าๆ เพราะพวกมึงไม่ใช้ thaiWitter ไง นี่กูพูดตรงๆเลยนะเนี่ย</p>&mdash; มิน (@minxkung) <a href="https://twitter.com/minxkung/status/343737174799314944?ref_src=twsrc%5Etfw">June 9, 2013</a>
  </TwitterEmbed>
</template>

> thaiWitter is so great for tweeting in bursts!

<template>
  <TwitterEmbed>
    <p lang="th" dir="ltr">thaiWitter นี่มันเอาไว้ปั๊ป tweets ได้ดีจริงๆเลยวุ้ย หุห๊ะๆๆๆๆๆๆ</p>&mdash; AliceSenzeXZ™ (@AliceSenzeXZ) <a href="https://twitter.com/AliceSenzeXZ/status/172018990019907584?ref_src=twsrc%5Etfw">February 21, 2012</a>
  </TwitterEmbed>
</template>

### Simple dark theme

Designed for readability, I used a simple dark theme with a font that’s optimized for easy reading on screen (Verdana).

> thaiWitter is easy on the eyes when you’re in the dark.

<template>
  <TwitterEmbed>
    <p lang="th" dir="ltr">เล่น thaiwitter ก็ดีนะ ปิดไฟเล่นแล้วไม่แสบตาดี</p>&mdash; 🐟mameaw (@nimomiao) <a href="https://twitter.com/nimomiao/status/274179800858513408?ref_src=twsrc%5Etfw">November 29, 2012</a>
  </TwitterEmbed>
</template>

> The Twitter client that’s easiest to “read” on is thaiWitter.

<template>
  <TwitterEmbed>
    <p lang="th" dir="ltr">twitter client ที่ง่ายต่อการ &quot;อ่าน&quot; ที่สุดเท่าที่เคยใช้มาคือ <a href="https://twitter.com/hashtag/thaiWitter?src=hash&amp;ref_src=twsrc%5Etfw">#thaiWitter</a> ...</p>&mdash; icez พรรคนี้นอนไม่ค่อยพอ (@icez) <a href="https://twitter.com/icez/status/2468284635?ref_src=twsrc%5Etfw">July 4, 2009</a>
  </TwitterEmbed>
</template>

### Natural reading flow

When you read books, you read from top-to-bottom. thaiWitter puts newer tweets at the bottom too, so you can follow the flow of the conversation in a natural way.

> In the end I had to switch back to thaiWitter. It’s faster and it’s easier to read. (after switching to MetroTwit)

<template>
  <TwitterEmbed>
    <p lang="th" dir="ltr">สุดท้ายก็ตายรังครับ รู้สึกว่า thaiWitter มันเร็วกว่า อ่านง่ายกว่า</p>&mdash; stay noided (@notnonene) <a href="https://twitter.com/notnonene/status/313354096960737280?ref_src=twsrc%5Etfw">March 17, 2013</a>
  </TwitterEmbed>
</template>

### Keyboard based

You can tweet, favorite, reply, retweet, view threads, view images, and so on... all using keyboard.

> [I’ll just use thaiWitter then. It’s most comfortable to use, I remembered all the keyboard shortcuts!](https://twitter.com/tannce/status/129574219548860416)

### Undo Tweet

Press Ctrl+Z after tweeting to delete it tweet and put the tweet text back into the input box.

> Just made a mistake in last tweet. Thanks to thaiWitter’s Undo Tweet feature, I can fix it instantly.

<template>
  <TwitterEmbed>
    <p lang="und" dir="ltr">เยดดดดดด ทวีตผิด กดแก้อย่างรวดเร็ว ขอบคุณ feature undo tweet แห่ง thaiwitter</p>&mdash; Joshua E. (@Legatte) <a href="https://twitter.com/Legatte/status/204531139766009856?ref_src=twsrc%5Etfw">May 21, 2012</a>
  </TwitterEmbed>
</template>

### Keyword Highlight

You can put in a list of keywords (or people), and they will be highlighted in blue.

> “I like thaiWitter — it highlights the tweets from people I care about”

<template>
  <TwitterEmbed>
    <p lang="th" dir="ltr">ชอบ thaiwitter นะ มัน highlight ทวิตคนที่เราอยากอ่านได้ด้วย</p>&mdash; นุ้งเตอร์ (@9terz) <a href="https://twitter.com/9terz/status/505757754917527552?ref_src=twsrc%5Etfw">August 30, 2014</a>
  </TwitterEmbed>
</template>

- **Custom CSS** — Allows you to put your own CSS to customize the UI.

<template>
  <TwitterEmbed>
    <p lang="th" dir="ltr">หน้าจอ <a href="https://twitter.com/hashtag/thaiWitter?src=hash&amp;ref_src=twsrc%5Etfw">#thaiWitter</a> ของ <a href="https://twitter.com/Iaolia456?ref_src=twsrc%5Etfw">@Iaolia456</a> แนวมากกกก~ <a href="http://t.co/i81q3v23">pic.twitter.com/i81q3v23</a></p>&mdash; Thai Pangsakulyanont (@dtinth) <a href="https://twitter.com/dtinth/status/149421023865995264?ref_src=twsrc%5Etfw">December 21, 2011</a>
  </TwitterEmbed>
</template>

<template>
  <TwitterEmbed>
    <p lang="und" dir="ltr">my <a href="https://twitter.com/hashtag/thaiWitter?src=hash&amp;ref_src=twsrc%5Etfw">#thaiWitter</a> <a href="http://t.co/fktPkiNd">pic.twitter.com/fktPkiNd</a></p>&mdash; ป.ก. (@Pickyzzz) <a href="https://twitter.com/Pickyzzz/status/133569991814549504?ref_src=twsrc%5Etfw">November 7, 2011</a>
  </TwitterEmbed>
</template>

### Other features

- **Desktop notifications** — Get notified even when you’re working on something else. Doesn’t work anymore because it relies on the old `webkitNotifications` API from 2010.
- **Show Client** — See who uses what to post to Twitter.
- **Auto Scrolling** — Auto scroll to the bottommost tweet when loaded.
- **Image Preview** — View images in tweets without leaving thaiWitter.
- **View Conversation** — Press Shift+Enter on a tweet to view a conversation.
- **User/List Timeline** — Press Ctrl+U and type in the `username` or `username/list-slug` to view it.
- **List Updates Timeline** — Press Ctrl+U and type in the `username/list-slug!` to view only the latest tweet of each member in the list, sorted chronologically. Very useful if you have a list of your friends and want to see what they up to after you haven’t used Twitter for a while.
- **Retweeting** — thaiWitter supports retweeting, years before Twitter finally implemented it. You can even retweet private tweet or even direct messages (but it will give you a warning.)
  - **Mutated tweet (MT)** — In Thai Twitter culture around that time, it’s common to retweet someone, but modify the text a bit for humorous effect. thaiWitter has a feature to track down the original tweet.
- **Mention Highlight** — Tweets that mention your name will be highlighted in red.
- **Filter Keywords** — Filter out some keywords from your timeline.
- **Hardcode Mode** — Removes the top bar and tweet input area at the bottom (you have to remember the keyboard shortcut). Start typing to activate the tweet input box.
- **Smart Username Autocomplete** — Completes the user name as you type. It uses an algorithm to determine who you might want to tweet to the most, and rank the suggestions accordingly.
- **Lots of easter eggs.** Can you find them all?

## **Tech stuff**

This project is developed from 2009 to 2013. Here are some interesting technical information:

### **Client**

- **No 3rd party frontend framework.** I manage all DOM elements manually, but this gave me complete control of DOM animations, which allowed me to optimize the performance as I wish. (Back at that time, it’s very hard to create smooth animations. CSS transitions and animations didn’t exist back then.) It can handle up to around 10,000 tweets while performing reasonably well, while many other Twitter clients would stutter severely when there are thousands of tweets.

  > [My thaiWitter window contains 6,666 tweets in the timeline but it’s still running smoothly.](https://twitter.com/tannce/status/183194520857485312)

- **3rd party front-end libraries:**
  - [q](https://www.npmjs.com/package/q), a promise library.
  - [underscore](https://www.npmjs.com/package/underscore).
- **Self-written front-end libraries:**
  - [DtJS 2](https://github.com/dtinth/thaiWitter3/blob/master/client/lib/dtjs2.js), a rewrite of [DtJS](https://github.com/dtinth/DtJS), my web animation framework and utility functions for front-end programming in 2009 era. Provides change observer, DOM node generator, animation system, DOM utilities (element/scrolling/viewport size/position queries, events), AJAX, JSONP, and color manipulation.
  - [twcs](https://github.com/dtinth/thaiWitter3/blob/master/client/lib/twcs.js), thaiWitter Class System.
  - [T.js](https://github.com/dtinth/thaiWitter3/blob/master/client/T), my utility library, provides function generators, JSON parser, change observer, digit padder, date formatter/parser, and tweet parser.
- **Frontend code is written in a custom compile-to-JS language**, thaiJS, which adds classes (transpiles to twcs), [method binding](https://github.com/tc39/proposal-bind-operator), [protected and private fields](https://github.com/tc39/proposal-private-fields) to JavaScript. [The compiler](https://github.com/dtinth/thaiWitter3/blob/master/lib/thaijs/lib/thaiJS.coffee) is written in CoffeeScript and is 260 lines long.

  At first I thought this was a good idea. Back then there is not many JS tooling. JSHint was not released back then. So I only need to create a transpiler and Vim syntax file and that would be it.

  Nowadays, there are many tools like ESLint, Babel, and free modern IDEs that offers JavaScript IntelliSense. They won’t work with thaiJS.

- **6000 lines of code [in one file](https://github.com/dtinth/thaiWitter3/blob/master/client/js/js.thaijs).**
- I even implemented support for touch scrolling in iOS 3.x, which required me to [implement touch handling and momentum scrolling](https://github.com/dtinth/thaiWitter3/blob/1ab365252f05118fdf6c218d8536b2a880814191/client/js/js.thaijs#L5364-L5944) myself, as `-webkit-overflow-scrolling` didn’t exist yet.
- **No automated tests.** This is one of the big reason I cannot keep maintaining this. As I add more feature and code gets more complex, I become less confident in changing code.
- **Lots of monkeypatching.** To avoid changing old code, I try to adopt an approach where I don’t have to modify old code, but writing new code to patch old code at runtime. I thought it would be great. As it turned out, it leads to even harder maintenance.
- **No module system.** Most stuffs are declared as global variables.

### **Server**

- **Node.js based.**
- **Development server** with server module reloading on each refresh (no need to restart the server. Just save and refresh like PHP).
- **Self-written asset pipeline.** On development, compile on the fly. On production, compile and save in memory, so that the whole app can be served without disk I/O.

## Screenshots

<div class="screenshots">

![https://github.com/dtinth/thaiWitter3/raw/master/docs/images/screenshot1.png](https://github.com/dtinth/thaiWitter3/raw/master/docs/images/screenshot1.png)

![https://github.com/dtinth/thaiWitter3/raw/master/docs/images/screenshot4.png](https://github.com/dtinth/thaiWitter3/raw/master/docs/images/screenshot4.png)

![https://github.com/dtinth/thaiWitter3/raw/master/docs/images/screenshot5.png](https://github.com/dtinth/thaiWitter3/raw/master/docs/images/screenshot5.png)

![https://github.com/dtinth/thaiWitter3/raw/master/docs/images/screenshot2.png](https://github.com/dtinth/thaiWitter3/raw/master/docs/images/screenshot2.png)

![https://github.com/dtinth/thaiWitter3/raw/master/docs/images/screenshot3.png](https://github.com/dtinth/thaiWitter3/raw/master/docs/images/screenshot3.png)

</div>

<style scoped lang="styl">
.screenshots
  display flex
  flex-wrap wrap
  justify-content center
  & > p
    margin: 1rem
    max-width 320px
</style>

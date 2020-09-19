---
parents: [projects]
title: Bangkok Ipsum
created: 2018-07-14T00:00:00.000Z
updated: 2020-08-08T00:00:00.000Z
description: 'A webpage that lets you generate random Thai text.'
featured: true
image: /uploads/bangkokipsum.png
tags:
  - Project
---

**Bangkok Ipsum** is a webpage that lets you generate random Thai text.

Sometimes I just want a random Thai text to test my designs with.
But existing random Thai text generator does not produce a result that I like. So, I created Bangkok Ipsum.

It uses a simple n-gram probabilistic text generator, trained on a corpus based on lyrics from BNK48 and Sweat16! idol groups.

<template>
  <call-to-action href="https://bangkokipsum.app">
    Try it
  </call-to-action>
</template>

## 2018: Project inception

I built this project during [The Stupid Hackathon Thailand #2](https://web.facebook.com/events/d41d8cd9/the-stupid-hackathon-thailand-2/169587413711647/) event in 2018.

<template>
  <EmbedContainer :ratio="960 / 569">
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSx3ypVlNxcSyikQAW4-FslEqaXCPnBTk78MevDiuQAyUjFS3gp2Gz_8b7AfagPoMhtnC9jYUhoAjQ2/embed?start=false&loop=false&delayms=10000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  </EmbedContainer>
</template>

## 2020: Updated model

In 2020, I updated the model to include phrases from more recent songs.

<template>
  <FacebookEmbed>
    <div class="fb-post" data-colorscheme="dark" data-href="https://web.facebook.com/dtinth/posts/10215154955661429" data-show-text="true" data-width=""><blockquote cite="https://www.facebook.com/dtinth/posts/10215154955661429" class="fb-xfbml-parse-ignore"><p>เมื่อสองปีที่แล้วเคยทำเว็บ https://bangkokipsum.app/ เป็นเว็บไว้สร้างข้อความภาษาไทยมั่วๆ...</p>Posted by <a href="#" role="button">Thai Pangsakulyanont</a> on&nbsp;<a href="https://www.facebook.com/dtinth/posts/10215154955661429">Friday, August 7, 2020</a></blockquote></div>
  </FacebookEmbed>
</template>

I also added an [about page](https://bangkokipsum.app/about/) that explains (in Thai language) how the text-generation algorithm works.

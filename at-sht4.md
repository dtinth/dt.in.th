---
title: at stupid hackathon thailand the fourth / virtual 2020
created: 2020-06-27T00:00:00.000Z
updated: 2020-06-27T00:00:00.000Z
sidebar: auto
description: >-
  What I learned from my first time organizing the virtual hackathon
---

This was my 4th time that I help run a Stupid Hackathon in Thailand, and this is the first time it went virtual.

::: tip What is The Stupid Hackathon Thailand?

So many hackathons are just “business pitching contests.”
**The Stupid Hackathon Thailand** was founded out of frustrations of attending these “hackathons,”
inspired by [an event in New York with a similar but more aggressive name](https://stupidhackathon.com/).
Here we just make stupid stuff.
[Phoomparin](https://phoom.in.th/) founded it and I jumped in to help.

:::

## Design

We don’t have a dedicated designer for this event, so I took care of most of the design stuff.

Although I’m not good at design, I like designing for this event,
because it’s a stupid event and I don't have to care about the design quality that much.
I can be as [brutalist](https://brutalistwebsites.com/) as I like.

I wanted the design to be as procedural (can be represented as code) as possible, while looking somewhat unique.
I learned from [bill wurtz](http://billwurtz.com/)’s videos that you can make anything colorful by slapping `mix-blend-mode: difference` onto it.

::: tip sht4’s design

Take this picture, for instance:

![Image](./page-images/at-sht4/example.jpg)

And this random gradient:

<p>
  <a :style="{ background: bg }" class="gradient-container" @click="newColor" href="javascript://"></a>
</p>

Put the gradient on top of the image with `mix-blend-mode: difference`, and you get this.

<p>
  <a :style="{ background: bg }" class="gradient-container" @click="newColor" href="javascript://">
    <img src="./page-images/at-sht4/example.jpg" data-zoomable="false" />
  </a>
</p>

Tap the above image to change the gradient.

:::

And that’s the main design theme for this event.

::: tip Generating a random gradient

This JavaScript code was used.

```js
const rand = () => Math.random() * 2 - 1
const mkdeg = () => ~~(Math.random() * 360)
const mkc = () => `hsl(${mkdeg()}deg, 100%, 50%)`
const mkg = () => `linear-gradient(${mkdeg()}deg, ${mkc()}, ${mkc()})`
```

:::

With that, I built the initial website…

![Image](./page-images/at-sht4/initial.jpg)

## Website

I also built [the event’s website](https://stupidhackth.github.io/4/) based on the same design ideas.

![Website screenshot](./page-images/at-sht4/final.jpg)

![Website screenshot](./page-images/at-sht4/final2.jpg)

## The Virtual Space

Most of the event takes place in a Discord server (with the help of [The Stupid Bot](#the-stupid-bot)), as well as on Google Sheets.

### the main tables

Inspired by [!!Con 2020](http://bangbangcon.com/)’s spreadsheet party (had a lot of fun there!)…

<template>
  <TwitterEmbed>
    <p lang="en" dir="ltr">I made the initial spreadsheet, modeled after <a href="https://twitter.com/maxkreminski?ref_src=twsrc%5Etfw">@maxkreminski</a> and <a href="https://twitter.com/v21?ref_src=twsrc%5Etfw">@v21</a> (et als) previous Spreadsheet party, with basic conference amenities like a zine table, badge-making station, and snack table<br><br>Other attendees filled out stories, new pages, and Glitch experiments (and crabs) <a href="https://t.co/I0NUhykys2">pic.twitter.com/I0NUhykys2</a></p>&mdash; Kate Compton thinks its universal healthcare time (@GalaxyKate) <a href="https://twitter.com/GalaxyKate/status/1259625434343305216?ref_src=twsrc%5Etfw">May 10, 2020</a></blockquote>
  </TwitterEmbed>
</template>

…we decided to build our virtual event space on **Google Sheets.**
After the participants registered for the event they are invited into **the main tables**.

![Screenshot](./page-images/at-sht4/table.png)

In it they conveniently find a link to in the Discord server, where most of the conversations take place.
They also find **the facility map**, which outlines the facilities available in the event.

![Screenshot](./page-images/at-sht4/table-map.png)

Participants also find the **introductions** zone,
where they are encouraged to copy the name badge template and customize it.
After the event we printed them out and snail-mailed each person their personalized namecard.

![Screenshot](./page-images/at-sht4/table-introduce.png)

### the big whiteboard

Shortly after the event started, we gathered in a Discord voice channel and went to **the big whiteboard**,
which is on [InVision’s Freehand](https://www.invisionapp.com/feature/freehand),
to brainstorm project ideas and team up.

![Screenshot](./page-images/at-sht4/whiteboard.png)

Note: the big whiteboard is big.

![Screenshot](./page-images/at-sht4/whiteboard-zoomed-out.png)

### the live stations and the unconference billboard

Perhaps the most enjoyable part of the hackathon for me!

On our Discord server we set up 8 public voice channels named `live1` to `live8`, referred to as **the live stations**.

Although each team has its own private voice and text channel that they can use,
we encourage participants to work in public on any of these vacant live stations, and anyone who is interested can join.

![Screenshot](./page-images/at-sht4/live.png)

The live stations are also where the **unconference** take place.
On the main tables, there’s **the billboard** where participants can put their session on the schedule.

![Screenshot](./page-images/at-sht4/table-billboard.png)

### the project gallery

After the event ends, all the projects are put into [a gallery](https://docs.google.com/spreadsheets/d/e/2PACX-1vTEnlUwlqHq7o8UesqMLFb98fi5TetHccNAsFkK49uOsEvpQbXujxuYlkYuHVpJJKdnTRqB_1AxJnHc/pubhtml?gid=1048415345&single=true).

<template>
  <call-to-action href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTEnlUwlqHq7o8UesqMLFb98fi5TetHccNAsFkK49uOsEvpQbXujxuYlkYuHVpJJKdnTRqB_1AxJnHc/pubhtml?gid=1048415345&single=true">
    View the gallery
  </call-to-action>
</template>

## The Stupid Bot

Perhaps the proudest thing I made for this event... is this stupid bot.

<template>
  <call-to-action href="https://glitch.com/edit/#!/sht4bot?path=server.js%3A1%3A0">
    Source code on Glitch
  </call-to-action>
</template>

### user registration

_(this section is a stub)_

### Discord-aware JavaScript REPL

_(this section is a stub)_

### team registration

_(this section is a stub)_

### live scene control

_(this section is a stub)_

### award selection

_(this section is a stub)_

## The Presentations

_(this section is a stub)_

## Acknowledgements

_(this section is a stub)_

<style scoped lang="styl">
.gradient-container
  display block
  position relative
  padding-top 56.25%
  cursor pointer
  & > img
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    mix-blend-mode difference
</style>

<script>
const rand = () => Math.random() * 2 - 1;
const mkdeg = () => ~~(Math.random() * 360);
const mkc = () => `hsl(${mkdeg()}deg, 100%, 50%)`;
const mkg = () => `linear-gradient(${mkdeg()}deg, ${mkc()}, ${mkc()})`;

export default {
  data() {
    return { bg: mkg() }
  },
  methods: {
    newColor() {
      this.bg = mkg()
    }
  }
}
</script>

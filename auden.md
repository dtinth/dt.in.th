---
title: auden
created: 2019-02-15T00:00:00.000Z
updated: 2019-02-15T00:00:00.000Z
description: 'auden is an open-source, hackable audience engagement software, supporting multiple features, such as Live quiz and Voting system. Its hackable architecture allows developer to modify and add features to fit the event.'
featured: true
image: /uploads/auden.jpg
sidebar: auto
---

**auden** is an open-source, hackable <span class="名">aud</span>ience <span class="名">en</span>gagement software,
supporting multiple features, such as **Live quiz** and **Voting system**.
Its hackable architecture allows developers to modify and add features to fit the event.

![Photo](/uploads/auden.jpg)

This app is designed to be **all-in-one.**
Attendees can participate in quizzes and casts vote on the same webpage without the need to switch between multiple apps (such as Mentimeter, Slido, and Kahoot).

![Photo](/uploads/auden-vote.jpg)

<template>
  <call-to-action href="https://github.com/dtinth/auden">
    GitHub Repository
  </call-to-action>
</template>

## Features

Each feature (called **scene**) contains 3 user-facing [components](https://reactjs.org/docs/components-and-props.html):

- The **Audience** component is a mobile UI for audience to engage in the event.
- The **Presentation** component displays what the audience will see on the big screen.
- The **Backstage** component allows event staff to manipulate the scene (such as activating a question, displaying scoreboard, etc.)

### Live quiz

Play a multiple-choice quiz game with any number of participants, similar to Kahoot.

![Screenshot](/uploads/auden-example-quiz.png)

### Live poll

Create a live poll to gather audience’s opinion, similar to Mentimeter.

![Screenshot](/uploads/auden-example-vote.png)

## Events that use auden

### Code in the Dark #3: CNX 2019

I created **auden** for use in _[Code in the Dark](http://codeinthedark.com/) Thailand #3: CNX 2019_.

The goal is to encourage more attendees to participate in the event.

**Before** — In the previous Code in the Dark events, we asked people to register in advance,
either as a contestant or as an observer.
This has a bias towards people who are more self-confident, regardless of their skills.

**After** — I created a CSS skill quiz for each qualification round.
Before each round begins, we run through that round’s quiz, where everyone present at the event can participate.
After the quiz, the top scorers are invited to become a contestant in that round.

<template>
  <call-to-action href="/citd3quiz.html">
    Try out the quiz!
  </call-to-action>
</template>

### JavaScript Bangkok 1.0.0

**auden** has been reused in JavaScript Bangkok 1.0.0 for networking quizzes.

### BKK.js \#14: Return of BKK.js

**auden** has been used in BKK.js for some quizzes during the sessions.
Some new functionalities are added to auden as a result:

- Live chat
- Collecting questions
- Sign in with Eventpop
- Multiple instances of scene type

---
title: automatron
created: 2018-10-30T00:00:00.000Z
updated: 2020-07-28T00:00:00.000Z
description: 'My personal assistant LINE bot that helps me automate various tasks of everyday life, such as home control, expense tracking, and more.'
image: /uploads/automatron.jpg
sidebar: auto
---

I recommend every developer try building a personal assistant chat bot.
It’s a great way to improve skill and make life easier at the same time.

**automatron** is my personal [LINE](https://line.me) [bot](https://developers.line.biz/en/services/messaging-api/) that helps me automate various tasks of everyday life, such as **home control** (air conditioner, lights and plugs), **expense tracking** (record how much I spend each day), and more.

![Photo of my phone with chat logs](/uploads/automatron.jpg)

The source code is published on GitHub:

<template>
  <call-to-action href="https://github.com/dtinth/automatron">
    GitHub repository
  </call-to-action>
</template>

## Features

### Everything in one app

This is the most important feature in my opinion.

There’s a popular saying: **There’s an app for everything.**
But that means if I want to do 5 things, I had to switch between 5 apps.
But with a programmable personal assistant, I can program this one bot to do many things.

### Home automation

Before automatron…

- I used [Google Assistant’s routines](https://support.google.com/googlenest/answer/7029585) to automate my room.
  While this works fine, there are a few annoyances…
  - Google Assistant would (slowly) run the actions one-by-one.
  - In total it would take ~10 seconds to finish the routine.
  - If I switch to other apps while the routine is running, it will get interrupted.

Now, with automatron, I just send stickers to it. It controls all the devices at once.

![home automation](https://raw.githubusercontent.com/dtinth/automatron/master/images/home_automation.png)

At my room, I have a Raspberry Pi set up which can [control lights](https://github.com/dtinth/hue.sh), [air conditioner](https://medium.com/@dtinth/remotely-turning-on-my-air-conditioner-through-google-assistant-1a1441471e9d), and [smart plugs](https://ifttt.com/services/kasa). It receives commands via [Google Cloud IoT Core](https://cloud.google.com/iot-core/).

### Expense tracking

Before automatron…

- I used Apple Numbers sheet based on the “personal budget” template to track my expenses.
  - But it takes a lot of effort to track everything.
  - And also a lot of hassle keeping them properly synchronized on iCloud.
  - Occasionally I would get things like “Your files are modified on both devices! Choose one to keep.”
- I then built a web application to help me track my expenses.
  - Still too many clicks. Gave up.
  - I even made a voice interface. Still a hassle to use.

Then I realized… **As a lazy programmer, I like to write more than being asked.**
Instead of filling in forms, I would rather say something short and unambiguous.

If I had a personal chatbot,
I can invent my own language that would concisely represent an expense.
For example, `35f` could mean ฿<u>35</u> for <u>f</u>ood.

![expense tracking](https://raw.githubusercontent.com/dtinth/automatron/master/images/expense_tracking.png)

And here it is. No more filling forms.
Data is saved in [Airtable](https://airtable.com/) for easy CRUD.

The reply bubble is deep-linked into the Airtable app, so if I made a mistake, I can edit/delete the record without having to implement it myself.

### Transaction aggregation

I’m still too lazy, and then I realized… **Since I use an Android phone, I can parse incoming SMS from multiple banks, aggregate them in one place, and record expenses automatically.**

![transaction_aggregation](https://raw.githubusercontent.com/dtinth/automatron/master/images/transaction_aggregation.png)

I [set up IFTTT to read SMS messages](https://ifttt.com/services/android_messages) and send it to automatron. It then uses [transaction-parser-th](https://github.com/dtinth/transaction-parser-th) to parse SMS message and extract transaction information.

![quick_replies](https://raw.githubusercontent.com/dtinth/automatron/master/images/quick_replies.png)

On my mobile phone, [quick reply buttons](https://developers.line.me/en/docs/messaging-api/using-quick-reply/) lets me quickly turn a transaction into an expense record by simply tapping on the category.

![auto_expense](https://raw.githubusercontent.com/dtinth/automatron/master/images/auto_expense.png)

Certain kinds of transactions can be automatically be turned into an expense, such as when I [take BTS Skytrain using Rabbit LINE Pay card](https://brandinside.asia/rabbit-line-pay-bts/). Having many features in one bot enabled this kind of tight integrations.

### Image-to-text

automatron can also convert image to text using [Google Cloud Vision API](https://cloud.google.com/vision/).

![image_to_text](https://raw.githubusercontent.com/dtinth/automatron/master/images/image_to_text.png)

### LiveScript evaluation

[LiveScript](https://livescript.net/) interpreter is included, which allows me to do some quick calculations.

![livescript](https://raw.githubusercontent.com/dtinth/automatron/master/images/livescript.png)

### Scheduled commands

I can say “**in 6h lights white**” and that command “**lights white**” will be run 6 hours later.

The scheduled commands are also stored in Airtable, so if I need to cancel any scheduled command I can just edit it there.

![Airtable table showing scheduled commands](/uploads/automatron-schedule.jpg)

## History

- The project started in 2018 as a simple [**webtask**](https://webtask.io/).

  - For home automation, I initially used [**CloudMQTT**](https://www.cloudmqtt.com/).

- In 2019, I [migrated](https://github.com/dtinth/automatron/pull/1) the bot to [**Google App Engine**](https://cloud.google.com/appengine) to reduce the latency.

  - I’m in Thailand, LINE’s servers are in Japan, and webtask’s are in North America.
  - After the migration, the bot’s response time becomes much faster.

- Also in 2019, I implemented the [**scheduled commands**](https://web.facebook.com/groups/443353719566700/permalink/454862465082492/) feature.
  Every minute, [App Engine Cron Service](https://cloud.google.com/appengine/docs/flexible/nodejs/scheduling-jobs-with-cron-yaml) pings automatron to check for any commands that is due to run.

- In 2020, something strange happened.
  Even though I limited the resource usage to be within Google App Engine’s free quotas, for some reason it charges me \$15/mo.

- As a result, I [migrated](https://github.com/dtinth/automatron/pull/6) the bot to [**Google Cloud Run**](https://cloud.google.com/run).
  The bill immediately dropped to zero dollars right afterwards.
  Scheduled tasks are now handled by [**Google Cloud Scheduler**](https://cloud.google.com/scheduler).

  ![Google Cloud Billing](/uploads/automatron-gae-to-cloud-run.png)

- After 2 years of no issue, the free CloudMQTT instance I use begins to cease accepting connections, and must be manually restarted.
  After this happens twice, I [switched](https://github.com/dtinth/automatron/commit/1163c4808eb1f2544625a915ea6c2f26d2e49c8c) the MQTT service to use [**Google Cloud IoT Core**](https://cloud.google.com/iot-core).

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

I built **automatron** to be my personal [LINE](https://line.me) [bot](https://developers.line.biz/en/services/messaging-api/) that helps me automate various tasks of everyday life:

- home control (air conditioner, lights and plugs)
- expense tracking (record how much I spend each day)
- notetaking
- quick calculations
- etc.

![Photo of my phone with chat logs](/uploads/automatron.jpg)

There’s a popular saying: **“There’s an app for that.”**
Yes, but that means if I want to do 5 things, I had to switch between 5 apps.
By building my own bot, I can integrate all these features _deeply_.

The source code is published on GitHub:

<template>
  <call-to-action href="https://github.com/dtinth/automatron">
    GitHub repository
  </call-to-action>
</template>

## The story

**automatron** is the result of my laziness.

### I want my room to be cool already when I get there

**Thailand is a hot country.**
I’ve always wanted to build was a system that let me remotely turn on the air-condition in my room while I travel.

I have no hardware hacking experience, so this project remained only an idea, until one day I learned that programmable IR transceivers exist.
Oh, and Google Assistant is now a thing.

So I [bought a Broadlink RM Mini3 and hooked it up to my Google Assistant](https://medium.com/@dtinth/remotely-turning-on-my-air-conditioner-through-google-assistant-1a1441471e9d), along with other smart home stuff, like [Philips Hue](https://github.com/dtinth/hue.sh) and [TP-Link Kasa](https://ifttt.com/services/kasa).

This works fine but there are a few annoyances…

- Google Assistant would (slowly) run the actions one-by-one.
- In total it would take ~10 seconds to finish the routine.
- If I switch to other apps while the routine is running, it will get interrupted.

After I implemented home automation functionalities into automatron,
now I just send it stickers.
It controls all the devices at once.

![home automation](https://raw.githubusercontent.com/dtinth/automatron/master/images/home_automation.png)

### I want to track my expenses

2014, I’m in my last year of college. I start taking internships and making some money.
I feel the need to keep track of my expenses.

At first, I used an **Apple Numbers** spreadsheet.
While this works, it takes a lot of effort to track of everything.
I would need to keep my receipt (or take a photo of it) and update the sheet at the end of the day.
I could also do it on my phone as the day goes by, but iCloud was a lot of hassle —
occasionally it would say “your files are modified on both devices, choose one to keep.”

**“Let’s build a dedicated app for this!”** I thought.
Then I built a web application to help me track my expenses.
Still too many clicks. Gave up.
I even made a voice interface. Still quite a hassle to use.

Then I realized… **As a lazy programmer, I like to write more than being asked.**
Instead of filling in forms, I would rather say something short and unambiguous.
If I had a personal chatbot,
I can invent my own language that would concisely represent an expense.
For example, `35f` could mean ฿<u>35</u> for <u>f</u>ood.

![expense tracking](https://raw.githubusercontent.com/dtinth/automatron/master/images/expense_tracking.png)

And here it is. No more filling forms.
Data is saved in [Airtable](https://airtable.com/).

::: tip Why I use Airtable
For expense tracking, ~95% of the time, the use case is to insert a new expense entry.
I rarely edit/delete existing entries, so I don't want to spend time implementing it myself.
But they still do happen.

I chose Airtable because then I can deep-link the reply into the Airtable app, and use it for edit/delete.
:::

### I want to see all the transactions in one place

I have multiple bank accounts and **each bank has its own app.**
But since I use an Android phone, I can parse incoming SMS from multiple banks, aggregate them in one place, and record expenses automatically.

![transaction_aggregation](https://raw.githubusercontent.com/dtinth/automatron/master/images/transaction_aggregation.png)

I [set up IFTTT to read SMS messages](https://ifttt.com/services/android_messages) and send it to automatron.
It then uses [transaction-parser-th](https://github.com/dtinth/transaction-parser-th) to parse SMS messages and extract transaction information.

### Why not offer the option to track the transaction as expense as well?

I start to see a pattern…
Most of the transactions are expenses, and I want to track them.
Now I want to streamline this process, so I added some [quick reply buttons](https://developers.line.me/en/docs/messaging-api/using-quick-reply/) to the transaction message.

Now when I receive a transaction, I can just tap on the corresponding category to track it as an expense.

![quick_replies](https://raw.githubusercontent.com/dtinth/automatron/master/images/quick_replies.png)

### Why not track some expenses automatically?

While most transactions can’t be categorized automatically when all it knows is “paid ฿55 to 7-ELEVEN”.
But some can. If I paid “BTS SkyTrain” then obviously it’s for transportation.

![auto_expense](https://raw.githubusercontent.com/dtinth/automatron/master/images/auto_expense.png)

### I need to do some quick calculations

As a handy feature, I included a [LiveScript](https://livescript.net/) interpreter.
This allows me to do some quick calculations.

![livescript](https://raw.githubusercontent.com/dtinth/automatron/master/images/livescript.png)

### Scheduled commands

Because automatron uses a text-based interface, implementing scheduled commands becomes very easy.
Now I can tell my bot before sleeping “**<u>in 6h</u> lights on**”, and 6 hours later it would turn my lights back on.

![Airtable table showing scheduled commands](/uploads/automatron-schedule.jpg)

With this I can also implement a **command macros**.
For example, `gn` (goodnight) means `lights dimmed` and then `in 5m lights off`.
(When I say goodnight to automatron, it would dim my room’s lights and turn it of 5 minutes later.)

The scheduled commands are also stored in Airtable, so if I need to cancel any scheduled command I can just edit it there.

### Image-to-text

As an extra feature, automatron can also convert images to text using [Google Cloud Vision API](https://cloud.google.com/vision/).

![image_to_text](https://raw.githubusercontent.com/dtinth/automatron/master/images/image_to_text.png)

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

- In 2022, I gave a presentation about automatron at Dev Mountain Tech Festival in a talk titled _[“Let’s build a personal assistant and level-up your coding skills!”](personal-assistant.html)_

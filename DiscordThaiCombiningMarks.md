---
title: Discord Bug - Disappearing combining marks (ปัญหาสระกับวรรณยุกต์หาย)
public: true
---

# Disappearing combining marks in [Discord](Discord) (ปัญหาสระกับวรรณยุกต์หาย)

---

**Update (2023-06-16):** \
Discord has fixed this issue. Now, for every 47 characters, you can have up to 20 combining marks. The following text is the previous version of this page.

---

This is a long standing bug in [Discord](Discord) which affects Thai users. [This issue has been documented in Pantip (a Thai internet forum) since 2018,](https://pantip.com/topic/37864774) and as of writing (in 2023), it is still unresolved (although Discord team already knows about this issue).

(You can use [this tool](DiscordThaiMessage) to check if your message has too many nonspacing marks.)

## Bug description

This is the bug report that I sent to Discord (with changes). The submitted ticket number is #33014528.

### What part of the app is impacted?

Messages/Text Chat (Server/DMs)

### What client?

MacOS (actually this happens on all platforms, even messages submitted through webhooks or APIs are subject to this bug)

### Subject

Thai combining vowels and tone marks are removed from messages

### Description

In Thai language, combining marks are vowels or tone marks that floats above or hangs below a consonant. They alter both the sound and meaning. For example, “จบ” “จับ” “จิบ” “จีบ” “จูบ” all have different meanings and pronunciations.

Discord currently allows 149 combining marks in a single text message. After that, combining marks are removed from the message (they become “จบ” “จบ” “จบ” “จบ” “จบ” and the original meaning is lost).

See attached image for a visual explanation.

Combining mark accounts for ~20% of Thai text. Given that Discord allows 4,000 characters in a single text message, it should support at least 1,000 combining marks — 149 is not enough (the current limit can only support up to 745 characters of Thai text).

This problem has been documented on Thai forum since 2018, however it’s likely never reached Discord engineering team. Reference — <https://pantip.com/topic/37864774>

I have created a webpage to document this issue in more detail and track the status of this bug here: <https://notes.dt.in.th/DiscordThaiCombiningMarks>

### Steps to reproduce

Send the following message in any text channel:

```
อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊
อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊
อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊
อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊
```

### Expected result

All the vowels should be intact. No symbols should be removed from the text. The message should say:

```
อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊
อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊
อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊
อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊
```

### Actual result

The 150th combining mark and onward are missing.

```
อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊
อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิ๊อิอออออออออออออออออออออออออ
ออออออออออออออออออออออออออออออออออออออออออออออออออ
ออออออออออออออออออออออออออออออออออออออออออออออออออ
```

### Attachment

![Visual explanation](https://static.dt.in.th/uploads/2023/03/10/discord_thai_text.jpeg)

## Updates

- **2023-03-10** — Discord support ticket created.

  > Thanks for writing in! We just want to confirm that we've received your message (33014528). Our support team is working hard to get back to you for your request, and we appreciate your patience in the meantime.

- **2023-03-11** — Discord responded:

  > Hey flicknote,
  >
  > Thanks for sharing this report, and for including a small infographic! I see that you're having issues where the vowel and tone marks disappear when sending in long messages in Thai.
  >
  > Just to give you a heads-up, this issue is known and on our team's radar. We are currently investigating this further and working on a fix.
  >
  > _Note: Our support team does not have an exact ETA for when a solution will be available, and we won't be able to provide any status updates on this specific bug._
  >
  > I'm so sorry that we don't have an immediate solution for you, but if you have any other questions related to our app in the meantime, please let me know here.
  >
  > Best, \
  > Mikee

- **2023-06-16** — Discord has fixed this issue. Now, for every 47 characters, you can have up to 20 combining marks.

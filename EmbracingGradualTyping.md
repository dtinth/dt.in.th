---
title: Embracing gradual typing
public: true
created: 2020-11-26
aliases:
  - embracing-gradual-typing
  - GradualTypingTalk
---

# Embracing gradual typing

:::lead
How to gradually adopt TypeScript in a large existing JavaScript project effectively? That's the topic for this talk.
:::

How to gradually adopt TypeScript in a large existing JavaScript project effectively? That's the topic for this [talk](Talks).

::youtube[xATsf5nm2yc]

**The talk is in Thai language _(English subtitles available and slides are all in English)_.**
This was my first prerecorded talk for TS BKK Meetup.
Since this talk is prerecorded, it contains a plenty of coding demos.

:::tip[By the way...]
If you haven't, please consider subscribing to [my YouTube channel](https://dt.in.th/go/youtube) 😁.
:::

Adopting TypeScript in a large existing [project](Projects) may not be that straightforward:

- Hundreds if not thousands of existing untyped JS files.
- Not sure if benefits would outweigh the costs ("the TypeScript tax").
- Changes may be met with friction in a large team.
- You or your team do not want to introduce any extra build step.

Topics including:

- How you may already be using TypeScript in your JavaScript project.
- TypeScript the language, the compiler, and the language service.
- Using JSDoc to improve type inference, code completions, and IntelliSense.
- Configuring `jsconfig.json` for improved code actions and automatic refactoring.
- Using `// @ts-check` to type-check JavaScript files (with examples on dealing with a few type-checking errors).
- Enabling `checkJs` to type-check JavaScript files project-wide.
- Creating a `.d.ts` file next to a JavaScript file to keep the `.js` file unmodified.
- Creating a global `.d.ts` file to declare modules and global variables.
- Discussion on strategies for **improving developer productivity**, **improving code documentation**, and **reducing chance of runtime errors**.

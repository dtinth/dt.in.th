---
title: VS Code as a Markdown-based note-taking platform?
public: true
created: 2020-11-08
aliases:
  - 20201108T202126Z2125
---

**Why can’t we use the very app that we use for everyday coding to also do note-taking and personal knowledge management?** Why must we use separate apps like [Notion](https://notion.so), [Obsidian](https://obsidian.md/ 'Obsidian'), [Roam Research](https://roamresearch.com/ 'Roam Research – A note taking tool for networked thought.'), [Bear](https://bear.app/ 'Private Markdown Notes for iPhone, iPad and Mac | Bear App'), etc etc to organize thoughts?
Well, we can if we use Emacs as our main editor — there’s [org-mode](https://orgmode.org/ 'Org mode for Emacs'), [org-agenda](https://orgmode.org/manual/Agenda-Views.html 'Agenda Views (The Org Manual)') and [org-roam](https://github.com/org-roam/org-roam 'GitHub - org-roam/org-roam: Rudimentary Roam replica with ...') (search YouTube for many cool demos). But I’m not an Emacs user, and I prefer [VS Code](VSCode). If such a vibrant ecosystem exists for Emacs, then surely someone must have done it for VS Code right? Well, yes, that seems to be the case.

:::info[Update]
[Now I'm also experimenting with using VS Code as a note-taking platform](AboutThisWebsite) using my own tooling.
:::

There are some **complete frameworks** for taking notes in VS Code:

- [Dendron][dendron] — “The hierarchical note taking tool that grows as you do.” Dendron supports backlinks for ad-hoc connections as well as [hierarchy](https://www.dendron.so/notes/4bb85c39-d8ac-48ad-a765-3f2a071f7bc9.html#hierarchies). It [scales to tens of thousands of notes](https://www.kevinslin.com/notes/3dd58f62-fee5-4f93-b9f1-b0f0f59a9b64.html#the-present-day).
- [Foam][foam] — “Foam is a personal knowledge management and sharing system inspired by Roam Research, built on Visual Studio Code and GitHub.”

[![Dendron demonstration taking from Dendron’s website](https://static.dt.in.th/uploads/2020/11/09/dendron.gif)][dendron]

And some **extensions** that you can mix and match to create your own personalized note taking environment:

- [Markdown Notes][mdnotes] shows backlinks and adds Go To Definition, Peek Definition and autocompletion of Markdown links.
- [Markdown Links][mdlinks] shows a graph of local links between Markdown files in the current working directory, Zettelkasten-style.

Blogs:

- [David Jones, “Designing a personal “memex” with Foam”](https://djon.es/blog/2020/07/06/designing-a-personal-memex-with-foam/)

Other interesting links:

- [MaggieAppleton/digital-gardeners](https://github.com/MaggieAppleton/digital-gardeners)

Related terms:

- Zettelkasten
- Second brain
- PKM (personal knowledge management)
- Digital garden

[dendron]: https://www.dendron.so/
[foam]: https://foambubble.github.io/foam/
[mdnotes]: https://marketplace.visualstudio.com/items?itemName=kortina.vscode-markdown-notes
[mdlinks]: https://marketplace.visualstudio.com/items?itemName=tchayen.markdown-links

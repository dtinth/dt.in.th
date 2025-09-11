---
public: true
wide: true
title: 'About notes.dt.in.th'
aliases:
  - 20201205T185137Z4313
---

**This note describes my personal note-taking/journaling infrastructure** that [I'm currently experimenting with](VSCodeNoteTaking).

- The [infrastructure](https://github.com/dtinth/notes-infrastructure) and [web site](https://github.com/dtinth/notes.dt.in.th) are open source, while the note contents are stored as [flat Markdown files](20200905T174933Z7510) in a private GitHub repository.

:::details[Website history]

This website has been through 3 major iterations.

- [**The first version**](https://github.com/dtinth/notes.dt.in.th/tree/archived/nuxt) (January 2020) is [powered by Nuxt and hosted on Vercel](20201004T062304Z2197).
- [**The second version**](https://github.com/dtinth/notes.dt.in.th/tree/archived/nextjs) (July 2022) is [powered by Next.js and hosted on Vercel](20220724T170613Z0326). In the first and second version, [the notes are loaded from the GitHub repository at runtime](https://github.com/dtinth/notes.dt.in.th/blob/82d71cfc3b2d5fd6e4a2762c2ed4dce06ae40f5d/api/index.js#L156-L172), with some [access control](https://github.com/dtinth/notes.dt.in.th/blob/82d71cfc3b2d5fd6e4a2762c2ed4dce06ae40f5d/api/index.js#L198-L206) to prevent unauthorized access to private notes.
- [**The third version**](https://github.com/dtinth/notes-frontend) (September 2024) is a static site and hosted on GitHub Pages. The public notes are [published as HTML files to GitHub](https://github.com/dtinth/notes.dt.in.th/tree/gh-pages). Unlisted notes are uploaded to [Supabase](Supabase) and dynamically fetched at runtime (using `404.html` mechanism in GitHub Pages). Private notes are not published.

:::

---

:::::split

- On a desktop, I write notes a tailored **[VS Code](VSCode)** workspace.

  - I have a 24/7 virtual machine instance running that stores all the notes. I use the [Remote - SSH](https://code.visualstudio.com/docs/remote/ssh) extension to connect to it when writing. Using a remote server lets me centralize the notes and edit them from any computer without doing manual `git` operations. When migrating to a new machine, [I do this to set up](GitHubDeployKeySSHConfig).

  - ~~On a mobile device, I built [a simple PWA that lets me make simple edits to notes](https://github.com/dtinth/notes-web-editor).~~ (No longer used.)

- ~~I use the [**VS Code Power Tools**](https://marketplace.visualstudio.com/items?itemName=ego-digital.vscode-powertools 'Power Tools - Visual Studio Marketplace') extension to add additional functionalities to the VS Code workspace, such as [a full text-search](https://github.com/dtinth/notes-infrastructure/blob/646970f1593eb575effdc9da838ea59a9afc44c4/.vscode/search.js) (see image).~~ Built directly into the extension, see below.

[^fn1]: I use footnotes for tangential but related stuff, so that I can say what I want without interrupting the main flow of the note.

::::aside
:::figure[Full text search]{.framed}
![VS Code window showing notes search results](https://static.dt.in.th/uploads/2020/12/11/notes-search.png)
:::
::::

:::::

---

:::::split

- In addition, I built [a custom VS Code extension](20201211T164128Z3995) that shows **backlinks**, **outgoing links**, and **textually-similar notes** in a sidebar.
  - This is because I'm very low on conscientiousness. No matter how hard I try my Notion and Confluence sidebar always ended up being an unusable mess. So **I stopped organizing and start linking things together** instead. This sidebar makes this process easier.
  - Source code is in the [`vsce` directory in the `notes-infrastructure` repository.](https://github.com/dtinth/notes-infrastructure/tree/main/vsce)

::::aside
:::figure[The notes sidebar shows backlinks, outgoing links, and related notes to make it easy for me to link my notes together. There's also a section displaying recent changes (not displayed in the image)]{.framed}
![VS Code window showing notes sidebar](https://static.dt.in.th/uploads/2020/12/11/notes-sidebar.png)
:::
::::

:::::

---

:::::split

- A share image for the notes are automatically generated [using my personal puppeteer-based screenshot service](PersonalPuppeteer).

<!--
- Convenient scripts for creating new entries and synchronizing with GitHub are currently implemented as "npm scripts" that can be conveniently run from the explorer sidebar.

- I also made [a convenient command to insert web links based on Bing search results](20201106T195832Z1078),
  so that I don't have to manually copy the URL when I want to reference another web site.
-->

::::aside
:::figure[Social share image]{.framed}
![Share image](https://screenshot.source.in.th/image/_/notes/HomePage)
:::
::::

:::::

---

:::::split

- Notes can contain custom CSS and arbitrary HTML for layout flexibility. (examples: [[1]](20201013T083028Z4498), [[2]](20201117T201556Z6214))
- Notes can contain interactive footnotes, which look like this: [^fn1]. [Powered by littlefoot.](InteractiveFootnotes)
- [Markdown syntax extension and custom elements reference.](Syntax)
- [Notes can be interactive and can use Vue's Composition API right inside Markdown.](NotesInteractivity)
- Some notes, such as this one, has a two-column layout on desktop to avoid the “wall of text” problem.

:::::

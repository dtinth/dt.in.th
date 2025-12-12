---
public: true
topic: true
title: Markdown
---

[**Markdown**](https://daringfireball.net/projects/markdown/) is a lightweight markup language with plain text formatting syntax.

- [GitHub-flavored Markdown alerts/admonitions/callouts](GitHubMarkdownAlerts)
- [Quickly publish a Markdown page without build tool](PublishMarkdownPageWithoutBuildTool)
- [Interactive footnotes](InteractiveFootnotes)

## Tools and Extensions

This digital garden uses Markdown files as the source of content. To be more expressive, [some extensions are used](Syntax). It also depends on the tools to process the files.

- [🔖 micromark](https://github.com/micromark/micromark) is used as the parser.
  - [🔖 My micromark config](https://github.com/dtinth/notes-frontend/blob/main/packages/compiler/src/markdown.ts)
- [🔖 CommonMark](https://commonmark.org/) is a more strongly-defined Markdown spec, so that different Markdown parsers produce the same result.
- **Markdown extensions**
  - [🔖 GitHub Flavored Markdown](https://github.github.com/gfm/) has [footnotes](https://github.com/micromark/micromark-extension-gfm-footnote), [strikethrough](https://github.com/micromark/micromark-extension-gfm-strikethrough), and [tables](https://github.com/micromark/micromark-extension-gfm-table).
  - [🔖 Generic directives/plugins syntax](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444) lets me add [custom blocks](Syntax) ([micromark plugin](https://github.com/micromark/micromark-extension-directive))

## Bookmarks

- [🔖 VitePress’ Markdown extensions](https://vitepress.dev/guide/markdown)
- [🔖 Pandoc’s Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown)
- [🔖 GitHub-flavored alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts)
- [🔖 PHP Markdown Extra](https://michelf.ca/projects/php-markdown/extra/)
- [🔖 MultiMarkdown syntax guide](https://rawgit.com/fletcher/MultiMarkdown-6-Syntax-Guide/master/index.html)

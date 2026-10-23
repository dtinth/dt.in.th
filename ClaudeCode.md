---
title: Claude Code
topic: true
public: true
---

**[Claude Code](https://claude.com/product/claude-code)** is a [coding agent](AgenticCoding) from Anthropic.

## Notes

- [Claude Code on the web](ClaudeCodeWeb)
- [Gangprompting](Gangprompting)

## Check usage

[ccusage](https://ccusage.com/) can be used to check usage of Claude Code. It calculates the total number of tokens along with price estimates. To run with [Deno](Deno) via [mise](Mise):

```bash
mise exec deno -- deno run --allow-env --allow-read --allow-net=raw.githubusercontent.com:443 --allow-sys=homedir npm:ccusage@latest
```

I do this in my [Fish](Fish) shell so I can run `ccu` directly:

```fish
alias --save ccu 'mise exec deno -- deno run --allow-env --allow-read --allow-net=raw.githubusercontent.com:443 --allow-sys=homedir npm:ccusage@latest'
```

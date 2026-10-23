---
title: Claude Code on the web
public: true
---

[Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web) runs [Claude Code](ClaudeCode) in a managed cloud sandbox instead of on my local machine. Here are some wrinkles I’ve run into.

## System prompt has extra text for cloud environments

When running in this managed remote execution environment, the system prompt includes this extra sentence:

> You are running Claude Code in a managed remote execution environment, in the cloud rather than on the user’s machine.

This is useful to know if I’m debugging prompt-dependent behavior, since it can differ from a local Claude Code session.

## Detecting it from scripts

Scripts can detect that they’re running in Claude Code on the web by checking for the `CLAUDE_CODE_REMOTE=true` environment variable.

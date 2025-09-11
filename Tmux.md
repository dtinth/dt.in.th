---
topic: true
public: true
title: tmux
---

**[tmux](https://github.com/tmux/tmux)** “is a terminal multiplexer.”

- [How to create a named tmux sessions and windows in an idempotent way](TmuxProgrammatic)

## Shortcuts and snippets

These are some of the shortcuts I keep searching for, so I note them here.

```
C-b  $      Rename session
C-b  d      Detach from session
C-b  l      Go to most recently used window
```

```sh
tmux attach -t <sessionName>
```
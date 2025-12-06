---
title: Persistent aliases in Fish
public: true
giscus: true
created: 2025-11-21
---

In [Fish shell](Fish), persistent aliases can be created with the `--save` flag:

```fish
alias --save dev_myproj 'env -C ~/Projects/myproj zellij attach --create myproj'
```

Under the hood, this creates a function in `~/.config/fish/functions/dev_myproj.fish` using [funcsave](https://fishshell.com/docs/current/cmds/funcsave.html).

To view all the saved aliases:

```fish
alias
```

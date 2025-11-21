---
public: true
topic: true
title: Fish
---

**[Fish](https://fishshell.com/)** is “a smart and user-friendly command line
shell for Linux, macOS, and the rest of the family.”

- [Persistent aliases in Fish](FishPersistentAlias)

## set

### scoping

```sh
-f --function    # function-scoped
-l --local       # block-scoped (or function-scoped)
-g --global      # current shell session
-U --universal   # persistent, available immediately to all fish sessions
```

### exporting

```sh
-u --unexport    # do not export to child processes
-x --export      # export to child processes
```

### lists

```sh
-a --append      # append to list
-p --prepend     # prepend to list
```

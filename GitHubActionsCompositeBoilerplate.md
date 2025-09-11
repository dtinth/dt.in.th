---
public: true
title: GitHub Actions Composite Action Boilerplate
---

A boilerplate for a [composite action](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action) for [GitHub Actions](GitHubActions).

```yml
name:
description:
runs:
  using: 'composite'
  steps:
    - name:
      run:
      shell: bash
```

Examples:

- [bemusic/bemuse/.github/actions/rush-cache](https://github.com/bemusic/bemuse/blob/master/.github/actions/rush-cache/action.yml)
- [bemusic/bemuse/.github/actions/setup-project](https://github.com/bemusic/bemuse/blob/master/.github/actions/setup-project/action.yml)

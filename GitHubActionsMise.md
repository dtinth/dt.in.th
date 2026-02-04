---
title: Using Mise in GitHub Actions
created: 2026-01-17
public: true
---

To set up a project that uses [Mise](Mise) as a tool version manager in [GitHub Actions](GitHubActions), use [jdx/mise-action](https://github.com/jdx/mise-action):

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: jdx/mise-action@v3
```

Mise will install the tools specified in the `mise.toml`. You can then install dependencies afterwards.

---
topic: true
public: true
title: mise-en-place
---

[**mise-en-place**](https://mise.jdx.dev/) is a command-line tool that manages developer tools, environment variables, and project tasks.

- [Loading `.env` file with mise-en-place](MiseEnv)

## Installation

- [🔖 Installation docs](https://mise.jdx.dev/getting-started.html)

```bash
curl https://mise.run | sh
```

```bash
echo '~/.local/bin/mise activate fish | source' >> ~/.config/fish/config.fish
```

Installation in [GitHub Actions](GitHubActions):

```yaml
- uses: jdx/mise-action@v3
```

Usage with [Copilot Coding Agent Setup Steps](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment#preinstalling-tools-or-dependencies-in-copilots-environment):

```yaml
name: 'Copilot Setup Steps'
on:
  workflow_dispatch:
  push:
    paths:
      - .github/workflows/copilot-setup-steps.yml
  pull_request:
    paths:
      - .github/workflows/copilot-setup-steps.yml
jobs:
  copilot-setup-steps:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - name: Checkout code
        uses: actions/checkout@v5
      - name: Set up mise
        uses: jdx/mise-action@v3
      - name: Install deps
        run: bun install
```

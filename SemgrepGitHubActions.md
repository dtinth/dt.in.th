---
public: true
title: Setting up Semgrep in GitHub Actions
---

A [GitHub Actions](GitHubActions) workflow to run [Semgrep](Semgrep) offline. This is pretty outdated as Semgrep now has a [`semgrep ci` command along with example configs](https://semgrep.dev/docs/semgrep-ci/sample-ci-configs/), but what’s shown here still works for small projects.

**Note:** Replace `0.115.0` with the desired version.

```yaml
name: Semgrep
on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main, master]
jobs:
  semgrep:
    timeout-minutes: 5
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: pip install semgrep==0.115.0
      - run: semgrep --error
```

The above, but [packaged into a composite action with a problem matcher to generate checks in GitHub Actions can be found oh the Bemuse project](https://github.com/bemusic/bemuse/pull/775/files).

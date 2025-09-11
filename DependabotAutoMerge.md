---
title: Auto-merging dependabot PRs
public: true
---

# Auto-merging dependabot PRs

If your project has many dependencies, you might see Dependabot creating numerous pull requests. If you've already set up branch protection rules and have a robust test suite in place, you might want to enable auto-merge for these PRs. You can do this by adding the following [GitHub Actions](GitHubActions) workflow to your repository:

<div v-pre>

```yaml
name: Dependabot auto-merge
on: pull_request

permissions:
  contents: write
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: github.actor == 'dependabot[bot]'
    steps:
      - name: Enable auto-merge for Dependabot PRs
        run: gh pr merge --auto --squash "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GH_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

</div>

Reference:

- [GitHub documentation: Enable auto-merge on a pull request](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions#enable-auto-merge-on-a-pull-request)

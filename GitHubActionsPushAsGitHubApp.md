---
public: true
title: 'GitHub Actions: Push commit as GitHub App'
aliases:
  - 20220704T070109Z2783
---

[GitHub Actions](GitHubActions): Push commit as GitHub App

```yaml
steps:
  - name: Get workflow token
    id: get_workflow_token
    uses: peter-murray/workflow-application-token-action@v1
    with:
      application_id: ___
      application_private_key: ${{ secrets.APPLICATION_PRIVATE_KEY }}
  - uses: actions/checkout@v2
    with:
      fetch-depth: 0
      token: '${{ steps.get_workflow_token.outputs.token }}'
  - run: # ...
```

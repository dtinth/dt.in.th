---
public: true
title: Automated code review with Semgrep
aliases:
  - 20220207T082305Z8714
---

To set up automated code review with [Semgrep](Semgrep):

1. Create `.semgrep.yml` and add some rules ([more examples](SemgrepInJavaScriptProjects)):

   ```yaml
   rules:
     - id: no_direct_testing_library_import
       pattern: 'import "@testing-library/react"'
       message: |
         Do not directly import React Testing Library. Instead, import it from the `testing-utils` packlet.
       languages: [ts]
       severity: ERROR
       paths:
         exclude:
           - src/packlets/testing-utils/**
   ```

2. Run `semgrep`:

   ```
   semgrep
   ```

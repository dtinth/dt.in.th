---
public: true
title: Some useful Semgrep rules for JavaScript and TypeScript
aliases:
  - 20220211T082003Z4948
---

Some useful [Semgrep](Semgrep) rules for [JavaScript](JavaScript) and [TypeScript](TypeScript)…

## General rules

These rules are general and not specific to project.

```yaml
rules:
  - id: error_subclass_name
    patterns:
      - pattern: 'class $X extends Error { ... }'
      - pattern-not: 'class $X extends Error { ... constructor(...) { ... this.name = "$X"; ... } ... }'
    message: |
      A subclass of Error should set the `name` property to the name of the class.
    languages: [ts]
    severity: ERROR
```

More rules in their own articles:

- [Creating types and values with the same name in TypeScript](TypeScriptValuesAndTypesWithSameName#automatic-enforcement)

## Project specific rules

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

  - id: no_index_fontawesome_import
    patterns:
      - pattern: 'import "$P"'
      - metavariable-regex:
          metavariable: $P
          regex: '.*@fortawesome/.*-svg-icons(?!/)'
    message: Do not import the entire fontawesome library, as it would lead to a huge bundle size. Import only the icon files you need.
    languages: [ts]
    severity: ERROR
```

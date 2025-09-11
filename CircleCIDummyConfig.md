---
public: true
title: CircleCI Dummy Config
aliases:
  - 20220415T080426Z9497
---

This **CircleCI dummy config** makes CircleCI do nothing.

```yaml
# dummy no-op config file
version: 2.1
jobs:
  build:
    docker:
      - image: busybox
    steps:
      - run: echo dummy
workflows:
  dummy:
    jobs:
      - build:
          filters:
            branches:
              only: /^$/
```

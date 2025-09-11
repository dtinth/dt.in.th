---
public: true
title: Loading `.env` file with mise-en-place
---

To make [mise-en-place](Mise) load the [`.env`](Dotenv) file in a directory, put this in `.mise.toml`:

```toml
[env]
_.file = '.env'
```

Then run:

```sh
mise trust
```

---
title: Generating a random hex password and hashing it with Bcrypt
public: true
---

Some apps, such as [wg-easy](https://github.com/wg-easy/wg-easy) or [Caddy](https://caddyserver.com/docs/caddyfile/directives/basic_auth) expects you to supply a password in bcrypt format.

This command can be used to generate a random hex password and hash it with Bcrypt:

```sh
php -r '$x = bin2hex(random_bytes(16)); echo "$x\n"; echo password_hash("$x", PASSWORD_BCRYPT) . "\n";'
```

Example output:

```
dc97920f34c84be8c4dc2297c6e64b77
$2y$10$UzjwXFGgN3mDq9erf2uCzumlzwfoayA7kt0Qu3ReNm4bE3DjNetK2dc97920f34c84be8c4dc2297c6e64b77
```


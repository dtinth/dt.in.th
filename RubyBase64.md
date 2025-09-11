---
public: true
title: Working with Base64 in Ruby
---

# Working with Base64 in [Ruby](Ruby)

## Encoding

```rb
# Encoding, wraps lines at 60 characters
Base64.encode64('HELLO')

# Encoding, without line wrapping
Base64.strict_encode64('HELLO')

# Encoding, URL-safe, without padding (like in JWT)
Base64.urlsafe_encode64('HELLO', padding: false)
```

## Decoding

```rb
# Decoding
Base64.decode64('SEVMTE8=')

# Decoding, URL-safe
Base64.urlsafe_decode64('SEVMTE8')
```

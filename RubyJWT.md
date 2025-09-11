---
public: true
title: Working with JWTs in Ruby
---

# Working with [JWTs](JWT) in [Ruby](Ruby)

There is a [`jwt`](https://github.com/jwt/ruby-jwt) gem for working with JSON Web Tokens.

```sh
gem install jwt
```

## HMAC (HS256)

```ruby
require 'jwt'
secret = 'hunter2'

# Encode
payload = { hello: 'world' }
JWT.encode(payload, secret, 'HS256')
# => "eyJhbGciOiJIUzI1NiJ9.eyJoZWxsbyI6IndvcmxkIn0.KMuuVGRsXYSp8sevYCSDJsYbOke_xs0YDoMu1HIRv1E"

# Decode
token = "eyJhbGciOiJIUzI1NiJ9.eyJoZWxsbyI6IndvcmxkIn0.KMuuVGRsXYSp8sevYCSDJsYbOke_xs0YDoMu1HIRv1E"
JWT.decode(token, secret, true, { algorithm: 'HS256' })
#                         ^ verify
# => [{"hello"=>"world"}, {"alg"=>"HS256"}]
```

## Keypair generation, import/export (PEM and JWK)

```ruby
require 'openssl'
require 'jwt'

# Generate a keypair
private_key = OpenSSL::PKey::RSA.generate(2048)
public_key = private_key.public_key

# Exporting keys as PEM
private_key.to_pem
public_key.to_pem

# Exporting keys as JWK
JWT::JWK.new(private_key).export(include_private: true)
JWT::JWK.new(public_key).export

# Import public key from PEM
OpenSSL::PKey::RSA.new(public_key.to_pem)

# Import public key from JWK
JWT::JWK.import(JWT::JWK.new(public_key).export)
```

## Rails

You can use `Rails.application.secrets.secret_key_base`

## More useful resources

- [Unathi Chonco (2021). “Verifying JWTs with JWKS in Ruby”](https://blog.unathichonco.com/verifying-jwts-with-jwks-in-ruby)

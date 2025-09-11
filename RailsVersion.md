---
public: true
title: Detecting Rails version at runtime
---

To detect Rails version at runtime, use:

```ruby
Rails.version # => "x.y.z"
```

To check just the major version, use:

```ruby
Rails::VERSION::MAJOR
```
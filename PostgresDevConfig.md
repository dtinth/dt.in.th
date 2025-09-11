---
title: Faster PostgreSQL during development
public: true
---

# Faster PostgreSQL during development

:::lead
You can change a few PostgreSQL settings in your development environment to make it run faster. Based on my testing, database operations are **3.2x faster**.[^faster]
:::

[^faster]: On a large Rails app running on GitHub Codespaces, with 1,000+ migrations, running `rake db:migrate` from a blank database used to take 27 seconds, and now it takes 8 seconds.

Buried in PostgreSQL’s documentation is this chapter: [Non-Durable Settings](https://www.postgresql.org/docs/15/non-durability.html). To quote:

> Durability is a database feature that guarantees the recording of committed transactions even if the server crashes or loses power. However, **durability adds significant database overhead**, so if your site does not require such a guarantee, PostgreSQL can be configured to run much faster.

In your development environment, you probably don’t need that guarantee.

## Settings

Adjust these settings:

```
fsync = off
full_page_writes = off
synchronous_commit = off
```

There are more settings listed in the documentation, but these three are the most important ones. You can also specify them on the command line:

```sh
postgres -c fsync=off -c full_page_writes=off -c synchronous_commit=off
```

Usage in Docker Compose:

```yaml
services:
  db:
    image: postgres
    # Relax durability guarantees to improve performance during development.
    # See: https://notes.dt.in.th/PostgresDevConfig
    command:
      - postgres
      - -c
      - fsync=off
      - -c
      - full_page_writes=off
      - -c
      - synchronous_commit=off
    # (...)
```

---

:::details[Appendix: Logging migration timing in Rails]

```ruby
# Monkey-patch ActiveRecord::Migrator#migrate to log the start time and finish time of each migration.
module MigratorLogging
  def migrate
    start_time = Time.now
    super
    finish_time = Time.now
    File.open(Rails.root.join('log', 'db_migration.log'), 'a') do |f|
      f.puts "Migration started at #{start_time} and ended at #{finish_time}. Migration took #{finish_time - start_time} seconds."
    end
  end
end
class ActiveRecord::Migrator
  prepend MigratorLogging
end
```

:::

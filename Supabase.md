---
public: true
topic: true
title: Supabase
---

[Supabase](https://supabase.com/) is a “[Postgres](PostgreSQL) development platform”. It provides a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.

- [Some notes on Supabase Auth](SupabaseAuthNotes)
- [Running Supabase on a remote VPS while keeping local development workflow](SupabaseLocalVPS)
- [notes.dt.in.th](AboutNotes) uses Supabase to store public notes.

```sh
# Add Supabase CLI as a development dependency (allows running bun supabase commands)
bun add -D supabase

# Init project
bun supabase init

# Link to remote project
bun supabase login
bun supabase link

# Start
bun supabase start
```

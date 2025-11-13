---
public: true
topic: true
title: Supabase
---

My notes about [**Supabase**](https://supabase.com/), a “[Postgres](PostgreSQL) development platform,” a [backend-as-a-service](BaaS) solution, providing a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.

- [Some notes on Supabase Auth](SupabaseAuthNotes)
- [Running Supabase on a remote VPS while keeping local development workflow](SupabaseLocalVPS)
- [notes.dt.in.th](AboutThisWebsite) uses Supabase to store public notes.
- [บันทึกการทำระบบสำหรับโครงการ AI for Teachers ด้วย Supabase เพื่อรองรับการใช้งานพร้อมกันหลักหมื่นคน](AIforTeachersWriteup)

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

---
public: true
title: Moving data from one PostgreSQL database to another
---

:::lead
To move data from one PostgreSQL [database](Database) to another, you can use the `pg_dump` and `pg_restore` commands.
:::

This note records the commands that I use.

```sh
# Variables
DB_URL=
DUMP_FILE=
TARGET_DB_URL=

# Check the connecivity
psql --dbname $DB_URL

pg_dump --dbname=$DB_URL --format=custom --verbose --file=$DUMP_FILE

pg_restore --dbname=$TARGET_DB_URL --verbose --clean --if-exists --no-owner --no-privileges $DUMP_FILE
```

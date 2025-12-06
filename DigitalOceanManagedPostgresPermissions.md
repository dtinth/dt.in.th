---
public: true
title: Setting up PostgreSQL permissions on DigitalOcean Managed Databases
created: 2025-09-25
---

<style scoped>
   .n-preview img { width: 270px; margin-left: auto; margin-right: auto; }
</style>

::::::::split

:::lead
[DigitalOcean](DigitalOcean) has a managed [PostgreSQL](PostgreSQL) service. In the web console, you can create users, and you can create databases. However, the users created do not have access to any databases.
:::

::::aside
:::figure[DigitalOcean’s Managed PostgreSQL Users & Database management UI]{.framed.n-preview}
![](https://im.dt.in.th/ipfs/bafybeida5aipvcoj6lve4t47n45p7qmfwcgkwor3mkgrhdkvqseyohuvcq/image.webp)
:::
::::

This is how I set up permissions for users to access databases.

::::::::

1. ::::::::split

   **Obtain the connection string**:

   - Go to the **Overview** tab
   - Under **Connection Details**, select “Connection string”
   - Set **User:** to `doadmin`
   - Set **Database/Pool:** to `defaultdb`

   Then click Copy.

   :::::aside
   :::figure[Obtaining the connection string]{.framed}
   ![](https://im.dt.in.th/ipfs/bafybeic36new7ypxrmuz3fsmsbaqbbj5uvrm4qfvxzeg54m6sbsri5ihbi/image.webp)
   :::
   :::::

   ::::::::

2. **Connect to the database** using `psql`:

   ```sh
   # --dbname accepts a connection string
   # Ref. https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING
   psql --dbname $DATABASE_URL
   ```

3. To give a user full access to a database (e.g., `my_service` user accessing `my_db`):

   ```sql
   -- Grant all privileges on the database
   GRANT ALL PRIVILEGES ON DATABASE my_db TO my_service;

   -- Connect to the target database
   \c my_db

   -- Grant all privileges on the public schema
   GRANT ALL ON SCHEMA public TO my_service;
   ```

If the user will be creating their own objects, they only need privileges on the database and schema. The `ALTER DEFAULT PRIVILEGES` commands are unnecessary since they'll own the objects they create.

## Further reading

- <https://www.digitalocean.com/community/tutorials/how-to-use-roles-and-manage-grant-permissions-in-postgresql-on-a-vps-2>

---
public: true
title: Running PostgreSQL and pgAdmin with Docker Compose for Development
---

# Running PostgreSQL and pgAdmin with Docker Compose for Development

This is how I run [PostgreSQL](PostgreSQL) and [pgAdmin](https://www.pgadmin.org/) with [Docker Compose](DockerCompose) for development.

`docker-compose.yml`

```yaml
services:
  postgres:
    image: postgres:latest
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    volumes:
      - ./postgres-data:/var/lib/postgresql/data
    ports:
      - '${LISTEN_HOST}$:5432:5432'
  pgadmin:
    image: dpage/pgadmin4:latest
    environment:
      PGADMIN_DEFAULT_EMAIL: dtinth@spacet.me
      PGADMIN_DEFAULT_PASSWORD: postgres
    volumes:
      - ./pgadmin-data:/var/lib/pgadmin
    ports:
      - '${LISTEN_HOST}$:54328:80'
```

`stack.env`

```sh
# Listen on only specific IP address
LISTEN_HOST=127.0.0.1
```

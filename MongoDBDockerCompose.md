---
public: true
title: Running MongoDB and Mongo Express with Docker Compose for Development
---

# Running MongoDB and Mongo Express with Docker Compose for Development

This is how I run [MongoDB](MongoDB) and [Mongo Express](https://github.com/mongo-express/mongo-express) with [Docker Compose](DockerCompose) for development.

`docker-compose.yml`

```yaml
services:
  mongo:
    image: mongo
    restart: unless-stopped
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: root
    ports:
      - ${LISTEN_HOST}:27017:27017
    volumes:
      - db:/data/db
  mongo-express:
    image: mongo-express
    restart: unless-stopped
    ports:
      - ${LISTEN_HOST}:28017:8081
    environment:
      ME_CONFIG_MONGODB_URL: mongodb://root:root@mongo:27017/
volumes:
  db:
```

`stack.env`

```sh
# Listen on only specific IP address
LISTEN_HOST=127.0.0.1
```

Default user and password to access mongo-express is:

- Username: `admin`
- Password: `pass`

---
public: true
title: "MongoDB in Docker: ‘Authentication Failed’ when logging in to a non-default database name"
---

**tl;dr:** When setting up MongoDB with [Docker](Docker) Compose, make sure to specify the `authSource=admin` query parameter in the connection string if you are using the `root` account for authentication. This will allow you to access the database without getting an "Authentication failed" error.

## Background

I set up MongoDB with Docker Compose. I used the `MONGO_INITDB_ROOT_USERNAME` and `MONGO_INITDB_ROOT_PASSWORD` environment variables to set the root user's username and password.

```yaml
services:
  mongo:
    image: mongo
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
    ports:
      - 127.0.0.1:27017:27017
    volumes:
      - ./data/db:/data/db
```

## Problem

I set my `MONGODB_URI` environment variable in my `.env` file:

```sh
MONGODB_URI=mongodb://root:example@localhost:27017/myproject
```

However, when accessing the database, I got the following error:

```sh
$ mongosh $MONGODB_URI
MongoServerError: Authentication failed.
```

## Why it happened

It turns out, the `root` account only works when using the `admin` database as the **authentication database**.

## Solution

To fix this, I need to specify the `authSource` query parameter in the connection string:

```sh
MONGODB_URI=mongodb://root:example@localhost:27017/myproject?authSource=admin
```

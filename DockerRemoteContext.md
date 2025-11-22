---
title: Using Docker CLI locally against a remote Docker Daemon via SSH
public: true
---

I don't like installing [Docker](Docker) Daemon on my local machine due to battery and resource usage. Instead, I prefer to run Docker on a remote VPS. In the past, I used [VS Code](VSCode)'s [Remote SSH](https://code.visualstudio.com/docs/remote/ssh) extension to also remotely develop the project, but running VS Code Server on a cheap VPS led to it running out of memory. That is, until I learned about [Docker contexts](https://docs.docker.com/engine/manage-resources/contexts/).

## Create a remote context

```bash
docker context create myremote --docker "host=ssh://user@your-vps-ip"
```

This creates a context named `myremote` that connects to the VPS via SSH.

## Use the remote context

To switch to the remote context, either:

- Use `docker context use`:

  ```bash
  docker context use myremote
  ```

- Set the `DOCKER_CONTEXT` environment variable for the shell session:

  ```bash
  export DOCKER_CONTEXT=myremote
  ```

Now all `docker` commands will run against the remote host.

- This also works well with [`docker compose`](DockerCompose).
- When building images using `docker build`, all files in the [build context](https://docs.docker.com/build/concepts/context/) that are not excluded by [`.dockerignore`](https://docs.docker.com/build/concepts/context/#dockerignore-files) are automatically uploaded to the remote server for building, so there's no need to manually sync files between local and remote machines.

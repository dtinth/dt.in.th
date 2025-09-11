---
public: true
title: '.env file'
---

**The `.env` file** is a text file that contains environment variables, commonly used store configuration settings for an application. It is written in a key-value pair format similar to a shell script.

:::note[Why doesn’t my application see the environment variables in the `.env` file?]

By default, a shell does not load the `.env` file. This means that when you create a `.env` file, your application may not be able to access the environment variables defined in it, unless something causes the `.env` file to be loaded into your application’s environment.

:::

- **Some runtimes loads .env files automatically.**

  - [Vite](Vite) [loads `.env` files automatically](https://vitejs.dev/guide/env-and-mode), making them available as `import.meta.env`. As a result, frameworks based on Vite also inherit this behavior, such as [Astro](https://docs.astro.build/en/guides/environment-variables/) and [SvelteKit](https://kit.svelte.dev/docs/adapter-node#environment-variables). Do note that for these frameworks, environment variables may be evaluated at build time or runtime[^buildvsrun] and behavior can be different between development and production environments, so refer to the documentation for specifics.

  - [Glitch](https://glitch.com/), a platform for building web applications, [automatically loads `.env` files](https://support.glitch.com/t/how-do-i-set-environment-variables/3921) in a project as a normal environment variable.

  - [Docker](Docker) Compose [automatically loads `.env` files for the purpose of interpolation](https://docs.docker.com/compose/environment-variables/variable-interpolation/) into the `docker-compose.yml` file. Note that this does not make the environment variables available to the containers managed by Docker Compose.

    :::details[More details for Docker Compose]
    To make the environment variables available to the containers, specify the environment variable names in the `environment` section of the `docker-compose.yml` file. For example:

    ```yaml
    services:
      myservice:
        image: myimage
        environment:
          - MY_ENV_VAR
    ```

    Docker Compose will pass on the contents of the `MY_ENV_VAR` environment variable (which may be automatically loaded from the `.env` file) to the container.

    Alternatively, if you want _all_ environment variables from the `.env` file to be passed to the container, [you can use the `env_file` directive in the `docker-compose.yml` file](https://docs.docker.com/compose/environment-variables/set-environment-variables/#use-the-env_file-attribute).
    :::

  - [Bun](Bun) [loads `.env` files automatically](https://bun.sh/docs/runtime/env).

- **Some runtimes lets you load a .env file, but it must be explicitly done.**

  - [Node.js](Node) has support for [`--env-file`](https://nodejs.org/dist/latest-v20.x/docs/api/cli.html#--env-fileconfig) since v20.

- **Program your application to load the .env file.**

  - [Ruby](Ruby) apps can use the [dotenv](https://github.com/bkeepers/dotenv) gem to load the `.env` file at startup.

  - [Node.js](Nodejs) apps can use the [dotenv](https://www.npmjs.com/package/dotenv) package to load the `.env` file at startup.

- **Run your application through a wrapper that loads the .env file.**

  - [dotenvx](https://github.com/dotenvx/dotenvx) lets you run arbitrary commands with environment variables loaded from a `.env` file.

    :::details[More details for dotenvx]
    To run a command with `.env` file loaded:

    ```sh
    dotenvx run -- command
    ```

    To specify the `.env` file to load:

    ```sh
    dotenvx run -f .env.ci -- command
    ```

    :::

  - [Docker](Docker) lets you specify the [`--env-file`](https://docs.docker.com/reference/cli/docker/container/run/#env) for the container.

- **Load variables from `.env` file into the shell.**

  - [direnv](https://direnv.net/) is a shell extension that loads (and unloads) environment variables from a `.env` file into the shell when you `cd` into (and out of) a directory. More advanced configuration can be done by using a `.envrc` file instead. (Nowadays I use [mise-en-place](Mise) instead of direnv.)

  - [mise-en-place](Mise) can [automatically load the `.env` file in a directory by configuring it in `.mise.toml`.](MiseEnv)

[^buildvsrun]:
    **Build-time** environment variables are evaluated when the application is built and compiled/inlined into the final artifact. They are not changeable at runtime; changing these variables requires a rebuild.

    **Run-time** environment variables are evaluated when the application is running.

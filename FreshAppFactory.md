---
title: Freshly-baked apps every midnight
public: true
devto: https://dev.to/dtinth/freshly-baked-apps-every-midnight-1h99
aliases:
  - 20210106T194753Z6845
---

**I hate running commands to generate new projects** because it is relatively cumbersome compared to jumping into an existing project.

Whenever I want to work on an existing project, I just jump right in and begin developing it, either on my local machine, or using many cloud-based development tool. [Codespaces](https://github.com/codespaces), [Gitpod](https://gitpod.io/), [CodeSandbox](https://codesandbox.io/), etc. which can launch a development environment right from a GitHub repository.

On the other hand, when generating projects using a CLI, there is no repository to begin with. So I must start from my machine. Furthermore, I had to install dependencies twice — once for the project generator, and once more for the project itself.

So I created [**the Fresh App Factory**](https://github.com/fresh-app/factory) which in turn creates _self-updating project templates._ Every midnight UTC, it runs popular project scaffolding commands and pushes the resulting project to GitHub repositories. All of this is powered by [GitHub Actions](GitHubActions).

[👉 **fresh-app/factory**](https://github.com/fresh-app/factory)

## React

Create React App

- <https://github.com/fresh-app/fresh-react-app>
- <https://github.com/fresh-app/fresh-react-app-typescript>

> I initially experimented with this idea since late 2019, so you can [take a look at how a freshly-generated React app's README file evolves over the years](https://github.com/fresh-app/fresh-react-app-typescript/blame/main/README.md).

Vite

- <https://github.com/fresh-app/fresh-vite-app-react>
- <https://github.com/fresh-app/fresh-vite-app-react-ts>

Next.js

- <https://github.com/fresh-app/fresh-next-app>
- <https://github.com/fresh-app/fresh-next-app-typescript>

## Vue

- <https://github.com/fresh-app/fresh-vite-app-vue>
- <https://github.com/fresh-app/fresh-vite-app-vue-ts>

## Vanilla

- <https://github.com/fresh-app/fresh-vite-app>

## etc.

Further template projects may be added in the future. Check out <https://github.com/fresh-app>.

---
public: true
title: My asdf snippets
---

:::warning[Outdated]
As of 2024-07-30, I am no longer using asdf; I’m now using [mise-en-place](Mise) instead.
:::

[asdf](https://asdf-vm.com/) is a tool that allows you to manage multiple versions of multiple languages on your system.

This note contains some snippets for installing and configuring `asdf` on virtual machines (e.g. [GitHub Codespaces](Codespaces) and [Linux](Linux) cloud servers).

I am using the Fish shell.

```sh
# Install and configure
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.12.0
mkdir -p ~/.config/fish/conf.d
echo 'source ~/.asdf/asdf.fish' > ~/.config/fish/conf.d/asdf.fish

# Reload the shell
exec fish

# Node.js
sudo apt-get install dirmngr gpg curl gawk
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf install nodejs latest
asdf global nodejs latest

# Ruby
sudo apt-get install autoconf bison patch build-essential rustc libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libgmp-dev libncurses5-dev libffi-dev libgdbm6 libgdbm-dev libdb-dev uuid-dev
asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git
```

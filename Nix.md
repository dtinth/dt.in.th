---
public: true
topic: true
title: Nix
---

**[Nix](https://nixos.org/)** is “purely functional package manager.”

I am still a Nix noob and I’m not using it in my day-to-day work yet. These are some links and notes I took while learning Nix.

- [Tony Finn (2022). “Nix From First Principles: Flake Edition.”](https://tonyfinn.com/blog/nix-from-first-principles-flake-edition/)
- [Ian Henry (2021). “How to Learn Nix.”](https://ianthehenry.com/posts/how-to-learn-nix/)
- [Stephen Checkoway (2022). “Using Nix on macOS.”](https://checkoway.net/musings/nix/)

## Random notes

```sh
# Install Nix as single-user mode
sh <(curl -L https://nixos.org/nix/install) --no-daemon

# Enable experimental commands
mkdir -p ~/.config/nix
echo 'experimental-features = nix-command flakes' >> ~/.config/nix/nix.conf

# Manually installing things into a profile (maybe use Devbox instead??)
nix profile install 'nixpkgs#asdf-vm' 'nixpkgs#bat' 'nixpkgs#direnv' 'nixpkgs#fish' 'nixpkgs#fzf' 'nixpkgs#gh' 'nixpkgs#ripgrep' 'nixpkgs#starship'
```

## Related topics

- [Nixpacks](Nixpacks)

## More tools

- [Devbox](https://www.jetpack.io/devbox/)

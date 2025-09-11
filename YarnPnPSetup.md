---
public: true
aliases:
  - 20220404T050421Z5833
---

# Yarn PnP set up

Install Yarn:

```
yarn init -2
```

Update `.gitignore`:

```
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

Update `.prettierignore`:

```
/.pnp.cjs
/.yarn/
```

Ensure `.yarnrc.yml` has `pnp` nodeLinker:

```
nodeLinker: pnp
```

Add VSCode editor integration:

```
yarn add --dev typescript
yarn dlx @yarnpkg/sdks vscode
```

Sources:

- <https://yarnpkg.com/getting-started/install>
- <https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored>
- <https://yarnpkg.com/getting-started/editor-sdks>

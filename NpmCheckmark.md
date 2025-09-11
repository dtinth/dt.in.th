---
title: npm checkmark
public: true
twitter: https://twitter.com/dtinth/status/1649379573774295042
facebook: https://www.facebook.com/dtinth/posts/pfbid0WcMhSkf4PjvTYv6NqK18NRubhz16uC3cqayvptsVbXEcGvRbbAJYJXbLYpkXbsvTl
---

# npm checkmark

:::lead
You can get a <iconify-icon style="color: #d7fc70" inline icon="octicon:verified-24"></iconify-icon>
verified checkmark on your npm package if you build and publish it from [GitHub Actions](GitHubActions).
:::

[<img width="388" alt="image" src="https://user-images.githubusercontent.com/193136/233458617-d7931d76-55db-430a-ac7d-ee7bd724d9b3.png">](<https://www.npmjs.com/package/@(-.-)/env>)

1. In `package.json`, make sure `repository.url` is set to your repository’s URL.

   ```json
     "repository": {
       "url": "git+https://github.com/dtinth/-.-"
     }
   ```

2. Update your GitHub Actions workflow job.

   - Make sure it has the `id-token: write` permission.
   - Set environment variable `NPM_CONFIG_PROVENANCE=true`.

   ```yaml
   jobs:
     release:
       name: Release
       runs-on: ubuntu-latest
       permissions:
         id-token: write
         contents: write
         packages: write
         pull-requests: write
         issues: read
       env:
         NPM_CONFIG_PROVENANCE: true
   ```

## Further reading

- [Brian DeHamer, Philip Harrison (2023). “Introducing npm package provenance.” _GitHub Blog._](https://github.blog/2023-04-19-introducing-npm-package-provenance/)
- [“Generating provenance statements.” _npm Docs._](https://docs.npmjs.com/generating-provenance-statements)

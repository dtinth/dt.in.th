---
public: true
devto: https://dev.to/dtinth/let-s-deploy-the-simplest-url-redirection-service-to-netlify-3n7b
title: Let’s deploy the simplest URL redirection service to Netlify!
aliases:
  - 20201229T103941Z0502
---

**Sometimes it's a good idea to post links under your own domain,** so that you can change the link's target when it's needed[^0].

For example, I have a Ko-Fi page at <https://ko-fi.com/dtinth> but I never link to that URL directly; I use <http://link.dt.in.th/coffee> instead. Should I ever decide to use something else[^1], I only need to change the link destination.

[^0]: Some URL shortener services doesn't allow you to change the link's destination unless you pay them money
[^1]: like Patreon or GitHub Sponsors (the latter of which is not available in my country yet)

One simple, low-code way to accomplish this is use [Netlify](Netlify)'s redirect feature.

1. **Create a GitHub repo** and create a file `public/_redirects`:

   ```
   /youtube   https://www.youtube.com/channel/UClKPjyxFSkk_dPg6YzN0Miw/   302
   /coffee    https://ko-fi.com/dtinth                                    302
   ```

2. **Create a Netlify site** linking to the GitHub repo and set up your domain.

3. There is no step 3.

[The `_redirects` file](https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file) has a simple, machine-and-human-readable, plain-text format. To add or change links, just update the file on GitHub. I find this approach powerful because I can also update this file programmatically using [GitHub's API](https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#create-or-update-file-contents), and teams can collaborate on this file like how they collaborate on code.

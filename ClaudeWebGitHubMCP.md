---
title: Using GitHub’s official Remote MCP Server with Claude Web
public: true
created: 2025-12-15
giscus: true
---

I want to use Claude to help me manage my projects on [GitHub](GitHub). It should be simple, right?

![A diagram illustrates an authentication scheme. On the left, "Claude (web/mobile)" attempts to connect to a "GitHub Remote MCP server." The connection is blocked due to incompatibility with dynamic client registration (DCR) and custom headers. In the middle, an "MCP Auth Proxy" sits between Claude and the GitHub Remote MCP server. The proxy supports OAuth with DCR and injecting custom headers, allowing the connection to proceed.](https://im.dt.in.th/ipfs/bafybeihx56kukak2gcrwvlhhz54exjmllagyh3tbq6h6bbtjmylzjmlfle/image.webp)

## Problems

<div class="n-yes-but">

- **Yes:** [Claude has built-in integration with GitHub](https://support.claude.com/en/articles/10167454-using-the-github-integration).
  - **But:** [It does not support](https://claude.ai/share/38b7f8ff-b5fa-418d-9e9b-2863884886df) working with [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects).
- **Yes:** [GitHub has an official MCP server](https://github.com/github/github-mcp-server) that supports projects, and [Claude supports using custom MCP servers](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp).
  - **But:** [GitHub MCP Server installation guide for Claude doesn’t mention how to set it up with Claude Web; only Claude Desktop and Claude Code.](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-claude.md)
- **Yes:** You can try add the remote MCP server in Claude Web by “Adding a custom connector” and specify `https://api.githubcopilot.com/mcp` as the Remote MCP Server URL.
  - **But:** When clicking Connect, you get an unhelpful error message that says _“There was an error connecting to GitHub. Please check your server URL and make sure your server handles auth correctly.”_
- **Yes:** There is a local MCP server you can run on your machine.
  - **But:** [Claude Web only supports Remote MCP servers; Local MCP servers are not supported](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp). I want to use the Remote MCP server because I want to be able to use Claude on the go.
- **Yes:** [GitHub’s Remote MCP server does handle authentication](https://github.com/github/github-mcp-server/blob/main/docs/host-integration.md#authentication-and-authorization).
  - **But:** It requires specifying a custom Authorization header, which Claude Web does not support. Claude Web supports OAuth authentication with DCR (Dynamic Client Registration), [which the GitHub MCP server does not support](https://github.com/github/github-mcp-server/blob/main/docs/host-integration.md#authentication-and-authorization:~:text=Dynamic%20Client%20Registration%20is%20NOT%20supported%20by%20Remote%20GitHub%20MCP%20Server%20at%20this%20time). It's 2025, AI is taking over the world, yet we still have to deal with OAuth headaches.

</div>

<style scoped>
.n-yes-but > ul > li > strong:first-child {
  color: #4ade80;
  text-transform: uppercase;
}
.n-yes-but > ul > li > ul > li > strong:first-child {
  color: #f87171;
  text-transform: uppercase;
}
</style>

## Workaround: MCP Auth Proxy

Thankfully, there is [**MCP Auth Proxy**](https://github.com/sigbit/mcp-auth-proxy), a lightweight authentication proxy. It acts as a Remote MCP server with proper OAuth with DCR support, and it can forward requests to any local or remote MCP server, with support for custom Authorization headers.

This is my [Docker Compose](DockerCompose) file for using with [Dokploy](Dokploy):

```yaml
services:
  authproxy:
    image: ghcr.io/sigbit/mcp-auth-proxy:v2.5.2
    restart: unless-stopped
    environment:
      - EXTERNAL_URL=https://${DOMAIN:?"DOMAIN missing"}
      - NO_AUTO_TLS=true
      - PASSWORD=${PASSWORD:?"PASSWORD missing"}
      - PROXY_BEARER_TOKEN=${GITHUB_TOKEN:?"GITHUB_TOKEN missing"}
    command: https://api.githubcopilot.com
    volumes:
      - data:/data
volumes:
  data:
```

Note that I used `NO_AUTO_TLS=true` and did not expose any ports because Dokploy automatically provisions TLS certificates and handles HTTPS termination for me.

:::figure[Dokploy Domains settings page]{.framed}
![A screenshot of Dokploy domain settings. It shows a list of domains configured for "github-proxy" with details like HTTPS status, SSL certificate, and DNS validation.](https://im.dt.in.th/ipfs/bafybeibnjdkrbpqhlnfi25shcz6qivtl3wwchzn3ex2b6behxg2lcwrgry/image.webp)
:::

Set these environment variables:

```sh
# Set the password for authorizing the connection.
# When clicking "Connect" in Claude Web, you will be prompted to enter this password.
PASSWORD=

# Set the domain where this proxy will be accessible.
DOMAIN=

# Set a GitHub Personal Access Token (PAT).
GITHUB_TOKEN=
```

When adding a custom connector in Claude Web, refer to [GitHub Remote MCP Server reference](https://github.com/github/github-mcp-server/blob/main/docs/remote-server.md) for the list of API URLs. Just change the domain to point to your MCP Auth Proxy instance. For example,

- Instead of using:

  ```
  https://api.githubcopilot.com/mcp/x/projects
  ```

- use:

  ```
  https://github-mcp.your-domain.tld/mcp/x/projects
  ```

When clicking Connect, you will be prompted to enter the password you set in the `PASSWORD` environment variable:

:::figure[MCP Auth Proxy login page]{.framed}
![A white login form with purple accents displays "MCP Auth Proxy" as the title. It includes a password field and a purple "Login" button.](https://im.dt.in.th/ipfs/bafybeie35wat7dphhqctbnym7s6etnx2ypcwxrqatexylixvg7u5g33eda/image.webp)
:::

Alternatively, you can [set up custom OAuth authentication](https://sigbit.github.io/mcp-auth-proxy/docs/oauth-setup) to be used instead of a password. Once all set, the MCP Auth Proxy will take care of the OAuth flow and inject the required Authorization headers when forwarding requests to GitHub’s Remote MCP server.

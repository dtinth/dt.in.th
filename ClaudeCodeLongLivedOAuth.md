---
title: Using a long-lived Claude Code OAuth token
public: true
---

# Using a long-lived Claude Code OAuth token

In [Claude Code](ClaudeCode), when logging in via your Claude.ai subscription, it normally [expires automatically](https://code.claude.com/docs/en/authentication#renew-an-expiring-login) after a few weeks, and after that another `/login` is required. As of writing, the maximum duration seems to be 4 weeks.

:::details[How to check when your `/login` expires]

Look for `claudeAiOauth.refreshTokenExpiresAt` inside `~/.claude/.credentials.json`.

```sh
jq -r '.claudeAiOauth.refreshTokenExpiresAt / 1000 | floor | strflocaltime("%Y-%m-%d %H:%M:%S %Z")' ~/.claude/.credentials.json
```

:::

One solution is to [generate a long-lived token](https://code.claude.com/docs/en/authentication#generate-a-long-lived-token), which lasts for 1 year. The trade-off is that a long-lived token can't do everything a normal login can:

| | Normal `/login` | Long-lived token |
| :- | :- | :- |
| Lifetime | Up to 4 weeks | Up to 1 year |
| [Remote control](https://code.claude.com/docs/en/remote-control) | Yes | No |
| [Connectors from Claude.ai](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claude-ai) | Yes | No |

## Creating a token

```sh
claude setup-token
```

Copy the token.

## Set up Claude Code to use the long-lived token

1. Edit `~/.claude/settings.json` and put a `CLAUDE_CODE_OAUTH_TOKEN` inside `"env"`:

    ```json
    {
      "env": {
        "CLAUDE_CODE_OAUTH_TOKEN": "<paste your token>"
      }
    }
    ```

2. Update `~/.claude.json` and set `"hasCompletedOnboarding"` to `true`:

    ```sh
    jq '.hasCompletedOnboarding = true' ~/.claude.json > /tmp/claude.json.tmp && mv /tmp/claude.json.tmp ~/.claude.json
    ```

    Without it, Claude Code will prompt you to log in via a subscription. ([See issue #8938 for details.](https://github.com/anthropics/claude-code/issues/8938))
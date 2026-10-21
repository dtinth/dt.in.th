---
public: true
title: 'Gangprompting'
created: 2026-10-22
---

# Gangprompting

:::::split

:::lead
**Gangprompting** (a.k.a. ‘multiplayer AI’) means several people prompting an AI agent together in one group channel (e.g. [Discord](Discord)).
:::

It can help teams learn to collaborate effectively with AI agents, break down information silos, and reduce bottlenecks.

The term “gangprompting” came from a post by [dax (@thdxr)](https://x.com/thdxr) on [June 10, 2026](https://x.com/thdxr/status/2064732709579080021). Multiple [commercial solutions](https://multiplayer-ai.com/compare-platforms) exist in this space, such as [Claude Tag](https://claude.com/product/tag) and the new [Slackbot](https://slack.com/features/slackbot). They can be costly.

A cheaper alternative would be to loop the [coding agent](AgenticCoding) that you already use into a group chat. This note shows you how to do that. I also published [gangprompting-skill](https://github.com/dtinth/gangprompting-skill), which you can use right away.

::::aside

:::figure[I looped Claude Code into a Discord group chat, where it becomes a travel companion in our vacation trip, giving recommendations and tracking our trip finances. (Message contents translated from Thai to English.)]{.framed}
![](https://im.dt.in.th/ipfs/bafybeidbwg6wjz3oqzczbdljnsdnkvjkevitg5djo4j3sqy67iq3uqzw54/image.webp)
:::

::::

:::::

## How it works

When using a coding agent, it normally goes like this:

1. You send it a prompt.
2. It does stuff.
3. Then it sends you a reply.

And the loop keeps going until you’re done.

![](https://im.dt.in.th/ipfs/bafybeielxqtb7tncmyv4mqnucpv3uy54gjqpe6sovdqt2wltb6rl4xrf3y/image.webp)

To gangprompt, I adjust the loop like this:

![](https://im.dt.in.th/ipfs/bafybeichecw3n7qonys6pnrit6rrq5t5lnqocvsih24eenxdbeqvuazsfm/image.webp)

At the start of a session, I set up a **communication channel** and ask my agent to communicate with me in that channel.

:::me
[/gangprompting](https://github.com/dtinth/gangprompting-skill/blob/main/skills/gangprompting/SKILL.md) let's talk in https://discord.com/channels/…/…
:::

The agent would then [**build a bridge**](https://github.com/dtinth/gangprompting-skill/blob/main/skills/gangprompting/SETUP.md) which allows it to communicate with everyone in that channel, and then loops itself into it.

The bridge provides 2 primitives, which we will discuss in the next section:

- A **subscription mechanism** for listening to new messages
- A **posting mechanism** for responding to messages

## The bridge

A bridge lets an agent communicate with your channel. As with most things, there are many ways to implement a bridge, but we'll start simple.

### A bridge script

The first kind of bridge is a simple **script** that a coding agent can run to subscribe to new messages and replies. This works with most coding agents and requires almost no harness-specific logic, making it very portable. The only requirement is for an agent to be able to run a script in the background, which most coding agents support.

![](https://im.dt.in.th/ipfs/bafybeif5mhbq3sfmkikw2jiowejffsiln5cpvevt7yposjwgr2xldngzg4/image.webp)

The most important subcommands are:

- **Subscription:**
    - `read` reads the latest messages from the channel and prints them. It should support filtering for messages after a certain message (e.g. an `--after` parameter). This allows an agent to read the prior context before subscribing.
    - `long-poll` works like `read`, but when it finds no new messages, it keeps polling until there is a new message. Then it prints the result and exits.

- **Posting:**
    - `send` sends a message back into the channel.

### Example bridge implementations

Here are some of the bridges I built:

- [Discord](https://github.com/dtinth/gangprompting-skill/blob/main/skills/gangprompting/discord-agent-bridge.ts) — simple reference implementation
- [dtinth/claw](https://github.com/dtinth/claw) — I use this for [prompting in public](PromptingInPublic) on GitHub. Uses a central poller.
- [dtinth/dev-null-bridge](https://github.com/dtinth/dev-null-bridge) — I use this for [prompting in public](PromptingInPublic) on /dev/null. Uses a central poller.

To build your own bridge, you can refer to [gangprompting-skill’s bridge-building instructions](https://github.com/dtinth/gangprompting-skill/blob/main/skills/gangprompting/SETUP.md).

### The subscription mechanism

The subscription mechanism lets an agent listen for new messages. A script bridge does this primarily through long-polling.

![](https://im.dt.in.th/ipfs/bafybeidrcbsoj6zj7bis76whuzi5ao7d3wd4bxx7646unpexbawngr7hcu/image.webp)

Some implementation tips:

- **Have the script dump the raw JSON.** If you ask an agent to implement a bridge, it will most likely process each message and format it into plain text, which can discard data. For example, a script may assume you won’t be sending photos, and may drop media entirely. Having the script output the JSON directly avoids this.

- **Print a reminder when `long-poll` exits.** Right after the script exits, the agent may act on the message before re-running `long-poll`. This causes two problems:

  - If the work takes a long time, the agent can't hear new messages until it finishes, so you can't steer it mid-task.
  - On a big task, the agent may forget to resubscribe. It then stops communicating through the channel until you return to the harness and ask it to resubscribe.

  I solve this by making `long-poll` print a reminder for agents when it exits.

  - **Print it twice.** Once at the start, and once more at the end. Why? Some harnesses truncate the beginning of long shell output, while others truncate the end.
  - **Tell the agent how to resubscribe.** Print the exact command to run next, with `--after` set to the id of the last message printed.

- **Filter out the agent's own messages.** Make it so that `read` and `long-poll` skip bot messages, so the agent’s own replies don’t end the long-poll. Otherwise it will get notified of its own message, which wastes tokens. Sometimes an agent may want to re-read its own messages (e.g. after compacting). In this case, a bridge can provide an `--include-bots` flag.

:::tip[Alternative to long-polling: Monitor tool]
Claude Code also has a [Monitor tool](https://code.claude.com/docs/en/tools-reference#monitor-tool), which lets an agent run a background script, where each time the script outputs something, it gets injected as a message in the session. My gangprompting-skill used to use it, but [recent versions of Claude Code have limited the Monitor lifetime to 30 minutes](https://github.com/anthropics/claude-code/issues/94553). For sessions that span days, this [wastes a lot of tokens](https://im.dt.in.th/ipfs/bafybeigyh4nspsdxpkzgdstxgcu4j76z3ch6y7j43jjcsv4p4zdy6dnrwy/image.webp), so [I had to remove it](https://github.com/dtinth/gangprompting-skill/issues/2#issuecomment-5848049544).
:::

### The posting mechanism

The posting mechanism is much simpler: a `send` command that posts the message to the channel.

![](https://im.dt.in.th/ipfs/bafybeid66u2il4ysralbfkxv2qct422cmkrxav3noztw6oyratp27gp4nq/image.webp)

Some implementation tips:

- **Prefer taking the message from standard input rather than from CLI arguments.** Cheaper models often get escaping wrong in shell arguments, and the message comes out garbled (especially with special characters such as `'`, `"`, <code>&#96;</code>, and `\`). Take the message body from stdin so the agent can use a quoted heredoc (`<<'EOF'`) or write the reply to a file first and pipe it to the script.

- **Support file uploads.** This lets the agent post infographics, screenshots, etc. when you ask for one.

## Sharing the poller

Small setups probably won’t need this.

As I work on more projects, I spawn more agents, each responsible for its own project. At first, every agent polled the channel by itself. This leads to 429 (too many requests) errors.

Some services support webhooks (e.g. Slack) or WebSockets (e.g. Discord) for real-time notification. Instead of every agent polling, the service tells us when something new is posted.

- Problems with webhooks: Only one URL can be configured, and webhooks need a public-facing endpoint to receive them.
- Problems with WebSockets: Most services only allow a single connection, so only one agent can connect at a time.
- Problems with both: Messages are missed when the webhook endpoint is down or the socket is not connected.

To fix this, I deploy a **central poller service**.

![](https://im.dt.in.th/ipfs/bafybeigjwxvw3ilz4hmc5kck2zunnyq7soyxmnmdbuucl3rvq2dihjjaji/image.webp)

- A central poller receives new messages directly from the channel (via webhooks or WebSockets) and saves each message to a database. It also politely polls the channel in case it missed something while it was down.
- Agents poll the database instead of the channel. Since we own the service, our bridge can poll much more aggressively (e.g. every 5 seconds instead of every 20), which makes agents respond faster.
- The central service has to be reachable from the internet if you want to scale this across machines. On a single machine, a local poller and database are enough.

## Harness-integrated bridges

If you use Claude Code, you probably won’t need this:

- In Claude Code, I found script bridges to work very reliably.
- I often find [my login expiring](https://code.claude.com/docs/en/authentication#renew-an-expiring-login) way before the bridge breaks down.
- The only hiccup is when the system runs low on memory and Claude Code decides to terminate a background shell. In this case, I instructed it to back off for 5 minutes before resubscribing.

If you use other harnesses with other models, a script bridge may not be reliable enough:

- Some setups just can’t keep the `long-poll` script running for long.
- Sometimes the agent forgets to resubscribe despite prompting.
- Sometimes the harness reaps the process _without telling the agent_.

This second kind of bridge **integrates deeply with the harness.** There are 3 main kinds:

### A bridge that _runs inside_ the harness

The bridge is implemented as a plugin inside the harness.

Claude Code has [channels](https://code.claude.com/docs/en/channels) (an MCP-based way to push events into a running session with examples for Discord, Telegram, and iMessage) and [mods](https://code.claude.com/docs/en/plugins/mods/overview) (JavaScript-based plugins that run inside Claude Code). I haven’t used them much.

### A bridge that _wraps_ the harness

The bridge launches the harness and controls it. [remorses/kimaki](https://github.com/remorses/kimaki) is one such example: it deeply integrates OpenCode with Discord.

### A bridge that _talks to_ the harness

The bridge runs as a separate daemon and communicates with the harness. For example, OpenCode has an [open API](https://opencode.ai/v2/docs/api) that lets external scripts inject messages directly into a session.

When integrating with OpenCode, I run a daemon that polls the channel and injects each new message straight into the session via the [`opencode api`](https://opencode.ai/v2/docs/cli/commands/#api) command. (I haven’t published the code for this, but you can ask your agent to build it.)

## Staying safe

- When you bring your coding agent into a group chat, make sure you trust everyone in the group enough.
- If the coding agent runs on your computer, people in the group chat will be able to prompt your agent to do stuff on your computer.
- In groups where trust is lower, consider running the agent in a sandbox or on a VPS, or consider commercial solutions.

## Related

- [Prompting in Public](PromptingInPublic) — instead of bringing your agent into a group chat to talk with everyone, you take it out into the open and talk to it there.

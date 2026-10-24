---
public: true
title: Polite Compaction for Claude Code
created: 2026-10-24
---

# Polite Compaction for Claude Code

Nowadays I work with my [Claude Code](ClaudeCode) agents mainly [through Slack and Discord](Gangprompting) (for work), and [on GitHub and /dev/null (for open source)](PromptingInPublic). That means most of the planning and management work happens in a single long-running session.

This note describes **Polite Compaction**, a technique where you tell your agent that you’re going to `/compact` soon and ask if it needs to save anything to persistent memory first. The agent gets a chance to keep more information while generating shorter summaries, so it performs better over long sessions. I automated this by building the [`polite-compaction` plugin](https://github.com/dtinth/claude-code-mods/tree/main/polite-compaction).

After testing this for a while, I did not notice any performance drop, but the usage cost went down by 55%.

:::figure[The chart above shows the **average cost per API call.** The left half is 3,000 API calls before I enable the plugin, and the right half is 3,000 API calls after.]{.framed}
![](https://im.dt.in.th/ipfs/bafybeieggrxpktyckru3y2ozmdnxssa3zhkpzlgzatbs5uferoqcycj43a/cost-per-api-call.svg)
:::

Although cache reads cost just 2.5%–10% of the base input price, it still domainates the session cost. On agentic workflows where a turn requires multiple model calls, the cost grows _quadratically_ with the context size. After I enable the plugin, average context size per message went down from 509k to 208k.

## Impolite compaction

In [Claude Code](ClaudeCode), `/compact` forces the agent to generate a summary _right then and there_.

Whatever the agent thinks is useful stays in the summary, and the rest is discarded. Unfortunately, the agent doesn't always get this right — sometimes it discards small but important details. For example, when I give my agents feedback, it only obeys until compaction, and then it forgets.

I think Claude’s default compaction mechanism is too forceful, because the agent has no chance to save anything to persistent memory first. Everything in the context either goes to compaction summary, or goes forgotten.

## Compacting politely

So, before auto-compact kicks in, I tell the agent:

> I'm going to compact your context soon. Anything to flush?

This gives the agent a chance to save some info in persistent memory. Persistent memory can refer to:

- [Auto memory](https://code.claude.com/docs/en/memory#auto-memory)
- Rule files (such as [AGENTS.md](https://code.claude.com/docs/en/memory#agents-md), [CLAUDE.md](https://code.claude.com/docs/en/memory#claude-md-files), or the [rules directory](https://code.claude.com/docs/en/memory#organize-rules-with-claude%2Frules%2F))
- [Skill files](https://code.claude.com/docs/en/skills)
- Documentation files
- Issue tracker (e.g. [triage notes](https://github.com/mattpocock/skills/blob/main/skills/engineering/triage/SKILL.md#needs-info-template))

The agent saves what it needs, then tells me to go ahead. Then I run `/compact`. This brings 2 main benefits:

1. **Shorter summaries.** As some knowledge are persisted, the agent doesn't have to repeat them in the summary.
2. **More information is retained.** This means less performance loss after compaction.

At first, I do this manually whenever I remember, but I often forget when I'm focused.

## Automating it with a mod

Claude Code's [mods](https://code.claude.com/docs/en/plugins/mods/overview) feature lets me write TypeScript plugins that integrate deeply with Claude Code. A mod can read the state of the conversation and trigger compaction. So I build a small [`polite-compaction` plugin](https://github.com/dtinth/claude-code-mods/tree/main/polite-compaction) that does this:

:::figure[The polite-compaction plugin tells Claude Code to prepare for compaction after context grows larger than 300k tokens. It saves things to memory and tells the plugin that it’s ready for compaction, and the plugin triggered a compaction.]{.framed}
![](https://im.dt.in.th/ipfs/bafybeick52grjyobncgikyveasit5jmap7p5mij7uof6plwklvhhafusve/image.webp)
:::

You can install it by running this in Claude Code:

```
/plugin marketplace add dtinth/claude-code-mods
/plugin install polite-compaction@dtinth-mods
```

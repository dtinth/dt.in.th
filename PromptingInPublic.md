---
public: true
title: 'Prompting in Public'
created: 2026-10-23
---

# Prompting in Public

::::::::split

I recently started prompting my [coding agents](AgenticCoding) publicly when working on open source projects, first on GitHub ([example](https://github.com/dtinth/vxbeamer/issues/86)), and now on [/dev/null](https://dev-null.sh/) ([example](https://dev-null.sh/@dtinth/commits/01a15555-27f2-7026-9b16-35c58c1cdb8d)).

My favorite thing about it is this: when I prompt in public, **every prompt has a public permalink.**

- When a friend asks me how I did something, I can just link them to the actual prompt.
- When an agent writes issues or certain kinds of docs (e.g. [ADRs](https://github.com/mattpocock/skills/blob/main/skills/engineering/domain-modeling/ADR-FORMAT.md) and [agent briefs](https://github.com/mattpocock/skills/blob/main/skills/engineering/triage/AGENT-BRIEF.md)), it can permalink to the source prompt. This way, an agent’s summaries can be traced back and verified against the source.

Also, as more code gets written by AI, I find myself becoming more interested in how humans prompt their agents than in the AI-generated results. I’d rather see people talking _to_ agents than talking _about_ agents.

:::::::aside

:::figure[[Asking my coding agent for a favicon on /dev/null](https://dev-null.sh/@dtinth/commits/01a15ab5-b020-7033-be28-4bd26305d574)]{.framed}
[![](https://im.dt.in.th/ipfs/bafybeibdvpfrvxdadvw4xgvlk5vaqibesh25ylwbtuzcmstzb5zkmv5g3m/image.webp)](https://dev-null.sh/@dtinth/commits/01a15ab5-b020-7033-be28-4bd26305d574)
:::

:::::::

::::::::

## How I set up my agents for prompting in public

I built **bridges** for my agents to communicate with me over a public channel. Basically, it’s a [gangprompting](Gangprompting) setup adapted to public channels. So far I've built two bridges:

- [dtinth/claw](https://github.com/dtinth/claw) (GitHub)
- [dtinth/dev-null-bridge](https://github.com/dtinth/dev-null-bridge) (/dev/null)

With the bridge built, to start working on a new project in the open, I would:

1. Create a GitHub issue or a /dev/null commit.
2. Tell my agents to talk to me via the bridge instead of directly.

I do that by invoking the skill that gets shipped with the bridge:

:::me
[/dtinth-claw](https://github.com/dtinth/claw/blob/main/skills/dtinth-claw/SKILL.md) let's talk in <https://github.com/bemusic/bemuse/issues/844>
:::

…or:

:::me
[/dev-null-bridge](https://github.com/dtinth/dev-null-bridge/blob/main/skills/dev-null-bridge/SKILL.md) let's talk in <https://dev-null.sh/@dtinth/commits/01a15555-27f2-7026-9b16-35c58c1cdb8d>
:::

If you’re curious about how to build these bridges, I’ve explained them in much more detail on the dedicated [**Gangprompting**](Gangprompting) page. Please check it out.

For the /dev/null bridge, I built this bridge by prompting my agent on /dev/null. You can read the whole conversation here.

Unlike in gangprompting, where the agent talks to everyone in the group chat, here **my agent talks to me only.** Therefore, the bridge should filter out messages that aren’t from me. If I want the agent to look at or respond to someone else’s messages, I have to tell my agent explicitly and link to that message.

## Things I built by prompting in public

**On GitHub**:

- [34bench](https://github.com/dtinth/34bench/issues/1) — OCR eval testing how well different models can read [a very old faded Thai document scan from the 1970s](https://github.com/dtinth/34bench/blob/main/data/route34/route34-300dpi.png). Started from an empty repo. Also includes [the detective work of finding the ground truth](https://github.com/dtinth/34bench/issues/1#issuecomment-5870968108) and [building the result slides](https://github.com/dtinth/34bench/issues/1#issuecomment-5884372232) which I later [posted to Facebook](https://www.facebook.com/dtinth/posts/pfbid0yMkXUsmK2rFiZhnpawnyEMxn9gyzzXY9xscpvHs7yiCZbVfSWjN363w3pDWzL2Wul).
- [vxbeamer](https://github.com/dtinth/vxbeamer/issues/86) — My personal transcriber.
- [Bemuse maintenance](https://github.com/bemusic/bemuse/issues/844) — Toolchain modernization (Node 16→24), bug fixes.

## Building a custom UI for GitHub

Inasmuch as I'd like to prompt my agents through GitHub, its issues UI is too janky for quick prompting, so I built a custom web dashboard where I can read and reply to my agents’ GitHub comments. [The full conversation is on GitHub.](https://github.com/dtinth/claw/issues/5#issue-4936264048)

![claw's dashboard, open on an iPad — a sidebar showing Claude usage meters and recent bot activity next to a comment feed](https://im.dt.in.th/ipfs/bafybeihabthjsoevcrqx2r4gdgkhucql332xy6dczpllrytiis34ifmqdm/ipad.png)

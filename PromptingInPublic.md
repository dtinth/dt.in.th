---
public: true
title: 'Prompting in Public'
created: 2026-10-23
---

# Prompting in Public

::::::::split

In July 2026 I started prompting my [coding agents](AgenticCoding) publicly when working on open source projects, first on GitHub ([example](https://github.com/dtinth/vxbeamer/issues/86)), and now on [/dev/null](https://dev-null.sh/) ([example](https://dev-null.sh/@dtinth/commits/01a15555-27f2-7026-9b16-35c58c1cdb8d)).

My favorite thing about it is: when I prompt in public, **every prompt has a public permalink.** Benefits:

- When a friend asks me how I did something, I can just link them to the actual prompt.
- When an agent writes issues or certain kinds of docs (e.g. [ADRs](https://github.com/mattpocock/skills/blob/main/skills/engineering/domain-modeling/ADR-FORMAT.md) and [agent briefs](https://github.com/mattpocock/skills/blob/main/skills/engineering/triage/AGENT-BRIEF.md)), it can permalink to the source prompt. This way, an agent’s summaries can be traced back and verified against the source.

Also, as more code gets written by AI, I find myself becoming more interested in how humans prompt their agents than in the AI-generated results[^humancode]. I’d rather see people talking _to_ agents than talking _about_ agents.

:::::::aside

:::figure[[Asking my coding agent for a favicon on /dev/null](https://dev-null.sh/@dtinth/commits/01a15ab5-b020-7033-be28-4bd26305d574)]{.framed}
[![](https://im.dt.in.th/ipfs/bafybeibdvpfrvxdadvw4xgvlk5vaqibesh25ylwbtuzcmstzb5zkmv5g3m/image.webp)](https://dev-null.sh/@dtinth/commits/01a15ab5-b020-7033-be28-4bd26305d574)
:::

:::::::

::::::::

## How I set up my agents for prompting in public

I had my agents build **bridges** for communicating over a public channel. Basically, it’s a [gangprompting](Gangprompting) setup adapted to public channels. So far I've built two bridges:

- [dtinth/claw](https://github.com/dtinth/claw) (GitHub)
- [dtinth/dev-null-bridge](https://github.com/dtinth/dev-null-bridge) (/dev/null)

With the bridges built, to start working on a new project in the open, I would:

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

Unlike in gangprompting, where the agent talks to everyone in the group chat, here **my agent talks to me only.** Therefore, the bridge should filter out messages that aren’t from me. If I want the agent to look at or respond to someone else’s messages, I have to tell my agent explicitly and link to that message.

## Building a custom UI for GitHub communication

Inasmuch as I'd like to prompt my agents through GitHub, its issues UI is too janky for quick prompting, so I built a custom web dashboard where I can read and reply to my agents’ GitHub comments. [The full conversation is on GitHub.](https://github.com/dtinth/claw/issues/5#issue-4936264048)

![claw's dashboard, open on an iPad — a sidebar showing Claude usage meters and recent bot activity next to a comment feed](https://im.dt.in.th/ipfs/bafybeihabthjsoevcrqx2r4gdgkhucql332xy6dczpllrytiis34ifmqdm/ipad.png)

## Building the /dev/null bridge on /dev/null

I built the /dev/null bridge mostly by prompting my agent on /dev/null. [You can read the whole conversation here.](https://dev-null.sh/@dtinth/commits/01a15545-da41-714b-a93a-ceb9c1225973) I bootstrapped the project by:

1. Cloning the [dev-null.sh](https://github.com/nunomaduro/dev-null.sh) repo (it’s open source) and put my agent in it
2. I asked it to commit (post) something on my bot account, then watch for my replies to it. This is easy because the agent has access to the platform’s source code, so it knows what to do. It built a rudimentary bridge.
3. I [started](https://dev-null.sh/@dtinth/commits/01a15545-da41-714b-a93a-ceb9c1225973) prompting it to turn that prototype into a [central poller](Gangprompting#sharing-the-poller). We [designed how subscriptions would work](https://dev-null.sh/@dtinth/commits/01a1559d-4438-7055-97dc-9b34b66a28b4), [built a web dashboard](https://dev-null.sh/@dtinth-bot/commits/01a155bb-0776-73db-bc1b-053d3b1caea9) for inspecting, and [discussed how to explain how it works with diagrams](https://dev-null.sh/@dtinth-bot/commits/01a15709-fc92-724d-8b9e-3b76c507f096).

## Other things I built by prompting in public

- [**34bench**](https://github.com/dtinth/34bench) — OCR eval testing how well different models can read [a very old faded Thai document scan from the 1970s](https://github.com/dtinth/34bench/blob/main/data/route34/route34-300dpi.png).
    - [Started prompting in public from an empty repo.](https://github.com/dtinth/34bench/issues/1#issuecomment-5869243190)
    - Includes [the detective work of finding the ground truth](https://github.com/dtinth/34bench/issues/1#issuecomment-5870968108) and [building the result slides](https://github.com/dtinth/34bench/issues/1#issuecomment-5884372232) which I later [posted to Facebook](https://www.facebook.com/dtinth/posts/pfbid0yMkXUsmK2rFiZhnpawnyEMxn9gyzzXY9xscpvHs7yiCZbVfSWjN363w3pDWzL2Wul).
- [**vxbeamer**](https://github.com/dtinth/vxbeamer) — My personal speech-to-text transcriber that [instantly syncs across devices](https://dev-null.sh/@dtinth/commits/01a15542-02d5-7369-be94-d4c8456d159d)
    - [Evaluated](https://github.com/dtinth/vxbeamer/issues/86#issuecomment-5381768835) [37 speech-to-text models](https://github.com/dtinth/vxbeamer/pull/118) over multiple months.
    - [Built](https://github.com/dtinth/vxbeamer/pull/109) and [improved the Android app](https://dev-null.sh/@dtinth/commits/01a15555-27f2-7026-9b16-35c58c1cdb8d)

<!--
- [Bemuse maintenance](https://github.com/bemusic/bemuse/issues/844) — Toolchain modernization (Node 16→24), bug fixes.

**On /dev/null:**

- [Rebuilt the infra behind dt.in.th (this website)](https://dev-null.sh/@dtinth/commits/01a15992-fd49-715f-b19e-16dff88f890f):  Planned through [27 grilling questions](https://dev-null.sh/@dtinth-bot/commits/01a15a05-b193-72f9-90ad-59a4934a4fa4). [Prototyped a replacement infra](https://dev-null.sh/@dtinth-bot/commits/01a15a29-2229-703d-bb0e-04ad597a18e5) and [verified that it produced the same website](https://dev-null.sh/@dtinth-bot/commits/01a15a4c-9805-7037-a0f5-6f348accc51a). [Built a backoffice](https://dev-null.sh/@dtinth-bot/commits/01a15a68-2b33-7005-a80a-f3afc0914313) for me to write posts directly on the web[^admin] and [polished the UI](https://dev-null.sh/@dtinth-bot/commits/01a15ab2-2314-709b-89ca-c70439ad05ed).
- [Polished](https://dev-null.sh/@dtinth/commits/01a1584e-9ddb-701c-89c0-4c78fd040623) the [agent-env configurator](https://dtinth.github.io/agent-env/).
-->

[^humancode]: I still very much enjoy beholding the beauty of some tastefully-produced human-written code, though.

[^admin]: Previously I would write in VS Code, but I haven’t opened it in 4 months, which explains the lack of writing in recent months.

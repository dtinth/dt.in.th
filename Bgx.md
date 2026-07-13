---
title: 'bgx: BackGround eXecute'
public: true
created: 2026-07-13
---

# bgx: BackGround eXecute

For context: [github.com/dtinth/bgx](https://github.com/dtinth/bgx)

In [GitHub Actions](GitHubActions), steps inside a job run sequentially. Normally, you would achieve parallelism by running multiple jobs at once, but they run on different runners and you are billed twice the minutes. But sometimes, different commands do not depend on each other and can really be run in parallel within the same job. This has led me to build **bgx** while optimizing a GitHub Actions workflow. **bgx** is a CI-agnostic tool that lets you fork a command into the background, keep doing other work, then join on it later to stream its output and get its exit code — all backed by a single shared SQLite database, so there are no per-task log files to juggle.

:::info
In June 2026, [GitHub Actions steps can now run in parallel](https://github.blog/changelog/2026-06-25-actions-steps-can-now-be-run-in-parallel/), which is native support for the same use case bgx was built for. bgx still works fine outside GitHub Actions, or on runners without that feature.
:::

:::figure[bgx logo]
![bgx](https://im.dt.in.th/ipfs/bafybeigwclhzdbne6okiyzs5p7kgef4pan7ysllhlksye6ij57ss6gbroa/image.webp)
:::

## Core commands

- **`bgx fork`** — detaches a command into the background and records its output, resource usage, and exit code into the shared database
- **`bgx join`** — replays events from the database, streaming stdout/stderr live, and exits with the command's exit code
- **`bgx exec`** — runs a command in the foreground while recording the same events, for later analysis

Because every command shares one database file, independent processes — for example, parallel steps within a CI job — can fork and join tasks concurrently without juggling per-task log files.

## Configuration

The `BGX_DB` environment variable specifies the SQLite database path. On GitHub Actions, it defaults to `$RUNNER_TEMP/bgx.db` when unset; elsewhere it falls back to the system temp directory.

## Other features

- Cross-platform (Linux, macOS, Windows)
- Real-time output streaming with task name tagging
- GitHub Actions integration with collapsible group support
- CPU/memory heartbeat monitoring (Linux only)
- Tasks are recorded as rows in an `events` table (task name, event type, timestamps, output, PID, command, exit code, resource metrics), so you can inspect a run after the fact

Install via [mise](Mise) (recommended), `go install`, or a manual download from the releases page. Releases are automated with release-please and GoReleaser, triggered by [Conventional Commits](https://www.conventionalcommits.org/) to the main branch.

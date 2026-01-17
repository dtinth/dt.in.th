---
public: true
title: Jamulus
topic: true
aliases:
  - 20220126T115523Z9734
---

My notes about [**Jamulus**](https://jamulus.io), a software that allows you to play [music](Music) with others online:

- [Jamulus protocol study notes](JamulusProtocolStudyNotes)
- [Proof-of-concept: Web based Jamulus client](20210920T171647Z1352)
- [My equipments and setup](20210619T153544Z9312)
- [KhongPangKhongKwan’s Jamulus introduction video (Thai)](https://www.youtube.com/watch?v=zv-GviJptZM)
- [High-level explanation of how Jamulus achieves low-latency (Thai)](20210713T053650Z2214)

## Tools

As the maintainer of [MJTH](https://mjth.live/), a community for online music jamming using Jamulus in Thailand, I created many userland Jamulus-related tools:

<!-- prettier-ignore -->
| Tool | Description |
| --- | --- |
| [**gojam**](https://github.com/dtinth/gojam) | A Go implementation of Jamulus client, used for streaming the audio to web listeners and recording sessions |
| [**jamulus-lounge**](https://github.com/dtinth/jamulus-lounge) | Web-based interface to let people listen in to a Jamulus server. Requires _gojam_. |
| [**clipper**](https://github.com/dtinth/jamulus-lounge/blob/main/server/clipper.mjs) | A tool that allows musicians to [clip](https://mjth.live/clipper/) the last 10 minutes of the stream for replay via chat. Part of _jamulus-lounge_. |
| [**jamviz**](https://github.com/dtinth/jamviz) | Web-based interface for replaying the clipped stream. |
| [**jamulus-json-rpc-api-gateway**](https://github.com/dtinth/jamulus-json-rpc-api-gateway) | Exposes functionalities of Jamulus’s [JSON-RPC](https://github.com/jamulussoftware/jamulus/blob/main/docs/JSON-RPC.md) over HTTP. |
| [**mjth-recman**](https://github.com/dtinth/mjth-recman) | Allows musicians to control [multi-track recording](https://jamulus.io/wiki/Running-a-Server#recording) via chat and upload the recordings to a server. Requires _gojam_ and _jamulus-json-rpc-api-gateway_. |
| [**Jamulus Server List Archive Project**](https://github.com/dtinth/jamulus-php/blob/master/ARCHIVE.md) | A realtime web-accessible data source and historical archive of public Jamulus servers since 2023-08-01. Used for creating the [Jamulus servers in Thailand](https://mjth.live/servers/) page. |
| [**Jamulus Usage Public Dataset**](https://github.com/dtinth/jamulus-archive) | An archive of Jamulus usage data sourced from public servers (via _Jamulus Server List Archive Project_). Dataset is public and available for querying via BigQuery. Used for creating the [Jamulus Thailand usage stats](https://mjth.live/community/stats/) page. |
| [**jamulus-docker**](https://github.com/dtinth/jamulus-docker) | A Docker image for running Jamulus server easily. |

### Obsolete tools

I built these tools in the past but they are now obsolete and no longer used:

<!-- prettier-ignore -->
| Tool | Description |
| --- | --- |
| [**jamurust**](https://github.com/dtinth/jamurust) | A Rust implementation of Jamulus client, used for streaming the audio to web listeners. Obsolete; replaced by _gojam_. |
| [**rtcjam**](https://github.com/dtinth/rtcjam)+[**webjam**](https://github.com/dtinth/webjam) | A [proof-of-concept](20210920T171647Z1352) web-based Jamulus client.  |
| [**ez-jamulus-server**](https://github.com/dtinth/ez-jamulus-server) | A Bash script to set up a Jamulus server easily on a fresh Linux server. Obsolete; The Jamulus project now provides an [official repo setup script](https://jamulus.io/wiki/Running-a-Server). |
| [**headless-jamulus-to-icecast-linux-streamer**](https://github.com/dtinth/headless-jamulus-to-icecast-linux-streamer) | Simple script to stream sound from Jamulus to an Icecast server. |
| [**jamcaster**](https://github.com/dtinth/jamcaster) | A Docker container to broadcast Jamulus sound to an Icecast server. Obsolete; replaced by _jamulus-lounge_. |
| [**jamulus-discord-glue**](https://github.com/dtinth/jamulus-discord-glue) | Glue code to stream Jamulus sound to Discord. No longer used. |

---
title: Reverse-engineering Insta360 Link Controller WebSockets protocol
public: true
---

# Reverse-engineering Insta360 Link Controller WebSockets protocol

Insta360 Link Controller software version 1.4.1 supports remotely controlling the webcam using a web interface on the phone. I want to try reverse-engineering the communication protocol so that we can build a custom controller software.

With the help of [Claude](https://claude.ai/), we were able to reverse-engineer [the protocol](https://github.com/creatorsgarten/insta360-link-controller/blob/main/insta360linkcontroller.proto) in 20 minutes, and [@rayriffy](https://github.com/rayriffy) was able to implement a [controller software](https://github.com/creatorsgarten/insta360-link-controller) for it.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Today me and <a href="https://twitter.com/dtinth?ref_src=twsrc%5Etfw">@dtinth</a> working on reverse-engineering Insta360 Link communication protocol to make it controllable with Xbox controller.<br>Now we can control camera smoothly without any messy movement by dragging a mouse to move a camera itself. <a href="https://t.co/UMsKoHlwqX">pic.twitter.com/UMsKoHlwqX</a></p>&mdash; Riffy 7/LIVE FUN!! 10/JSBKK (@rayriffy) <a href="https://twitter.com/rayriffy/status/1829962321667694891?ref_src=twsrc%5Etfw">August 31, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Background

I am part of [Creatorsgarten](Creatorsgarten)’s livestreaming crew. We use [Insta360 Link](https://www.insta360.com/product/insta360-link) to stream our events. The camera is controlled by Insta360 Link Controller software. Being a consumer product, Insta360 does not provide a SDK for it; the only way to control it on a Mac is to use [its desktop app](https://www.insta360.com/download/insta360-link) to control the camera. We had to use a mouse to control the camera, which is not ideal for our use case.

In August 2023, Insta360 released an update to the software that allows controlling the camera via a mobile web interface.

![](https://im.dt.in.th/ipfs/bafybeihg7prffzmjaennsazx22kdh3bma4gbdywwkygpjlwk576ushlcae/image.webp)

The desktop app launches a WebSocket server, and the mobile web interface connects to it. Therefore, the desktop app must be running for the mobile web interface to work. With this, we can use Google Chrome’s Developer Tools to inspect the WebSocket messages. Time for some [hardware hacking](Hardware).

## Reverse engineering the WebSocket protocol

From preliminary inspection, **the messages are in binary format:**

![](https://im.dt.in.th/ipfs/bafybeidohloul5srn535mnuf3nq72ran6tpjtwddvrposxlgc4aah5spt4/image.webp)

By looking at the Initiator tab, we can find the [JavaScript](JavaScript) code that is responsible for the communication.

![](https://im.dt.in.th/ipfs/bafybeigdzpymqhk2xfl5spjqtknfhpdkejlyagjhdwtjhck5yatg2a27ke/image.webp)

When beautified, **this results in 7000+ lines of code.** Reverse-engineering this by hand would take a lot of time. Therefore, I asked [Claude 3.5 Sonnet](https://claude.ai/) (through Anthropic Console) to help me with this task:

:::me

I got this JavaScript code that can interface with a camera via WebSocket:

```
<script> (7000 lines of JavaScript) </script>
```

The camera is Insta360 Link. The communication between the app and the websocket server is binary format. From the given code, describe the binary message format so that we can implement custom software to interface with this camera.

:::

…and Claude told me:

:::bubble[Claude 3.5 Sonnet]

The messages use Protocol Buffers (protobuf) for serialization. This can be seen from the use of protobuf-related functions and types (e.g., `Reader`, `Writer`, `encode`, `decode`).

:::

This’s great to hear! I have never worked with protobuf or gRPC before, so I don’t know how its generated client code looks like, and I don’t know its binary format, so I wasn’t able to recognize it. I’m impressed by how Claude can recognize it from the JavaScript code (and also told me the telltale signs to look for).

But I remember that when using protobuf, there is a **.proto** file that describes the message format. Then client libraries can be generated from this file. With this knowledge, I asked Claude to reconstruct the protobuf schema from the JavaScript code.

:::me

Recreate the proto file from the given code.

:::

With that, the job is done in mere minutes. Now we have [the protobuf file](https://github.com/creatorsgarten/insta360-link-controller/blob/main/insta360linkcontroller.proto).

Here’s how the Anthropics Console looks like:

![](https://im.dt.in.th/ipfs/bafybeienh5oodn3qj3jgecd2tvpdycfdjgmca274trxfuh4ogmhekscea4/image.webp)

## Understanding the communication

Now in Google Chrome inspector, it shows a hexdump that looks like this:

```
00000000: 1001 5a28 0a0e 3939 3939 3939 3939 3939  ..Z(..9999999999
00000001: 3939 3939 100c 1816 2001 2004 20ff 0120  9999.... . . ..
00000002: 0228 ffff ffff ffff ffff ff01            .(..........
```

However, [Protobufpal](https://www.protobufpal.com/) expects just the hex parts. So once more I asked Claude to help me with this (this time via [Open Web UI + LiteLLM](OpenWebUILiteLLM)).

:::me
from xxd hexdump output, how do i get just the hex part, maybe use cut?
:::

:::bubble[Claude 3.5 Sonnet]

Yes, you can use `cut` to extract just the hex part from `xxd` output. Here's how you can do it:

For the standard `xxd` output format:

```bash
xxd file | cut -d' ' -f2-7
```

This command does the following:

- `xxd file` generates the hexdump
- `cut -d' ' -f2-7` cuts the output using space as a delimiter and selects fields 2 through 7, which contain the hex values

:::

Almost correct, the correct command is actually `cut -d' ' -f2-9`. Now I can decode the message:

![](https://im.dt.in.th/ipfs/bafybeidxqd7dfg2nynx2otxy2mkykzgbfxdfbfwy4zf3gzv6f2yqlsak6m/image.webp)

## Notes on communication flow

### Upon first communication

Upon connection, we receive:

```json
  "connectionNotify": {
    "connectNum": 1,
    "inControl": false
  }
```

### Requesting control

Then we send this message to request control to the camera:

```json
  "controlRequest": {
    "token": "AAaaaAAAAaaAaaaaAAAAaaaAAaAAaa"
  }
```

It will send a success message back:

```json
  "controlResponse": {
    "success": true
  }
```

It will also send the serial number which we need to use in later messages:

```json
  "deviceInfoNotify": {
    "deviceSerialNum": "99999999999999"
    // ...
  }
```

### Heartbeating

Every once in a while, we must send a heartbeat message to keep the connection alive:

```json
  "heartbeatRequest": {}
```

### Controlling pan and tilt speed.

Send this message to control the pan and tilt speed.

```json
  "uvcExtendRequest": {
    "data": [
      1,
      4,
      255,
      2
    ],
    "curDeviceSerialNum": "99999999999999",
    "paramType": PARAM_PAN_TILT_RELATIVE,
    "selector": XU_PANTILT_RELATIVE_CONTROL,
    "presetPosIndex": -1
  }
```

The data format is `[signX, magnitudeX, signY, magnitudeY]`.

- Sign is 0 for no movement, 1 for positive, and 255 for negative.
- Magnitude is a positive integer. From our testing we don’t recommend going over 30.

### Controlling zoom level

```json
  "uvcRequest": {
    "curDeviceSerialNum": "99999999999999",
    "paramType": PARAM_ZOOM,
    "value": 100
  }
```

The value must be between 100 and 400.

## Code

Check out [the code on GitHub](https://github.com/creatorsgarten/insta360-link-controller).

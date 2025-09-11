---
public: true
aliases:
  - 20210919T162420Z9778
---

# Jamulus protocol study notes

Examine the first 2 bytes of each packet to determine the packet type.

- Begins with `00 00` — control packet
- Otherwise, it is an Opus packet.

## Flow

1. Client streams Opus frames to server.
2. Server sends 0x1f (31: MUTE_STATE_CHANGED).
   - Client acknowledges.
3. Server sends 0x20 (32: CLIENT_ID).
   - Client acknowledges.
4. Server sends 0x18 (24: CONN_CLIENTS_LIST).
   - Client acknowledges.
5. Server sends 0x22 (34: REQ_SPLIT_MESS_SUPPORT).
   - Client sends 0x23 (35: SPLIT_MESS_SUPPORTED).
     - Server acknowledges.
   - Client acknowledges.
6. Server sends 0x03f7 (1015: CLM_CHANNEL_LEVEL_LIST).
7. Server sends 0x15 (21: REQ_NETW_TRANSPORT_PROPS).
   - Client sends 0x14 (20: NETW_TRANSPORT_PROPS).
     - `a5 00 00 00` — packet size 165
     - `02 00` — block size factor 2
     - `02` — stereo
     - `80 bb 00 00` — 48000 Hz
     - `02 00` — opus
     - `00 00` — no flags
     - `00 00 00 00` — no extra parameters
   - Client acknowledges.
8. Server sends 0x0b (11: REQ_JITT_BUF_SIZE).
   - Client sends 0x0a (10: JITT_BUF_SIZE).
     - `04 00` — jitter buffer size of 4
9. Server sends 0x17 (23: REQ_CHANNEL_INFOS).
   - Client sends 0x16 (22: CHANNEL_INFOS).
     - `d3 00` — thailand
     - `07 00 00 00` — instrument id 7
     - `01` — skill level 1
     - `0f 00` — name length 15
     - (name)
     - `00 00` — city length 0
     - (city)
   - Client acknowledges.
10. Server sends 0x1d (29: VERSION_AND_OS).
    - `00` OS
    - `05 00` version length
    - (version)
    - Client sends 0x14 (20: NETW_TRANSPORT_PROPS).
      - With flags `01 00` to indicate support for sequence number.
    - Client acknowledges.
11. At this point server is now streaming audio.

## Opus packet

<https://datatracker.ietf.org/doc/html/rfc6716#section-3.2>

First byte:

- `& 0x04` If set, it is stereo, otherwise it is mono.

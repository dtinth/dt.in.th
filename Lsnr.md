---
public: true
title: '@lsnr'
---

::::::::split

# <span class="text-[#8b8685]">@</span><span class="text-[#d7fc70]">lsnr</span>

:::lead
**@lsnr** is a [LINE](https://line.me/) chatbot that transcribes speech to text.
:::

:::::::aside

:::figure[[Click here to add @lsnr on LINE](https://line.me/R/ti/p/%40lsnr)]{.n-qr}
[![Lsnr LINE Bot QR Code](https://qr-official.line.me/sid/L/lsnr.png)](https://line.me/R/ti/p/%40lsnr)
:::

:::::::

::::::::

<div class="n-lsnr-highlights not-prose">
<section>

![](https://im.dt.in.th/ipfs/bafybeieypfuq4fy3aneqwtd46okmaryogu5efjmzx4emjx3iya7f3bdybq/image.webp)

**@lsnr transcribes your voice messages**

Send it a voice message and get back a transcription. Tap “copy to clipboard” to quickly copy the transcription.

</section>
<section>

![](https://im.dt.in.th/ipfs/bafybeihp5ypqhtamttux3nj45awwkruvvgy4ytxuv6s6ffyxb3vpndgqni/image.webp)

**Better transcription quality**

@lsnr can accurately transcribe technical terms and mixed English-Thai speech, powered by [Google's Gemini model](https://ai.google.dev/gemini-api/docs/audio).

</section>
<section>

![](https://im.dt.in.th/ipfs/bafybeibkzlgolpoaydjjfroimtn4przmk54hp2yagc24mx3jgv5gzfatta/image.webp)

**Group chat support**

Invite @lsnr to your LINE group chats to have it transcribe voice messages for everyone.

</section>
<section>

![](https://im.dt.in.th/ipfs/bafybeiaythcs3wqx6ounoj6k7fte6empgyyht7lonbk47qusuiqheyn3z4/image.webp)

**Transcribe up to 10 minutes**

Take your time to speak. Pause as needed. @lsnr can handle voice messages up to 10 minutes long.

</section>
<section>

![](https://im.dt.in.th/ipfs/bafybeidenqcn2as3yx7hfpqt4e3pdw52onvyy6mply3rwckgnhgb37dtae/image.webp)

**Your voice memo**

Record on the go and access your transcriptions from any device where you use LINE. Perfect for brain-dumping ideas.

</section>
<section>

![](https://im.dt.in.th/ipfs/bafybeiblutugjjvc63ntoisdihiz3dbv5j5q5etqrlss7hao753k5qfgb4/image.webp)

**Webhooks**

Power users can configure a webhook URL to integrate @lsnr into a custom workflow.

</section>
<section>

![](https://im.dt.in.th/ipfs/bafybeif3t7ljnzeuynzzblog3fjyxmhbshfmdu2og5lhp2um53ym34xbsa/image.webp)

**Add to home screen for quick access**

Go to <iconify-icon icon="mdi:menu" inline></iconify-icon> Menu &rarr; <iconify-icon icon="mdi:cog-outline" inline></iconify-icon> Settings &rarr; Create shortcut for chat for easy access to @lsnr from your phone home screen.

</section>
<section>

![](https://im.dt.in.th/ipfs/bafybeib2krhg3iwfs57wpfjlai6i423p3lkmmbceximt2fbdhky25dganu/image.webp)

**Share to @lsnr from other apps**

You can use your phone's <iconify-icon icon="mdi:share-variant" inline></iconify-icon> Share feature to (e.g.) send your call recordings and voice memos to @lsnr for transcription.

</section>
</div>

<div v-if="false">

## Features

::::::::split

### Better Transcription Quality

Unlike built-in phone transcription features, @lsnr uses Google's [Gemini multimodal model](https://ai.google.dev/gemini-api/docs/audio) which excels at:

- **Technical terms** - Accurately transcribes technical vocabulary that often trips up standard speech recognition
- **Mixed languages** - Handles both English and Thai seamlessly within the same recording

:::::::aside

:::figure[@lsnr is able to accurately transcribe technical terms in Thai text]{.framed}
![](https://im.dt.in.th/ipfs/bafybeiggtyy4ytwwljtkjejzitpxmysi7kvsymud42ds2dcok2lf62g7re/image.webp)
:::

:::::::

::::::::

::::::::split

### Group Chat Support

**You can add @lsnr to your LINE group chats.** Whenever anyone sends a voice message, the bot automatically replies with the transcription, making it convenient for teams and collaborative workflows.

This is especially useful during events when things get hectic. Instead of struggling to type everything out while multitasking, team members can quickly send voice messages and have them instantly transcribed for everyone to read.

:::::::aside

:::figure[@lsnr will reply to voice messages in a group chat with the transcription.]{.framed}
![](https://im.dt.in.th/ipfs/bafybeidh6yjlul5vv55ltuhlnnlcyntrxhlw2bzwxa67dgvniwkpfpgggm/474445130_10223399130160639_7350710332846396630_n.jpg)
:::

:::::::

::::::::

::::::::split

### Take Your Time to Speak

Unlike traditional dictation tools that stops when you pause for too long, @lsnr lets you take your time while speaking:

- **No distracting feedback** - Record at your own pace without immediate transcription that can be distracting
- **Mobile freedom** - Record while walking, lying on a bed, or anywhere you're comfortable
- **Continuous recording** - Record up to 10 minutes without interruption

Perfect for brain-dumping. Blabber away, and get a full transcription, which you can pass on to other AI tools for summarization, drafting, or brainstorming.

:::::::aside

:::figure[I often take my phone, walk away from my computer, and talk to @lsnr while walking around.]{.framed}
![](https://im.dt.in.th/ipfs/bafybeiddxh43xq45o4lqomx3qqtnm2nw55m2giwxtkbw4734oc4ob6yipa/image.webp)
:::

:::::::

::::::::

::::::::split

### Webhook Integration

Power users can configure a webhook URL to integrate @lsnr into your personal workflow.

After transcribing, the bot makes an HTTP POST request to your specified endpoint with each transcription, enabling seamless automation and custom processing.

:::::::aside

:::figure[Webhook configuration page]{.framed}
![](https://im.dt.in.th/ipfs/bafybeic3isqvg3cc54npn6n4wd26boppe2qspwfiyx7pfjufydygxgdje4/image.webp)
:::

:::::::

::::::::

</div>

## Example use case

When creating a Jira issue, I first do a **brain dump** by picking up my phone and talk to @lsnr about the situation while walking around (it helps me to get thoughts out of my head!), then I let [Atlassian Rovo](https://www.atlassian.com/platform/artificial-intelligence) draft the issue description based on my yapping.

![](https://im.dt.in.th/ipfs/bafybeiardjriyoenesolc76j5r7tbedevjd4s6ee5n4x2q2cadar43jugq/image.webp)

## Price

Currently, @lsnr is **free to use** with rate limiting in place to keep this hobby project sustainable. However, I may introduce a paid plan in the future to cover operational costs.

::cta[Add @lsnr on LINE]{href="https://line.me/R/ti/p/%40lsnr"}

## Usage Notes

### Support, Performance and Safety

- **This chatbot relies on Google's Gemini API** and I have no direct control over the model's behavior or performance, so transcription quality may vary. I chose to use their model because, [based on my own research](JavaScriptBangkokTalk2024), it outperforms the other alternatives for my use cases.
- **Safety filters** from Google may block transcriptions that potentially violate their [Prohibited Use Policy](https://policies.google.com/terms/generative-ai/use-policy).
- **No support is provided.** This chatbot is a hobby project and I cannot guarantee its availability or performance. If you encounter any issues, please try again later or use alternative methods. If you personally know me, feel free to give me feedback, but I cannot guarantee that I will be able to help.
- **Length:** For best result and performance, avoid sending voice messages longer than 5 minutes.

### Alternative Method (Free)

- You can achieve similar voice-to-text functionality for free by directly using [Google AI Studio](https://aistudio.google.com/).

### Privacy and Data Handling

- **We do not store your audio files or transcribed text** — during processing, @lsnr downloads your voice message from LINE, send it to Gemini API, receive the result, and pass it back to LINE. After that, both the audio and text are immediately discarded from our servers. (Therefore, if you lose your audio / text messages, we cannot recover them for you.)
- **We collect usage statistics** (user id, time, duration, message length, etc) for debugging and service improvement purposes. They do not include your actual audio or text content.
- **Your data is processed by Google APIs** according to their terms:
  - [Gemini API Additional Terms of Service, Data Use for Paid Services](https://ai.google.dev/gemini-api/terms#data-use-paid)
  - [Google Data Processing Addendum for Products Where Google is a Data Processor](https://business.safety.google/processorterms/)

<style scoped>
  .n-qr img {
    width: 192px;
    margin-left: auto;
    margin-right: auto;
  }
  /* Show max 2 columns */
  .n-lsnr-highlights {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  @media (min-width: 640px) {
    .n-lsnr-highlights {
      grid-template-columns: 1fr 1fr;
    }
  }
  .n-lsnr-highlights img {
    aspect-ratio: 3 / 2;
    border-bottom: 1px solid #656463;
    margin-bottom: 0.2rem;
  }
  .n-lsnr-highlights section > p:nth-child(1) {
    position: relative;
  }
  .n-lsnr-highlights section > p:nth-child(1)::after {
    /* Inset shadow */
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 1rem #656463;
    pointer-events: none;
  }
  .n-lsnr-highlights section {
    background: #252423;
    border: 1px solid #8b8685;
    padding-bottom: 0.6rem;
    box-shadow: 2px 2px #00000040;
    overflow: hidden;
    border-radius: 0.2rem;
  }
  .n-lsnr-highlights section > p:nth-child(1) ~ p {
    padding: 0.4rem 0.8rem 0;
  }
  .n-lsnr-highlights section > p:nth-child(2) {
    color: #bef;
  }
  .n-lsnr-highlights section > p:nth-child(2) ~ p {
    font-size: 0.8em;
    opacity: 0.8;
  }
  .n-lsnr-highlights section > p:nth-child(2) ~ p a {
    color: #ffb;
  }
</style>

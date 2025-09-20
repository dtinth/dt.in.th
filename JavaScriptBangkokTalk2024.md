---
title: What I use and what I build to make my life easier this year (2024 talk)
public: true
wide: true
---

# What I use and what I build to make my life easier this year

This is a [talk](Talks) I gave at the JavaScript Bangkok 2.0.0. [Talk page.](https://javascriptbangkok.com/session/728553/)

<youtube-embed video-id="vyGd6lh5o7M"></youtube-embed>

## Links, resources and references

- **About me**
  - [YouTube channel](https://www.youtube.com/@dtinth)
  - [More notes from me (notes.dt.in.th)](/)
- **Creatorsgarten**
  - [Creatorsgarten website](https://creatorsgarten.org/)
  - [Creatorsgarten events](https://creatorsgarten.org/events/)
  - [Creatorsgarten public wiki](https://creatorsgarten.org/wiki/)
  - [Videos site](https://creatorsgarten.org/videos/)
  - [YouTube channel](https://www.youtube.com/@creatorsgarten)
  - [Facebook page](https://www.facebook.com/creatorsgarten)
- **Subtitling**
  - [Amara](https://amara.org/)
  - [Happy Scribe Free Subtitle Editor](https://www.happyscribe.com/subtitle-tools/online-subtitle-editor)
  - [Netflix’s Thai Timed Text Style Guide](https://partnerhelp.netflixstudios.com/hc/en-us/articles/220448308-Thai-Timed-Text-Style-Guide)
- **Large Language Models**
  - [ChatGPT](https://chat.openai.com/), [Claude.ai](https://claude.ai/), [Google Gemini](https://gemini.google.com/), [Perplexity](https://perplexity.ai/)
  - [OpenAI Platform](https://platform.openai.com/), [Anthropic Console](https://console.anthropic.com/), [Google AI Studio](https://aistudio.google.com/), [pplx-api](https://docs.perplexity.ai/home)
- **Testing LLM capabilities**
  - [Yak shaving story](https://seths.blog/2005/03/dont_shave_that/)
  - [Hot pot sauce research](https://www.facebook.com/photo.php?fbid=10221899535271704&set=pb.1658509977.-2207520000&type=3)
- **Open source tools**
  - [Open WebUI](https://openwebui.com/) + [LiteLLM](https://litellm.ai/)
    - [My Docker Compose setup](OpenWebUI#docker-compose-setup)
  - [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted)
  - [r/selfhosted](https://www.reddit.com/r/selfhosted/)
  - [Grist](Grist)
    - [Grist API client library for Node.js](https://github.com/gristlabs/grist-api)
  - [continue.dev](https://continue.dev/)
- **Automatic subtitling**
  - [Speech-to-Text comparison Google Docs](https://docs.google.com/document/d/1dD_vJnWaTyLFpo5XZi7gnX9-rmD1N5_hwf7Xszsqj08/edit)
  - [OpenAI Whisper](https://openai.com/index/whisper/)
    - [OpenAI’s Speech-to-Text guide on improving reliability](https://platform.openai.com/docs/guides/speech-to-text/improving-reliability)
    - [Poom’s video about “Software Engineering Beyond the AI Hype” that I used as a test video for Whisper + LLM workflow](https://www.youtube.com/watch?v=57B_h6jTaN8)
  - [Gemini’s audio capabilities](https://ai.google.dev/gemini-api/docs/audio)
    - [Write-up about using Gemini model for ASR](https://www.facebook.com/photo.php?fbid=10221796079365371&set=pb.1658509977.-2207520000&type=3)
  - [Write-up about the full workflow](https://www.facebook.com/photo.php?fbid=10221826747532056&set=pb.1658509977.-2207520000&type=3)
  - [GitHub repository: dtinth/autosub](https://github.com/dtinth/autosub)
  - [Mikelopster’s write-up on his automatic subtitles workflow](https://www.facebook.com/photo.php?fbid=414447024953918&set=pb.100091658708201.-2207520000&type=3)
  - [iApp Subtitle Generator](https://subtitle.iapp.co.th/)
    - [iApp ASR PRO](https://iapp-technology.gitbook.io/iapp-technology-documentation/speech-ai/automatic-speech-recognition-asr/features/iapp-asr-pro)
- **Learning in public**
  - [จงเรียนรู้ในที่สาธารณะ (translation)](https://creatorsgarten.org/wiki/LearnInPublic)
  - [Learn in Public (original article)](https://www.swyx.io/learn-in-public/)
- **TypeScript tooling**
  - [tsx](https://tsx.is/)
  - [Vitest](https://vitest.dev/)
  - [tsconfigs](https://github.com/tsconfig/bases)
  - [JSR.io](https://jsr.io/)
- **More AI tools**
  - [v0 by Vercel](https://v0.dev/)
- **My own subtitle editor**
  - [Google Apps Script](https://developers.google.com/apps-script)
  - [GitHub repository: dtinth/subtitle-spreadsheet](https://github.com/dtinth/subtitle-spreadsheet)
- **More on Creatorsgarten video pipeline**
  - [Prompts used to generate descriptions and chapters](https://creatorsgarten.org/wiki/AIVideoTools)
  - [Talk about how we use GitHub to manage videos](https://creatorsgarten.org/videos/github1/logistic)
  - [Videos repository on GitHub](https://github.com/creatorsgarten/videos)

<template v-if="false">

## Transcript

::::split

![](https://im.dt.in.th/ipfs/bafybeifwzvdmo6js6vveilkdpjblq3a5ihq6w22slv4aem6nj4o22s24eq/image.webp)

:::aside
สวัสดีทุกคนนะครับผม
ก็ขอต้อนรับเข้าสู่เซสชั่น “What I use and what I built to make my life easier this year” นะครับ
ที่ผมตั้งชื่อหัวข้อไว้แบบเนี้ย เพราะว่าผมมีหลายๆ เรื่องที่อยากจะมาเล่าให้ฟังมากๆ เลยครับ จนเลือกไม่ถูกเลยว่าจะพูดเกี่ยวกับเรื่องอะไร ก็เลยกะว่าจะจับเอาเรื่องต่างๆ ที่ผมได้เรียนรู้ในปีเนี้ย มามัดรวมกันเป็นเซสชั่นนี้นะครับ ฉะนั้นเนี่ยก็อาจจะจับฉ่ายนิดนึงนะครับผม

โอเค คือในปีเนี้ยผมได้ทำหลายๆ โปรเจกต์ครับ ทั้งโปรเจกต์ที่ทำงาน โปรเจกต์งานอดิเรกด้วย
แล้วก็พบว่าในปีเนี้ย มันมีโปรเจกต์หลายตัวมาก ที่ถ้าเป็นผมเมื่อปีที่แล้วเนี่ย ผมจะทำโปรเจกต์พวกนี้ไม่ได้เลย ซึ่งแน่นอนครับ มันเกิดมาจากการมาของพวก Generative AI และ LLM เนาะ

ซึ่งเอาจริงๆ อ่ะ ผมค่อนข้างสองจิตสองใจเกี่ยวกับหัวข้อนี้เหมือนกัน เพราะว่าผมรู้สึกว่าแบบ talk เกี่ยวกับเรื่อง AI ผมว่า มันเยอะจนมันจะเกลื่อนแล้วอ่ะ แต่สำหรับผม มัน impact workflow ต่างๆ ของผมมาก

ก็เลยคิดว่าอยากจะให้ session เนี้ย เหมือนเป็นการตกตะกอนเรื่องที่ได้เรียนรู้ของตัวเองนะครับ

นอกจากนี้ครับ ปีนี้ผมได้เรียนรู้เครื่องมือหลายๆ ตัว ที่มัน impact การทำงานของผมมาก session เนี้ย ก็เลยอยากจะมาแนะนำเครื่องมือต่างๆ ให้ได้รู้จักกันนะครับ
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeiftj4onamxa6q4aqvaceucaat4xsauckemmnxsem2uftpcuoliwvy/image.webp)

:::aside
ก็ขอแนะนำตัวก่อนละกันครับ ผมชื่อไทนะครับ ไท ปังสกุลยานนท์ ปัจจุบันทำงานอยู่ที่ Eventpop

ผมทำ community อยู่ชื่อว่า Creatorsgarten ซึ่งเดี๋ยวเราจะพูดกันถึงต่อไปนะครับ แล้วก็มีเว็บไซต์อยู่ที่
[dt.in.th](https://dt.in.th/) และมี YouTube Channel ชื่อ [dtinth](https://youtube.com/@dtinth) นะครับ ก็ไป subscribe กันได้นะครับ
:::

::::

### Main project for this talk

::::split

![](https://im.dt.in.th/ipfs/bafybeigjjtzlohr2y3idlpkv4hznlcj4eptngh2wlxp4obcuaxgitrznyq/image.webp)

:::aside
เข้าเรื่องดีกว่าครับ ก็สำหรับ session นี้ ผมจะพูดถึง project นึงเป็นหลักครับ
นั่นก็คือ [เว็บไซต์ของ creatorsgarten.org](https://creatorsgarten.org/) ครับ
ก็จะเป็นเว็บของกลุ่ม Creatorsgarten แปลตรงๆ ก็คือสวนนักสร้างเนี่ยแหละ
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeidtxxcbbgapokee4k25aeiy2uvkjt3acigf2ouewpeuz554wsgzli/image.webp)

:::aside
กลุ่มเราจัด event กันหลากหลายรูปแบบมาก ไม่ว่าจะเป็นพวก event สาย tech, สายศิลปะ, คณิตศาสตร์, วิทยาศาสตร์, การศึกษา, การเงิน, รวมถึงเรื่องความรักด้วย ซึ่งทั้งนี้ก็ขึ้นอยู่กับว่าเจ้าของงานอยากจะจัด event แบบไหน ซึ่งแต่ละ event ก็จะลีดโดยคนละคนกัน โดยเราไม่ได้ fix ว่าจะเป็น event หมวดไหน เพราะเราจะมีความ เรียกว่า anti-discipline นิดหน่อยก็คือ พยายามเอาหลายๆ เรื่องมายำรวมกัน

พวกเราไม่ได้มีโครงสร้างหรือแผนงานที่ตายตัวครับ
ก็คือ ไม่ได้มีคณะกรรมการ หรือไม่ได้มี target อะไรเลยว่าปีนึงจะต้องจัดกี่งาน
แต่เวลาที่ใครก็ตามอยากจะจัด event เราก็มาคุยกัน ถ้าเขาพร้อมที่จะเป็น lead เราก็ช่วยให้งานมันเกิดขึ้นมาครับ

โดยกลุ่มเราเนี่ยจะมีพวก shared resource ต่างๆ เพื่อให้สามารถจัดงานได้ง่ายขึ้น ไม่ต้องเริ่มจากศูนย์ ก็คือเรามีเว็บไซต์, มี account Eventpop, มีเพื่อนๆ ที่มาช่วยเป็น volunteer ในงาน, แล้วก็
มีพวกเครื่องมืออุปกรณ์, มีแพลตฟอร์ม social, มี team live, รวมถึง channel YouTube ครับ
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeih4j4owmd6drfeqhglz7uxlar7im7ys6qdebi6chbrc5ak3iur2xu/image.webp)

:::aside
อย่างนึงที่ผมได้ทำในปีนี้ก็คือ [section วิดีโอบนเว็บไซต์ครับ](https://creatorsgarten.org/videos)

ก็จะเป็นหน้าที่รวบรวมวิดีโอจาก session ต่างๆ ที่เราอัปโหลดขึ้น YouTube แต่ว่าเรามีการจัด filter ต่างๆ เพื่อให้สามารถหาวิดีโอของแต่ละงาน และหาวิดีโอของแต่ละ speaker ได้ด้วย

ฉะนั้น speaker แต่ละคนเนี่ย ก็จะมีหน้าเว็บที่รวบรวมหัวข้อของ speaker คนนั้นอยู่ครับ
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeibd4shafdl5bph4zlr4tthccfbbx67sddojgz27hatgd6c2vewz5i/image.webp)

:::aside
คราวนี้แต่ละคลิป สิ่งนึงที่ผมอยากให้มีก็คือ อยากจะให้แต่ละคลิปมีบทถอดคำพูดแล้วก็มี subtitle
เพราะว่าเวลาผมดู YouTube ข้างนอก บางทีก็ไม่อยากเปิดเสียง แล้วก็ไม่อยากใส่หูฟัง ก็คิดว่าคงจะดีถ้ามันมี subtitle ให้อ่าน

ปกติคลิปภาษาอังกฤษ มันมี autogenerated captions อยู่แล้ว ซึ่งแม่นยำพอสมควร แต่พอเป็นภาษาไทย (เมื่อก่อน YouTube ไม่มี ตอนนี้มีแล้ว) สำหรับพวก tech talk ที่มันมีเนื้อหาที่เป็น technical มีคำศัพท์เทคนิคเยอะ มันยังไม่แม่นยำพอ

แต่พอเรามีบทถอดคำพูดอยู่บนหน้าเว็บ เนื้อหามันจะครบถ้วนขึ้น แล้วมันก็น่าจะเป็นผลดีต่อ SEO ด้วยเนาะ
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeierydx6kqmsp3fjwax6tydcwfkljkwlryb3virbskqpf4gujep2xe/image.webp)

:::aside
นอกจากบทถอดคำพูดแล้วเนี่ย ก็คือบางวิดีโอมันก็ยาว ก็จะอยากให้มันมีการแบ่งเนื้อหาเป็น chapter ต่างๆ เพื่อให้ทุกคนสามารถเข้ามาดู แล้วก็เห็นภาพรวมเกี่ยวกับเนื้อหาก่อนที่จะเข้าไปดูจริงๆ ได้นะครับ

ฉะนั้นโปรเจกต์เนี้ย ก็อาจจะเฉพาะทางนิดนึง ก็เชื่อว่าหลายๆ คนที่ฟัง session นี้ก็อาจจะไม่ได้สนใจเรื่องการทำ subtitle มากซักเท่าไหร่เนาะ แต่สำหรับผมมันเป็นอะไรที่ได้เรียนรู้เยอะแบบ เยอะมากๆ ก็เลยอยากจะขอใช้โปรเจกต์นี้เป็นตัวอย่างเพื่อถอดบทเรียนออกมาครับ
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeiaowfcuexfsbemx727je7wrtiptoyqkq3mq2ido7knkbuaxxwvspu/image.webp)

:::aside
ก่อนหน้านี้ผมก็ทำ subtitle ให้คลิปใน channel YouTube ตัวเองนะครับ ก็คือทำแบบ manual เลย — ฟังเอง ถอดคำพูดเอง ทำ subtitle เอง เพราะมันจะมีโปรแกรมฟรีๆ เช่น Amara หรือ Happy Scribe — ใช้ฟรี, support ลิงก์ YouTube ด้วย, แล้วก็มีคีย์ลัดเยอะมาก สะดวกมากๆ

แต่เวลาทำ subtitle ทีเนี่ย คือแบบเหนื่อยมาก จากที่เคยลองทำ คลิป 10 นาที ผมใช้เวลาทำประมาณชั่วโมงนึง
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeiddaxqg3bmbvv6my5hm2rsrnjxwu2itlfekaq6hvsva4kx527246u/image.webp)

:::aside
ฉะนั้น ถ้าเรามีวิดีโอคอนเทนต์ 1 ชั่วโมงเนี่ย… ก็คูณเข้าไปครับ ก็อาจจะใช้เวลาประมาณ 6-8 ชั่วโมงครับ (ซึ่งผมว่าผมก็ใช้คอมพิวเตอร์คล่องแล้วนะ ผมว่าผมก็พิมพ์เร็วใช้ได้… แต่ก็ยังใช้เวลาเยอะมากๆ อยู่ดี) แต่ข้อดีคือพอทำเองก็ไม่ต้องจ่ายตังค์

แต่พอผมทำคลิปนึงเสร็จ ผมแทบจะเบิร์นเอาท์ไปเลย — และนี่แค่วิดีโอของตัวเองนะครับ ถ้าเป็นวิดีโอของคนอื่นเนี่ย ผมก็คงไม่ได้มีไฟจะมาทำให้ขนาดนั้นถ้ามันต้องใช้ effort เยอะขนาดนี้ครับ

อีกทางเลือกนึงก็คือ เราอาจจะจ้างมืออาชีพมาทำ subtitle ให้เรา ซึ่งเท่าที่ผมเคยลองหาดู จะคิดเรตเป็นนาทีครับ ถ้าเราตีเป็นชั่วโมงเนี่ย ราคาก็เป็นหลักพันครับ (ซึ่งจากที่ผมเคยลองทำ subtitle ด้วยตัวเอง ก็คิดว่าราคานี้สมเหตุสมผลละ เพราะผมทำ subtitle เองทีคือเลือดตาแทบกระเด็น)
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeicwb2ty756on45jvyytekp424mtpfgltetjz34p4q7n6gvpwhzm4y/image.webp)

:::aside
แถมถ้าเป็นการทำ subtitle มืออาชีพ จะเห็นว่ามันมี guideline เรื่องการทำ subtitle เต็มไปหมดเลย ว่าควรเอาอะไรไว้ตรงไหน สะกดตัวเลขยังไง อะไรพวกนี้… อันนี้ที่โชว์ให้ดูเป็น [guideline ของ Netflix](https://partnerhelp.netflixstudios.com/hc/en-us/articles/220448308-Thai-Timed-Text-Style-Guide) นะครับ

ซึ่งงาน meetup ของเราเนี่ย ส่วนมากก็จะมีคอนเทนต์ประมาณ 2-3 ชั่วโมง งบก็ไม่น่าจะพอ หรือเอาจริงๆ คือเราจัดงานฟรีซะเป็นส่วนมาก ฉะนั้นเราไม่มีงบอะไรเลยด้วยซ้ำครับ แต่ก็ เราไม่ได้ต้องการ subtitle
ระดับ professional ระดับ Netflix ขนาดนั้น แค่มีบทถอดคำพูดไว้ให้อ่านได้ผมว่าก็ดีเกินพอแล้ว
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeibeunudkhbe3ii2s2t4sln5mflc3znp2omvch6oqrbezjaqokjtui/image.webp)

:::aside
ในช่วงปีสองปีที่ผ่านมา ผมเลยศึกษาเกี่ยวกับเครื่องมือต่างๆ ที่จะมาช่วยกระบวนการนี้ครับ

แต่เดี๋ยวผมจะขอพักโปรเจกต์นี้ไว้ก่อน

ผมจะขอสลับไปพูดเกี่ยวกับเรื่อง Large Language Model ก่อนครับ
:::

::::

### Large language models

::::split

![](https://im.dt.in.th/ipfs/bafybeigulpv72g5iodg7wvscme7xbbjepvxnmg2skpg2jgwvncwcz53eqy/image.webp)

:::aside
ปัจจุบัน ตัวที่ได้รับความนิยมสูงสุดก็น่าจะเป็น [ChatGPT](https://chat.openai.com/), [Claude](https://claude.ai/), กับ [Gemini](https://gemini.google.com) เนอะ

ก็จะมีคนมาถามผมบ่อยๆ ว่า “ถ้าเลือกได้แค่ตัวเดียวเนี่ย จะจ่ายเงินให้ตัวไหนดี” เพราะแต่ละตัวเนี่ย $20/เดือนทั้งนั้นเลย ถ้าอยากใช้ทั้ง 3 ตัวก็ $60/เดือน ก็ไม่รู้จะคุ้มมั้ย ดังนั้นถ้าให้เลือกเนี่ย จะจ่ายตัวไหนดี

ซึ่งผมให้คำตอบไม่ได้เลยครับ เพราะว่า แต่ละตัวมีข้อดีข้อเสียต่างกันหมดเลย ผมเลยต้องใช้ทุกตัว แต่ขณะเดียวกัน ผมก็ไม่ได้จ่ายเงิน $20/เดือน ให้แอปไหนซักแอปเลย
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeidipefx3kdll5j3wsxdc4mrh6hqmglzq3i4rnukqyg3obnetb3qoi/image.webp)

:::aside
ก็คือพวกแอป ChatGPT, Claude, Gemini เนี่ย ผมเรียกว่าเป็น service — เป็นบริการที่ออกแบบมาให้คนทั่วไปที่อาจจะไม่ได้มีความรู้เชิงเทคนิคสามารถใช้งานได้ง่าย — ซึ่ง service พวกนี้ ถ้าอยากจะใช้เวอร์ชั่นที่ฉลาดๆ ฟีเจอร์เยอะๆ ก็ต้องเหมาจ่ายรายเดือน $20/เดือน

แต่บริษัทพวกนี้ ก็ได้พัฒนาโมเดลที่เปิดให้นักพัฒนา หรือคนที่มีความสามารถใช้งานมันเป็น สามารถเข้าไปใช้งานได้ตรงๆ ได้ด้วย โดยโมเดลพวกนี้ก็จะคิดราคาตามปริมาณที่ใช้งานจริง (คิดเป็น “token”) ซึ่งถ้าใช้น้อยก็จ่ายน้อย ใช้เยอะก็จ่ายเยอะครับ

ซึ่งเวลาผมไปแนะนำวิธีนี้ ก็จะมีคนบอกว่า “กลัวว่าถ้าใช้เยอะเกินแล้ว สุดท้ายมันจะเสียตังค์เยอะกว่าเหมาจ่าย”
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeicxronfokr5osu6udz26pjfa7s6khsmirda4ngkdlzr6sobxqpxrm/image.webp)

:::aside
ซึ่งจากประสบการณ์ของผมนะครับ คือผมใช้เองคนเดียวทั้ง 3 เจ้า (อันนี้ผมเอา billing ของตัวเองมาให้ดูนะครับ) ไม่เคยใช้รวมกันเกิน $50/เดือนเลย และส่วนมากผมจะใช้ไม่ถึง
$20/เดือน ด้วยซ้ำ ฉะนั้นก็สามารถไปลองเล่นกันดูได้นะครับ

บางเจ้าก็จะเป็นแบบเติมเงิน ก็ไม่ต้องกลัวว่าจะโดน bill shock, ส่วนบางเจ้าก็เป็นเก็บตังค์รายเดือนนะครับ ก็ตั้ง budget alert ไว้ได้นะครับ
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeifalrg33rj7omeq5nisvvjbvyfkynhfzfzym76baiwldm7wtajhlm/image.webp)

:::aside
เราสามารถใช้งานโมเดลพวกเนี้ยโดยไม่ต้องเขียนโค้ดเลยด้วย — ก็คือเข้าไปใช้งานที่คอนโซลของแต่ละเจ้าครับ

อย่างในรูป ด้านซ้ายคือ [ChatGPT](https://chat.openai.com/), ส่วนด้านขวาคือ [OpenAI platform](https://platform.openai.com/) ครับ

จะเห็นว่าการใช้งาน คือคล้ายๆ กันเลย ก็คือเป็นการแชท — แต่ใน OpenAI platform จะเห็นว่ามันมี
setting ต่างๆ ให้เลือกเยอะขึ้นด้วยครับ (เช่นเดียวกันกับ [Claude](https://claude.ai/) ([Anthropic Console](https://console.anthropic.com/)) และ [Gemini](https://gemini.google.com/) ([Google AI Studio](https://aistudio.google.com/)) ครับ)

ก็อย่างที่บอกครับ แต่ละโมเดลจะมีจุดเด่นจุดด้อยแตกต่างกันออกไป ถ้าเราอยากจะรู้ต้องทำยังไง…
:::

::::

### Testing LLM capabilities

::::split

![](https://im.dt.in.th/ipfs/bafybeidmsd6lkpssppcdw67iouk4wjofdea5wmz5ei2t7t44mvhdgypyha/image.webp)

:::aside
ก็ต้องทดสอบทดลองดูครับ

โอเค ในตัวอย่างนี้ **ผมต้องการจะทดสอบความสามารถด้านภาษาไทย**ของโมเดลแต่ละตัว ผมเลยเอา[เรื่องเล่าภาษาอังกฤษเรื่องนึงเกี่ยวกับ Yak shaving](https://seths.blog/2005/03/dont_shave_that/) เอามาแปะ แล้วก็เขียนคำสั่งใน prompt ว่า
“ช่วยเล่าเรื่องนี้เป็นภาษาไทยให้หน่อย” เสร็จแล้วผมก็ลองเทียบผลลัพธ์ดู (ผมจะลองเริ่มจากตัวฟรีก่อนนะ)
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeidnzhumtptudrt6khi7gtsg67vxxfmsujlrytv6776inrbkk7r3fi/image.webp)

:::aside
ผมพบว่าทั้ง Claude กับ ChatGPT แปลชื่อเรื่องได้อย่างถูกต้อง ก็คือ “Yak shaving” แปลว่า “การโกนขนจามรี” …แต่ Gemini ดันแปลเป็น “การเลื่อยขนยักษ์”

เอาจริงๆ Gemini มันแปลออกมาหลายแบบมาก แต่ไม่ว่าผมจะลองกี่ครั้ง เหมือนมันก็ไม่รู้สักทีว่า Yak เนี่ย ในภาษาอังกฤษมันคือ จามรี นะครับ

ฉะนั้นพอผมเอาตัวฟรีมาเทียบกันแล้วเห็นผลลัพธ์ออกมาแบบนี้แล้ว คือแบบ… ใครมันจะไปกล้าจ่ายตังค์ให้ Gemini Advance? ใช่มั้ย
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeicqgrlvun6mwv5dmxmk6hivw6o2jcplcgeet4xdaisuxwf3vsxygm/image.webp)

:::aside
อืม วันก่อนผมลองคุยกับ Gemini ดูนะครับว่า “Can you speak Thai?” พูดภาษาไทยได้มั้ย? คิดว่ามันตอบว่าอะไรครับ?

มันตอบว่า… อันยองฮาเซโย แต่ตอบเป็นภาษาไทยนะ แล้วก็บอกว่าพูดภาษาไทยไม่ได้ (แต่ตอบมาเป็นภาษาไทย)… ผมก็ไม่รู้ทำไมมันมึนขนาดนี้

ไม่เป็นไร เมื่อกี้อาจจะไม่แฟร์เพราะว่าเราเอาตัวฟรีมาเทียบกันเนาะ ไหนเราลองจ่ายตังค์แล้วใช้ตัวที่ดีที่สุดของแต่ละเจ้าดูบ้าง
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeibui3obiknkw4dobcis2zgznuwgfxaxdy3lv7fawjcaystkneowhy/image.webp)

:::aside
ผมก็ลองทำแบบเดิมครับ แต่รอบนี้ไปใช้คอนโซลแต่ละตัวแทนเนอะ

รอบนี้ทั้ง 3 โมเดล แปลถูกต้องแล้วนะครับ
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeibydmxhz72kdmaldwqutxuds24mbujtqslpmmyskw74f3cys6m3ua/image.webp)

:::aside
เราก็ต้องเอาผลลัพธ์มากางดูว่าตัวไหนแปลออกมาได้ดีที่สุด… ซึ่งผมพบว่ารอบนี้ GPT-4o กับ Claude มันจะแปลเรื่องราวแบบตรงตัวมากๆ แต่ Gemini เนี่ย ผมว่ามันน่าสนใจกว่าตัวอื่น เพราะผมลองอ่านดูแล้ว รู้สึกเหมือนว่ามันพยายามทำให้เนื้อเรื่องมันเข้ากับบริบทคนไทยด้วย อย่างเช่น

- wax the car (ลงแว็กซ์รถ) Gemini เปลี่ยนเป็น “ล้างรถ”
- Home Depot (โฮมดีโป) มันก็เปลี่ยนเป็น “โฮมโปร”
- Tappan Zee Bridge ก็กลายเป็น “สะพานพระรามแปด”

อีกเรื่องนึงที่ผมพบคือ… ภาษาอังกฤษเนี่ย มันเป็นภาษาที่แทบทุกประโยค มันจะต้องมี subject (ประธาน)ซึ่งพอแปลเป็นภาษาไทยตรงๆ มันจะทื่อๆ แบบ… “ฉันสามารถยืม EZPass ของเพื่อนบ้านได้” แต่ Gemini ตัดคำว่าฉันออกไป ทำให้ฟังดูเป็นธรรมชาติมากขึ้นครับ

แถมรู้ด้วยว่า “Bob” น่าจะเป็นผู้ชายก็เลยเรียกว่า “ลุงบ๊อบ” (เอาจริงๆ ผมลองหลายรอบ บางทีมันก็เปลี่ยนชื่อลุงบ๊อบกลายเป็นลุงสมศักดิ์ให้เลยด้วย) แต่บางทีมันก็แปลตรงตัวเลยนะ แต่ว่า ฟีเจอร์นี้เป็นฟีเจอร์ที่ผมไม่เคยเห็น Claude หรือ GPT ทำให้เลยครับ

ฉะนั้นสำหรับโจทย์ “ช่วยเล่าเรื่องเป็นภาษาไทยให้หน่อย” ก็พบว่า พอเป็นโมเดลเสียเงิน ตัว Gemini Pro ชนะขาดไปเลยนะครับ
:::

::::

::::split

![](https://im.dt.in.th/ipfs/bafybeihrh6bt2wmellxoafgoslrmt6dd3brktlzxd2uasuuxpt7rc5nccm/image.webp)

:::aside
เพราะฉะนั้นเนี่ย เรื่องที่ผมอยากฝากไว้ให้ทุกคนลองก็คือ เดี๋ยวเนี้ยมันง่ายมากๆ ที่เราจะไปลองเล่นกับ AI โมเดลต่างๆ ตอนนี้แต่ละเจ้าก็ต่างแข่งกันทำให้ของตัวเองใช้งานง่ายมากที่สุด ราคาถูกที่สุด

ก็แนะนำให้ลองกันเยอะๆ ครับ
:::

::::

</template>

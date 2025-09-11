---
title: Building a personal but multi-tenant web page screenshotting service with Puppeteer and Vercel
project: personal-puppeteer
public: true
twitter: https://twitter.com/dtinth/status/1323687070519324673
devto: https://dev.to/dtinth/building-a-personal-but-multi-tenant-web-page-screenshotting-service-with-puppeteer-and-vercel-15b
facebook_copy: |
  ช่วงหลังๆ ที่ผมโพสต์บทความขึ้นเว็บ notes.dt.in.th แล้วเอามาแชร์บน Facebook จะเห็นว่า Preview image เป็น Screenshot ของหน้าบทความเลย

  ถึงแม้การใช้รูป Screenshot มันอาจจะดูไม่สวยเท่าทำรูปให้แต่ละบทความเอง …แต่วิธีนี้ก็ช่วยประหยัดเวลาได้เยอะมาก (เพราะไม่ต้องทำอะไรเลย) …และมองว่าการใช้ท่านี้ มันก็ยังดีกว่าการเอาหน้าตัวเองหรือโลโก้เว็บมาทำเป็น Preview image (เพราะถ้าทำแบบนั้น รูปมันจะไม่สื่อถึงเนื้อหาข้างในเลย)

  เบื้องหลังคือ ผมสร้าง API ที่รับ URL มา… จากนั้น API ตัวนี้จะใช้ Puppeteer เพื่อไป Screenshot หน้าเว็บ แล้วส่งรูปกลับมาให้ Browser

  ระบบเป็น stateless ทั้งหมด โดยวิธีการใช้งานคือเอา parameter ต่างๆ (URL, ความกว้าง, ความสูง) มาสร้างเป็น JWT แล้วก็เอามาประกอบเป็น URL ที่สามารถนำไปใส่ใน <meta property="og:image"> ได้เลย… วิธีนี้ทำให้ API ตัวนี้สามารถเอาไปรียูสกับหลายๆ โปรเจคได้อย่างปลอดภัย

  เนื่องจากเป็นการ generate screenshot แบบ on-the-fly… request แรกจึงอาจจะช้าหน่อย แต่ request หลังๆ ก็จะเร็วขึ้น เพราะ cache ไว้บน CDN แล้ว

  Deploy ขึ้น Vercel สะดวกมากๆ เพราะมี serverless function + CDN ให้ใช้ฟรีๆ สำหรับโปรเจคส่วนตัว… รายละเอียดเพิ่มเติมอ่านได้ในบทความนี้ครับ โค้ดทั้งหมด open source เอาไปรันของตัวเองได้ด้วย
facebook: https://www.facebook.com/dtinth/posts/10215688956691121
aliases:
  - 20201014T185440Z9352
---

:::caution[Outdated]
I no longer use this solution, and no longer maintain this project, as the solution to run Chrome in Vercel ([chrome-aws-lambda](https://www.npmjs.com/package/chrome-aws-lambda)) hasn’t been updated in 3 years, causing websites to be rendered incorrectly. As of 2023, I run a private instance of [pptraas](https://github.com/dtinth/pptraas) on Google Cloud Run and built a little gateway service on top of it. The source code for that part is not published, but basically, it invokes pptraas, saves the generated image in Linode Object Storage, and uses PostgreSQL to keep track of when the image was last generated. The list of allowed URLs and its corresponding configuration is stored in Google Sheets so it’s easy to manage.
:::

In the past 2 years I found myself having to install and configure [Puppeteer][pptr] to capture webpage screenshots on so many occasions.

So I thought it would be great to have a generic API that captures webpage screenshots that I can reuse across multiple projects.
The existence of serverless platforms like [Vercel](Vercel) made it all the more easier to do this, even for personal projects.

## The need for screenshotting web pages

I regularly find need to programmatically take screenshots of web pages.

- [To capture a timelapse of my personal projects](https://github.com/dtinth/timelapse)
- [To render web-based animations into a video file](https://github.com/dtinth/html5-animation-video-renderer)
- [To perform visual regression testing](https://github.com/dtinth/applitools-hackathon#canvas-chart-test)
- [To procedurally generate image assets in batch](https://github.com/reactbkk/3.0.0-posters-nametags/blob/master/src/take-screenshot.js)

In each of these use cases I installed [Puppeteer][pptr] and wrote similar code:
Go to the web page, take a screenshot, output the image.
But Puppeteer is quite a heavy dependency, weighting over 100 MB in `node_modules`.

[pptr]: https://github.com/puppeteer/puppeteer

In cases where the code is used in dynamic sites,
I would had to set up [a Google Cloud function](https://rominirani.com/using-puppeteer-in-google-cloud-functions-809a14856e14) or [an AWS Lambda function](https://github.com/alixaxel/chrome-aws-lambda) for that use cases.

Wouldn’t it be great if, instead of setting up Puppeteer every time, there is an API that I can immediately use?
Well, there is a [plenty][pa1] [of][pa2] [~~existing~~][pa3] [offerings][pa4], but most of them are paid and [the free ones went down](https://github.com/GoogleChromeLabs/pptraas.com/issues/48). Even some of the paid ones went down (the links that are struck out are now dead).

[pa1]: https://phantomjscloud.com/
[pa2]: https://www.browserless.io/
[pa3]: https://puppet-master.sh/
[pa4]: https://urlbox.io/

Since I wanted to re-use it across multiple projects, spanning multiple years to come, I want some degree of control.
The service should:

- **Run on my own domain name.** I don't want to have to go through all my projects and migrate to a new service, just because the old service is sunsetted.
- **Be affordable or free.** It’s for personal use and is non-commercial. I don’t want to spend too much money on it.
- **Personal yet multi-tenant.** I may use it on a project that is shared with others. In a rare case that I need to revoke an access to one project, it should not disrupt other projects. Therefore, it should support multiple keys.
- **Secure.** Others should not be able to use the service to screenshot arbitrary web pages without my permission.
- **Single-shot API.** Service consumers should be able to construct the image URL without having to make any extra API requests.

## Introducing personal-puppeteer

So this is what I created. Here’s how it works:

First, let’s say I want to generate a **social card image** for the URL at `https://capture.the.spacet.me/`. As an API consumer, I would:

1. Generate a request.
2. Cryptographically-sign the request into a JWT and construct an image URL.
3. Send the image URL to client (in a `<meta property="og:image">` tag).

![Diagram for steps 1-3](https://static.dt.in.th/uploads/2020/10/15/pp-1.png)

4. The browser would then make a request to the service, which would, on request, take a screenshot
5. …and return the image back to the browser.

![Diagram for steps 4-5](https://static.dt.in.th/uploads/2020/10/15/pp-2.png)

The service maintains a list of tenants which are allowed to use the service.
This allows the service to be reused in multiple projects without them having to share the same secret key.

![A list of tenants](https://static.dt.in.th/uploads/2020/10/15/pp-tenants.png)

## Under the hood

I was able to quickly build the first version of this service thanks to Vercel’s [Edge Network][ve] and [Serverless Functions][vf].

[ve]: https://vercel.com/home
[vf]: https://vercel.com/docs/serverless-functions/introduction
[vec]: https://vercel.com/docs/serverless-functions/edge-caching#cache-control
[vc]: https://vercel.com/docs/edge-network/caching

![Diagram for the components inside the service](https://static.dt.in.th/uploads/2020/10/15/pp-3.png)

The first time a request is received:

1. It would enter Vercel’s network.
2. Since this was the first time the request was processed, it would be a cache MISS.
3. Vercel would then call the underlying serverless function.
4. Which in turn validates the request and captures a screenshot of the webpage.

![Diagram for cache miss scenario (1)](https://static.dt.in.th/uploads/2020/10/15/pp-4.png)

5. The image is returned from the serverless function with a very aggressive [caching][vec] header.
6. Vercel would return the response and put it into its cache.

![Diagram for cache miss scenario (2)](https://static.dt.in.th/uploads/2020/10/15/pp-5.png)

The next time the request is received, it would be served by [Vercel’s cache][vc].

![Diagram for cache miss scenario (3)](https://static.dt.in.th/uploads/2020/10/15/pp-6.png)

## Use cases unlocked

### Automatic social image generation for all my web projects

If I create a web project or a blog post,
but don’t want to spend the time crafting an `og:image` for each page,
I can just use `personal-puppeteer` to generate a default `og:image` from the webpage’s screenshot.

Now when I share my article on Facebook, people would see the webpage’s screenshot.

![A Facebook post where I posted an article. The preview image is the screenshot of the article’s contents.](https://static.dt.in.th/uploads/2020/11/04/personal-puppeteer-cover.png)

Although it may not look as good as a handcrafted image,
I think this is still way better than using a generic image or a profile picture as a default preview image.

So far, I am doing this for:

- <https://dt.in.th/> — My personal website
- <https://notes.dt.in.th/> — This website where I publish notes
- <https://capture.the.spacet.me/> — `personal-puppeteer`’s landing page

### Sending procedurally generated images in chat rooms

By using `data:` URLs, an HTML page can be embedded in the JWT.
This can be useful when I want to create a chat bot that can generate infographics.

![GIF demo](https://static.dt.in.th/uploads/2020/10/15/pp-discord.gif)

### Adding web page screenshot to `README.md`

The URL can be embedded into other websites to provide an auto-updating screenshot.

![An image of the documentation website embedded in README](https://static.dt.in.th/uploads/2020/10/15/pp-readme.png)

## Open source

[This project is open source](https://github.com/dtinth/personal-puppeteer), so you can run your own instance too!

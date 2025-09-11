---
public: true
title: Running Internet Explorer 5 on Windows 98 in your browser, with internet and LAN access
---

# Running Internet Explorer 5 on Windows 98 in your browser, with internet and LAN access

I recently demonstrated the concept of **protocols** by showing how Internet Explorer 5, a browser from 1999, can still access a modern [web](WebPlatform) server built in 2024, and more importantly, how fundamental knowledge, as opposed to latest trends, can stay relevant for a long time.

![](https://im.dt.in.th/ipfs/bafybeibirapaa33vqvxf6esjuv6fz5fcg2c6cbvn6m476aclnicsuy5uc4/image.webp)

Basically, I followed this article: [Terence Eden (2021), “Run Internet Explorer 5 in your browser!”](https://shkspr.mobi/blog/2021/08/run-internet-explorer-5-in-your-browser/) I learned about [**v86**](https://copy.sh/v86/), an x86 emulator that compiles machine code into WebAssembly at runtime, allowing Windows 98 to run in the browser at a reasonable speed.

For my demonstration, I need to access a website running in my local area network (LAN). For this I also had to [set up local networking](https://github.com/copy/v86/blob/master/docs/networking.md).

1. **I run a relay server.** [krishenriksen/node-relay](https://github.com/krishenriksen/node-relay) is a virtual ethernet switch that runs on the websocket protocol. I use this [Docker](Docker) Compose file.

   ```yaml
   services:
     relay:
       image: krishenriksen/node-relay:latest
       privileged: true
       ports:
         - 127.0.0.1:8180:80
   ```

   To verify my setup, I visited `http://localhost:8180/` in the browser, and I saw the message “Upgrade Required” which indicates that the relay server is now running and accessible.

2. **Launch Windows 98** in v86 **with `networking_proxy` settings.** For this, I used this URL: <https://copy.sh/v86/?profile=windows98&networking_proxy=ws://localhost:8180>

3. **Enable networking.** Double-click on `networking.bat` on the Windows 98 desktop. After this, I was able to `ping` my machine using its local IP address.

   ![](https://im.dt.in.th/ipfs/bafybeibnrxi2wmyf5hyspgv4t5bhe2b2ai3a2tpukfkusjc7kanar7fzz4/image.webp)

4. **Access the website.** I opened Internet Explorer 5 and typed in the local IP address of my machine.

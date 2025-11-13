---
public: true
title: 'Thai Pangsakulyanont'
aliases:
  - 20201003T154758Z3667
---

# dt.in.th

:::lead
Hi, I’m **Thai Pangsakulyanont <span class="text-[#8b8685] font-normal">(@<span class="text-[#d7fc70] font-bold">dtinth</span>)</span>**.
:::

Welcome to my [digital garden](DigitalGardening).

- [Recent writings](Recent)
- [About this website](AboutThisWebsite)

## Topics

<div id="topic-list">

- [Backend-as-a-Service](BaaS)
- [Cloud Platform](CloudPlatform)
- [Colors](Colors)
- [Creative Coding](CreativeCoding)
- [Creatorsgarten](Creatorsgarten)
- [Database](Database)
- [Digital Gardening](DigitalGardening)
- [Discord](Discord)
- [Docker](Docker)
- [GitHub](GitHub)
- [Grist](Grist)
- [Hardware](Hardware)
- [IndieWeb](IndieWeb)
- [Large Language Model](LargeLanguageModel)
- [Linux](Linux)
- [JavaScript](JavaScript)
- [JWT](JWT)
- [Learning](Learning)
- [macOS](MacOS)
- [Markdown](Markdown)
- [Music](Music)
- [n8n](N8n)
- [Nix](Nix)
- [Productivity](Productivity)
- [Projects](Projects)
- [QR Code](QRCode)
- [Ruby](Ruby)
- [Shell](Shell)
- [Software Engineering](SoftwareEngineering)
- [Talks](Talks)
- [Tools](Tools)
- [Typography](Typography)
- [Visual Studio Code](VSCode)
- [Web Platform](WebPlatform)
- [Webring](Webring)
- [Windows](Windows)

</div>

## Explore the graph

<iframe src="https://sitegraph.vercel.app/?click=parent.postMessage" id="sitegraph"></iframe>

<style scoped>
  #sitegraph {
    width: 100%;
    border: 1px solid #8b8685;
    box-sizing: border-box;
    height: min(80vh, 720px)
  }

  /* Display as 3 columns on a big screen */
  @media (min-width: 512px) {
    #topic-list {
      column-count: 2;
    }
    #topic-list ul, #topic-list li {
      margin-top: 0;
    }
    #topic-list li {
      margin-bottom: 0.5em;
    }
  }
  @media (min-width: 768px) {
    #topic-list {
      column-count: 3;
    }
  }
  @media (min-width: 920px) {
    #topic-list {
      column-count: 4;
    }
  }
</style>

<script>
  export default {
    setup() {
      const onmessage = e => {
        if (e.data?.sitegraphNodeClicked) {
          const id = e.data.sitegraphNodeClicked.id
          location.href = id
        }
      }
      Vue.onMounted(() => {
        window.addEventListener('message', onmessage)
      })
      Vue.onUnmounted(() => {
        window.removeEventListener('message', onmessage)
      })
    }
  }
</script>

---
title: How to run Chrome for Testing
public: true
---

# How to launch Chrome for Testing

:::lead

Use the [@puppeteer/browsers CLI](https://pptr.dev/browsers-api) to launch [Chrome for Testing](https://developer.chrome.com/blog/chrome-for-testing/)

:::

1. **Install Chrome for Testing**
    <span v-if="channels.length"> — <select v-model="channel" style="display: inline-block"><option v-for="ch of channels" :value="ch">{{ ch }} ({{ getVersion(ch) }})</option></select></span>

    <pre><code>npx @puppeteer/browsers install chrome@<strong>{{ version }}</strong></code></pre>

    <p v-show="version == 'latest'">The command will print the version number. Take note of it, as you will need it in the next step.</p>

2. **Launch Chrome for Testing**

    <pre><code>npx @puppeteer/browsers launch chrome@<strong>{{ version }}</strong></code></pre>

<script>
export default {
  setup() {
    const version = Vue.ref('latest')
    const channel = Vue.ref('Canary')
    const channelData = Vue.ref({})
    const channels = Vue.computed(() => Object.keys(channelData.value).sort())
    Vue.onMounted(async () => {
      const url = 'https://googlechromelabs.github.io/chrome-for-testing/last-known-good-versions.json'
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Cannot get latest release - ${response.status}`)
      }
      const data = await response.json()
      version.value = data.channels.Canary.version
      channelData.value = data.channels
    })
    Vue.watchEffect(() => {
      const newVersion = getVersion(channel.value)
      if (newVersion) version.value = newVersion
    })
    function getVersion(channelName) {
      return channelData.value?.[channelName]?.version
    }
    return { version, channel, channels, getVersion }
  }
}
</script>
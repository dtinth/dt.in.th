---
public: true
title: Port number randomizer
---

# Port number randomizer

:::lead
Need a random port number for your next project? You can get one here.
:::

<div style="border-radius: 1em; border: 2px solid #656463; padding: 1em; background: #252423; text-align: center; margin: 2em 0;" :style="style">
  Your randomized port number is…
  <div style="font-size: 4em; margin: 1rem 0;">
    {{port}}
  </div>
  <button
    class="btn"
    v-on:click="randomizePort"
    v-on:pointerdown="down"
    v-on:pointerup="up"
  >Randomize port number</button>
</div>

## Configuration cheat sheet

- **[Next.js](Next)**

  <pre><code
  >  "dev": "next dev -p ${PORT:-{{port}}}",</code></pre>

- **[Vite](Vite)**

  <pre><code
  >  "dev": "vite --port ${PORT:-{{port}}}",<br
  >  "preview": "vite preview --port ${PORT:-{{port}}}",</code></pre>

<script>
  export default {
    setup() {
      const port = Vue.ref('…')
      const style = Vue.ref({})
      const randomizePort = () => {
        port.value = Math.floor(Math.random() * (49001 - 5001 + 1) + 5001)
      }
      const randomizePortFrame = () => {
        randomizePort()
        const r = () => Math.round(Math.random() * 4 - 2)
        style.value = { transform: `translate(${r()}px, ${r()}px)`, }
      }
      let clear = null
      const down = (e) => {
        if (clear) clear()
        const interval = setInterval(() => randomizePortFrame(), 33)
        clear = () => clearInterval(interval)
      }
      const up = (e) => {
        if (clear) clear()
        clear = null
        style.value = { transform: `translate(0, 0)`, }
      }
      Vue.onMounted(() => {
        randomizePort()
      })
      return { port, randomizePort, down, up, style }
    }
  }
</script>

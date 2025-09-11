---
public: true
title: Setting default Next.js development server port
---

By default, [Next.js](Next) development server runs on port 3000.

If you want to change the port to, e.g. <strong title="Click to change" v-on:click="updatePort" style="border-bottom: 1px dotted; cursor: pointer; color: #ffa;">{{port}}</strong>, update the `package.json`:

<div ref="div">

```json
{
  "scripts": {
    "dev": "next dev -p ${PORT:-__PORT__}"
  }
}
```

A `yq` command to update the `package.json`:

```bash
yq eval '.scripts.dev = "next dev -p ${PORT:-__PORT__}"' package.json -i -P -o json
```

</div>

<button v-on:click="randomizePort">Randomize port number</button>

<script>
  export default {
    setup() {
      const port = Vue.ref(3001)
      const div = Vue.ref()
      let template
      const updateScripts = () => {
        if (!template) {
          template = div.value.innerHTML
        }
        div.value.innerHTML = template.replace(/__PORT__/g, port.value)
      }
      Vue.onMounted(() => {
        updateScripts()
      })
      Vue.onUpdated(() => {
        updateScripts()
      })
      const updatePort = () => {
        port.value = prompt('Enter port number', port.value) || port.value
      }
      const randomizePort = () => {
        port.value = Math.floor(Math.random() * (49001 - 5001 + 1) + 5001)
      }
      return { port, div, updatePort, randomizePort }
    }
  }
</script>

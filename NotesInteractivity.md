---
public: true
title: Adding some interactivity to my notes
aliases:
  - 20201211T195900Z2817
---

**How about some interactivity inside a [note](AboutThisWebsite)?**

<p>
  <button class="btn" @click="count++" :disabled="!mounted">{{count}}</button>
</p>

<script>
export default {
  setup() {
    const count = Vue.ref(0)
    const mounted = Vue.ref(false)
    Vue.onMounted(() => {
      mounted.value = true
    })
    return { hello: 'Hello, World', count, mounted }
  }
}
</script>

...and here's the code that implements the above button:

```html
<p>
  <button @click="count++" :disabled="!mounted">{{count}}</button>
</p>

<script>
  export default {
    setup() {
      const count = Vue.ref(0)
      const mounted = Vue.ref(false)
      Vue.onMounted(() => {
        mounted.value = true
      })
      return { hello: 'Hello, World', count, mounted }
    },
  }
</script>
```

Here's how it works:

- The server-side code first converts Markdown to HTML using [`@vuepress/markdown`](https://www.npmjs.com/package/@vuepress/markdown). It automatically extracts out the `<script>` and `<style>` tags.
- The HTML is then parsed as a Vue template and compiled into [render functions](https://v2.vuejs.org/v2/guide/render-function.html) using [`vue-template-compiler`](https://www.npmjs.com/package/vue-template-compiler) as JavaScript source code.
- The `<script>` tag is compiled using [esbuild](https://esbuild.github.io/) into a JavaScript source code.
- The resulting source codes are then used to assemble a Vue component. This happens both on the client and on the server. The server then renders a static HTML version of the component, and the client then hydrates it.

<figure slot="right">

![](https://static.dt.in.th/uploads/2022/07/24/vuecomp2.webp)

<figcaption>The compilation process</figcaption>

</figure>

---

<details><summary>Archive — How it works in the previous version of notes.dt.in.th (Nuxt-based)</summary>

Here's how it works:

- **In the contents API,**
  when the Markdown file is parsed, `@vuepress/markdown` automatically extracts out the `<script>` and `<style>` tags.
  I assume that there will be only one `<script>` tag.
  If one is found, then the contents of the `<script>` tag is compiled down to ES6 + CommonJS using [esbuild](https://esbuild.github.io/).
  This compiled JavaScript is then returned over the wire.

- **In the Nuxt app,**
  if a component module is included in the response,
  Nuxt will compile that code as part of the Vue component, on-the-fly, at runtime.

This results in the following markup:

![](https://static.dt.in.th/uploads/2020/12/11/journal-script-ssr.png)

For full changes, see the [pull request](https://github.com/dtinth/notes.dt.in.th/pull/1/files).

</details>

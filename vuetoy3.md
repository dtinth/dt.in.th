---
title: vuetoy3
created: 2019-08-27T00:00:00.000Z
updated: 2019-09-19T00:00:00.000Z
description: >-
  A minimalistic boilerplate for quickly building web prototypes using Vue 3 without any build tool or development server.
---

**vuetoy3** is a minimalistic boilerplate for quickly building web prototypes using Vue 3 without any build tool or development server.

- to run the app, just double-click `index.html` (no dev server)
- to make changes, just edit `script.js` (no build tool)

<template>
  <call-to-action href="https://github.com/dtinth/vuetoy3">
    GitHub Repository
  </call-to-action>
</template>

## Use case

This is ideal for building small side-projects, where you:

- want to use [**Vue 3**](https://v3.vuejs.org/) and its [**Composition API**](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api)
- want multiple routes (it comes with [**Vue Router**](https://next.router.vuejs.org/))
- prefer not to use any build tool
- don’t need to support older browsers
- want IntelliSense in your editor (it comes with a typings file)

## Defining components

Components and templates are defined in the JavaScript file.
The `html` template tag makes GitHub highlight the template using HTML grammar ([see example](https://github.com/dtinth/vuetoy3/blob/main/script.js)), and [makes Prettier able to format the template as HTML](https://prettier.io/blog/2018/11/07/1.15.0.html#html-template-literal-in-javascript).

```js
app.component('MyCounter', {
  setup() {
    return { count: Vue.ref(0) }
  },
  template: html`
    <button @click="count--">[-]</button>
    {{count}}
    <button @click="count++">[+]</button>
  `
})
```

## History

- **September 2019** — I created the [vuetoy](https://github.com/dtinth/vuetoy) project.
- **August 2020** — I created the vuetoy3 project after using vuetoy in various projects.
- **September 2020** — Vue 3 stable is released, vuetoy3 is updated to use it.

---
public: true
---

# Using the Iconify Icon Web Component

<div class="lead">

The [**Iconify Icon Web Component**](https://docs.iconify.design/iconify-icon/) let you render icons from [any icon set](https://icon-sets.iconify.design/) (as well as custom icons) in [any web framework](https://docs.iconify.design/iconify-icon/#supported-frameworks) (or without any framework).

</div>

This is something that I’ve been waiting for a long time.

:::note
The Iconify project has a pretty large API surface area for flexibility and legacy purposes[^legacy]. This note describes **my recommended way** to use them, which is to use the [**Iconify Icon Web Component**](https://docs.iconify.design/iconify-icon/).
:::

This note covers the steps for [React](React) and [Next.js](Next). [Vue](Vue) and [Svelte](Svelte) already have excellent support for [Web Components](WebComponents), and you should be able to use them with ease.

[^legacy]:
    Iconify is available as a [Web Component](https://docs.iconify.design/iconify-icon/) (with wrappers for [React](https://docs.iconify.design/iconify-icon/react.html) and [Solid](https://docs.iconify.design/iconify-icon/solid.html)), [vanilla JS library](https://docs.iconify.design/icon-components/svg-framework/), a [React](https://docs.iconify.design/icon-components/react/) component, a [Vue 3](https://docs.iconify.design/icon-components/vue/) component, a [Vue 2](https://docs.iconify.design/icon-components/vue2/) component, a [Svelte](https://docs.iconify.design/icon-components/svelte/) component, and an [Ember](https://docs.iconify.design/icon-components/ember/) component. Additionally, the Iconify project provides an [API](https://docs.iconify.design/api/) for generating [SVG](https://docs.iconify.design/api/svg.html) to be used in plain CSS. And there are 3rd party integrations for [unplugin](https://docs.iconify.design/icon-components/unplugin-icons.html), [UnoCSS](https://docs.iconify.design/icon-components/unocss.html), [Astro](https://github.com/natemoo-re/astro-icon), and the list goes on and on.

    However, with the advent of the [Iconify Icon Web Component](https://docs.iconify.design/iconify-icon/), I think we now have one solution to rule them all.

<!--
[^prescription]: Iconify actually provides many ways to use icons, but in this note I will **prescribe my recommended way** to use it, which is to use the `<iconify-icon>` web component and skip the rest.

- There is an [`<iconify-icon>` web component](https://docs.iconify.design/iconify-icon/) that can be used in any framework (or _without_ any framework). It is very easy to integrate with React with the [`@iconify-icon/react`](https://docs.iconify.design/iconify-icon/react.html) component.

- An icon is represented with a JSON object that conforms to the [`IconifyIcon` interface](https://docs.iconify.design/types/iconify-icon.html). [Over 130 free and open source icon sets have been converted into this format](https://icon-sets.iconify.design/) and [published to npm](https://www.npmjs.com/org/iconify-icons), and custom icons can be used by creating a JSON object that conforms to the interface. -->

## Usage with React

Here’s how I use Iconify with [React](React):

1. Install the `@iconify-icon/react` package and the [icon sets](https://www.npmjs.com/org/iconify-icons). ([Browse the icon sets](https://icon-sets.iconify.design))

   - Do not confuse this with the older `@iconify/react` package.[^oldreact]

2. When you want to use an icon, import the `Icon` component and the icon you want to use:

   ```tsx
   import { Icon } from '@iconify-icon/react'
   import githubIcon from '@iconify-icons/codicon/github'

   function MyComponent() {
     return <Icon icon={githubIcon} />
   }
   ```

   - If you want, you can also skip installing the icon sets in your project and use the icons directly from Iconify’s CDN.^[I prefer self-hosting, though.]

     ```tsx
     function MyComponent() {
       return <Icon icon="codicon:github" />
     }
     ```

[^oldreact]: There are 2 packages:

    - `@iconify/react` is the older library which implements the component directly in React. It is [now recommended](https://docs.iconify.design/icon-components/react/#:~:text=This%20documentation%20is%20for%20old%20Iconify%20icon%20component.%20Consider%20switching%20to%20web%20component.) to use `@iconify-icon/react` instead.
    - `@iconify-icon/react` is the newer library which is a simple React wrapper that renders the `<iconify-icon>` web component under the hood.

## Usage with Next.js

You can follow the steps above, but the icons will not appear until the page is hydrated. This is because the icons are rendered with the `<iconify-icon>` web component, which is not initialized until the page is hydrated.

If you want the icons to appear immediately, you can follow these steps to sideload the web component script (so they are loaded and initialized independently of the [Next.js](Next) app):

1. Add the Iconify web component script to your `pages/_document.tsx`:

   ```tsx
   import { Html, Head, Main, NextScript } from 'next/document'

   export default function Document(props: any) {
     return (
       <Html>
         <Head>
           <script
             async
             src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.7/dist/iconify-icon.min.js"
             integrity="sha256-B/ef37ds8F6TYyf8o9fLmpoxxXe1Tm2cO30jGN5hhRA="
             crossOrigin="anonymous"
           />
         </Head>
         <body>
           <Main />
           <NextScript />
         </body>
       </Html>
     )
   }
   ```

   [(Check latest version on jsDelivr here)](https://www.jsdelivr.com/package/npm/iconify-icon?tab=files)

2. Install the `react-iconify-icon-wrapper` package and the [icon sets](https://www.npmjs.com/org/iconify-icons). ([Browse the icon sets](https://icon-sets.iconify.design))

   - This package is almost identical to the `@iconify-icon/react` package. The difference is that it does not bundle the web component script, so you can sideload it instead.

3. When you want to use an icon, import the `Icon` component and the icon you want to use:

   ```tsx
   import { Icon } from 'react-iconify-icon-wrapper'
   import githubIcon from '@iconify-icons/codicon/github'

   function MyComponent() {
     return <Icon icon={githubIcon} />
   }
   ```

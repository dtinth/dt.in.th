---
public: true
title: Interactive footnotes
aliases:
  - 20201114T051848Z1525
---

**One feature I wish existed in most blog platforms are "interactive footnotes."** They are like footnotes, but instead of jumping to the bottom of the page (disrupting the reading flow), the footnote contents appears in a popup[^example].

[^example]: Like this.

## Some examples in the wild

- [WaitButWhy blog post _The AI Revolution_](https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html). Implemented with [bigfoot.js](http://www.bigfootjs.com/) jQuery plugin through [WP-Bigfoot](https://wordpress.org/plugins/wp-bigfoot/) WordPress plugin.
- [mango.pdf.zone blog post _When you browse Instagram and find former Australian Prime Minister Tony Abbott's passport number_](https://mango.pdf.zone/finding-former-australian-prime-minister-tony-abbotts-passport-number-on-instagram). Implemented with [littlefoot.js](https://github.com/goblindegook/littlefoot) which is a bigfoot.js fork that does not require jQuery.
- This [notes](AboutNotes) server uses it too, obviously.

## Setting this up in [VuePress](VuePress)

**Note:** This solution is hacky and not clean but it works well enough for me.

1. Install the npm packages

   ```sh
   yarn add markdown-it-footnote littlefoot
   ```

2. Add `markdown-it-footnote` to `.vuepress/config.js`

   ```js
   // .vuepress/config.js
   module.exports = {
     // ...
     markdown: {
       extendMarkdown: (md) => {
         md.use(require('markdown-it-footnote'))
       },
     },
   }
   ```

3. Add `.vuepress/theme/utils/InteractiveFootnotes.js`

   ```js
   import 'littlefoot/dist/littlefoot.css'
   let latest

   export async function setupInteractiveFootnotes() {
     // littlefoot requires a DOM to initialize; it will crash when prerendering
     const { default: littlefoot } = await import('littlefoot/dist/littlefoot')

     if (latest) {
       latest.unmount()
     }
     latest = littlefoot()
   }
   ```

4. Call `setupInteractiveFootnotes` in `mounted` and `updated` in the `.vuepress/theme/components/Page.vue` component.

   ```vue
   <template>
     <DefaultThemePage v-bind="$attrs"></DefaultThemePage>
   </template>

   <script>
   import DefaultThemePage from '@parent-theme/components/Page.vue'
   import { setupInteractiveFootnotes } from '../utils/InteractiveFootnotes'

   export default {
     components: { DefaultThemePage },
     mounted() {
       setupInteractiveFootnotes()
     },
     updated() {
       setupInteractiveFootnotes()
     },
   }
   </script>
   ```

### Note when using with Prettier

The `markdown-it-footnote` plugin requires at least **4 spaces** of indentation to parse multiline footnotes. However Prettier will reduce the indentation to 2 spaces, breaking it. As a workaround, use [ignore comments][prig] to tell Prettier not to touch the footnotes.

[prig]: https://prettier.io/docs/en/ignore.html 'Ignoring Code · Prettier'

```markdown
<!-- prettier-ignore-start -->

[^footnote]:

    Paragraph 1

    Paragraph 2

<!-- prettier-ignore-end -->
```

### Example implementation

[This commit][ex] shows how I implemented littlefoot in my website <https://dt.in.th/>

[ex]: https://github.com/dtinth/dt.in.th/commit/dfa0fa28b721da81bafef44a6b193ec5844b3ed5

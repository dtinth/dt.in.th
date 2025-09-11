---
public: true
wide: true
title: Markdown syntax extensions and custom elements in notes.dt.in.th
created: 2021-10-15
aliases:
  - 20211015T100140Z3969
---

[Markdown](Markdown) syntax extensions and custom elements available in this website (for my own reference):

<!--
Split pane usage in this note:
- The left pane contains the description and example output
- The right pane contains the example code in fenced code block
-->

## Two-column layout

::::::::split
The `split` and `aside` [directive](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444) can be used.

:::::::aside

```markdown
:::::split
Left contents

::::aside
Right contents
::::
:::::
```

:::::::

::::::::

## Tailwind CSS

::::split
Notes support [Tailwind CSS](https://tailwindcss.com/) utility classes powered by [UnoCSS](https://unocss.dev/). You can use any Tailwind utility class for styling elements.

<div class="bg-blue-500/25 text-white p-4 rounded">
  Blue background with white text
</div>

Common patterns:

- `grid grid-cols-2 gap-4` - Two-column grid
- `text-center text-lg font-bold` - Centered large bold text
- `bg-gray-100 p-4 rounded` - Gray background with padding

:::aside

```html
<div class="bg-blue-500/25 text-white p-4 rounded">
  Blue background with white text
</div>
```

::::

## Grid system

::::split
Grid system using Tailwind CSS classes allows for flexible layout.

<div class="grid grid-cols-3 gap-4">
  <div class="p-3 rounded border border-[#656463]">One</div>
  <div class="p-3 rounded border border-[#656463]">Two</div>
  <div class="p-3 rounded border border-[#656463]">Three</div>
</div>

:::aside

```html
<div class="grid grid-cols-3 gap-4">
  <div class="p-3 rounded border border-[#656463]">One</div>
  <div class="p-3 rounded border border-[#656463]">Two</div>
  <div class="p-3 rounded border border-[#656463]">Three</div>
</div>
```

:::

::::

## Scoped CSS

<style scoped>
  .n-example {
    color: #bef;
    font-weight: bold;
  }
  .n-box {
    border: 1px solid #656463;
    padding: 0.5rem;
  }
</style>

::::split
For custom CSS styles, use `<style scoped>` tags. All CSS classes should be prefixed with `n-` to follow the naming convention.

<p class="n-example">Light blue bold text</p>
<div class="n-box">Boxed content</div>

The `n-` prefix helps distinguish custom styles from global styles and prevents naming conflicts.

:::aside

```html
<style scoped>
  .n-example {
    color: #bef;
    font-weight: bold;
  }
  .n-box {
    border: 1px solid #656463;
    padding: 0.5rem;
  }
</style>

<p class="n-example">Light blue bold text</p>
<div class="n-box">Boxed content</div>
```

:::

::::

## Buttons and Inputs

::::split
Use standard HTML buttons and inputs. The `btn` and `form-control` classes provide basic styling.

<div class="flex gap-2">
  <button class="btn flex-none">Click me</button>
  <input type="text" class="form-control" placeholder="Enter text here">
</div>

:::aside

```html
<div class="flex gap-2">
  <button class="btn flex-none">Click me</button>
  <input type="text" class="form-control" placeholder="Enter text here" />
</div>
```

::::

## Callouts

::::::::split

:::info
This is an info box
:::

:::warning
This is a warning box
:::

:::tip
This is a tip box
:::

:::success
This is a success box
:::

:::important
This is an important box
:::

:::danger[BE CAREFUL]
This is a danger box
:::

:::caution
This is a caution box
:::

:::details
This is a details box
:::

::::aside

```markdown
:::info
This is an info box
:::

:::warning
This is a warning box
:::

:::tip
This is a tip box
:::

:::success
This is a success box
:::

:::important
This is an important box
:::

:::danger[BE CAREFUL]
This is a danger box
:::

:::caution
This is a caution box
:::

:::details
This is a details box
:::
```

::::

::::::::

## YouTube embed

::::::::split

::youtube[chuBHB0rRQo]

::::aside

```markdown
::youtube[chuBHB0rRQo]
```

::::

::::::::

## Figures

::::::::split

:::figure[Linked notes can form a network of knowledge]{.framed}
![Network graph visualization showing hundreds of small nodes](https://im.dt.in.th/ipfs/bafybeigltieu33eda3ux2uprgua5haczvev5ownguordyfgds5qrexdlbq/image.webp)
:::

::::aside

```markdown
:::figure[Linked notes can form a network of knowledge]{.framed}
![Network graph visualization showing hundreds of small nodes](https://im.dt.in.th/ipfs/bafybeigltieu33eda3ux2uprgua5haczvev5ownguordyfgds5qrexdlbq/image.webp)
:::
```

Classes available:

- `.framed` - adds border around images

::::

::::::::

## Chat bubbles

::::::::split

:::me
hi!
:::

:::bubble[ChatGPT]
Hi there! How's it going?
:::

::::aside

```markdown
:::me
hi!
:::

:::bubble[ChatGPT]
Hi there! How's it going?
:::
```

::::

::::::::

## Thoughts

::::::::split

:::thought
But what about this case?
:::

::::aside

```markdown
:::thought
But what about this case?
:::
```

::::

::::::::

## Call to action

::::::::split

::cta[View on GitHub]{href="https://github.com/dtinth/notes"}

::::aside

```markdown
::cta[View on GitHub]{href="https://github.com/dtinth/notes"}
```

::::

::::::::

## Twitter embeds

::::::::split

:::tweet

<p lang="en" dir="ltr">Proudly storing JWT auth token in localStorage in 2024 🥇 <a href="https://t.co/fhfzJZqIsZ">https://t.co/fhfzJZqIsZ</a></p>&mdash; LiveOverflow 🔴 (@LiveOverflow) <a href="https://twitter.com/LiveOverflow/status/1817500071312699720?ref_src=twsrc%5Etfw">July 28, 2024</a>

:::

::::aside

```markdown
:::tweet

<p lang="en" dir="ltr">Proudly storing JWT auth token in localStorage in 2024 🥇 <a href="https://t.co/fhfzJZqIsZ">https://t.co/fhfzJZqIsZ</a></p>&mdash; LiveOverflow 🔴 (@LiveOverflow) <a href="https://twitter.com/LiveOverflow/status/1817500071312699720?ref_src=twsrc%5Etfw">July 28, 2024</a>

:::
```

::::

::::::::

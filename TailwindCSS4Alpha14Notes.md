---
title: Getting Tailwind CSS 4 (alpha 14) to run in the browser
twitter: https://twitter.com/dtinth/status/1781676761077715126
public: true
---

# Getting Tailwind CSS 4 (alpha 14) to run in the browser

[Tailwind CSS 4 Alpha](https://tailwindcss.com/blog/tailwindcss-v4-alpha) has been recently open sourced, so I thought I'd take a look at it. Here are my notes based on studying its source code. **My goal was to investigate how to run [Tailwind CSS](TailwindCSS) 4 inside a browser.** Specifically, given an HTML input, I want to generate the corresponding CSS classes. The commit [`ce0a734`](https://github.com/tailwindlabs/tailwindcss/tree/ce0a7347dac10f8f10fc29e731e5ae1682752e3a) is being studied.

Note that when the final version of Tailwind CSS 4 is released, the following notes may be _way_ outdated.

## Overview

![](https://im.dt.in.th/ipfs/bafybeibv4brwypnln6ib3cf4xrbblagoeezkizsfprzfdgeiq62juk7ty4/image.webp)

## The process

1. `@tailwindcss/oxide` is used to [scan the project files to look for Tailwind CSS utility classes](https://github.com/tailwindlabs/tailwindcss/blob/ce0a7347dac10f8f10fc29e731e5ae1682752e3a/crates/oxide/tests/auto_content.rs#L286-L309) (internally called “candidates”). It is written in Rust. Although it has been marketed as a unified toolchain, [this is all it does for now](https://github.com/tailwindlabs/tailwindcss/blob/ce0a7347dac10f8f10fc29e731e5ae1682752e3a/crates/node/src/lib.rs#L1). As of writing, [it only works in Node.js, and is not yet runnable on the web browser](https://github.com/tailwindlabs/tailwindcss/issues/13133).

   Thanks to Oxide’s currently limited scope (it just parses HTML files to extract names of utility classes), we can borrow Tailwind CSS v3’s implementation (which is written in TypeScript and can be trivially used in the browser) and use it in place of Oxide for the time being:

   ```js
   const { defaultExtractor: createDefaultExtractor } = await import(
     'https://cdn.jsdelivr.net/npm/tailwindcss@3.4.3/lib/lib/defaultExtractor.js/+esm'
   )
   const defaultExtractor = createDefaultExtractor({
     tailwindConfig: { separator: ':' },
   })
   const inputHtml = `
     <div class="flex md:grid hover:underline dark:bg-black"></div>
   `
   const candidates = [...new Set(defaultExtractor(inputHtml))]
   ```

   The resulting candidate array looks like this:

   ```js
   const candidates = [
     'div',
     'class',
     'flex',
     'md:grid',
     'hover:underline',
     'dark:bg-black',
     '/div',
   ]
   ```

   As you can see, some candidates are not a valid utility class name (e.g., `div`, `class`, `/div`). It is up to the next step to filter out the invalid candidates.

   <details><summary>Extracting utility classes using the real Oxide package (Node.js only)</summary>

   Here’s how this step was normally done in Node.js using the real Oxide package:

   ```sh
   mkdir -p input
   echo '<div class="flex md:grid hover:underline dark:bg-black"></div>' > input/index.html

   pnpm add @tailwindcss/oxide@4.0.0-alpha.14
   echo 'import { scanDir } from "@tailwindcss/oxide"
   console.log(scanDir({ base: "input" }).candidates)' > scan.mjs
   ```

   This generates a list of candidates like this:

   ```
   [
     'class',
     'dark:bg-black',
     'div',
     'flex',
     'hover:underline',
     'md:grid'
   ]
   ```

   </details>

2. The `tailwindcss` package takes a CSS configuration file (in CSS syntax) and a list of candidates to generate an intermediate CSS file. It is written in TypeScript, and so can be used in the browser like this:

   ```js
   const tailwindcss = await import(
     'https://cdn.jsdelivr.net/npm/tailwindcss@4.0.0-alpha.14/dist/lib.mjs'
   )

   // Yoinked from:
   // https://github.com/tailwindlabs/tailwindcss/blob/ce0a7347dac10f8f10fc29e731e5ae1682752e3a/packages/tailwindcss/src/index.test.ts#L9
   const sourceCss = `
     @theme {
       --color-black: #000;
       --breakpoint-md: 768px;
     }
     @tailwind utilities;
   `
   const intermediateCss = tailwindcss.compile(sourceCss).build(candidates)
   ```

   The resulting intermediate CSS looks like this:

   <!-- prettier-ignore -->
    ```css
    /*! tailwindcss v4.0.0-alpha.14 | MIT License | https://tailwindcss.com */
    :root {
      --color-black: #000;
      --breakpoint-md: 768px;
    }
    .flex {
      display: flex;
    }
    .hover\:underline {
      &:hover {
        text-decoration-line: underline;
      }
    }
    .md\:grid {
      @media (width >= 768px) {
        display: grid;
      }
    }
    .dark\:bg-black {
      @media (prefers-color-scheme: dark) {
        background-color: var(--color-black, #000);
      }
    }
    ```

   As you can see, the intermediate CSS has some cutting edge syntax (such as nesting and `@media` inside a CSS ruleset). This is because the intermediate CSS is meant to be later processed by the next step.

   It is important to note that in Tailwind CSS v4, it does not come with any default colors. This is part of the [default theme](https://github.com/tailwindlabs/tailwindcss/blob/cd4711cc21b8790d52ff62ffa8bfc03d4e031fdb/packages/tailwindcss/theme.css) which can be imported using:

   ```css
   @import 'tailwindcss';
   ```

   However, in the browser, we don’t have access to the filesystem. Also, Lightning CSS (next step) doesn’t support bundling in the browser. Therefore, to include Tailwind CSS v4’s default theme, we have to inline it into our CSS. Here’s how to fetch the default theme from jsDelivr:

   ```js
   const defaultTheme = await fetch(
     'https://cdn.jsdelivr.net/npm/tailwindcss@4.0.0-alpha.14/theme.css'
   ).then((res) => {
     if (!res.ok) {
       throw new Error('Failed to fetch default theme')
     }
     return res.text()
   })
   ```

3. [Lightning CSS](https://lightningcss.dev/) takes the CSS from step 2 and performs [various postprocessing steps](https://lightningcss.dev/transpilation.html) on the CSS, such as vendor prefixing and converting nested selectors to flat selectors. Like Oxide, it is written in Rust, but fortunately, [it has been compiled to WebAssembly and can be used in the browser](https://lightningcss.dev/docs.html#from-deno-or-in-browser) like this:

   ```js
   const lightningcss = await import(
     'https://cdn.jsdelivr.net/npm/lightningcss-wasm@1.24.1/+esm'
   )

   // Initialize the WASM module
   await lightningcss.default()

   // Yoinked from
   // - https://github.com/tailwindlabs/tailwindcss/blob/cd4711cc21b8790d52ff62ffa8bfc03d4e031fdb/packages/%40tailwindcss-cli/src/commands/build/index.ts#L258-L280
   // - https://lightningcss.dev/docs.html#from-deno-or-in-browser
   const resultCss = new TextDecoder().decode(
     lightningcss.transform({
       filename: 'input.css',
       code: new TextEncoder().encode(intermediateCss),
       drafts: {
         customMedia: true,
       },
       nonStandard: {
         deepSelectorCombinator: true,
       },
       include: lightningcss.Features.Nesting,
       exclude: lightningcss.Features.LogicalProperties,
       targets: {
         safari: (16 << 16) | (4 << 8),
       },
       errorRecovery: true,
     }).code
   )
   ```

   The result looks like this:

   <!-- prettier-ignore -->
    ```css
    /*! tailwindcss v4.0.0-alpha.14 | MIT License | https://tailwindcss.com */
    :root {
      --color-black: #000;
      --breakpoint-md: 768px;
    }

    .flex {
      display: flex;
    }

    .hover\:underline:hover {
      text-decoration-line: underline;
    }

    @media (width >= 768px) {
      .md\:grid {
        display: grid;
      }
    }

    @media (prefers-color-scheme: dark) {
      .dark\:bg-black {
        background-color: var(--color-black, #000);
      }
    }
    ```

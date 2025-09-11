---
public: true
aliases:
  - 20220606T080802Z0814
---

# Hacking Surface Pen’s eraser support into Excalidraw

Excalidraw has an excellent support for a stylus pen. So, I would like to use it as a quick note-taking tool on my Surface Pro.

The **Surface Pen** comes with an eraser, which can be used to erase things in supported apps. However, it is not supported in Excalidraw.

<img width="766" alt="image" src="https://user-images.githubusercontent.com/193136/172116799-e2cba672-ff78-4f13-8d58-319779ab61ec.png">

Since Excalidraw is a web application, I want to see if I can hack my way to make it work (Spoiler: Yes, it works!).

<video controls src="https://user-images.githubusercontent.com/193136/172117163-2ef7e3cf-08d4-40c9-a186-8c8ad9edbf08.mp4"></video>

I created a [user script](JavaScript#userscripts) to add Surface Pen support to Excalidraw. Skip to the [workaround](#workaround) section to see the code. Additionally, I submitted the [issue including the workaround to Excalidraw’s issue tracker](https://github.com/excalidraw/excalidraw/issues/5281). I hope they add built-in support for Surface Pen in the future.

## Detecting the eraser

The [PointerEvent](https://w3c.github.io/pointerevents/) specification, introduced in 2019, allows web applications to access more information about the pointer (mouse, pen, touch) using a standardized interface.

So first I created a simple web application let me play around with the pointer events:

[**&rarr; Pointer events tester**](PointerEventsTester)

### Findings

- When a Surface Pen is used:
  - `e.pointerType` is `pen`
  - When the eraser is being used:
    - On `pointerdown`, `e.button` is `5`.
    - On `pointermove`, `e.buttons` is `32`.

## Automating Excalidraw’s UI

Thankfully, Excalidraw’s UI components are pretty easy to query, as many of them has `aria-label` or `data-testid` attributes. To toggle the eraser I can do this:

```js
document.querySelector('button[aria-label="Eraser"]')?.click()
```

## Making the eraser actually work

Now, I was able to switch to the eraser, but it didn’t work. Upon closer inspection, I found that Excalidraw only supports a certain types of button.

<!-- prettier-ignore-start -->

```js
    // only handle left mouse button or touch
    if (      event.button !== POINTER_BUTTON.MAIN &&
      event.button !== POINTER_BUTTON.TOUCH
    ) {
      return;
    }
```

<!-- prettier-ignore-end -->

As you can see, no support for eraser.

### Tricking Excalidraw into thinking a normal mouse button is being used

At first, I tried setting `e.button = 0` directly, but it didn’t work:

```js
e.button = 0
// ❌ Uncaught TypeError:
//    Cannot set property button of #<MouseEvent> which has only a getter
```

From the error message, the event has the property `button`, but it is read-only. So, **instead of writing to that read-only property, how about we replace the property entirely?**

```js
Object.defineProperty(e, 'button', { value: 0 })
console.log(e.button)
// ✅ It works!
```

## Workaround

Now that I have all the pieces, I can create a user script to add support for Surface Pen. I have tested this with Tampermonkey in Microsoft Edge (other setup untested).

```js
// ==UserScript==
// @name         Excalidraw Microsoft Surface Pen Eraser Support
// @namespace    https://dt.in.th/
// @version      0.1
// @description  Adds Microsoft Surface Pen Eraser support to Excalidraw
// @author       Thai Pangsakulyanont (dtinth)
// @match        https://excalidraw.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=excalidraw.com
// @grant        none
// ==/UserScript==

;(function () {
  'use strict'

  let activated
  function handlePointer(e) {
    const isEraser = e.pointerType === 'pen' && e.buttons & 32
    const isPenActive = document.querySelector('[data-testid="freedraw"]')
      ?.checked
    if (!activated && isEraser && isPenActive) {
      document.querySelector('button[aria-label="Eraser"]')?.click()
      activated = true

      // Force Excalidraw to recognize this as a normal button.
      // https://github.com/excalidraw/excalidraw/blob/4a9fac2d1e5c4fac334201ef53c6f5d2b5f6f9f5/src/components/App.tsx#L2945-L2951
      Object.defineProperty(e, 'button', { value: 0 })
    }
    if (activated && !isEraser) {
      // Clicking the eraser button again will switch back to the last used tool
      // https://github.com/excalidraw/excalidraw/issues/4978
      document.querySelector('button[aria-label="Eraser"]')?.click()
      activated = false
    }
  }

  window.addEventListener('pointerdown', handlePointer, { capture: true })
  window.addEventListener('pointermove', handlePointer, { capture: true })
})()
```

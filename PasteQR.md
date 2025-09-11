---
public: true
title: Paste image to decode QR code
---

# Paste image to decode QR code

**Found a QR code on your screen and don’t want to take out your phone to scan it? Paste the image here to decode it.** This little tool uses the [BarcodeDetector](https://developer.chrome.com/docs/capabilities/shape-detection#barcodedetector) API to detect QR codes in images. [See browser support.](https://caniuse.com/mdn-api_barcodedetector)

<div style="min-height: 160px">

<template v-if="state.type == 'loading'">

:::warning[Loading…]
Please wait, this page is loading…
:::

</template>

<template v-if="state.type == 'working'">

:::warning[Processing…]
Please wait, processing the image…
:::

</template>

<template v-if="state.type == 'unsupported'">

:::danger[Browser not supported]
Sorry, your browser does not support the BarcodeDetector API. Please use a browser that supports it.
:::

</template>

<template v-if="state.type == 'ready'">

:::note[Ready]
<strong>Paste an image on this page to decode the QR code.</strong><br />All processing is done on your device; no data is sent anywhere.
<span class="block mt-1"><button v-on:click="paste" class="btn py-0.5 px-1.5"><iconify-icon icon="octicon:paste-16" inline></iconify-icon> Click here to paste</button> or use the usual keyboard shortcut.</span>
:::

</template>

<template v-if="state.type == 'error'">

:::danger[Error]
{{ state.error }}
<span class="block mt-1"><button v-on:click="paste" class="btn py-0.5 px-1.5"><iconify-icon icon="octicon:paste-16" inline></iconify-icon> Click here to paste</button> or use the usual keyboard shortcut.</span>
:::

</template>

<template v-if="state.type == 'success'">

:::success[Decoded data in QR code]
<textarea class="form-control" :value="state.data" readonly ref="decodedData"></textarea><span class="block mt-1"><button v-on:click="copy" class="btn py-0.5 px-1.5"><iconify-icon icon="octicon:copy-16" inline></iconify-icon> Copy to clipboard</button></span>
:::

</template>

</div>

<script setup>
  const state = Vue.reactive({ type: 'loading', data: '', error: '' })
  const decodedData = Vue.ref(null)

  async function paste() {
    const clipboardContents = await navigator.clipboard.read();
    try {
      for (const item of clipboardContents) {
        if (!item.types.includes("image/png")) {
          throw new Error("Clipboard does not contain PNG image data.");
        }
        const blob = await item.getType("image/png");
        onPaste({
          clipboardData: {
            items: [{ type: "image/png", getAsFile: () => blob }],
          },
        })
        break
      }
    } catch (e) {
      state.type = 'error'
      state.error = `${e}`
      console.error(e)
    }
  }

  async function onPaste(e) {
    state.type = 'working'
    try {
      const items = e.clipboardData.items
      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        if (item.type.indexOf('image') !== -1) {
          const blob = item.getAsFile()
          const imageBitmap = await createImageBitmap(blob);
          const barcodeDetector = new BarcodeDetector()
          const barcodes = await barcodeDetector.detect(imageBitmap)
          console.log(barcodes)
          if (barcodes.length > 0) {
            state.type = 'success'
            state.data = barcodes[0].rawValue
          } else {
            state.type = 'error'
            state.error = 'No QR code found in the image.'
          }
          return
        }
      }
      state.type = 'error'
      state.error = 'No image found in the clipboard.'
    } catch (e) {
      state.type = 'error'
      state.error = `${e}`
      console.error(e)
    }
  }

  async function copy(e) {
    await navigator.clipboard.writeText(state.data)
    decodedData.value.focus()
    decodedData.value.select()
  }

  Vue.onMounted(() => {
    if (("BarcodeDetector" in window)) {
      state.type = 'ready'
    } else {
      state.type = 'unsupported'
    }
    document.addEventListener('paste', onPaste)
  })

  Vue.onUnmounted(() => {
    document.removeEventListener('paste', onPaste)
  })
</script>

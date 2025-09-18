---
title: 'DownloadURL API for drag-and-drop file downloads (undocumented Chrome API)'
public: true
---

:::lead
**`DownloadURL`** is a Chrome-specific, non-standard data transfer type that **lets users drag files from web pages directly to their desktop** or file manager.
:::

## Demo 1: Most basic demo

:::tip[Try it yourself]

Drag the button below to your desktop! \
<span class="text-[#8b8685] text-sm">Note: Only works in Chrome/Chromium-based browsers</span>

<p>
  <button
    class="btn cursor-grab"
    onclick="alert('Drag me; don\'t click me!')"
    draggable="true"
    ondragstart="
      event.dataTransfer.setData('DownloadURL', [
        'text/plain',
        'hello.txt',
        'data:text/plain,' + encodeURIComponent('Hello, world!')
      ].join(':'))
    "
  >
    hello.txt
  </button>
</p>

After dragging the button to your desktop, you should see a file named `hello.txt` with the content “Hello, world!”.

:::

:::details[How it works (source code)]

- The button has the `draggable="true"` attribute, making it draggable.

- An `ondragstart` event handler sets the `DownloadURL` data transfer item with the format: `MIME:filename:URL` using the following code:

  ```html
  <button
    class="btn cursor-grab"
    onclick="alert('Drag me; don\'t click me!')"
    draggable="true"
    ondragstart="
      event.dataTransfer.setData('DownloadURL', [
        'text/plain',
        'hello.txt',
        'data:text/plain,' + encodeURIComponent('Hello, world!')
      ].join(':'))
    "
  >
    hello.txt
  </button>
  ```

:::

## Demo 2: Drag out a colored square

:::tip[Try it yourself]

Pick a color and drag the canvas to your desktop! \
<span class="text-[#8b8685] text-sm">Note: Only works in Chrome/Chromium-based browsers</span>

<ol>
  <li>
    <label for="colorPicker" class="block"><strong>Select a color:</strong></label>
    <input type="color" v-model="selectedColor" id="colorPicker" />
  </li>
  <li>
    <strong>Drag the square below to your desktop:</strong>
    <canvas ref="canvas" width="64" height="64" style="box-shadow: inset 0 0 0 1px #fff4, 0 2px 4px #0008; cursor: grab; display: block; margin-top: 8px;" class="rounded" draggable="true" :data-canvas-drag-filename="`color-${selectedColor.replace(/#/,'')}.png`"></canvas>
  </li>
</ol>

:::

:::details[How it works (source code)]

- The canvas has a `data-canvas-drag-filename` attribute that specifies the filename to use when dragging out the image.

- A `dragstart` event listener sets the `DownloadURL` data transfer item with the format: `MIME:filename:URL` using the following code:

  ```js
  function onDragStart(e) {
    if (!e.dataTransfer) return

    const canvas = e.target.closest('canvas')
    if (!canvas) return

    const filename = canvas.dataset.canvasDragFilename
    if (!filename) return

    const dataUrl = canvas.toDataURL()
    e.dataTransfer.clearData()
    e.dataTransfer.setData(
      'DownloadURL',
      ['image/png', filename, dataUrl].join(':')
    )
  }
  ```

:::

## Usage

In your `dragstart` event handler, set the `DownloadURL` data transfer item to a string with the following format:

```
MIME:filename:URL
```

- **MIME**: The MIME type of the file (e.g., `text/plain`, `image/png`)
- **filename**: The suggested filename for the download
- **URL**: A fetchable URL where the file content can be retrieved
  - It can be a regular URL (however, if it’s cross-origin, it may fail)
  - It can also be a data URL (e.g., `data:text/plain,Hello%2C%20world!`)
  - It can also be a blob URL (generated with [`URL.createObjectURL`](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static))

Here's an example of setting the `DownloadURL` data transfer item in a `dragstart` event handler:

```js
element.addEventListener('dragstart', (event) => {
  const mimeType = 'text/plain'
  const filename = 'hello.txt'
  const url = 'data:text/plain,Hello%2C%20world!'
  const downloadUrl = [mimeType, filename, url].join(':')
  event.dataTransfer.setData('DownloadURL', downloadUrl)
})
```

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'

const selectedColor = ref('#3498db')
const canvas = ref()

function drawColor(color) {
  const ctx = canvas.value.getContext('2d')
  ctx.fillStyle = color
  ctx.fillRect(0, 0, 64, 64)
}

function onDragStart(e) {
  if (!e.dataTransfer) return

  const canvas = e.target.closest('canvas')
  if (!canvas) return

  const filename = canvas.dataset.canvasDragFilename
  if (!filename) return

  const dataUrl = canvas.toDataURL()
  e.dataTransfer.clearData()
  e.dataTransfer.setData('DownloadURL', ['image/png', filename, dataUrl].join(':'))
}

watch(selectedColor, (newColor) => {
  drawColor(newColor)
})

onMounted(() => {
  drawColor(selectedColor.value)
  window.addEventListener('dragstart', onDragStart)
})
onUnmounted(() => {
  window.removeEventListener('dragstart', onDragStart)
})
</script>

## History

The `DownloadURL` API was likely developed for [Gmail's drag-and-drop attachment feature](https://gmail.googleblog.com/2010/08/drag-and-drop-attachments-to-save-them.html) (announced in 2010) and was discovered and documented by Ryan Seddon. Despite being widely used, it remains undocumented in official web specifications.

## Bookmarks

- [🔖 Ryan Seddon's Discovery Article](https://ryanseddon.com/html5/gmail-dragout/)
- [🔖 Case Study - Drag and Drop Download in Chrome, web.dev](https://web.dev/case-studies/box-dnd-download)
- [🔖 jQuery dragout plugin to drag files from browser onto desktop](https://www.salesking.eu/blog/coding/jquery-plugin-to-drag-files-from-browser-onto-desktop/)

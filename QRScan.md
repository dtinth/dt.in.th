---
public: true
title: Adding a QR code scanner to a web app
---

# Adding a QR code scanner to a web app

1. Install the zxing-js [JavaScript](JavaScript) library, [`@zxing/library`](https://www.npmjs.com/package/@zxing/library).

   ```html
   <script
     src="https://cdn.jsdelivr.net/npm/@zxing/library@0.19.1/umd/index.min.js"
     integrity="sha256-xYN+SFijd1FzurCe425gUlRceIDJ10UuL0ZHcMbmQs4="
     crossorigin="anonymous"
   ></script>
   ```

2. Add a button to activate [QR code](QRCode) scanner and a `<video>` tag.

   ```html
   <button id="startButton">Scan QR code</button>
   <video
     id="video"
     width="300"
     height="200"
     style="border: 1px solid gray"
   ></video>
   ```

3. When button is clicked, create call the `decodeFromInputVideoDevice` function:

   ```js
   const codeReader = new ZXing.BrowserQRCodeReader()

   const startButton = document.getElementById('startButton')
   startButton.addEventListener('click', async () => {
     const result = await codeReader.decodeFromInputVideoDevice(
       undefined,
       'video'
     )
     console.log(result)
   })
   ```

For other examples, see the [zxing-js demos](https://zxing-js.github.io/library/).

## Other ways to import zxing-js

### ESM

```js
const BrowserQRCodeReader = await import(
  'https://cdn.jsdelivr.net/npm/@zxing/library@0.19.1/+esm'
)
```

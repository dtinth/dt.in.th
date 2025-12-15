---
topic: true
public: true
title: QR Code
---

**QR code** is a two-dimensional barcode.

## Displaying QR codes

- [HDR QR Code](HDRQRCode)
- [The mathematics behind a 3D QR code explosion effect in ppqr.app (talk)](WhenMathsStrikeBack)

## Scanning QR codes

- [Adding a QR code scanner to a web app](QRScan)
- [Reading data from OBZ Barcode Reader on the web using Web Serial API](OBZBarcodeScannerJS)

## Generating QR codes

- **[uqr](https://github.com/unjs/uqr)** – A lightweight JavaScript library for generating QR codes as SVG

  <div style="border-radius: 1em; border: 2px solid #656463; padding: 1em; background: #252423; margin: 2em 0;">
    <input
      type="text"
      v-model="qrText"
      placeholder="Enter text to generate QR code"
      class="form-control"
      style="margin-bottom: 1em;"
      :disabled="!libLoaded"
    />
    <div v-if="qrDataUrl" style="text-align: center; padding: 1em; background: #ffffff;" class="not-prose">
      <img :src="qrDataUrl" alt="QR Code" style="max-width: 256px; max-height: 256px;" class="mx-auto block" />
    </div>
    <div v-if="qrError" style="color: #ef4444;">{{ qrError }}</div>
    <div v-if="!libLoaded" style="color: #8b8685; text-align: center;">Loading library…</div>
  </div>

- [In a command-line environment, use `qrencode`](https://linux.die.net/man/1/qrencode)

- ~~[Google Charts provides a convenient URL to generate a QR code](https://developers.google.com/chart/infographics/docs/qr_codes)~~ ([deprecated](https://developers.googleblog.com/en/changes-to-deprecation-policies-and-api-spring-cleaning/))

  :::details[Deprecated code example]
  ```js
  const qr = (payload) =>
    `https://chart.googleapis.com/chart?${new URLSearchParams({
      cht: 'qr',
      chs: '300x300',
      chl: payload,
    })}`
  ```
  :::

## Tools

- [Paste image to decode QR code](PasteQR) – Decode QR codes from screenshots or images
- [QR Code Logger](QRLogger) – Scan and log QR codes, export as TSV

<script setup>
  const qrText = Vue.ref('')
  const qrDataUrl = Vue.ref('')
  const qrError = Vue.ref('')
  const libLoaded = Vue.ref(false)
  let uqr = null

  const generateQR = async () => {
    try {
      qrError.value = ''
      if (!uqr) {
        const mod = await import('https://cdn.jsdelivr.net/npm/uqr@0.1.2/+esm')
        uqr = mod
        libLoaded.value = true
      }
      const svg = uqr.renderSVG(qrText.value)
      qrDataUrl.value = 'data:image/svg+xml,' + encodeURIComponent(svg)
    } catch (error) {
      qrError.value = `Error generating QR code: ${error.message}`
      console.error(error)
    }
  }

  Vue.watch(qrText, () => {
    if (qrText.value && libLoaded.value) {
      generateQR()
    } else {
      qrDataUrl.value = ''
    }
  })

  Vue.onMounted(() => {
    generateQR()
  })
</script>

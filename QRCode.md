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

- [Google Charts provides a convenient URL to generate a QR code](https://developers.google.com/chart/infographics/docs/qr_codes)

  ```js
  const qr = (payload) =>
    `https://chart.googleapis.com/chart?${new URLSearchParams({
      cht: 'qr',
      chs: '300x300',
      chl: payload,
    })}`
  ```

- [In a command-line environment, use `qrencode`](https://linux.die.net/man/1/qrencode)

---
public: true
title: Reading data from OBZ Barcode Reader on the web using Web Serial API
---

# Reading data from OBZ Barcode Reader on the web using Web Serial API

I just purchased [a barcode scanner from OBZ](https://www.obzshop.com/barcode_scanner/40.html). Normally, it functions as a USB keyboard: when you scan a barcode, it types the barcode's value as if you typed it on a keyboard. This means the barcode data is sent to whatever application has focus.

However, the scanner also has a USB-COM mode, which allows it to act as a serial device. This means it can send the barcode data directly to a program that reads from a serial port. Thankfully, the [web platform](WebPlatform) has a [Web Serial API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API) that allows web applications to read from serial ports.

## Demo

<p>
  <button ref="connectButton" @click="connect">Connect</button>
  {{status}}
</p>

## Notes

- On Linux, you need to [have the permissions to access the serial port](https://askubuntu.com/a/58122).

## Code

```js
// Connect to the barcode scanner
const port = await navigator.serial.requestPort()
await port.open({ baudRate: 9600 })
const readable = port.readable.pipeThrough(new TextDecoderStream())

// Handler for barcode scans
const onScan = (data) => {
  console.log(`Scanned: ${data}`)
}

// Read data from the barcode scanner
let output = ''
for await (const value of readable) {
  output += value
  for (;;) {
    let index = output.indexOf(String.fromCharCode(13))
    if (index === -1) {
      break
    }
    const line = output.slice(0, index)
    output = output.slice(index + 1)
    onScan(line)
  }
}
```

It’s great to know that the [web platform](WebPlatform) has powerful APIs that lets us interface with [hardware devices](Hardware).

<script>
  export default {
    setup() {
      const status = Vue.ref('Click the button to connect')
      const connect = async () => {
        status.value = 'Connecting...'
        try {
          const serial = navigator.serial || (await (async () => {
            status.value = 'Loading web-serial-polyfill...'
            const mod = await import('https://cdn.jsdelivr.net/npm/web-serial-polyfill@1.0.15/dist/serial.js')
            return mod.serial
          })())
          const port = await serial.requestPort();
          status.value = 'Port obtained, opening...'

          await port.open({ baudRate: 9600 });
          status.value = 'Port opened, reading...'

          const readable = port.readable.pipeThrough(new TextDecoderStream());

          let output = ''
          for await (const value of readable) {
            output += value;
            for (;;) {
              let index = output.indexOf(String.fromCharCode(13));
              if (index === -1) {
                break;
              }
              const line = output.slice(0, index);
              output = output.slice(index + 1);
              status.value = `Read: "${line}" at ${new Date().toLocaleTimeString()}`
            }
          }
          status.value = 'Connection closed'
        } catch (error) {
          status.value = `Error: ${error}`
        }
      }

      return {
        connect,
        status
      }
    }
  }
</script>

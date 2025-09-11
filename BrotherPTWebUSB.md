---
title: A web-based printing tool for Brother P-touch series label printers
public: true
---

# A web-based printing tool for Brother P-touch series label printers

:::lead
The Brother P-touch series of label printers are popular for their ease of use and portability, and Brother has made their [printing protocol](https://download.brother.com/welcome/docp100064/cv_pte550wp750wp710bt_eng_raster_102.pdf) publicly available, which allows developers to create custom software for these printers.
:::

:::warning
This tool has only been tested with the Brother PT-P710BT printer with tapes of size 18mm. Other printers and tape sizes are not supported. However, [the code is open source](https://github.com/dtinth/p-touch-webusb/blob/main/brother-pt.js). If you manage to get it working with other printers or tape sizes, feel free to submit a pull request.
:::

<template v-if="error">

:::danger[Error]
{{error}}
:::

</template>

<div
  style="border-radius: 1em; border: 2px solid #656463; padding: 1em; background: #252423; text-align: center; margin: 2em 0;"
  v-on:dragover.prevent
  v-on:drop.prevent="handleImageFile($event.dataTransfer.files[0])"
>
  <p class="mt-0">
    <template v-if="!connected">
      Please connect to the printer to get started.
    </template>
    <template v-else>
      Tape width is {{mediaWidth}}mm. Drop, paste, or <a href="javascript://" v-on:click="selectImage">select an image</a> to print.<br />
      Image must be at least 174 pixels long and exactly {{printWidth}} pixels wide.
    </template>
  </p>
  <button
    class="btn disabled:opacity-50"
    v-on:click="btn.onclick($event)"
    v-on:pointerdown="down"
    v-on:pointerup="up"
    v-bind:disabled="!btn.enabled"
  >{{btn.text}}</button>
  <p class="mb-0 mt-4 not-prose flex justify-center" v-if="preview">
    <img v-bind:src="preview" alt="Preview" class="n-preview" />
  </p>
</div>

<style>
  .n-preview:hover {
    image-rendering: pixelated;
  }
</style>

<p class="text-[#8b8685]" v-if="connected && image && false">
  <strong class="text-[#8b8685]">Tip:</strong>
  Hold down the Alt key while clicking the Print button if there are more labels to print. This will make the printer not cut the tape until the next print job, saving tape.
</p>

<script setup>
  const printerRef = Vue.ref()
  const error = Vue.ref()
  const connected = Vue.ref(false)
  const connecting = Vue.ref(false)
  const printing = Vue.ref(false)
  const image = Vue.ref()
  const preview = Vue.ref()
  const mediaWidth = Vue.ref('…')
  const printWidth = Vue.ref('…')

  const tapeColors = [
    { id: 0x01, color: '#FFFFFF', description: 'White' },
    { id: 0x02, color: '#A1A1AA', description: 'Other' },
    { id: 0x03, color: '#F0FDF4', description: 'Clear' },
    { id: 0x04, color: '#EF4444', description: 'Red' },
    { id: 0x05, color: '#3B82F6', description: 'Blue' },
    { id: 0x06, color: '#FACC15', description: 'Yellow' },
    { id: 0x07, color: '#22C55E', description: 'Green' },
    { id: 0x08, color: '#171717', description: 'Black' },
    { id: 0x09, color: '#F0FDF4', description: 'Clear (White text)' },
    { id: 0x20, color: '#F5F5F5', description: 'Matte White' },
    { id: 0x21, color: '#F0FDF4', description: 'Matte Clear' },
    { id: 0x22, color: '#E5E7EB', description: 'Matte Silver' },
    { id: 0x23, color: '#FEF3C7', description: 'Satin Gold' },
    { id: 0x24, color: '#F3F4F6', description: 'Satin Silver' },
    { id: 0x30, color: '#60A5FA', description: 'Blue (D)' },
    { id: 0x31, color: '#F87171', description: 'Red (D)' },
    { id: 0x40, color: '#FB923C', description: 'Fluorescent Orange' },
    { id: 0x41, color: '#FDE047', description: 'Fluorescent Yellow' },
    { id: 0x50, color: '#EC4899', description: 'Berry Pink (S)' },
    { id: 0x51, color: '#D1D5DB', description: 'Light Gray (S)' },
    { id: 0x52, color: '#86EFAC', description: 'Lime Green (S)' },
    { id: 0x60, color: '#FEF08A', description: 'Yellow (F)' },
    { id: 0x61, color: '#FCA5A5', description: 'Pink (F)' },
    { id: 0x62, color: '#93C5FD', description: 'Blue (F)' },
    { id: 0x70, color: '#FFFFFF', description: 'White (Heat-shrink Tube)' },
    { id: 0x90, color: '#FFFFFF', description: 'White (Flex. ID)' },
    { id: 0x91, color: '#FEF08A', description: 'Yellow (Flex. ID)' },
    { id: 0xF0, color: '#E5E7EB', description: 'Clearning' },
    { id: 0xF1, color: '#D1D5DB', description: 'Stencil' },
    { id: 0xFF, color: '#DC2626', description: 'Incompatible' }
  ];

  const textColors = [
    { id: 0x01, color: '#FFFFFF', description: 'White' },
    { id: 0x04, color: '#EF4444', description: 'Red' },
    { id: 0x05, color: '#3B82F6', description: 'Blue' },
    { id: 0x08, color: '#171717', description: 'Black' },
    { id: 0x0A, color: '#FEF3C7', description: 'Gold' },
    { id: 0x62, color: '#93C5FD', description: 'Blue (F)' },
    { id: 0xF0, color: '#E5E7EB', description: 'Cleaning' },
    { id: 0xF1, color: '#D1D5DB', description: 'Stencil' },
    { id: 0x02, color: '#A1A1AA', description: 'Other' },
    { id: 0xFF, color: '#DC2626', description: 'Incompatible' }
  ];

  const tapeColor = Vue.ref(tapeColors[0]);
  const textColor = Vue.ref(textColors[3]);

  Vue.onMounted(async () => {
    try {
      const mod = await import('https://cdn.jsdelivr.net/gh/dtinth/p-touch-webusb@9d5c948c81bcc56e95e46fae947548c754ddba2f/brother-pt.js');
      printerRef.value = new mod.BrotherPrinter();
      printerRef.value.onstatus = status => {
        console.log('status', status);
      }
    } catch (error) {
      console.error(error);
      error.value = String(error);
    }
  })

  function handleImageFile (file) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Expected an image file.');
      return;
    }
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      handleImageData(imageData)
    }
    img.onerror = () => {
      alert('Failed to load the image.');
    }
    img.src = URL.createObjectURL(file);
  }

  function handleImageData(imageData) {
    const shorter = Math.min(imageData.width, imageData.height);
    const longer = Math.max(imageData.width, imageData.height);
    if (longer < 174) {
      alert('Image must be at least 174 pixels long.');
      return;
    }
    if (shorter !== printWidth.value && shorter !== 128) {
      alert(`Image must be exactly ${printWidth.value} pixels wide.`);
      return;
    }
    image.value = [...toColumns(imageData, shorter)];
    preview.value = generatePreview(image.value);
  }

  function generatePreview(columns) {
    const length = columns.length;
    const columnWidth = columns[0].length;
    const canvas = document.createElement("canvas");
    canvas.width = length;
    canvas.height = columnWidth;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = tapeColor.value.color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = textColor.value.color;
    columns.forEach((column, x) => {
      column.forEach((pixel, y) => {
        if (pixel) {
          ctx.fillRect(x, y, 1, 1);
        }
      });
    });
    return canvas.toDataURL();
  }

  function* toColumns(imageData, columnWidth) {
    const readPixel = (x, y) => {
      const idx = (y * imageData.width + x) * 4;
      const r = imageData.data[idx];
      const g = imageData.data[idx + 1];
      const b = imageData.data[idx + 2];
      const a = imageData.data[idx + 3] / 255;
      const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) * a + 255 * (1 - a);
      return luminance < 128 ? 255 : 0;
    };
    if (imageData.height === columnWidth) {
      for (let x = 0; x < imageData.width; x++) {
        yield Array.from({ length: columnWidth }, (_, y) =>
          readPixel(x, y)
        );
      }
    } else if (imageData.width === columnWidth) {
      for (let y = 0; y < imageData.height; y++) {
        yield Array.from({ length: columnWidth }, (_, x) =>
          readPixel(columnWidth - x - 1, y)
        );
      }
    } else {
      throw new Error("Invalid image dimensions");
    }
    // Yield 6 blank columns afterwards to work around PT-P710BT's cutting inaccuracy
    for (let i = 0; i < 6; i++) {
      yield Array.from({ length: columnWidth }, () => 0);
    }
  }

  const onPaste = (event) => {
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;
    for (let index in items) {
      const item = items[index];
      if (item.kind === 'file') {
        const blob = item.getAsFile();
        if (blob.type.startsWith('image/')) {
          handleImageFile(blob);
          return
        }
      }
    }
  };
  Vue.onMounted(() => {
    document.addEventListener('paste', onPaste);
  });
  Vue.onUnmounted(() => {
    document.removeEventListener('paste', onPaste);
  });

  async function selectImage () {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;
      handleImageFile(file);
    }
    input.click();
  }

  const btn = Vue.computed(() => {
    const printer = printerRef.value;
    if (!printer) {
      return {
        text: 'Loading code',
        enabled: false,
      }
    }
    if (connecting.value) {
      return {
        text: 'Connecting to printer…',
        enabled: false,
      }
    }
    if (!connected.value) {
      return {
        text: 'Connect to printer',
        enabled: true,
        onclick: async () => {
          connecting.value = true;
          try {
            await printer.connect();
            mediaWidth.value = printer.mediaWidth === 4 ? 3.5 : printer.mediaWidth;
            printWidth.value = printer.printWidth;
            tapeColor.value = tapeColors.find((c) => c.id === printer.tapeColor) || tapeColor.value;
            textColor.value = textColors.find((c) => c.id === printer.textColor) || textColor.value;
            connected.value = true;
          } catch (error) {
            console.error(error);
            error.value = String(error);
          } finally {
            connecting.value = false;
          }
        }
      }
    }
    if (printing.value) {
      return {
        text: 'Printing…',
        enabled: false,
      }
    }
    if (!image.value) {
      return {
        text: 'Please load an image',
        enabled: false,
      }
    }
    return {
      text: 'Print',
      enabled: true,
      onclick: async (e) => {
        printing.value = true;
        try {
          await printer._updateStatus();
          await printer.print(image.value);
          // await printer.print(image.value, !e.altKey);
        } catch (error) {
          console.error(error);
          error.value = String(error);
        } finally {
          printing.value = false;
        }
      }
    }
  })
</script>

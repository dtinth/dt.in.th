---
public: true
topic: true
title: Colors
---

# Colors

## dtinth’s Color Palette

These are the colors that I use in my creations since 2009.

<script setup>
  const colors = {
    'bg-[#090807]': '',
    'bg-[#252423]': '',
    'bg-[#353433]': '',
    'bg-[#454443]': '',
    'bg-[#656463]': '',
    'bg-[#8b8685]': '',
    'bg-[#e9e8e7]': 'text-[#090807]',
    'bg-[#d7fc70]': 'text-[#090807]',
    'text-[#d7fc70]': '',
    'text-[#bbeeff]': '',
    'text-[#febfea]': '',
    'text-[#ffffbb]': '',
    'text-[#e9e8e7]': '',
    'text-[#8b8685]': '',
  }
</script>

<ul class="list-none p-0 flex gap-4 flex-wrap">
  <li v-for="(value, key) in colors" :key="key" :class="[key, value]" class='p-4 rounded n-color-block font-semibold m-0 w-[180px] font-mono'>
    {{ key }}
  </li>
</ul>

<style scoped>
  .n-color-block {
    box-shadow: inset 0 0 0 1px #fff4, 0 2px 4px #0008;
  }
</style>

## Notes

- [HDR QR Code](HDRQRCode)
- [OKLCH Color Scale Plotter](OklchPlot)
- [Oklab Visualizer](OklabVisualizer)
- [Hue Game (HSL)](HueGameHSL)
- [Using LCH colors](LCH)
- [Modifying the alpha channel of a color using CSS](CSSChangeColorOpacity)
- [ปริภูมิสี LCH (color space)](DiscoveringLCH)

## Bookmarks

- [🔖 RGB Color Game](https://primozz.github.io/colorgame/): A game to practice mental RGB color-mixing.
- [🔖 Color Game](https://color.method.ac/): A color matching game with 6 rounds: Hue, Saturation, Complementary, Analogous, Triadic, and Tetradic.

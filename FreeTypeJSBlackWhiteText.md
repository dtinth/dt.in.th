---
title: Drawing low resolution monochrome text with freetype-wasm
public: true
---

# Drawing low resolution monochrome text with freetype-wasm

I recently got myself a [label printer](https://www.brother-usa.com/ptouch/cube-plus/home), which can only print pixels in monochrome (black or white, no grayscale). Separately, earlier this year I bought this gorgeous monospace font [Berkeley Mono](https://berkeleygraphics.com/typefaces/berkeley-mono/). It looks great on my terminal… Now I want to print labels using this same font… but the result looks like the first image below:

<style scoped>
  .n-exs img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    image-rendering: pixelated;
  }
</style>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 n-exs"><div>

:::figure[Before: Using macOS native font renderer]{.framed}
![](https://im.dt.in.th/ipfs/bafybeia5pdsp4dvlaaeipxvti6omszfutdpaqagrzwc4gslujr2o2wlc3u/b.webp)
:::

</div><div>

:::figure[After: Using freetype-wasm + manual adjustments]{.framed}
![](https://im.dt.in.th/ipfs/bafybeiel6dogs6jg4foviam5p7po6oztktm4deawntn7srk52nrcmdrqla/a.webp)
:::

</div></div>

To get a better printout (second image), I need to find an alternative way to render text — one that can render small text as monochrome pixels well. That’s when I found [**The FreeType Auto-Hinter**](https://freetype.org/autohinting/hinter.html).

Now I need a way to use it to generate a monochrome bitmap image. As I’m a [web](WebPlatform) developer, I want something that I can use in a web browser. That’s when I found [**freetype-wasm**](https://github.com/Ciantic/freetype-wasm).

Lastly, the [**Local Font Access API**](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts) lets web applications directly access locally-installed fonts like a desktop font rather than a web font.

## Try it out!

First, we need access to your fonts:

<p>
  <button class="btn" @click="queryFonts">Query fonts</button>
</p>

Pick a font and size below:

<p class="flex gap-2">
  <select class="form-control" style="width: 300px" :disabled="availableFonts.length === 0" v-model="selectedFont">
    <option v-if="availableFonts.length === 0" disabled>Please click the above button first.</option>
    <option v-for="font in availableFonts" :value="font.postscriptName">{{ font.fullName }}</option>
  </select>
  <input class="form-control" :disabled="availableFonts.length === 0" type="number" min="1" v-model="selectedFontSize" style="width: 64px">
</p>

Enter some text to render it:

<p>
  <input class="form-control" :disabled="!selectedFont" type="text" v-model="text" placeholder="Enter text to render" style="box-sizing: border-box; width: 100%">
</p>

<p style="min-height: 96px">
  <canvas ref="canvas" width="320" height="48" style="border: 1px solid black; background: white;"></canvas>
</p>

<script>
  async function createFreeTypeRenderer() {
    const { default: FreeTypeInit } = await import('https://cdn.jsdelivr.net/npm/freetype-wasm@0/dist/freetype.js')
    const FreeType = await FreeTypeInit()

    /**
     * Loads a font from a URL or ArrayBuffer.
     */
    const loadFont = async (url, { forceAutoHint = true } = {}) => {
      let font
      if (typeof url === 'string') {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to load font')
        }
        font = await response.arrayBuffer()
      } else if (url instanceof ArrayBuffer) {
        font = url
      } else {
        throw new Error('Invalid font source')
      }

      const [face] = FreeType.LoadFontFromBytes(new Uint8Array(font))

      /**
       * Creates a renderer for a specific font size.
       */
      const withSize = (size, handleNewGlyph = (code, char, glyph) => {}) => {
        const cache = new Map()
        async function updateCache(str) {
          FreeType.SetFont(face.family_name, face.style_name)
          FreeType.SetCharmap(FreeType.FT_ENCODING_UNICODE)
          FreeType.SetPixelSize(0, size)

          // Get char codes without bitmaps
          const codes = []
          for (const char of new Set(str)) {
            const point = char.codePointAt(0)
            if (!cache.has(char) && point !== undefined) {
              codes.push(point)
            }
          }

          // Populate missing bitmaps
          const newGlyphs = FreeType.LoadGlyphs(
            codes,
            FreeType.FT_LOAD_RENDER |
              FreeType.FT_LOAD_MONOCHROME |
              FreeType.FT_LOAD_TARGET_MONO |
              (forceAutoHint ? FreeType.FT_LOAD_FORCE_AUTOHINT : 0)
          )
          for (const [code, glyph] of newGlyphs) {
            const char = String.fromCodePoint(code)
            await handleNewGlyph(code, char, glyph)
            cache.set(char, {
              glyph,
              bitmap: glyph.bitmap.imagedata
                ? await createImageBitmap(glyph.bitmap.imagedata)
                : null,
            })
          }
        }

        /**
         * @param {CanvasRenderingContext2D} ctx
         * @param {string} str
         * @param {number} offsetx
         * @param {number} offsety
         */
        const draw = async (
          ctx,
          str,
          offsetx,
          offsety,
          { letterSpacing = 0 } = {}
        ) => {
          await updateCache(str)
          let prev = null
          for (const char of str) {
            const { glyph, bitmap } = cache.get(char) || {}
            if (glyph) {
              // Kerning
              if (prev) {
                const kerning = FreeType.GetKerning(
                  prev.glyph_index,
                  glyph.glyph_index,
                  0
                )
                offsetx += kerning.x >> 6
              }

              if (bitmap) {
                ctx.drawImage(
                  bitmap,
                  offsetx + glyph.bitmap_left,
                  offsety - glyph.bitmap_top
                )
              }

              offsetx += glyph.advance.x >> 6
              offsetx += letterSpacing
              prev = glyph
            }
          }
        }

        const measure = async (str, { letterSpacing = 0 } = {}) => {
          await updateCache(str)
          let width = 0
          let prev = null
          for (const char of str) {
            const { glyph } = cache.get(char) || {}
            if (glyph) {
              if (prev) {
                const kerning = FreeType.GetKerning(
                  prev.glyph_index,
                  glyph.glyph_index,
                  0
                )
                width += kerning.x >> 6
                width += letterSpacing
              }
              width += glyph.advance.x >> 6
              prev = glyph
            }
          }
          return width
        }

        const getGlyph = async (char) => {
          await updateCache(char)
          return cache.get(char)
        }
        return { draw, measure, getGlyph }
      }
      return { withSize }
    }
    return { loadFont }
  }

  export default {
    setup() {
      const availableFonts = Vue.ref([])
      const selectedFont = Vue.ref(null)
      const canvas = Vue.ref(null)
      const selectedFontSize = Vue.ref(12)
      const text = Vue.ref('A quick brown fox jumps over the lazy dog')

      async function queryFonts () {
        try {
          const result = await window.queryLocalFonts()
          const set = new Set(result.map(font => font.postscriptName))
          selectedFont.value = [
            'BerkeleyMono-Bold',
            'JetBrainsMonoRoman-Bold',
            'MonaspaceKrypton-Bold',
            'Cousine-Regular',
            'Menlo-Regular',
            'Verdana'
          ].find(f => set.has(f)) || result[0].postscriptName
          availableFonts.value = result;
          console.log('Available fonts', result)
        } catch (err) {
          alert(`Unable to query fonts: ${err}`);
        }
      }

      let rendererPromise
      Vue.onMounted(() => {
        rendererPromise = createFreeTypeRenderer()

        const canvasElement = canvas.value
        canvasElement.draggable = true;
        canvasElement.ondragstart = (e) => {
          if (!e.dataTransfer) {
            return;
          }
          e.dataTransfer.clearData();
          const dataUrl = canvasElement.toDataURL();
          e.dataTransfer.setData(
            "DownloadURL",
            ["image/png", `${selectedFont.value}.rendered.png`, dataUrl].join(":")
          );
        };
      })

      const fontCache = new Map()

      Vue.watch([
        selectedFont,
        selectedFontSize,
        text,
      ], async ([font, sizeStr, str]) => {
        const size = parseInt(sizeStr)
        try {
          const renderer = await rendererPromise
          let freeTypeFont = fontCache.get(font)
          if (!freeTypeFont) {
            const fontBlob = await window.queryLocalFonts({ postscriptNames: [font] })
              .then((fonts) => fonts[0].blob())
              .then((blob) => blob.arrayBuffer())
            freeTypeFont = await renderer.loadFont(fontBlob)
            fontCache.set(font, freeTypeFont)
          }
          const fontWithSize = freeTypeFont.withSize(size)
          const width = await fontWithSize.measure(str)
          const ctx = canvas.value.getContext('2d')
          canvas.value.width = width + 16
          canvas.value.height = size + 24
          ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
          await fontWithSize.draw(ctx, str, Math.floor((canvas.value.width - width) / 2), canvas.value.height - 16)
        } catch (e) {
          console.error(e)
        }
      })
      return {
        queryFonts,
        availableFonts,
        selectedFont,
        selectedFontSize,
        text,
        canvas,
      }
    }
  }
</script>

## The FreeType renderer

This function initializes the FreeType library and provides a way to load fonts and render text.

```js
import FreeTypeInit from 'https://cdn.jsdelivr.net/npm/freetype-wasm@0/dist/freetype.js'

// Based on https://github.com/Ciantic/freetype-wasm/blob/master/example/example.js
async function createFreeTypeRenderer() {
  const FreeType = await FreeTypeInit()

  /**
   * Loads a font from a URL or ArrayBuffer.
   */
  const loadFont = async (url, { forceAutoHint = true } = {}) => {
    let font
    if (typeof url === 'string') {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to load font')
      }
      font = await response.arrayBuffer()
    } else if (url instanceof ArrayBuffer) {
      font = url
    } else {
      throw new Error('Invalid font source')
    }

    const [face] = FreeType.LoadFontFromBytes(new Uint8Array(font))

    /**
     * Creates a renderer for a specific font size.
     */
    const withSize = (size, handleNewGlyph = (code, char, glyph) => {}) => {
      const cache = new Map()
      async function updateCache(str) {
        FreeType.SetFont(face.family_name, face.style_name)
        FreeType.SetCharmap(FreeType.FT_ENCODING_UNICODE)
        FreeType.SetPixelSize(0, size)

        // Get char codes without bitmaps
        const codes = []
        for (const char of new Set(str)) {
          const point = char.codePointAt(0)
          if (!cache.has(char) && point !== undefined) {
            codes.push(point)
          }
        }

        // Populate missing bitmaps
        const newGlyphs = FreeType.LoadGlyphs(
          codes,
          FreeType.FT_LOAD_RENDER |
            FreeType.FT_LOAD_MONOCHROME |
            FreeType.FT_LOAD_TARGET_MONO |
            (forceAutoHint ? FreeType.FT_LOAD_FORCE_AUTOHINT : 0)
        )
        for (const [code, glyph] of newGlyphs) {
          const char = String.fromCodePoint(code)
          await handleNewGlyph(code, char, glyph)
          cache.set(char, {
            glyph,
            bitmap: glyph.bitmap.imagedata
              ? await createImageBitmap(glyph.bitmap.imagedata)
              : null,
          })
        }
      }

      /**
       * @param {CanvasRenderingContext2D} ctx
       * @param {string} str
       * @param {number} offsetx
       * @param {number} offsety
       */
      const draw = async (
        ctx,
        str,
        offsetx,
        offsety,
        { letterSpacing = 0 } = {}
      ) => {
        await updateCache(str)
        let prev = null
        for (const char of str) {
          const { glyph, bitmap } = cache.get(char) || {}
          if (glyph) {
            // Kerning
            if (prev) {
              const kerning = FreeType.GetKerning(
                prev.glyph_index,
                glyph.glyph_index,
                0
              )
              offsetx += kerning.x >> 6
            }

            if (bitmap) {
              ctx.drawImage(
                bitmap,
                offsetx + glyph.bitmap_left,
                offsety - glyph.bitmap_top
              )
            }

            offsetx += glyph.advance.x >> 6
            offsetx += letterSpacing
            prev = glyph
          }
        }
      }

      const measure = async (str, { letterSpacing = 0 } = {}) => {
        await updateCache(str)
        let width = 0
        let prev = null
        for (const char of str) {
          const { glyph } = cache.get(char) || {}
          if (glyph) {
            if (prev) {
              const kerning = FreeType.GetKerning(
                prev.glyph_index,
                glyph.glyph_index,
                0
              )
              width += kerning.x >> 6
              width += letterSpacing
            }
            width += glyph.advance.x >> 6
            prev = glyph
          }
        }
        return width
      }

      const getGlyph = async (char) => {
        await updateCache(char)
        return cache.get(char)
      }
      return { draw, measure, getGlyph }
    }
    return { withSize }
  }
  return { loadFont }
}
```

## Example usage

```js
const renderer = await createFreeTypeRenderer()

const berkeleyMono = await window
  .queryLocalFonts({ postscriptNames: ['BerkeleyMono-Bold'] })
  .then((fonts) => fonts[0].blob())
  .then((blob) => blob.arrayBuffer())
  .then((buffer) => renderer.loadFont(buffer))

await berkeleyMono.withSize(19).draw(ctx, 'Hello, world!', 0, 19)
```

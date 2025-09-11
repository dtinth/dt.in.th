---
title: Oklab Visualizer
public: true
---

# Oklab Visualizer

This little visualizer shows the A-B plane of the Oklab [color](Colors) space that lies within the sRGB gamut, given a fixed lightness value.

**Lightness:** {{(lightness * 100).toFixed(0)}}%
<br><input type="range" min="0" max="1" step="0.01" v-model="lightness" style="box-sizing: border-box; width: 256px;">

<canvas width="256" height="256" ref="canvasRef"></canvas>

<style>
</style>

<script>
  export default {
    setup() {
      const culoriRef = Vue.ref()
      const canvasRef = Vue.ref()
      const lightness = Vue.ref(0.5)

      Vue.onMounted(async () => {
        const culoriPromise = await import('https://cdn.jsdelivr.net/npm/culori@3.2.0/+esm')
        culoriRef.value = (await culoriPromise)
      })

      let toDisplay = null

      Vue.watch([culoriRef, canvasRef, lightness], ([culori, canvas, l]) => {
        if (!culori || !canvas) return
        if (!toDisplay) {
          requestAnimationFrame(() => {
            toDisplay()
          })
        }
        toDisplay = () => {
          const ctx = canvas.getContext('2d')
          const { width, height } = canvas

          ctx.clearRect(0, 0, width, height)
          ctx.fillStyle = 'rgba(255,255,255,0.16)'

          // Display horizontal and vertical lines through the center
          ctx.fillRect(0, height / 2, width, 1)
          ctx.fillRect(width / 2, 0, 1, height)

          for (let x = 0; x < width; x++) {
            const a = ((x / width) - 0.5) * 0.4 / 0.5
            for (let y = 0; y < height; y++) {
              const b = ((y / height) - 0.5) * 0.4 / 0.5
              const fillStyle = `oklab(${l} ${a} ${b})`
              if (culori.displayable({ mode: 'oklab', l, a, b })) {
                ctx.fillStyle = fillStyle
                ctx.fillRect(x, y, 1, 1)
              }
            }
          }
          toDisplay = null
        }
      })

      return { canvasRef, lightness }
    }
  }
</script>

import { decode } from 'blurhash'

let canvas
const cache = {}

function toDataURL(blurhash) {
  if (cache[blurhash]) {
    return cache[blurhash]
  }
  if (!canvas) {
    canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
  }
  const ctx = canvas.getContext('2d')
  const pixels = decode(blurhash, 32, 32)
  const imageData = ctx.createImageData(32, 32)
  imageData.data.set(pixels)
  ctx.putImageData(imageData, 0, 0)
  const url = canvas.toDataURL(blurhash)
  cache[blurhash] = url
  return url
}

class BlurhashImage extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    const blurhash = this.getAttribute('blurhash')
    try {
      this.style.backgroundImage = `url("${toDataURL(blurhash)}")`
    } catch (error) {
      console.warn('Cannot decode blurhash', blurhash, error)
    }
  }
}

if (typeof customElements !== 'undefined') {
  customElements.define('blurhash-image', BlurhashImage)
}

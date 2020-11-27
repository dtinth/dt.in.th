// @ts-check
/// <reference types="pixi.js" />
/// <reference types="pixi-projection" />

const app = new PIXI.Application({
  transparent: true,
  autoStart: false
})
app.ticker.stop()
PIXI.Ticker.shared.autoStart = false
PIXI.Ticker.shared.stop()
PIXI.Ticker.system.autoStart = false
PIXI.Ticker.system.stop()

document.body.appendChild(app.view)

const camera = new PIXI.projection.Camera3d()
camera.setPlanes(1280)
app.stage.addChild(camera)

/**
 * @param {string} color
 */
function createColorTexture(color) {
  const sqCanvas = document.createElement('canvas')
  sqCanvas.width = 16
  sqCanvas.height = 16
  const sqCtx = sqCanvas.getContext('2d')
  if (!sqCtx) {
    throw new Error('Cannot create canvas context')
  }
  sqCtx.fillStyle = color
  sqCtx.fillRect(0, 0, 16, 16)
  return PIXI.Texture.from(sqCanvas)
}

/**
 * @typedef {{ accepts(w: number, h: number): boolean; destroy(): void; update(t: number): boolean; reset(): void }} ParticleSystem
 */

/**
 * @type {ParticleSystem}
 */
let currentParticleSystem = {
  accepts(_w, _h) {
    return false
  },
  destroy() {},
  update() {
    return true
  },
  reset() {}
}

/**
 * @param {number} w
 * @param {number} h
 */
function setSize(w, h) {
  app.renderer.resize(w, h)
  camera.position.set(w / 2, h / 2)
  if (!currentParticleSystem.accepts(w, h)) {
    currentParticleSystem.destroy()
    currentParticleSystem = createParticleSystem(w, h)
  }
}

/**
 * @param {number} w
 * @param {number} h
 * @returns {ParticleSystem}
 */
function createParticleSystem(w, h) {
  /**
   * @type {{ update(t: number): boolean; destroy(): void; reset(): void }[]}
   */
  const sprites = []
  const spriteSize = Math.hypot(w, h) / 72

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {PIXI.Texture} texture
   */
  const addSprite = (x, y, z, texture) => {
    const fg = new PIXI.projection.Sprite3d(texture)
    fg.anchor.set(0.5)
    let zSpeed, rx, ry, rz
    const reset = () => {
      zSpeed = -(256 + 512 * Math.random()) * 8
      rx = (Math.random() - 0.5) * 5
      ry = (Math.random() - 0.5) * 5
      rz = (Math.random() - 0.5) * 5
    }

    // @ts-ignore
    fg.position3d.set(x * spriteSize, y * spriteSize, 0)
    // @ts-ignore
    fg.euler.set(0, 0, 0)
    // @ts-ignore
    fg.scale3d.set((spriteSize / 16) * 1.1)

    camera.addChild(fg)

    sprites.push({
      update: t => {
        fg.position3d.z = z + zSpeed * t
        fg.euler.x = rx * t
        fg.euler.y = ry * t
        fg.euler.z = rz * t
        if (x === 0 && y === 0) {
          const a = 1 - Math.min(1, Math.min(0, fg.position3d.z + 960) / -320)
          fg.alpha = a
        }
        return fg.position3d.z < -1600
      },
      destroy() {
        camera.removeChild(fg)
      },
      reset
    })
  }

  for (
    let x = Math.floor(-w / spriteSize / 2);
    x <= Math.ceil(w / spriteSize / 2);
    x++
  ) {
    for (
      let y = Math.floor(-h / spriteSize / 2);
      y <= Math.ceil(h / spriteSize / 2);
      y++
    ) {
      if (x !== 0 || y !== 0)
        addSprite(x, y, 640 + Math.random() * 1280, grayTexture)
    }
  }

  for (
    let x = Math.floor(-w / spriteSize / 2);
    x <= Math.ceil(w / spriteSize / 2);
    x++
  ) {
    for (
      let y = Math.floor(-h / spriteSize / 2);
      y <= Math.ceil(h / spriteSize / 2);
      y++
    ) {
      addSprite(x, y, 0, greenTexture)
    }
  }

  return {
    accepts(nextW, nextH) {
      return w === nextW && h === nextH
    },
    destroy() {
      for (const u of sprites) {
        u.destroy()
      }
    },
    update(t) {
      let unfinishedCount = 0
      for (const u of sprites) {
        if (!u.update(Math.max(t - 0.8, 0))) unfinishedCount++
      }
      return unfinishedCount == 0
    },
    reset() {
      for (const u of sprites) {
        u.reset()
      }
    }
  }
}

const greenTexture = createColorTexture('#d7fc70')
const grayTexture = createColorTexture('#8b8685')

if (parent === self) {
  window.onresize = () => {
    setSize(window.innerWidth, window.innerHeight)
  }
  setSize(window.innerWidth, window.innerHeight)
  document.body.style.background = '#353433'
} else {
  setSize(800, 600)
}

let animation
function prepareAnimation() {
  if (!animation) {
    const currentAnimation = {
      finished: false,
      startTime: Date.now()
    }
    const frame = () => {
      const t = Date.now() - currentAnimation.startTime
      currentAnimation.finished = currentParticleSystem.update(t / 1000)
      app.render()
      if (!currentAnimation.finished) {
        requestAnimationFrame(frame)
      } else {
        parent.postMessage({ fxFinish: true }, location.origin)
        animation = null
      }
    }
    requestAnimationFrame(frame)
    animation = currentAnimation
  }
  currentParticleSystem.reset()
  animation.startTime = Date.now()
}

window.onclick = () => {
  prepareAnimation()
}

window.onmessage = e => {
  if (e.data && e.data.animate) {
    setSize(e.data.animate.width, e.data.animate.height)
    prepareAnimation()
  }
}

parent.postMessage({ fxReady: true }, location.origin)

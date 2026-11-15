---
public: true
title: OpenThai 2.0 OCR in the browser
created: 2026-11-15
---

# OpenThai 2.0 OCR in the browser

:::lead
[**OpenThai 2.0 OCR**](https://huggingface.co/iapp/OpenThai2.0-OCR-Text) is a new OCR model from iApp Technology that reads Thai and English, [released on November 12, 2026](https://iapp.co.th/blog/openthai2p0-ocr-how-to-run). It's free (Apache-2.0 licensed) and it's only **4 MB** large.
:::

Using [ONNX Runtime Web](https://onnxruntime.ai/docs/tutorials/web/), it is possible to run this model on the web browser. In this demo, after downloading the runtime and the model (~20 MB combined), everything afterwards happens on your device.

<template v-if="error">

:::danger[Error]
{{error}}
:::

</template>

<div class="n-panel" :class="{ 'n-over': dragOver }" v-on:dragover.prevent="dragOver = true" v-on:dragleave="dragOver = false" v-on:drop.prevent="onDrop">
  <div class="n-bar">
    <strong class="mr-auto">Image</strong>
    <label class="n-tog"><input type="checkbox" v-model="showBoxes"> Boxes</label>
    <button class="btn" v-on:click="pick">Open image…</button>
    <input type="file" accept="image/*" hidden ref="fileInput" v-on:change="onFile">
  </div>
  <div class="n-status"><span class="n-dot" :class="statusClass"></span> {{status}}</div>
  <div class="n-prog" v-if="progress !== null"><i :style="{ width: progress + '%' }"></i></div>
  <div class="n-drop" v-if="!hasImage" v-on:click="pick">Drop an image here, paste it (Ctrl/⌘ + V), or click to choose a file.</div>
  <div class="n-view" v-show="hasImage"><canvas ref="cv"></canvas></div>
</div>

<div class="n-panel" v-if="result">
  <div class="n-bar">
    <strong class="mr-auto">Text</strong>
    <label class="n-tog"><input type="checkbox" v-model="showDropped"> Show dropped lines</label>
    <button class="btn" v-on:click="copy" :disabled="!result.text">{{copyLabel}}</button>
  </div>
  <textarea class="n-text" ref="textArea" spellcheck="false" :value="result.text"></textarea>
  <div class="n-meta">{{meta}}</div>
  <div class="n-lines">
    <p class="n-empty" v-if="!lineItems.length">No text found.</p>
    <div v-for="l in lineItems" :key="l.key" :class="{ 'n-dropped': l.isDropped }" v-on:mouseenter="hover = l.box; draw()" v-on:mouseleave="hover = null; draw()">
      <span class="n-c" :title="l.isDropped ? l.reason + ' (' + (l.conf * 100).toFixed(1) + '%)' : ''">{{ l.isDropped ? l.reason.split(' ')[0] : (l.conf * 100).toFixed(1) }}</span>
      <span>{{ l.text || '∅' }}</span>
    </div>
  </div>
</div>

<style scoped>
  .n-panel { border: 1px solid #656463; border-radius: 0.75em; background: #252423; margin: 1.5em 0; overflow: hidden; }
  .n-panel.n-over { border-color: #bef; }
  .n-bar { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5em; padding: 0.5em 0.75em; border-bottom: 1px solid #656463; }
  .n-tog { display: inline-flex; align-items: center; gap: 0.3em; color: #8b8685; font-size: 0.875em; cursor: pointer; }
  .n-status { padding: 0.5em 0.75em; color: #8b8685; font-size: 0.875em; display: flex; align-items: center; gap: 0.5em; }
  .n-dot { width: 8px; height: 8px; border-radius: 50%; background: #8b8685; }
  .n-dot.n-ready { background: #1fae7a; }
  .n-dot.n-err { background: #d33; }
  .n-dot.n-busy { background: #e2a300; animation: n-pulse 1s infinite; }
  @keyframes n-pulse { 50% { opacity: 0.3; } }
  .n-prog { height: 3px; background: #353433; }
  .n-prog i { display: block; height: 100%; background: #bef; transition: width 0.3s; }
  .n-drop { margin: 0.75em; padding: 3em 1em; text-align: center; color: #8b8685; border: 2px dashed #656463; border-radius: 0.5em; cursor: pointer; }
  .n-view { max-height: 70vh; overflow: auto; }
  .n-view canvas { display: block; max-width: 100%; height: auto; margin: 0 auto; }
  .n-text { display: block; width: 100%; min-height: 16em; border: 0; resize: vertical; padding: 0.75em 1em; background: transparent; color: inherit; font-size: 1.05em; line-height: 1.75; outline: none; }
  .n-meta { padding: 0.5em 1em; border-top: 1px solid #656463; color: #8b8685; font-family: monospace; font-size: 0.8em; }
  .n-lines { max-height: 22em; overflow: auto; border-top: 1px solid #656463; }
  .n-lines > div { display: grid; grid-template-columns: 4em 1fr; gap: 0.5em; padding: 0.25em 1em; border-bottom: 1px solid #353433; }
  .n-lines > div:hover { background: #bef2; }
  .n-c { font-family: monospace; font-size: 0.8em; color: #8b8685; line-height: 2; }
  .n-dropped { color: #8b8685; text-decoration: line-through; }
  .n-dropped .n-c { text-decoration: none; color: #f0965f; }
  .n-empty { padding: 1em; margin: 0; color: #8b8685; }
</style>

<script setup>
// Browser port of OpenThai2.0-OCR-Text's runtime/line_engine.py (iApp Technology, Apache-2.0).
// Pipeline: DB text detector -> boxes -> line crops (H=48, "flatten") -> CTC recognizer
// -> canonical Thai -> reading order. Orientation fixing, deskew and gap splitting are left out.
const ORT_BASE = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.31.1/dist/'
const MODEL_BASE = 'https://huggingface.co/iapp/OpenThai2.0-OCR-Text/resolve/main/'

const CFG = {
  det: { limit: 1280, thresh: 0.2, boxThresh: 0.4, unclip: 1.4, minSize: 3 }, // det.yml overrides
  rec: { height: 48, maxW: 3200, batch: 16, dropBelow: 0.8, minChars: 2, junkBelow: 0.9, junkInvalid: 0.05 }, // config.json
}
const MEAN = [0.485, 0.456, 0.406], STD = [0.229, 0.224, 0.225] // applied to B, G, R

let ort = null

class ThaiOCR {
  static async load(onProgress = () => {}) {
    ort = await import(ORT_BASE + 'ort.wasm.min.mjs')
    ort.env.wasm.wasmPaths = ORT_BASE
    ort.env.wasm.numThreads = 1
    const sizes = { 'det.onnx': 0, 'rec.onnx': 0, 'wasm': 0 }
    const totals = { 'det.onnx': 1.1e6, 'rec.onnx': 2.4e6, 'wasm': 14.8e6 }
    const report = () => {
      const got = Object.values(sizes).reduce((a, b) => a + b, 0)
      const all = Object.values(totals).reduce((a, b) => a + b, 0)
      onProgress(Math.min(99, (100 * got) / all))
    }
    const get = async (name, url) => {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`Could not download ${name} (HTTP ${res.status})`)
      const len = +res.headers.get('content-length')
      if (len) totals[name] = len
      const reader = res.body.getReader(), chunks = []
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        chunks.push(value); sizes[name] += value.length; report()
      }
      const out = new Uint8Array(sizes[name])
      let o = 0
      for (const c of chunks) { out.set(c, o); o += c.length }
      return out
    }
    const [det, rec, dict, wasm] = await Promise.all([
      get('det.onnx', MODEL_BASE + 'det.onnx'),
      get('rec.onnx', MODEL_BASE + 'rec.onnx'),
      fetch(MODEL_BASE + 'rec_dict.txt').then((r) => r.text()),
      get('wasm', ORT_BASE + 'ort-wasm-simd-threaded.wasm'),
    ])
    ort.env.wasm.wasmBinary = wasm
    const o = new ThaiOCR()
    const opts = { executionProviders: ['wasm'], graphOptimizationLevel: 'all' }
    o.det = await ort.InferenceSession.create(det, opts)
    o.rec = await ort.InferenceSession.create(rec, opts)
    o.chars = ['', ...dict.split('\n').filter((c) => c), ' ']
    onProgress(100)
    return o
  }

  // ---------- detection ----------
  async detect(src) {
    const c = CFG.det, W0 = src.width, H0 = src.height
    const pad = Math.max(8, Math.floor(0.05 * Math.min(H0, W0)))
    const w = W0 + 2 * pad, h = H0 + 2 * pad
    const s = Math.min(c.limit / Math.max(h, w), 4)
    const rh = Math.max(32, Math.round((h * s) / 32) * 32), rw = Math.max(32, Math.round((w * s) / 32) * 32)
    const cv = makeCanvas(rw, rh), ctx = cv.getContext('2d')
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, rw, rh)
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high'
    ctx.setTransform(rw / w, 0, 0, rh / h, 0, 0)
    ctx.drawImage(src, pad, pad)
    const px = ctx.getImageData(0, 0, rw, rh).data, n = rw * rh
    const x = new Float32Array(3 * n)
    for (let i = 0; i < n; i++) {
      x[i] = (px[i * 4 + 2] / 255 - MEAN[0]) / STD[0]
      x[n + i] = (px[i * 4 + 1] / 255 - MEAN[1]) / STD[1]
      x[2 * n + i] = (px[i * 4] / 255 - MEAN[2]) / STD[2]
    }
    const out = await this.det.run({ [this.det.inputNames[0]]: new ort.Tensor('float32', x, [1, 3, rh, rw]) })
    const prob = out[this.det.outputNames[0]].data
    const sx = w / rw, sy = h / rh, boxes = []
    for (const pts of components(prob, rw, rh, c.thresh)) {
      let r = minAreaRect(convexHull(pts))
      if (Math.min(r.w, r.h) < c.minSize) continue
      if (boxScore(prob, rw, rh, rectPoints(r)) < c.boxThresh) continue
      const area = r.w * r.h, len = 2 * (r.w + r.h)
      if (!len) continue
      const d = (area * c.unclip) / len
      r = { ...r, w: r.w + 2 * d, h: r.h + 2 * d }
      if (Math.min(r.w, r.h) < c.minSize + 2) continue
      const box = orderPoints(rectPoints(r)).map(([a, b]) => [
        clamp(a * sx - pad, 0, W0 - 1), clamp(b * sy - pad, 0, H0 - 1)])
      const xs = box.map((p) => p[0]), ys = box.map((p) => p[1])
      if (Math.max(...xs) - Math.min(...xs) >= 2 && Math.max(...ys) - Math.min(...ys) >= 2) boxes.push(box)
    }
    return { boxes }
  }

  // ---------- recognition ----------
  cropLine(src, box) {
    const H = CFG.rec.height
    const bw = Math.max(1, Math.floor(Math.max(dist(box[0], box[1]), dist(box[2], box[3]))))
    const bh = Math.max(1, Math.floor(Math.max(dist(box[0], box[3]), dist(box[1], box[2]))))
    const tw = Math.max(1, Math.ceil((H * bw) / bh))
    // affine map: dest (0,0)->p0, (tw,0)->p1, (0,H)->p3. Canvas needs src->dest.
    const ux = (box[1][0] - box[0][0]) / tw, uy = (box[1][1] - box[0][1]) / tw
    const vx = (box[3][0] - box[0][0]) / H, vy = (box[3][1] - box[0][1]) / H
    const det = ux * vy - vx * uy || 1e-9
    const a = vy / det, b = -uy / det, cc = -vx / det, dd = ux / det
    const cv = makeCanvas(tw, H), ctx = cv.getContext('2d', { willReadFrequently: true })
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, tw, H)
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high'
    ctx.setTransform(a, b, cc, dd, -(a * box[0][0] + cc * box[0][1]), -(b * box[0][0] + dd * box[0][1]))
    ctx.drawImage(src, 0, 0)
    const px = ctx.getImageData(0, 0, tw, H).data, g = new Uint8Array(tw * H)
    for (let i = 0; i < g.length; i++) g[i] = Math.round(0.299 * px[i * 4] + 0.587 * px[i * 4 + 1] + 0.114 * px[i * 4 + 2])
    return { g: flatten(g, tw, H), w: tw, h: H }
  }

  async recognize(crops) {
    const { height: H, maxW, batch: bs } = CFG.rec
    const out = new Array(crops.length)
    const order = crops.map((_, i) => i).sort((i, j) => crops[i].w - crops[j].w)
    for (let b = 0; b < order.length; b += bs) {
      const idx = order.slice(b, b + bs)
      const W = Math.min(maxW, Math.max(16, Math.max(...idx.map((i) => crops[i].w))))
      const x = new Float32Array(idx.length * 3 * H * W) // 0 = mid grey
      idx.forEach((i, n) => {
        const c = crops[i], rw = Math.min(W, c.w)
        for (let y = 0; y < H; y++) for (let xx = 0; xx < rw; xx++) {
          const v = (c.g[y * c.w + xx] / 255 - 0.5) / 0.5
          for (let ch = 0; ch < 3; ch++) x[((n * 3 + ch) * H + y) * W + xx] = v
        }
      })
      const res = await this.rec.run({ [this.rec.inputNames[0]]: new ort.Tensor('float32', x, [idx.length, 3, H, W]) })
      const p = res[this.rec.outputNames[0]], [, T, C] = p.dims
      idx.forEach((i, n) => { out[i] = this.ctc(p.data, n * T * C, T, C) })
    }
    return out
  }

  ctc(d, off, T, C) {
    let text = '', sum = 0, cnt = 0, prev = -1
    for (let t = 0; t < T; t++) {
      let best = 0, bp = -1
      for (let k = 0, o = off + t * C; k < C; k++) if (d[o + k] > bp) { bp = d[o + k]; best = k }
      if (best !== prev && best !== 0) { text += this.chars[best] ?? ''; sum += bp; cnt++ }
      prev = best
    }
    return { text, conf: cnt ? sum / cnt : 0 }
  }

  // ---------- page ----------
  async read(src, onStage = () => {}) {
    const t0 = performance.now()
    let { boxes } = await this.detect(src)
    const W = src.width, H = src.height
    if (!boxes.length && H <= 200 && W >= 1.5 * H) boxes = [[[0, 0], [W - 1, 0], [W - 1, H - 1], [0, H - 1]]]
    const t1 = performance.now()
    onStage(`Found ${boxes.length} text boxes. Reading…`)
    const rec = await this.recognize(boxes.map((b) => this.cropLine(src, b)))
    const t2 = performance.now()
    const texts = rec.map((r) => fixScripts(canonical(r.text)))
    const rows = readingOrder(boxes, texts)
    const frag = fragments(boxes, texts)
    const c = CFG.rec, lines = [], dropped = [], rowTexts = []
    rows.forEach((row, ri) => {
      const parts = []
      for (const i of row) {
        if (frag.has(i)) continue
        const text = texts[i], conf = rec[i].conf
        let reason = null
        if (!text) reason = 'empty'
        else if (conf < c.dropBelow) reason = 'low confidence'
        else if (text.replace(/ /g, '').length < c.minChars) reason = 'too short'
        else if (conf < c.junkBelow && invalidShare(text) > c.junkInvalid) reason = 'invalid Thai'
        const e = { text, conf, row: ri, box: boxes[i] }
        if (reason) { dropped.push({ ...e, reason }); continue }
        parts.push(text); lines.push(e)
      }
      if (parts.length) rowTexts.push(parts.join(' '))
    })
    return { text: rowTexts.join('\n'), lines, dropped, timing: { det: t1 - t0, rec: t2 - t1, n: boxes.length } }
  }
}

// ---------- geometry helpers ----------
const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1])
const median = (a) => { if (!a.length) return 0; const s = [...a].sort((x, y) => x - y), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2 }
const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length
function makeCanvas(w, h) {
  if (typeof OffscreenCanvas !== 'undefined') return new OffscreenCanvas(w, h)
  const c = document.createElement('canvas'); c.width = w; c.height = h; return c
}

// 8-connected components of prob > t; returns each component's boundary pixels.
function components(prob, w, h, t) {
  const lab = new Int32Array(w * h), stack = [], out = []
  let id = 0
  for (let s = 0; s < w * h; s++) {
    if (lab[s] || prob[s] <= t) continue
    id++; lab[s] = id; stack.push(s)
    const pts = []
    while (stack.length) {
      const p = stack.pop(), x = p % w, y = (p - x) / w
      let edge = false
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue
        const nx = x + dx, ny = y + dy
        if (nx < 0 || ny < 0 || nx >= w || ny >= h) { edge = true; continue }
        const q = ny * w + nx
        if (prob[q] <= t) { edge = true; continue }
        if (!lab[q]) { lab[q] = id; stack.push(q) }
      }
      if (edge) pts.push([x, y])
    }
    if (!pts.length) continue
    out.push(pts)
  }
  return out
}

function convexHull(pts) {
  const p = pts.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1])
  if (p.length < 3) return p
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
  const lo = [], up = []
  for (const q of p) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q) }
  for (let i = p.length - 1; i >= 0; i--) { const q = p[i]; while (up.length >= 2 && cross(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q) }
  return lo.slice(0, -1).concat(up.slice(0, -1))
}

// rotating calipers over hull edges -> {cx, cy, w, h, ux, uy} (u = unit vector along w)
function minAreaRect(hull) {
  if (hull.length === 1) return { cx: hull[0][0], cy: hull[0][1], w: 0, h: 0, ux: 1, uy: 0 }
  let best = null
  for (let i = 0; i < hull.length; i++) {
    const a = hull[i], b = hull[(i + 1) % hull.length]
    const L = Math.hypot(b[0] - a[0], b[1] - a[1])
    if (!L) continue
    const ux = (b[0] - a[0]) / L, uy = (b[1] - a[1]) / L
    let mnU = Infinity, mxU = -Infinity, mnV = Infinity, mxV = -Infinity
    for (const q of hull) {
      const u = q[0] * ux + q[1] * uy, v = -q[0] * uy + q[1] * ux
      mnU = Math.min(mnU, u); mxU = Math.max(mxU, u); mnV = Math.min(mnV, v); mxV = Math.max(mxV, v)
    }
    const area = (mxU - mnU) * (mxV - mnV)
    if (!best || area < best.area) {
      const cu = (mnU + mxU) / 2, cvv = (mnV + mxV) / 2
      best = { area, cx: cu * ux - cvv * uy, cy: cu * uy + cvv * ux, w: mxU - mnU, h: mxV - mnV, ux, uy }
    }
  }
  return best
}

function rectPoints(r) {
  const hx = (r.ux * r.w) / 2, hy = (r.uy * r.w) / 2, vx = (-r.uy * r.h) / 2, vy = (r.ux * r.h) / 2
  return [[r.cx - hx - vx, r.cy - hy - vy], [r.cx + hx - vx, r.cy + hy - vy], [r.cx + hx + vx, r.cy + hy + vy], [r.cx - hx + vx, r.cy - hy + vy]]
}

// top-left, top-right, bottom-right, bottom-left (as line_engine.order_points)
function orderPoints(pts) {
  const p = pts.slice().sort((a, b) => a[0] - b[0])
  const l = p.slice(0, 2).sort((a, b) => a[1] - b[1]), r = p.slice(2).sort((a, b) => a[1] - b[1])
  return [l[0], r[0], r[1], l[1]]
}

function boxScore(prob, w, h, box) {
  const xs = box.map((p) => p[0]), ys = box.map((p) => p[1])
  const x0 = clamp(Math.floor(Math.min(...xs)), 0, w - 1), x1 = clamp(Math.ceil(Math.max(...xs)), 0, w - 1)
  const y0 = clamp(Math.floor(Math.min(...ys)), 0, h - 1), y1 = clamp(Math.ceil(Math.max(...ys)), 0, h - 1)
  let s = 0, n = 0
  for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
    if (inQuad(box, x, y, 0.5)) { s += prob[y * w + x]; n++ }
  }
  return n ? s / n : 0
}
function inQuad(q, x, y, tol) {
  let sign = 0
  for (let i = 0; i < 4; i++) {
    const a = q[i], b = q[(i + 1) % 4], L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
    const c = ((b[0] - a[0]) * (y - a[1]) - (b[1] - a[1]) * (x - a[0])) / L
    if (Math.abs(c) <= tol) continue
    const sg = Math.sign(c)
    if (sign && sg !== sign) return false
    sign = sg
  }
  return true
}

// Dark text on white from a grey line crop: subtract each column's background,
// estimated from the crop's top and bottom margins (line_engine._flatten).
function flatten(g, w, h) {
  const k = Math.max(2, Math.floor(h / 6)), col = new Uint8Array(w), tmp = []
  for (let x = 0; x < w; x++) {
    tmp.length = 0
    for (let y = 0; y < k; y++) { tmp.push(g[y * w + x]); tmp.push(g[(h - 1 - y) * w + x]) }
    col[x] = Math.floor(median(tmp))
  }
  const win = Math.max(3, Math.min(h | 1, 255)), r = win >> 1, bg = new Float32Array(w), hist = new Int32Array(256)
  // sliding-window median, border replicate
  for (let i = -r; i <= r; i++) hist[col[clamp(i, 0, w - 1)]]++
  for (let x = 0; x < w; x++) {
    let c = 0, v = 0
    for (; v < 256; v++) { c += hist[v]; if (c > r) break }
    bg[x] = v
    hist[col[clamp(x - r, 0, w - 1)]]--; hist[col[clamp(x + r + 1, 0, w - 1)]]++
  }
  const d = new Float32Array(w * h), dh = new Int32Array(256)
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const v = Math.abs(g[y * w + x] - bg[x]); d[y * w + x] = v; dh[Math.floor(v)]++
  }
  let cum = 0, hi = 255; const target = 0.98 * w * h
  for (let i = 0; i < 256; i++) { cum += dh[i]; if (cum >= target) { hi = i; break } }
  hi = Math.max(hi, 24)
  const out = new Uint8Array(w * h)
  for (let i = 0; i < out.length; i++) out[i] = Math.floor(255 - clamp(d[i] * (255 / hi), 0, 255))
  return out
}

// ---------- reading order (line_engine.reading_order / _blocks) ----------
const boxH = (b) => Math.max(dist(b[0], b[3]), 1)
function lineHeight(boxes) {
  const hs = boxes.map(boxH), lines = hs.filter((h, i) => dist(boxes[i][0], boxes[i][1]) >= 2 * h)
  return hs.length ? median(lines.length >= 3 ? lines : hs) : 1
}
function pageSkew(boxes) {
  const a = []
  for (const b of boxes) {
    const dx = b[1][0] - b[0][0], dy = b[1][1] - b[0][1]
    if (Math.hypot(dx, dy) >= 3 * Math.max(dist(b[0], b[3]), 1)) a.push((Math.atan2(dy, dx) * 180) / Math.PI)
  }
  return a.length ? median(a) : 0
}
function gaps(iv, minGap) {
  iv = iv.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1])
  const out = []; let reach = iv[0][1]
  for (const [lo, hi] of iv.slice(1)) { if (lo - reach >= minGap) out.push([reach, lo]); reach = Math.max(reach, hi) }
  return out
}
const DIGITS = new Set('0123456789๐๑๒๓๔๕๖๗๘๙')
function prose(col, ext, hmed, texts) {
  if (col.length < 12) return false
  const widths = col.map((i) => ext[i][1] - ext[i][0])
  const span = Math.max(...col.map((i) => ext[i][1])) - Math.min(...col.map((i) => ext[i][0]))
  if (median(widths) < 7 * hmed || mean(widths.map((w) => (w >= 0.75 * span ? 1 : 0))) < 0.5) return false
  const chars = col.flatMap((i) => [...texts[i]].filter((c) => !/\s/.test(c)))
  return !(chars.length && chars.filter((c) => DIGITS.has(c)).length > 0.3 * chars.length)
}
const ENUM = /^\s*\(?([0-9๐-๙]{1,4})\s*[.)]/
const enumOf = (t) => { const m = ENUM.exec(t); return m ? parseInt(m[1].replace(/[๐-๙]/g, (c) => c.charCodeAt(0) - 0x0e50), 10) : null }
function numberedAcross(l, r, ext, hmed, texts) {
  let pairs = 0
  for (const i of l) {
    const a = enumOf(texts[i]); if (a === null) continue
    const cy = (ext[i][2] + ext[i][3]) / 2
    if (r.some((j) => enumOf(texts[j]) === a + 1 && Math.abs((ext[j][2] + ext[j][3]) / 2 - cy) <= 0.5 * hmed)) pairs++
  }
  return pairs >= 0.5 * Math.min(l.length, r.length)
}
function nextTo(side, ext, hmed, gutterOnRight) {
  if (!side.length) return side
  const g = gaps(side.map((i) => [ext[i][0], ext[i][1]]), 0.8 * hmed)
  if (!g.length) return side
  return gutterOnRight ? side.filter((i) => ext[i][0] >= g[g.length - 1][1]) : side.filter((i) => ext[i][1] <= g[0][0])
}
function blocks(idx, ext, hmed, texts, depth = 0) {
  if (idx.length < 6 || depth > 12) return [idx]
  const cuts = []
  for (const [g0, g1] of gaps(idx.map((i) => [ext[i][0], ext[i][1]]), 0.8 * hmed)) {
    const left = idx.filter((i) => ext[i][1] <= g0), right = idx.filter((i) => ext[i][0] >= g1)
    const lc = nextTo(left, ext, hmed, true), rc = nextTo(right, ext, hmed, false)
    if (prose(lc, ext, hmed, texts) && prose(rc, ext, hmed, texts) && !numberedAcross(lc, rc, ext, hmed, texts)) cuts.push([g1 - g0, left, right])
  }
  if (cuts.length) {
    const [, l, r] = cuts.reduce((a, b) => (b[0] > a[0] ? b : a))
    return [...blocks(l, ext, hmed, texts, depth + 1), ...blocks(r, ext, hmed, texts, depth + 1)]
  }
  const hg = gaps(idx.map((i) => [ext[i][2], ext[i][3]]), 0.8 * hmed)
  if (!hg.length) return [idx]
  const [g0, g1] = hg.reduce((a, b) => (b[1] - b[0] > a[1] - a[0] ? b : a))
  return [...blocks(idx.filter((i) => ext[i][3] <= g0), ext, hmed, texts, depth + 1),
    ...blocks(idx.filter((i) => ext[i][2] >= g1), ext, hmed, texts, depth + 1)]
}
function readingOrder(boxes, texts) {
  if (!boxes.length) return []
  const a = (-pageSkew(boxes) * Math.PI) / 180, ca = Math.cos(a), sa = Math.sin(a)
  const ext = boxes.map((b) => {
    const p = b.map(([x, y]) => [x * ca - y * sa, x * sa + y * ca])
    const xs = p.map((q) => q[0]), ys = p.map((q) => q[1])
    return [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)]
  })
  const hmed = lineHeight(boxes), hs = boxes.map(boxH), tol = 0.5 * hmed
  const cy = ext.map((e) => (e[2] + e[3]) / 2), rx = ext.map((e) => (e[0] + e[1]) / 2)
  const rows = []
  for (const blk of blocks(boxes.map((_, i) => i), ext, hmed, texts)) {
    let full = blk.filter((i) => hs[i] >= 0.6 * hmed); if (!full.length) full = blk.slice()
    const fs = new Set(full), small = blk.filter((i) => !fs.has(i)), br = []
    for (const i of full.slice().sort((p, q) => cy[p] - cy[q])) {
      if (br.length && Math.abs(cy[i] - mean(br[br.length - 1].map((j) => cy[j]))) <= tol) br[br.length - 1].push(i)
      else br.push([i])
    }
    const centre = br.map((r) => mean(r.map((j) => cy[j])))
    for (const i of small) {
      const d = centre.map((c) => Math.abs(cy[i] - c))
      const m = d.length ? Math.min(...d) : Infinity
      if (m <= tol + 0.5 * hs[i]) br[d.indexOf(m)].push(i); else { br.push([i]); centre.push(cy[i]) }
    }
    br.map((_, r) => r).sort((p, q) => centre[p] - centre[q]).forEach((r) => rows.push(br[r].sort((p, q) => rx[p] - rx[q])))
  }
  return rows
}
function fragments(boxes, texts) {
  const out = new Set()
  if (boxes.length < 3) return out
  const hs = boxes.map((b) => dist(b[0], b[3])), hmed = lineHeight(boxes)
  boxes.forEach((b, i) => {
    if (hs[i] >= 0.35 * hmed || texts[i].replace(/ /g, '').length > 3) return
    const xs = b.map((p) => p[0]), ys = b.map((p) => p[1])
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys)
    for (let j = 0; j < boxes.length; j++) {
      if (j === i || hs[j] < 0.6 * hmed) continue
      const cx = boxes[j].map((p) => p[0]), cyy = boxes[j].map((p) => p[1])
      if (Math.min(...cx) <= x1 && x0 <= Math.max(...cx) && Math.min(Math.abs(y0 - Math.max(...cyy)), Math.abs(Math.min(...cyy) - y1)) <= 0.5 * hmed) { out.add(i); break }
    }
  })
  return out
}

// ---------- Thai text clean-up (runtime/thai_norm.py + fix_scripts + invalid_share) ----------
const PUA = { 0xF700: 0x0E10, 0xF701: 0x0E34, 0xF702: 0x0E35, 0xF703: 0x0E36, 0xF704: 0x0E37, 0xF705: 0x0E48, 0xF706: 0x0E49, 0xF707: 0x0E4A, 0xF708: 0x0E4B, 0xF709: 0x0E4C, 0xF70A: 0x0E48, 0xF70B: 0x0E49, 0xF70C: 0x0E4A, 0xF70D: 0x0E4B, 0xF70E: 0x0E4C, 0xF70F: 0x0E0D, 0xF710: 0x0E31, 0xF711: 0x0E4D, 0xF712: 0x0E47, 0xF713: 0x0E48, 0xF714: 0x0E49, 0xF715: 0x0E4A, 0xF716: 0x0E4B, 0xF717: 0x0E4C, 0xF718: 0x0E38, 0xF719: 0x0E39, 0xF71A: 0x0E3A }
// Combining marks, named after their Unicode character names.
const THAI = {
  MAI_HAN_AKAT: '\u0E31', SARA_I: '\u0E34', SARA_II: '\u0E35', SARA_UE: '\u0E36', SARA_UEE: '\u0E37',
  SARA_U: '\u0E38', SARA_UU: '\u0E39', PHINTHU: '\u0E3A', MAITAIKHU: '\u0E47',
  MAI_EK: '\u0E48', MAI_THO: '\u0E49', MAI_TRI: '\u0E4A', MAI_CHATTAWA: '\u0E4B',
  THANTHAKHAT: '\u0E4C', NIKHAHIT: '\u0E4D', YAMAKKAN: '\u0E4E',
}
const INVISIBLE = {
  ZERO_WIDTH_SPACE: '\u200B', ZERO_WIDTH_NON_JOINER: '\u200C', ZERO_WIDTH_JOINER: '\u200D',
  WORD_JOINER: '\u2060', SOFT_HYPHEN: '\u00AD', BYTE_ORDER_MARK: '\uFEFF',
}
const T = THAI
const VOWEL = T.MAI_HAN_AKAT + T.SARA_I + T.SARA_II + T.SARA_UE + T.SARA_UEE + T.PHINTHU + T.SARA_U + T.SARA_UU + T.MAITAIKHU
const TONE = T.MAI_EK + T.MAI_THO + T.MAI_TRI + T.MAI_CHATTAWA + T.THANTHAKHAT + T.YAMAKKAN
const NIK = T.NIKHAHIT
const INVISIBLE_CHARS = Object.values(INVISIBLE).join('')
const TONE_MARK = `[${T.MAI_EK}-${T.MAI_CHATTAWA}]`
const NIKHAHIT_AA = new RegExp(`(${TONE_MARK}?)${T.NIKHAHIT}(${TONE_MARK}?)า`, 'g')
const MARK_RUN = new RegExp(`[${VOWEL}${TONE}${NIK}]{2,}`, 'g')
const rank = (c) => (VOWEL.includes(c) ? 0 : TONE.includes(c) ? 1 : 2)
function canonical(text) {
  text = [...(text || '')].map((c) => {
    const cp = c.codePointAt(0)
    if (PUA[cp]) return String.fromCodePoint(PUA[cp])
    if (INVISIBLE_CHARS.includes(c)) return ''
    return cp === 0xa0 ? ' ' : c
  }).join('').normalize('NFC')
  text = text.replace(MARK_RUN, (run) => {
    const out = []
    for (const ch of [...run].sort((a, b) => rank(a) - rank(b))) if (!out.length || out[out.length - 1] !== ch) out.push(ch)
    return out.join('')
  })
  text = text.replace(NIKHAHIT_AA, '$1$2ำ').replaceAll('เเ', 'แ').replaceAll('ำำ', 'ำ')
  return text.replace(/\r\n?/g, '\n').split('\n').map((l) => l.replace(/[ \t\f\v]+/g, ' ').trim()).join('\n').trim()
}
function fixScripts(t) {
  return t.replace(/(?<![A-Za-z])[Ww](?=\.?[ก-ฮเ-ไ])/g, 'พ').replace(/(?<=[๐-๙])[Oo0]|[Oo0](?=[๐-๙])/g, '๐')
}
const MARKS = new Set(VOWEL + TONE + NIK)
const LEAD = new Set('เแโใไ')
const cons = (c) => c >= 'ก' && c <= 'ฮ'
function invalidShare(t) {
  let thai = 0, bad = 0
  for (let i = 0; i < t.length; i++) {
    const ch = t[i]
    if (!(ch >= '฀' && ch <= '๿')) continue
    thai++
    const prev = i ? t[i - 1] : ' '
    if (MARKS.has(ch) && !(cons(prev) || (MARKS.has(prev) && i >= 2 && cons(t[i - 2])))) bad++
    else if (LEAD.has(ch) && !(i + 1 < t.length && cons(t[i + 1]))) bad++
  }
  return thai ? bad / thai : 0
}

// ---------- UI ----------
const error = Vue.ref(null)
const status = Vue.ref('The model loads when you give it an image.')
const statusClass = Vue.ref('')
const progress = Vue.ref(null)
const hasImage = Vue.ref(false)
const result = Vue.shallowRef(null)
const showBoxes = Vue.ref(true)
const showDropped = Vue.ref(false)
const dragOver = Vue.ref(false)
const copyLabel = Vue.ref('Copy')
const hover = Vue.shallowRef(null)
const cv = Vue.ref()
const fileInput = Vue.ref()
const textArea = Vue.ref()
const meta = Vue.ref('')
let ocrPromise = null, current = null, busy = false, pending = false

const setStatus = (cls, msg) => { statusClass.value = cls ? 'n-' + cls : ''; status.value = msg }

function loadModel() {
  if (!ocrPromise) {
    setStatus('busy', 'Downloading the model and runtime…')
    progress.value = 0
    ocrPromise = ThaiOCR.load((p) => { progress.value = p })
      .then((o) => { progress.value = null; return o })
      .catch((e) => { ocrPromise = null; progress.value = null; throw e })
  }
  return ocrPromise
}

async function toCanvas(blob) {
  const bmp = await createImageBitmap(blob)
  const max = 4000, s = Math.min(1, max / Math.max(bmp.width, bmp.height))
  const w = Math.round(bmp.width * s), h = Math.round(bmp.height * s)
  const c = makeCanvas(w, h), ctx = c.getContext('2d')
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h)
  ctx.drawImage(bmp, 0, 0, w, h)
  return c
}

async function setImage(blob) {
  error.value = null
  try { current = await toCanvas(blob) } catch (e) { error.value = 'Could not open that image.'; return }
  result.value = null
  hasImage.value = true
  await Vue.nextTick()
  draw()
  run()
}

async function run() {
  if (busy) { pending = true; return }
  busy = true
  try {
    do {
      pending = false
      const ocr = await loadModel()
      setStatus('busy', 'Reading…')
      await new Promise((r) => setTimeout(r, 30))
      const src = current
      const r = await ocr.read(src, (m) => setStatus('busy', m))
      if (src !== current) continue
      const confs = r.lines.map((l) => l.conf)
      const avg = confs.length ? confs.reduce((a, b) => a + b, 0) / confs.length : 0
      meta.value = `${src.width}×${src.height}px · ${r.lines.length} lines kept, ${r.dropped.length} dropped · mean confidence ${(avg * 100).toFixed(1)}% · detect ${r.timing.det.toFixed(0)} ms, read ${r.timing.rec.toFixed(0)} ms`
      result.value = r
      setStatus('ready', 'Done. The model stays loaded, so the next image is faster.')
      draw()
    } while (pending)
  } catch (e) {
    console.error(e)
    setStatus('err', 'Failed.')
    error.value = e.message || String(e)
  }
  busy = false
}

const lineItems = Vue.computed(() => {
  const r = result.value
  if (!r) return []
  const items = r.lines.map((l, i) => ({ ...l, key: 'k' + i }))
  if (showDropped.value) items.push(...r.dropped.map((l, i) => ({ ...l, key: 'd' + i, isDropped: true })))
  return items
})

function draw() {
  const el = cv.value
  if (!current || !el) return
  const ctx = el.getContext('2d')
  el.width = current.width; el.height = current.height
  ctx.drawImage(current, 0, 0)
  const r = result.value
  if (!r || !showBoxes.value) return
  const lw = Math.max(1.5, current.width / 700)
  const quad = (b) => { ctx.beginPath(); b.forEach(([x, y], k) => (k ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath() }
  ctx.lineWidth = lw
  if (showDropped.value) {
    ctx.setLineDash([4 * lw, 3 * lw]); ctx.strokeStyle = 'rgba(150,150,150,.9)'
    r.dropped.forEach((l) => { quad(l.box); ctx.stroke() })
    ctx.setLineDash([])
  }
  ctx.strokeStyle = 'rgba(255,90,54,.85)'
  r.lines.forEach((l) => { quad(l.box); ctx.stroke() })
  if (hover.value) { ctx.fillStyle = 'rgba(15,107,92,.25)'; quad(hover.value); ctx.fill(); ctx.strokeStyle = '#0f6b5c'; ctx.lineWidth = lw * 2; ctx.stroke() }
}

Vue.watch([showBoxes, showDropped], () => draw())

const pick = () => fileInput.value.click()
const onFile = (e) => { const f = e.target.files[0]; if (f) setImage(f); e.target.value = '' }
const onDrop = (e) => {
  dragOver.value = false
  const f = [...e.dataTransfer.files].find((f) => f.type.startsWith('image/'))
  if (f) setImage(f)
}
const onPaste = (e) => {
  const it = [...(e.clipboardData?.items || [])].find((i) => i.type.startsWith('image/'))
  if (it) { e.preventDefault(); setImage(it.getAsFile()) }
}
async function copy() {
  try { await navigator.clipboard.writeText(textArea.value.value); copyLabel.value = 'Copied' }
  catch { textArea.value.select(); copyLabel.value = 'Selected. Press Ctrl/⌘ + C' }
  setTimeout(() => (copyLabel.value = 'Copy'), 1800)
}

Vue.onMounted(() => document.addEventListener('paste', onPaste))
Vue.onUnmounted(() => document.removeEventListener('paste', onPaste))
</script>

## About the demo

- **Model:** [iapp/OpenThai2.0-OCR-Text](https://huggingface.co/iapp/OpenThai2.0-OCR-Text) by iApp Technology, Apache-2.0. It is based on PaddlePaddle PP-OCRv6-tiny.
- **Parts:** a text detector (`det.onnx`) finds the text boxes. A line reader (`rec.onnx`) reads each box.
- **Guide:** [How to run OpenThai 2.0 OCR](https://iapp.co.th/blog/openthai2p0-ocr-how-to-run) on iApp's blog.
- **Differences from official Python demo:** This page is a JavaScript port of the model's Python runtime (`runtime/line_engine.py`). It skips page rotation, deskewing and column-gap splitting, so tilted photos can come out worse than in the original.
- **Demo source code:** See [OpenThaiOCRWebDemo.md](OpenThaiOCRWebDemo.md).

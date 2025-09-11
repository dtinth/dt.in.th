---
public: true
title: Pointer events tester
aliases:
  - 20220606T064142Z5299
---

# Pointer events tester

You can use this little tool to test [pointer events](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent) on your browser.
To inspect the latest pointer event, type `lastPointerEvent` into the [JavaScript](JavaScript) console.

<label><input type="checkbox" v-model="downEnabled"> Down</label> \
<label><input type="checkbox" v-model="moveEnabled"> Move</label> \
<label><input type="checkbox" v-model="upEnabled"> Up</label>

<div style="background: #000; border: 1px solid #656463; height: 720px; padding: 1em; overflow: hidden;" @pointermove="onpointer($event)" @pointerdown="onpointer($event)" @pointerup="onpointer($event)">
  <strong>Test area</strong>
  <pre><code>{{info}}</code></pre>
</div>

<script>
export default {
  setup() {
    const info = Vue.ref('Results will display here.')
    const downEnabled = Vue.ref(true)
    const moveEnabled = Vue.ref(true)
    const upEnabled = Vue.ref(true)
    return {
      downEnabled,
      moveEnabled,
      upEnabled,
      info,
      onpointer: (e) => {
        if (e.type === 'pointerdown' && !downEnabled.value) {
          return
        }
        if (e.type === 'pointermove' && !moveEnabled.value) {
          return
        }
        if (e.type === 'pointerup' && !upEnabled.value) {
          return
        }
        window.lastPointerEvent = e
        const fields = [
          'type',

          // https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent#properties
          'pointerId',
          'width',
          'height',
          'pressure',
          'tangentialPressure',
          'tiltX',
          'tiltY',
          'twist',
          'pointerType',
          'isPrimary',

          // https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent#browser_compatibility
          'altitudeAngle',
          'azimuthAngle',

          // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
          'altKey',
          'button',
          'buttons',
          'clientX',
          'clientY',
          'ctrlKey',
          'metaKey',
          'movementX',
          'movementY',
        ]
        info.value = fields.map(f => `${f}: ${e[f]}`).join('\n')
      }
    }
  }
}
</script>

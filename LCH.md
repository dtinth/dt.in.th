---
public: true
title: Using LCH colors
---

When generating [colors](Colors) of various hues, using the **LCH** color space generally produces a nicer result than using the **HSL** color space.

**LCH**

<div style="display: flex; flex-wrap: wrap; gap: 8px;">
  <div v-for="hue of hues" :style="{ color: `lch(80% 72 ${hue})` }">{{ hue }}</div>
</div>

**HSL**

<div style="display: flex; flex-wrap: wrap; gap: 8px;">
  <div v-for="hue of hues" :style="{ color: `hsl(${hue},90%,70%)` }">{{ hue }}</div>
</div>

<script>
  export default {
    setup() {
      const hues = []
      for (let i = 0; i < 360; i += 15) {
        hues.push(i)
      }
      return { hues }
    }
  }
</script>

## Using `colord` to convert LCH to RGB

```ts
// colord.ts
import { Plugin, colord, extend } from 'colord'
import lchPlugin from 'colord/plugins/lch'

extend([(lchPlugin as unknown) as Plugin])
export { colord }
```

```ts
colord({ h: hue, c: 72, l: 80 }).toRgbString()
```

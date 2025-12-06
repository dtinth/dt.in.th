---
title: Generating Material Design 3 Dynamic Color Scheme with JavaScript
public: true
giscus: true
created: 2025-11-13
updates:
  - date: 2025-11-23
    note: Added option to generate primary, secondary, and tertiary colors from a single source color according to each variant. Also added an option to also generate raw RGB values (for use with Bootstrap 5).
---

:::lead
**[Material Design 3](https://m3.material.io/)** provides an open source [Material Color Utilities](https://github.com/material-foundation/material-color-utilities) package that can generate dynamic [color](Colors) schemes based on a set of input colors. This note documents how to use it and provides a playground to experiment.
:::

:::warning
The output of this tool is different from [Material Theme Builder](http://material-foundation.github.io/material-theme-builder/). Unfortunately, the Material Theme Builder [is not open source](https://github.com/material-foundation/material-theme-builder/issues/350), so I couldn't determine the exact differences in implementation.
:::

## Playground

Use this playground to generate Material Design 3 dynamic color schemes.

### Select base colors

<div class="flex flex-wrap gap-3 items-center">
  <div class="flex gap-2 items-center">
    <label class="flex-none" for="variant-select">Variant:</label>
    <select v-model="selectedVariant" class="form-control" id="variant-select">
      <option v-for="option in variantOptions" :key="option.name" :value="option.name">{{ option.name }}</option>
    </select>
  </div>
  <div class="flex gap-2 items-center">
    <label class="flex-none" for="color-mode-select">Color mode:</label>
    <select v-model="colorMode" class="form-control" id="color-mode-select">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
  <div class="flex gap-2 items-center">
    <label class="flex-none" for="behavior-select">Behavior:</label>
    <select v-model="behavior" class="form-control" id="behavior-select">
      <option value="auto">Automatically generate palette from source color</option>
      <option value="manual">Manually specify primary, secondary, and tertiary colors</option>
    </select>
  </div>
</div>

<table>
  <thead>
    <tr>
      <th>Color</th>
      <th>Select</th>
    </tr>
  </thead>
  <tbody>
    <tr v-if="behavior === 'auto'">
      <td>Source Color</td>
      <td><input type="color" v-model="sourceColor" /></td>
    </tr>
    <tr>
      <td :class="behavior === 'auto' ? 'text-[#8b8685]' : ''">Primary</td>
      <td><input type="color" v-model="primaryColor" :disabled="behavior === 'auto'" /></td>
    </tr>
    <tr>
      <td :class="behavior === 'auto' ? 'text-[#8b8685]' : ''">Secondary</td>
      <td><input type="color" v-model="secondaryColor" :disabled="behavior === 'auto'" /></td>
    </tr>
    <tr>
      <td :class="behavior === 'auto' ? 'text-[#8b8685]' : ''">Tertiary</td>
      <td><input type="color" v-model="tertiaryColor" :disabled="behavior === 'auto'" /></td>
    </tr>
  </tbody>
</table>

### Preview

<div :style="output">

Click on the color blocks to learn more about each color role and when to use them.

<div class="flex flex-col gap-4 mb-4 p-6 rounded" :style="`
  background: var(--m3-background);
  color: var(--m3-on-background);
`">
  <div class="flex flex-wrap gap-3" v-for="blocks in rows">
    <a
      v-for="block in blocks"
      class="rounded p-4"
      :key="block.name"
      :style="`
        background-color: var(--m3-${kebab(block.background)});
        color: var(--m3-${kebab(block.color)});
        ${block.outlineColor ? `box-shadow: inset 0 0 0 1px var(--m3-${kebab(block.outlineColor)});` : ''}
      `"
      :href="block.link"
      target="_blank"
      rel="noopener"
    >
      {{ block.name }}
      <span v-if="block.variantColor" :style="`color: var(--m3-${kebab(block.variantColor)})`"> ({{ block.variantName || 'with variant' }})</span>
      <span v-if="block.outlineColor"> ({{ block.outlineName }})</span>
    </a>
  </div>
</div>

### [Tonal palettes](https://m3.material.io/styles/color/system/how-the-system-works#3ce9da92-a118-4692-8b2c-c5c52a413fa6)

<table>
  <thead>
    <tr>
      <th>Palette</th>
      <th>Tones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="paletteName of tonalPaletteNames" :key="paletteName">
      <td>{{ toName(paletteName) }}</td>
      <td>
        <div class="flex flex-wrap gap-2">
          <div
            v-for="tone of toneNumbers"
            :key="tone"
            class="flex flex-col items-center"
          >
            <div
              :style="`width: 2em; height: 2em; background-color: var(--m3-${kebab(paletteName)}-${tone}); border: 1px solid #000;`"
            ></div>
            <div class="text-sm">{{ tone }}</div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>

### [Color roles](https://m3.material.io/styles/color/roles)

<div v-if="result.data">
  <table>
    <thead>
      <tr>
        <th>Role</th>
        <th>Color</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(color, role) in result.data.colorsByRole" :key="role">
        <td>{{ toName(role) }}</td>
        <td>
          <div :style="`width: 2em; height: 2em; background-color: ${color}; border: 1px solid #000; display: inline-block; vertical-align: middle; margin-right: 0.5em;`"></div>
          <code>{{ color }}</code>
        </td>
      </tr>
    </tbody>
  </table>
</div>

</div>

### CSS

<div class="flex gap-2 items-center mb-2">
  <input type="checkbox" id="generate-rgb-checkbox" v-model="generateRgb" />
  <label class="flex-none" for="generate-rgb-checkbox">Generate RGB format</label>
</div>

<textarea readonly rows="10" class="form-control font-mono" :value="output"></textarea>

<script setup>
import { ref } from 'vue'

const m3Ref = ref(null)

const generateRgb = ref(false)
const behavior = ref('auto')
const sourceColor = ref('#d7fc70')
const primaryColor = ref('#d7fc70')
const secondaryColor = ref('#8c9570')
const tertiaryColor = ref('#5e9c91')

const Variant = {}
Variant[Variant["MONOCHROME"] = 0] = "MONOCHROME";
Variant[Variant["NEUTRAL"] = 1] = "NEUTRAL";
Variant[Variant["TONAL_SPOT"] = 2] = "TONAL_SPOT";
Variant[Variant["VIBRANT"] = 3] = "VIBRANT";
Variant[Variant["EXPRESSIVE"] = 4] = "EXPRESSIVE";
Variant[Variant["FIDELITY"] = 5] = "FIDELITY";
Variant[Variant["CONTENT"] = 6] = "CONTENT";
Variant[Variant["RAINBOW"] = 7] = "RAINBOW";
Variant[Variant["FRUIT_SALAD"] = 8] = "FRUIT_SALAD";

const variantOptions = [
  { name: 'MONOCHROME', value: Variant.MONOCHROME, className: 'SchemeMonochrome' },
  { name: 'NEUTRAL', value: Variant.NEUTRAL, className: 'SchemeNeutral' },
  { name: 'TONAL_SPOT', value: Variant.TONAL_SPOT, className: 'SchemeTonalSpot' },
  { name: 'VIBRANT', value: Variant.VIBRANT, className: 'SchemeVibrant' },
  { name: 'EXPRESSIVE', value: Variant.EXPRESSIVE, className: 'SchemeExpressive' },
  { name: 'FIDELITY', value: Variant.FIDELITY, className: 'SchemeFidelity' },
  { name: 'CONTENT', value: Variant.CONTENT, className: 'SchemeContent' },
  { name: 'RAINBOW', value: Variant.RAINBOW, className: 'SchemeRainbow' },
  { name: 'FRUIT_SALAD', value: Variant.FRUIT_SALAD, className: 'SchemeFruitSalad' },
]

const variantNames = Object.keys(Variant).filter(k => isNaN(Number(k)))
const selectedVariant = ref('TONAL_SPOT')
const colorMode = ref('dark')
const darkMode = Vue.computed(() => colorMode.value === 'dark')

Vue.onMounted(async () => {
  const m3 = await import('https://cdn.jsdelivr.net/npm/@material/material-color-utilities@0.3.0/+esm')
  m3Ref.value = m3
  Object.assign(window, { m3 })
})

const m3ColorRoles = [
  'background',
  'onBackground',
  'surface',
  'surfaceDim',
  'surfaceBright',
  'surfaceContainerLowest',
  'surfaceContainerLow',
  'surfaceContainer',
  'surfaceContainerHigh',
  'surfaceContainerHighest',
  'onSurface',
  'surfaceVariant',
  'onSurfaceVariant',
  'inverseSurface',
  'inverseOnSurface',
  'outline',
  'outlineVariant',
  'shadow',
  'scrim',
  'surfaceTint',
  'primary',
  'onPrimary',
  'primaryContainer',
  'onPrimaryContainer',
  'inversePrimary',
  'secondary',
  'onSecondary',
  'secondaryContainer',
  'onSecondaryContainer',
  'tertiary',
  'onTertiary',
  'tertiaryContainer',
  'onTertiaryContainer',
  'error',
  'onError',
  'errorContainer',
  'onErrorContainer',
  'primaryFixed',
  'primaryFixedDim',
  'onPrimaryFixed',
  'onPrimaryFixedVariant',
  'secondaryFixed',
  'secondaryFixedDim',
  'onSecondaryFixed',
  'onSecondaryFixedVariant',
  'tertiaryFixed',
  'tertiaryFixedDim',
  'onTertiaryFixed',
  'onTertiaryFixedVariant',
]

const toneNumbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100]
const tonalPaletteNames = [
  'primary',
  'secondary',
  'tertiary',
  'neutral',
  'neutralVariant',
  'error',
]

const links = {
  primary: 'https://m3.material.io/styles/color/roles#41f55188-5c63-4107-ac41-822ebca8ae1b',
  fixed: 'https://m3.material.io/styles/color/roles#26b6a882-064d-4668-b096-c51142477850',
  secondary: 'https://m3.material.io/styles/color/roles#290bcc49-b728-414c-8cc5-04336c1c799c',
  tertiary: 'https://m3.material.io/styles/color/roles#727a0bf8-c95f-4f83-bc43-290d20f24e8e',
  error: 'https://m3.material.io/styles/color/roles#47a25970-8a80-43be-8307-c12e0f7a2b43',
  surface: 'https://m3.material.io/styles/color/roles#89f972b1-e372-494c-aabc-69aea34ed591',
  outline: 'https://m3.material.io/styles/color/roles#e7d72e44-72e2-4ce9-a18d-df07b1433d18',
  brightDim: 'https://m3.material.io/styles/color/roles#63d6db08-59e2-4341-ac33-9509eefd9b4f',
  inverse: 'https://m3.material.io/styles/color/roles#7fc6b47e-db22-4e98-8359-7649a099e4a1',
}

const rows = [
  [
    { name: 'Primary', background: 'primary', color: 'onPrimary', link: links.primary },
    { name: 'Primary Container', background: 'primaryContainer', color: 'onPrimaryContainer', link: links.primary },
    { name: 'Primary Fixed', background: 'primaryFixed', color: 'onPrimaryFixed', variantColor: 'onPrimaryFixedVariant', link: links.fixed },
    { name: 'Primary Fixed Dim', background: 'primaryFixedDim', color: 'onPrimaryFixed', link: links.fixed },
  ],
  [
    { name: 'Secondary', background: 'secondary', color: 'onSecondary', link: links.secondary },
    { name: 'Secondary Container', background: 'secondaryContainer', color: 'onSecondaryContainer', link: links.secondary },
    { name: 'Secondary Fixed', background: 'secondaryFixed', color: 'onSecondaryFixed', variantColor: 'onSecondaryFixedVariant', link: links.fixed },
    { name: 'Secondary Fixed Dim', background: 'secondaryFixedDim', color: 'onSecondaryFixed', link: links.fixed },
  ],
  [
    { name: 'Tertiary', background: 'tertiary', color: 'onTertiary', link: links.tertiary },
    { name: 'Tertiary Container', background: 'tertiaryContainer', color: 'onTertiaryContainer', link: links.tertiary },
    { name: 'Tertiary Fixed', background: 'tertiaryFixed', color: 'onTertiaryFixed', variantColor: 'onTertiaryFixedVariant', link: links.fixed },
    { name: 'Tertiary Fixed Dim', background: 'tertiaryFixedDim', color: 'onTertiaryFixed', link: links.fixed },
  ],
  [
    { name: 'Error', background: 'error', color: 'onError', link: links.error },
    { name: 'Error Container', background: 'errorContainer', color: 'onErrorContainer', link: links.error },
  ],
  [
    { name: 'Background', background: 'background', color: 'onBackground', outlineColor: 'outline', outlineName: 'with Outline', link: links.outline },
    { name: 'Background', background: 'background', color: 'onBackground', outlineColor: 'outlineVariant', outlineName: 'with Outline Variant', link: links.outline },
  ],
  [
    { name: 'Surface', background: 'surface', color: 'onSurface', variantColor: 'onSurfaceVariant', link: links.surface },
    { name: 'Surface Dim', background: 'surfaceDim', color: 'onSurface', variantColor: 'onSurfaceVariant', links: links.brightDim },
    { name: 'Surface Bright', background: 'surfaceBright', color: 'onSurface', variantColor: 'onSurfaceVariant', links: links.brightDim },
  ],
  [
    { name: 'Surface Container Lowest', background: 'surfaceContainerLowest', color: 'onSurface', variantColor: 'onSurfaceVariant', link: links.surface },
    { name: 'Surface Container Low', background: 'surfaceContainerLow', color: 'onSurface', variantColor: 'onSurfaceVariant', link: links.surface },
    { name: 'Surface Container', background: 'surfaceContainer', color: 'onSurface', variantColor: 'onSurfaceVariant', link: links.surface },
    { name: 'Surface Container High', background: 'surfaceContainerHigh', color: 'onSurface', variantColor: 'onSurfaceVariant', link: links.surface },
    { name: 'Surface Container Highest', background: 'surfaceContainerHighest', color: 'onSurface', variantColor: 'onSurfaceVariant', link: links.surface },
  ],
  [
    { name: 'Inverse Surface', background: 'inverseSurface', color: 'inverseOnSurface', variantColor: 'inversePrimary', variantName: 'with inverse primary', link: links.inverse },
  ]
]

const result = Vue.computed(() => {
  if (!m3Ref.value) {
    return { message: 'Loading Material Color Utilities...' }
  }
  try {
    const m3 = m3Ref.value

    let dynamicScheme
    const className = variantOptions.find(v => v.name === selectedVariant.value).className
    const Constructor = m3[className]
    const sourceColorHct = m3.Hct.fromInt(m3.argbFromHex(sourceColor.value))
    dynamicScheme = new Constructor(sourceColorHct, darkMode.value, 0.0)
    if (behavior.value !== 'auto') {
      Object.assign(dynamicScheme, {
        primaryPalette: m3.TonalPalette.fromInt(m3.argbFromHex(primaryColor.value)),
        secondaryPalette: m3.TonalPalette.fromInt(m3.argbFromHex(secondaryColor.value)),
        tertiaryPalette: m3.TonalPalette.fromInt(m3.argbFromHex(tertiaryColor.value)),
      })
    }
    Object.assign(window, { dynamicScheme })
    const colorsByRole = Object.fromEntries(
      m3ColorRoles.map(role => [role, m3.hexFromArgb(dynamicScheme[role])])
    )
    const tonesOf = (palette) => {
      return Object.fromEntries(
        toneNumbers.map(tone => [
          tone,
          m3.hexFromArgb(palette.tone(tone))
        ])
      )
    }
    const tonalPalettes = {
      primary: tonesOf(dynamicScheme.primaryPalette),
      secondary: tonesOf(dynamicScheme.secondaryPalette),
      tertiary: tonesOf(dynamicScheme.tertiaryPalette),
      neutral: tonesOf(dynamicScheme.neutralPalette),
      neutralVariant: tonesOf(dynamicScheme.neutralVariantPalette),
      error: tonesOf(dynamicScheme.errorPalette),
    }
    return {
      data: {
        colorsByRole,
        tonalPalettes,
        behavior: behavior.value,
        keyColors: {
          primary: m3.hexFromArgb(dynamicScheme.primaryPalette.keyColor.argb),
          secondary: m3.hexFromArgb(dynamicScheme.secondaryPalette.keyColor.argb),
          tertiary: m3.hexFromArgb(dynamicScheme.tertiaryPalette.keyColor.argb),
        }
      }
    }
  } catch (e) {
    console.error(e)
    return { message: `Error: ${e}` }
  }
})

let timeout

Vue.watch(result, (newValue) => {
  const keyColors = newValue.data?.keyColors
  if (newValue.data?.behavior === 'auto' && keyColors) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      if (keyColors.primary) {
        primaryColor.value = keyColors.primary
      }
      if (keyColors.secondary) {
        secondaryColor.value = keyColors.secondary
      }
      if (keyColors.tertiary) {
        tertiaryColor.value = keyColors.tertiary
      }
    })
  }
}, { immediate: true })

Vue.onUnmounted(() => {
  clearTimeout(timeout)
})

const output = Vue.computed(() => {
  const cssVar = (name, color) => {
    const out = []
    out.push(`${name}: ${color};`)
    if (generateRgb.value) {
      const m3 = m3Ref.value
      const argb = m3.argbFromHex(color)
      const r = m3.redFromArgb(argb)
      const g = m3.greenFromArgb(argb)
      const b = m3.blueFromArgb(argb)
      out.push(`${name}-rgb: ${r}, ${g}, ${b};`)
    }
    return out.join('\n')
  }
  if (result.value.data) {
    return [
      '/* Color Roles */',
      Object.entries(result.value.data.colorsByRole).map(([role, color]) => {
        const roleKebab = kebab(role)
        return cssVar(`--m3-${roleKebab}`, color)
      }).join('\n'),
      '',
      '/* Tonal Palettes */',
      Object.entries(result.value.data.tonalPalettes).map(([paletteName, tones]) => {
        const lines = Object.entries(tones).map(([tone, color]) => {
          return cssVar(`--m3-${kebab(paletteName)}-${tone}`, color)
        })
        return lines.join('\n')
      }).join('\n'),
    ].join('\n')
  } else {
    return `/* ${result.value.message} */`
  }
})

const toName = (role) => {
  return role.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, c => c.toUpperCase())
}

const kebab = (str) => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
</script>

## Code

:::note
Feel free to open the browser console and use `m3` global variable to experiment with Material Color Utilities API. The `scheme` variable is also available for inspection.
:::

```js
// Import Material Color Utilities
import * as m3 from '@material/material-color-utilities'

// Whether to use dark mode
const sourceColorHct = m3.Hct.fromInt(m3.argbFromHex('#d7fc70'))
const isDark = true
const contrastLevel = 0.0

// Create a palette based on a variant. Choose one of these constructors:
// - m3.SchemeMonochrome
// - m3.SchemeNeutral
// - m3.SchemeTonalSpot
// - m3.SchemeVibrant
// - m3.SchemeExpressive
// - m3.SchemeFidelity
// - m3.SchemeContent
// - m3.SchemeRainbow
// - m3.SchemeFruitSalad
const dynamicScheme = new m3.SchemeTonalSpot(
  sourceColorHct,
  isDark,
  contrastLevel
)

// If you want to override the primary, secondary, and tertiary colors manually:
Object.assign(dynamicScheme, {
  primaryPalette: m3.TonalPalette.fromInt(m3.argbFromHex('#d7fc70')),
  secondaryPalette: m3.TonalPalette.fromInt(m3.argbFromHex('#8c9570')),
  tertiaryPalette: m3.TonalPalette.fromInt(m3.argbFromHex('#5e9c91')),
})

// Get the tonal palette color as a hex string
console.log(m3.hexFromArgb(dynamicScheme.primaryPalette.tone(40)))

// Get the color of a color role as a hex string
console.log(m3.hexFromArgb(dynamicScheme.primary))
```

## References

- [Creating a Color Scheme](https://github.com/material-foundation/material-color-utilities/blob/main/dev_guide/creating_color_scheme.md)

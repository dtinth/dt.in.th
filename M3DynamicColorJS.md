---
title: Generating Material Design 3 Dynamic Color Scheme with JavaScript
public: true
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

| Color     | Select                                          |
| --------- | ----------------------------------------------- |
| Primary   | <input type="color" v-model="primaryColor" />   |
| Secondary | <input type="color" v-model="secondaryColor" /> |
| Tertiary  | <input type="color" v-model="tertiaryColor" />  |

<div class="flex flex-wrap gap-3 items-center">
  <div class="flex gap-2 items-center">
    <label class="flex-none" for="variant-select">Variant:</label>
    <select v-model="selectedVariant" class="form-control" id="variant-select">
      <option v-for="name in variantNames" :key="name" :value="name">{{ name }}</option>
    </select>
  </div>
  <div class="flex gap-2 items-center">
    <label class="flex-none" for="color-mode-select">Color mode:</label>
    <select v-model="colorMode" class="form-control" id="color-mode-select">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</div>

### Preview

<div :style="output">

<div class="flex flex-col gap-4 mb-4 p-6 rounded" :style="`
  background: var(--m3-background);
  color: var(--m3-on-background);
`">
  <div class="flex flex-wrap gap-3" v-for="blocks in rows">
    <div
      v-for="block in blocks"
      class="rounded p-4"
      :key="block.name"
      :style="`
        background-color: var(--m3-${kebab(block.background)});
        color: var(--m3-${kebab(block.color)});
        ${block.outlineColor ? `box-shadow: inset 0 0 0 1px var(--m3-${kebab(block.outlineColor)});` : ''}
      `"
    >
      {{ block.name }}
      <span v-if="block.variantColor" :style="`color: var(--m3-${kebab(block.variantColor)})`"> ({{ block.variantName || 'with variant' }})</span>
      <span v-if="block.outlineColor"> ({{ block.outlineName }})</span>
    </div>
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

<textarea readonly rows="10" class="form-control font-mono" :value="output"></textarea>

<script setup>
import { ref } from 'vue'

const m3Ref = ref(null)

const primaryColor = ref('#D7FC70')
const secondaryColor = ref('#8C9570')
const tertiaryColor = ref('#5E9C91')

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

const variantNames = Object.keys(Variant).filter(k => isNaN(Number(k)))
const selectedVariant = ref('VIBRANT')
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

const rows = [
  [
    { name: 'Primary', background: 'primary', color: 'onPrimary' },
    { name: 'Primary Container', background: 'primaryContainer', color: 'onPrimaryContainer' },
    { name: 'Primary Fixed', background: 'primaryFixed', color: 'onPrimaryFixed', variantColor: 'onPrimaryFixedVariant' },
    { name: 'Primary Fixed Dim', background: 'primaryFixedDim', color: 'onPrimaryFixed' },

  ],
  [
    { name: 'Secondary', background: 'secondary', color: 'onSecondary' },
    { name: 'Secondary Container', background: 'secondaryContainer', color: 'onSecondaryContainer' },
    { name: 'Secondary Fixed', background: 'secondaryFixed', color: 'onSecondaryFixed', variantColor: 'onSecondaryFixedVariant' },
    { name: 'Secondary Fixed Dim', background: 'secondaryFixedDim', color: 'onSecondaryFixed' },
  ],
  [
    { name: 'Tertiary', background: 'tertiary', color: 'onTertiary' },
    { name: 'Tertiary Container', background: 'tertiaryContainer', color: 'onTertiaryContainer' },
    { name: 'Tertiary Fixed', background: 'tertiaryFixed', color: 'onTertiaryFixed', variantColor: 'onTertiaryFixedVariant' },
    { name: 'Tertiary Fixed Dim', background: 'tertiaryFixedDim', color: 'onTertiaryFixed' },
  ],
  [
    { name: 'Error', background: 'error', color: 'onError' },
    { name: 'Error Container', background: 'errorContainer', color: 'onErrorContainer' },
  ],
  [
    { name: 'Background', background: 'background', color: 'onBackground', outlineColor: 'outline', outlineName: 'with Outline' },
    { name: 'Background', background: 'background', color: 'onBackground', outlineColor: 'outlineVariant', outlineName: 'with Outline Variant' },
  ],
  [
    { name: 'Surface', background: 'surface', color: 'onSurface', variantColor: 'onSurfaceVariant' },
    { name: 'Surface Dim', background: 'surfaceDim', color: 'onSurface', variantColor: 'onSurfaceVariant' },
    { name: 'Surface Bright', background: 'surfaceBright', color: 'onSurface', variantColor: 'onSurfaceVariant' },
  ],
  [
    { name: 'Surface Container Lowest', background: 'surfaceContainerLowest', color: 'onSurface', variantColor: 'onSurfaceVariant' },
    { name: 'Surface Container Low', background: 'surfaceContainerLow', color: 'onSurface', variantColor: 'onSurfaceVariant' },
    { name: 'Surface Container', background: 'surfaceContainer', color: 'onSurface', variantColor: 'onSurfaceVariant' },
    { name: 'Surface Container High', background: 'surfaceContainerHigh', color: 'onSurface', variantColor: 'onSurfaceVariant' },
    { name: 'Surface Container Highest', background: 'surfaceContainerHighest', color: 'onSurface', variantColor: 'onSurfaceVariant' },
  ],
  [
    { name: 'Inverse Surface', background: 'inverseSurface', color: 'inverseOnSurface', variantColor: 'inversePrimary', variantName: 'with inverse primary' },
  ]
]

const result = Vue.computed(() => {
  if (!m3Ref.value) {
    return { message: 'Loading Material Color Utilities...' }
  }
  try {
    const m3 = m3Ref.value
    const primaryArgb = m3.argbFromHex(primaryColor.value)
    const secondaryArgb = m3.argbFromHex(secondaryColor.value)
    const tertiaryArgb = m3.argbFromHex(tertiaryColor.value)
    const sourceColorHct = m3.Hct.fromInt(primaryArgb)

    const dynamicScheme = new m3.DynamicScheme({
      sourceColorArgb: primaryArgb,
      variant: Variant[selectedVariant.value],
      isDark: darkMode.value,
      contrastLevel: 0.0,
      primaryPalette: m3.TonalPalette.fromInt(primaryArgb),
      secondaryPalette: m3.TonalPalette.fromInt(secondaryArgb),
      tertiaryPalette: m3.TonalPalette.fromInt(tertiaryArgb),
      neutralPalette:
        m3.TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 8.0),
      neutralVariantPalette:
        m3.TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 12.0),
    })
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
    return { data: { colorsByRole, tonalPalettes } }
  } catch (e) {
    console.error(e)
    return { message: `Error: ${e}` }
  }
})

const output = Vue.computed(() => {
  if (result.value.data) {
    return [
      '/* Color Roles */',
      Object.entries(result.value.data.colorsByRole).map(([role, color]) => {
        const roleKebab = kebab(role)
        return `--m3-${roleKebab}: ${color};`
      }).join('\n'),
      '',
      '/* Tonal Palettes */',
      Object.entries(result.value.data.tonalPalettes).map(([paletteName, tones]) => {
        const lines = Object.entries(tones).map(([tone, color]) => {
          return `--m3-${kebab(paletteName)}-${tone}: ${color};`
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

// Convert hex color to ARGB integer
const primaryArgb = m3.argbFromHex('#D7FC70')
const secondaryArgb = m3.argbFromHex('#8C9570')
const tertiaryArgb = m3.argbFromHex('#5E9C91')

// We have to do some color manipulation to obtain the neutral palettes,
// so we convert primary color to HCT.
const sourceColorHct = m3.Hct.fromInt(primaryArgb)

// Unfortunately, the Material Color Utilities API v0.3.0 does not provide
// the Variant enum, so we define it ourselves here.
const Variant = {}
Variant[(Variant['MONOCHROME'] = 0)] = 'MONOCHROME'
Variant[(Variant['NEUTRAL'] = 1)] = 'NEUTRAL'
Variant[(Variant['TONAL_SPOT'] = 2)] = 'TONAL_SPOT'
Variant[(Variant['VIBRANT'] = 3)] = 'VIBRANT'
Variant[(Variant['EXPRESSIVE'] = 4)] = 'EXPRESSIVE'
Variant[(Variant['FIDELITY'] = 5)] = 'FIDELITY'
Variant[(Variant['CONTENT'] = 6)] = 'CONTENT'
Variant[(Variant['RAINBOW'] = 7)] = 'RAINBOW'
Variant[(Variant['FRUIT_SALAD'] = 8)] = 'FRUIT_SALAD'

// Create a dynamic color scheme
const isDark = true
const dynamicScheme = new m3.DynamicScheme({
  sourceColorArgb: primaryArgb,
  variant: m3.Variant.VIBRANT,
  isDark,
  contrastLevel: 0.0,
  primaryPalette: m3.TonalPalette.fromInt(primaryArgb),
  secondaryPalette: m3.TonalPalette.fromInt(secondaryArgb),
  tertiaryPalette: m3.TonalPalette.fromInt(tertiaryArgb),
  neutralPalette: m3.TonalPalette.fromHueAndChroma(
    sourceColorHct.hue + 15,
    8.0
  ),
  neutralVariantPalette: m3.TonalPalette.fromHueAndChroma(
    sourceColorHct.hue + 15,
    12.0
  ),
})

// Get the tonal palette color as a hex string
console.log(m3.hexFromArgb(dynamicScheme.primaryPalette.tone(40)))

// Get the color of a color role as a hex string
console.log(m3.hexFromArgb(dynamicScheme.primary))
```

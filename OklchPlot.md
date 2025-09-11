---
title: OKLCH Color Scale Plotter
public: true
---

# OKLCH Color Scale Plotter

This little tool plots [colors](Colors) on two planes: LC and LH. It may be useful for visualizing color scales.

<div style="display: flex; gap: 1em; flex-wrap: wrap">
  <div class="n-plot-container">
    <div class="n-plot">
      <div class="n-axis is-y-axis">Lightness (0–100%)</div>
      <div class="n-axis is-x-axis">Chroma (0–0.4)</div>
      <div class="n-color" v-for="color of plotLC" :style="color.style" tabindex="0">
        <div class="n-color-text">{{ color.text }}</div>
      </div>
    </div>
  </div>
  <div class="n-plot-container">
    <div class="n-plot">
      <div class="n-axis is-y-axis">Lightness (0–100%)</div>
      <div class="n-axis is-x-axis">Hue (0–360°)</div>
      <div class="n-color" v-for="color of plotLH" :style="color.style" tabindex="0">
        <div class="n-color-text">{{ color.text }}</div>
      </div>
    </div>
  </div>
</div>

<p>
  <label for="n-colors"><strong>Colors</strong></label>
  <textarea id="n-colors" v-model="colors" class="form-control h-48"></textarea>
</p>

<p>
  <strong>Select a preset</strong>
  <span style="display: flex; gap: 0.5em; flex-wrap: wrap">
    <button v-for="preset of presets" @click="preset.onclick" class="btn">
      {{ preset.name }}
    </button>
  </span>
</p>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Hex</th>
      <th>Lightness</th>
      <th>Chroma</th>
      <th>Hue</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="color of plots.colors">
      <td>
        <span class="n-color-block" :style="{ '--plot-color': color.hex }"></span>&nbsp;
        {{ color.name }}
      </td>
      <td><code>{{ color.hex }}</code></td>
      <td>{{ (color.l * 100).toFixed(2) }}%</td>
      <td>{{ (color.c).toFixed(3) }}</td>
      <td>{{ (color.h).toFixed(2) }}°</td>
    </tr>
  </tbody>
</table>

<style>
  .n-plot-container { flex: 1 1 240px; aspect-ratio: 1/1; position: relative; }
  .n-plot { position: absolute; border: 1px solid #656463; inset: 0; background: #252423; }
  .n-axis { color: #8b8685; position: absolute; top: 50%; left: 0; right: 0; text-align: center; }
  .n-axis.is-x-axis { transform: translateY(-50%) rotate(90deg) translateX(50%) rotate(-90deg) translateY(-50%); }
  .n-axis.is-y-axis { transform: translateY(-50%) translateX(-50%) rotate(-90deg) translateY(50%); }
  .n-color { position: absolute; top: var(--plot-y); left: var(--plot-x); transform: translate(-50%, -50%); }
  .n-color, .n-color-block { width: 16px; height: 16px; background: var(--plot-color); border-radius: 3px; box-shadow: inset 0 0 1px #fff, 0 1px 2px #000; }
  .n-color-block { display: inline-block; vertical-align: middle; }
  .n-color:hover, .n-color:focus { z-index: 1; }
  .n-color-text { position: absolute; white-space: pre; font-size: 14px; line-height: 1.2; background: #000; padding: 2px 3px; bottom: 100%; opacity: 0; pointer-events: none; border-radius: 3px; font-weight: bold; }
  .n-color:hover .n-color-text, .n-color:focus .n-color-text { z-index: 1; pointer-events: auto; opacity: 1; }
</style>

<script>
  const bootstrapColors = {
    "blue-100": "#cfe2ff",
    "blue-200": "#9ec5fe",
    "blue-300": "#6ea8fe",
    "blue-400": "#3d8bfd",
    "blue-500": "#0d6efd",
    "blue-600": "#0a58ca",
    "blue-700": "#084298",
    "blue-800": "#052c65",
    "blue-900": "#031633",
    "indigo-100": "#e0cffc",
    "indigo-200": "#c29ffa",
    "indigo-300": "#a370f7",
    "indigo-400": "#8540f5",
    "indigo-500": "#6610f2",
    "indigo-600": "#520dc2",
    "indigo-700": "#3d0a91",
    "indigo-800": "#290661",
    "indigo-900": "#140330",
    "purple-100": "#e2d9f3",
    "purple-200": "#c5b3e6",
    "purple-300": "#a98eda",
    "purple-400": "#8c68cd",
    "purple-500": "#6f42c1",
    "purple-600": "#59359a",
    "purple-700": "#432874",
    "purple-800": "#2c1a4d",
    "purple-900": "#160d27",
    "pink-100": "#f7d6e6",
    "pink-200": "#efadce",
    "pink-300": "#e685b5",
    "pink-400": "#de5c9d",
    "pink-500": "#d63384",
    "pink-600": "#ab296a",
    "pink-700": "#801f4f",
    "pink-800": "#561435",
    "pink-900": "#2b0a1a",
    "red-100": "#f8d7da",
    "red-200": "#f1aeb5",
    "red-300": "#ea868f",
    "red-400": "#e35d6a",
    "red-500": "#dc3545",
    "red-600": "#b02a37",
    "red-700": "#842029",
    "red-800": "#58151c",
    "red-900": "#2c0b0e",
    "orange-100": "#ffe5d0",
    "orange-200": "#fecba1",
    "orange-300": "#feb272",
    "orange-400": "#fd9843",
    "orange-500": "#fd7e14",
    "orange-600": "#ca6510",
    "orange-700": "#984c0c",
    "orange-800": "#653208",
    "orange-900": "#331904",
    "yellow-100": "#fff3cd",
    "yellow-200": "#ffe69c",
    "yellow-300": "#ffda6a",
    "yellow-400": "#ffcd39",
    "yellow-500": "#ffc107",
    "yellow-600": "#cc9a06",
    "yellow-700": "#997404",
    "yellow-800": "#664d03",
    "yellow-900": "#332701",
    "green-100": "#d1e7dd",
    "green-200": "#a3cfbb",
    "green-300": "#75b798",
    "green-400": "#479f76",
    "green-500": "#198754",
    "green-600": "#146c43",
    "green-700": "#0f5132",
    "green-800": "#0a3622",
    "green-900": "#051b11",
    "teal-100": "#d2f4ea",
    "teal-200": "#a6e9d5",
    "teal-300": "#79dfc1",
    "teal-400": "#4dd4ac",
    "teal-500": "#20c997",
    "teal-600": "#1aa179",
    "teal-700": "#13795b",
    "teal-800": "#0d503c",
    "teal-900": "#06281e",
    "cyan-100": "#cff4fc",
    "cyan-200": "#9eeaf9",
    "cyan-300": "#6edff6",
    "cyan-400": "#3dd5f3",
    "cyan-500": "#0dcaf0",
    "cyan-600": "#0aa2c0",
    "cyan-700": "#087990",
    "cyan-800": "#055160",
    "cyan-900": "#032830",
    "gray-100": "#f8f9fa",
    "gray-200": "#e9ecef",
    "gray-300": "#dee2e6",
    "gray-400": "#ced4da",
    "gray-500": "#adb5bd",
    "gray-600": "#6c757d",
    "gray-700": "#495057",
    "gray-800": "#343a40",
    "gray-900": "#212529",
  }

  const tailwindColors = {
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
    zinc: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b',
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
    stone: {
      50: '#fafaf9',
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
      950: '#0c0a09',
    },
    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
    },
    amber: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
    yellow: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
      950: '#422006',
    },
    lime: {
      50: '#f7fee7',
      100: '#ecfccb',
      200: '#d9f99d',
      300: '#bef264',
      400: '#a3e635',
      500: '#84cc16',
      600: '#65a30d',
      700: '#4d7c0f',
      800: '#3f6212',
      900: '#365314',
      950: '#1a2e05',
    },
    green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    },
    emerald: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
      950: '#022c22',
    },
    teal: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
      950: '#042f2e',
    },
    cyan: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
      950: '#083344',
    },
    sky: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49',
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    indigo: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
      950: '#1e1b4b',
    },
    violet: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2e1065',
    },
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764',
    },
    fuchsia: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
      950: '#4a044e',
    },
    pink: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
      950: '#500724',
    },
    rose: {
      50: '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#f43f5e',
      600: '#e11d48',
      700: '#be123c',
      800: '#9f1239',
      900: '#881337',
      950: '#4c0519',
    }
  }

  export default {
    setup() {
      const culoriRef = Vue.ref()
      Vue.onMounted(async () => {
        const culoriPromise = await import('https://cdn.jsdelivr.net/npm/culori@3.2.0/+esm')
        culoriRef.value = (await culoriPromise)
      })
      
      const stringify = (dict, prefix = '') => Object.entries(dict)
        .map(([k, v]) => `--${prefix + k}: ${v};`)
        .join('\n')

      const colors = Vue.ref(
        stringify(tailwindColors.yellow, 'yellow-')
      )

      const plots = Vue.computed(() => {
        const out = []
        const culori = culoriRef.value
        if (culori) {
          const toOklch = culori.converter('oklch')
          for (const match of colors.value.matchAll(/(?:--)?([^\s:]+)\s*:\s*(#\w+)\s*;?/g)) {
            const [, name, hex] = match
            try {
              const color = culori.parse(hex)
              const { l = 0, c = 0, h = 0 } = toOklch(color)
              out.push({ name, hex, h, c, l })
            } catch (error) {
              console.error(error)
            }
          }
        }
        return { colors: out }
      })

      const p = (value, min, max) => {
        let v = (value - min) / (max - min)
        v = Math.max(0, Math.min(1, v))
        v = 0.1 + 0.8 * v
        v *= 100
        return v.toFixed(3) + '%'
      }

      const createPlot = (colors, x, y) => {
        return colors.map(color => {
          return {
            style: {
              '--plot-x': x(color),
              '--plot-y': y(color),
              '--plot-color': color.hex,
            },
            text: [
              color.name,
              color.hex,
              `L ${(color.l * 100).toFixed(2)}%`,
              `C ${(color.c).toFixed(3)}`,
              `H ${(color.h).toFixed(2)}°`,
            ].join('\n')
          }
        })
      }

      const plotLC = Vue.computed(() => {
        return createPlot(
          plots.value.colors,
          color => p(color.c, 0, 0.4),
          color => p(1 - color.l, 0, 1)
        )
      })

      const plotLH = Vue.computed(() => {
        return createPlot(
          plots.value.colors,
          color => p(color.h, 0, 360),
          color => p(1 - color.l, 0, 1)
        )
      })

      function generatePresets() {
        const presets = []
        const bootstrap = bootstrapColors
        const tailwind = {}
        for (const [category, colors] of Object.entries(tailwindColors)) {
          for (const [shade, hex] of Object.entries(colors)) {
            tailwind[`${category}-${shade}`] = hex
          }
        }
        const setColors = (dict) => {
          colors.value = stringify(dict)
        }
        const add = (colors, name) => {
          presets.push({
            name: `${name} (all)`,
            onclick: () => setColors(colors)
          })
          const prefixes = new Set(
            Object.keys(colors).map(k => k.split('-')[0])
          )
          for (const prefix of prefixes) {
            presets.push({
              name: `${name}: ${prefix}`,
              onclick: () => setColors(
                Object.fromEntries(
                  Object.entries(colors).filter(([k]) => k.startsWith(prefix))
                )
              )
            })
          }
        }
        console.log(bootstrap)
        console.log(tailwind)
        add(bootstrap, 'bootstrap')
        add(tailwind, 'tailwind')
        return presets
      }

      return { colors, plots, plotLC, plotLH, presets: generatePresets() }
    }
  }
</script>

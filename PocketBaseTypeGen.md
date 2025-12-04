---
title: PocketBase TypeScript Type Generator
public: true
giscus: true
---

# PocketBase TypeScript Type Generator

This tool lets you generate [TypeScript](TypeScript) types from your [PocketBase](PocketBase) collections.

1. In the PocketBase admin dashboard, go to **Settings** → **Export collections**.
2. Click **Copy** to copy the JSON export of your collections.
3. Paste the JSON into the textarea below.

<div style="display: flex; flex-direction: column; gap: 1em;">
  <div>
    <label for="pb-input"><strong class="text-[#8b8685]">PocketBase Collections JSON</strong></label>
    <textarea id="pb-input" v-model="input" class="form-control mt-1"></textarea>
  </div>
  <div v-if="error">
    <strong>Error:</strong> {{ error }}
  </div>
  <div style="display: flex; flex-direction: column; gap: 0.5em;">
    <div>
      <strong class="text-[#8b8685]">Generated TypeScript Code</strong>
    </div>
    <pre class="mt-0"><code>{{ generatedCode || '/* Generated code will display here */' }}</code><copy-button up="pre" down="code"></copy-button></pre>
  </div>
</div>

You can use the generated types like this:

```typescript
function collection<T extends keyof Collections>(name: T) {
  return pb.collection<Collections[T]>(name)
}
```

<script>
  export default {
    setup() {
      const input = Vue.ref('')
      const error = Vue.ref('')
      const generatedCode = Vue.ref('')

      const fieldTypeMap = {
        'text': 'string',
        'email': 'string',
        'number': 'number',
        'bool': 'boolean',
        'date': 'string',
        'autodate': 'string',
        'file': 'string',
        'json': 'any',
        'relation': 'string',
        'select': 'string',
        'password': 'string',
      }

      const generateTypes = () => {
        error.value = ''
        generatedCode.value = ''

        if (!input.value.trim()) {
          return
        }

        try {
          const collections = JSON.parse(input.value)
          if (!Array.isArray(collections)) {
            throw new Error('Expected an array of collections')
          }

          const collectionTypes = collections.map(collection => {
            const name = collection.name

            const fields = collection.fields
              .filter(f => !f.system || f.name === 'id')
              .map(field => {
                const fieldName = field.name
                let fieldType = fieldTypeMap[field.type] || 'any'

                // Handle select types with string unions
                if (field.type === 'select' && field.values && field.values.length > 0) {
                  fieldType = field.values.map(v => `"${v}"`).join(' | ')
                }

                const isRequired = field.required ? '' : '?'
                return `    ${fieldName}${isRequired}: ${fieldType}`
              })
              .join('\n')

            return `  ${name}: {\n${fields}\n  }`
          }).join('\n\n')

          generatedCode.value = `export interface Collections {\n${collectionTypes}\n}`
        } catch (err) {
          error.value = err.message || 'Invalid JSON'
        }
      }

      const toPascalCase = (str) => {
        return str
          .split(/[\W_]+/)
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join('')
      }

      const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(generatedCode.value)
          alert('Copied to clipboard!')
        } catch (err) {
          alert('Failed to copy')
        }
      }

      Vue.watch(input, () => {
        generateTypes()
      })

      return { input, error, generatedCode, copyToClipboard }
    }
  }
</script>

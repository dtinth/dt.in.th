---
title: Grist TypeScript Type Generator
public: true
giscus: true
---

# Grist TypeScript Type Generator

This [tool](Tools) generates [TypeScript](TypeScript) types from your [Grist](Grist) code view Python schema.

1. Go to your Grist document
2. Click **Code View** (the code icon in the toolbar)
3. Copy the entire Python code
4. Paste it into the textarea below

<div style="display: flex; flex-direction: column; gap: 1em;">
  <div>
    <label for="grist-input"><strong class="text-[#8b8685]">Grist Python Schema</strong></label>
    <textarea id="grist-input" v-model="input" class="form-control mt-1 font-mono" placeholder="Paste your Grist Python code here..." style="min-height: 300px;"></textarea>
  </div>
  <div v-if="error">
    <strong>Error:</strong> {{ error }}
  </div>
  <div style="display: flex; flex-direction: column; gap: 0.5em;">
    <strong class="text-[#8b8685]">Generated TypeScript Code</strong>
    <pre class="mt-0 relative copy-button-parent"><code>{{ generatedCode || '/* Generated code will display here */' }}</code><copy-button up="pre" down="code"></copy-button></pre>
  </div>
</div>

<script>
  export default {
    setup() {
      const input = Vue.ref('')
      const error = Vue.ref('')
      const generatedCode = Vue.ref('')

      const gristTypeDefinitions = {
        'Text': 'string',
        'Numeric': 'number',
        'Int': 'number',
        'Bool': 'boolean',
        'Date': 'number',
        'DateTime': 'string',
        'Choice': 'string',
        'Reference': 'number',
        'ReferenceList': '(["L", ...number[]] | null)',
        'ChoiceList': '(["L", ...string[]] | null)',
        'Attachments': '(["L", ...number[]] | null)',
        'Any': 'any',
      }

      const gristTypeMap = {
        'Text': 'grist.Text',
        'Numeric': 'grist.Numeric',
        'Int': 'grist.Int',
        'Bool': 'grist.Bool',
        'Date': 'grist.Date',
        'DateTime': 'grist.DateTime',
        'Choice': 'grist.Choice',
        'Reference': 'grist.Reference',
        'ReferenceList': 'grist.ReferenceList',
        'ChoiceList': 'grist.ChoiceList',
        'Attachments': 'grist.Attachments',
        'Calculated': 'grist.Any',
        'Any': 'grist.Any',
      }

      const parseGristSchema = (code) => {
        const lines = code.split('\n').map((text, i) => ({
          text,
          trimmed: text.trim(),
          indent: text.match(/^\s*/)[0].length,
          index: i
        }))

        // Parse top level: find @grist.UserTable and collect class children
        const parseTopLevel = () => {
          const trees = []
          let i = 0

          while (i < lines.length) {
            if (lines[i].trimmed === '@grist.UserTable') {
              // Find the class definition
              let classLineIndex = null
              for (let j = i + 1; j < lines.length; j++) {
                if (lines[j].trimmed.startsWith('class ')) {
                  classLineIndex = j
                  break
                }
              }

              if (classLineIndex) {
                const classLine = lines[classLineIndex]
                const className = classLine.trimmed.match(/class\s+(\w+):/)[1]

                // Skip nested classes like _Summary
                if (!className.includes('_Summary')) {
                  const classIndent = classLine.indent

                  // Collect all children (any line with indent > classIndent)
                  const children = []
                  for (let j = classLineIndex + 1; j < lines.length; j++) {
                    const l = lines[j]

                    // Stop conditions
                    if (l.trimmed === '@grist.UserTable') break
                    if (l.trimmed && l.indent === 0) break

                    // Collect direct children
                    if (l.indent > classIndent) {
                      children.push(l)
                    }
                  }

                  trees.push({
                    name: className,
                    classIndent: classIndent,
                    children
                  })
                }

                i = classLineIndex
              } else {
                i++
              }
            } else {
              i++
            }
          }

          return trees
        }

        // Parse second level: extract fields and methods from children
        const parseSecondLevel = (trees) => {
          trees.forEach(table => {
            const fields = []
            let lastDecorator = null
            let inNestedClass = false
            let nestedClassIndent = 0

            table.children.forEach(line => {
              const trimmed = line.trimmed

              // Skip empty and comments
              if (!trimmed || trimmed.startsWith('#')) {
                return
              }

              // Detect nested class (like _Summary)
              if (trimmed.startsWith('class ')) {
                inNestedClass = true
                nestedClassIndent = line.indent
                return
              }

              // Skip everything inside nested class
              if (inNestedClass) {
                if (line.indent <= nestedClassIndent && trimmed) {
                  inNestedClass = false
                } else {
                  return
                }
              }

              // Check for @grist.formulaType decorator
              const decoratorMatch = trimmed.match(/@grist\.formulaType\s*\(\s*grist\.(\w+)\s*\((.*?)\)\s*\)/)
              if (decoratorMatch) {
                lastDecorator = {
                  type: decoratorMatch[1],
                  args: decoratorMatch[2]
                }
                return
              }

              // Skip other decorators
              if (trimmed.startsWith('@')) {
                lastDecorator = null
                return
              }

              // Field: name = grist.Type(...)
              const fieldMatch = trimmed.match(/^(\w+)\s*=\s*grist\.(\w+)\s*\((.*)\)/)
              if (fieldMatch) {
                fields.push({
                  name: fieldMatch[1],
                  type: fieldMatch[2],
                  args: fieldMatch[3]
                })
                lastDecorator = null
                return
              }

              // Method: def name(...)
              const methodMatch = trimmed.match(/^def\s+(\w+)\s*\(/)
              if (methodMatch) {
                const methodName = methodMatch[1]
                if (!methodName.startsWith('_')) {
                  fields.push({
                    name: methodName,
                    type: lastDecorator ? lastDecorator.type : 'Calculated',
                    args: lastDecorator ? lastDecorator.args : '',
                    isMethod: true
                  })
                }
                lastDecorator = null
              }
            })

            table.fields = fields
          })
        }

        const trees = parseTopLevel()
        parseSecondLevel(trees)

        return trees.map(t => ({
          name: t.name,
          fields: t.fields
        }))
      }

      const generateTypes = () => {
        error.value = ''
        generatedCode.value = ''

        if (!input.value.trim()) {
          return
        }

        try {
          const tables = parseGristSchema(input.value)

          if (tables.length === 0) {
            throw new Error('No Grist tables found. Make sure the code contains @grist.UserTable decorated classes.')
          }

          // Generate namespace with type definitions
          const namespaceTypes = Object.entries(gristTypeDefinitions)
            .map(([name, type]) => `  export type ${name} = ${type}`)
            .join('\n')

          const gristNamespace = `export namespace grist {\n${namespaceTypes}\n}\n`

          // Generate TypeScript types
          const tableTypes = tables.map(table => {
            const fields = table.fields.map(field => {
              let tsType = gristTypeMap[field.type] || 'any'

              // Add comment only for calculated/formula fields
              const suffix = field.isMethod ? ` // calculated/formula` : ''
              return `    ${field.name}: ${tsType}${suffix}`
            }).join('\n')

            let result = `  ${table.name}: {\n`
            result += `    id: number\n`
            if (fields) {
              result += fields + '\n'
            }
            result += `  }`

            return result
          }).join('\n\n')

          const typeDefinitions = `${gristNamespace}\nexport type GristTables = {\n${tableTypes}\n}`
          generatedCode.value = typeDefinitions
        } catch (err) {
          error.value = err.message || 'Failed to parse Grist schema'
        }
      }

      Vue.watch(input, () => {
        generateTypes()
      })

      return { input, error, generatedCode }
    }
  }
</script>

## Usage

Here's the type-safe [`GristDocAPI`](https://github.com/gristlabs/grist-api) interface you can use with the generated types:

```ts
// TypedGristDocAPI.ts
import type { GristDocAPI } from 'grist-api'

// From: https://dt.in.th/GristTypeGenerator
export interface TypedGristDocAPI<Tables extends AnyTables>
  extends Omit<
    GristDocAPI,
    | 'fetchTable'
    | 'addRecords'
    | 'deleteRecords'
    | 'updateRecords'
    | 'syncTable'
  > {
  fetchTable<TableName extends keyof Tables>(
    tableName: TableName,
    filters?: FilterSpec<Tables[TableName]>
  ): Promise<Tables[TableName][]>
  addRecords<TableName extends keyof Tables>(
    tableName: TableName,
    records: Partial<Tables[TableName]>[]
  ): Promise<number[]>
  deleteRecords<TableName extends keyof Tables>(
    tableName: TableName,
    recordIds: number[]
  ): Promise<void>
  updateRecords<TableName extends keyof Tables>(
    tableName: TableName,
    records: (Partial<Tables[TableName]> & { id: number })[]
  ): Promise<void>
  syncTable<TableName extends keyof Tables>(
    tableName: TableName,
    records: Partial<Tables[TableName]>[],
    keyColIds: (keyof Tables[TableName])[],
    options?: { filters?: FilterSpec<Tables[TableName]> }
  ): Promise<void>
}
export type AnyTable = { [colId: string]: unknown }
export type AnyTables = { [table: string]: AnyTable }
export type FilterSpec<Table extends AnyTable> = {
  [ColId in keyof Table]?: Table[ColId][]
}
```

To use it, cast the `GristDocAPI` instance with your generated `GristTables` type:

```ts
import { GristDocAPI } from 'grist-api'
import type { GristTables } from './GristTables'
import type { TypedGristDocAPI } from './TypedGristDocAPI'

const gristDoc = new GristDocAPI(docUrl) as TypedGristDocAPI<GristTables>
```

:::warning[Caveat: Invalid values]
_The typesafe client does not handle invalid values!_ When an invalid value is stored in a Grist cell (e.g. a string in a numeric column), that cell will show up with a red background in Grist UI, and the Grist API will return a `string` type for that field instead of the expected type.
:::

---
public: true
title: GitHub to JSDelivr link converter
---

This little [tool](Tools) converts [GitHub](GitHub) file links to [JSDelivr](https://www.jsdelivr.com/) CDN links.

<div class="space-y-4">
  <div>
    <label class="block text-sm font-medium mb-1">GitHub URL:</label>
    <input 
      type="text" 
      v-model="githubUrl" 
      placeholder="https://github.com/user/repo/blob/main/file.js"
      class="form-control"
    />
  </div>
  <div>
    <label class="block text-sm font-medium mb-1">JSDelivr URL:</label>
    <div class="flex gap-2">
      <input 
        type="text" 
        :value="jsDelivrUrl" 
        placeholder="https://cdn.jsdelivr.net/gh/user/repo@branch/file.js"
        readonly
        class="form-control flex-1"
      />
      <button 
        @click="copyToClipboard"
        :disabled="!jsDelivrUrl"
        class="btn"
      >
        Copy
      </button>
    </div>
  </div>
  <div v-if="error">

:::danger[Error]
{{ error }}
:::

</div>
</div>

<script>
export default {
  setup() {
    const githubUrl = Vue.ref('')
    const jsDelivrUrl = Vue.ref('')
    const error = Vue.ref('')

    const convertUrl = () => {
      error.value = ''
      jsDelivrUrl.value = ''
      
      if (!githubUrl.value) return
      
      try {
        // Match GitHub URL pattern: https://github.com/user/repo/blob/branch/path
        const match = githubUrl.value.match(/https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)/)
        
        if (!match) {
          error.value = 'Please enter a valid GitHub blob URL (https://github.com/user/repo/blob/branch/file.ext)'
          return
        }
        
        const [, user, repo, branch, path] = match
        jsDelivrUrl.value = `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/${path}`
      } catch (e) {
        error.value = 'Invalid URL format'
      }
    }

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(jsDelivrUrl.value)
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = jsDelivrUrl.value
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
    }

    Vue.watch(githubUrl, convertUrl)

    return { 
      githubUrl, 
      jsDelivrUrl, 
      error, 
      copyToClipboard 
    }
  }
}
</script>

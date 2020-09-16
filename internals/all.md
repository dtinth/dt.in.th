---
title: All Pages
pageClass: all-pages
---

<template>
  <iframe ref="iframe" src="/internals/page-grid.html" width="100%" height="512" style="border: 0; height: calc(100vh - 128px);"></iframe>
</template>

<!-- <div>
  <pre>{{pages}}</pre>
</div> -->

<script>
  export default {
    beforeMount() {
      window.addEventListener('message', this.onMessage)
    },
    beforeDestroy() {
      window.removeEventListener('message', this.onMessage)
    },
    methods: {
      onMessage(e) {
        if (e.data && e.data.requestPages) {
          e.source.postMessage({ pages: this.pages }, '*')
        }
      }
    },
    watch: {
      pages(p) {
        if (this.$refs.iframe) {
          this.$refs.iframe.contentWindow.postMessage({ pages: p }, '*')
        }
      }
    },
    computed: {
      pages() {
        const lint = page => {
          const errors = []
          if (page.frontmatter.title) {
            errors.push('title')
          }
          page.diagnostics = errors
          return page
        }
        return JSON.parse(JSON.stringify(this.$site.pages)).map(lint)
      }
    }
  }
</script>

<style lang="styl">
  .theme-container.all-pages .theme-default-content
    max-width 100%
  .theme-container.all-pages .page
    padding-bottom 0
  .theme-container.all-pages .page-edit
    display none
</style>

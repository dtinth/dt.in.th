<template>
  <main class="page h-entry">
    <slot name="top" />

    <h1 class="p-name" v-if="$page.frontmatter.showTitle !== false">
      {{ $page.title }}
    </h1>
    <div v-else style="height: 3.6rem"></div>

    <Content class="theme-default-content e-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
    <div class="microformats2">
      published by <a rel="author" class="p-author h-card" href="/">@dtinth</a>
      at
      <a class="u-url u-uid" :href="`https://dt.in.th${$page.path}`">
        <time class="dt-published" :datetime="$page.frontmatter.created">{{
          $page.frontmatter.created
        }}</time> </a
      ><template
        v-if="$page.frontmatter.created + '' !== $page.frontmatter.updated + ''"
        >, last updated at
        <time class="dt-updated" :datetime="$page.frontmatter.updated">{{
          $page.frontmatter.updated
        }}</time>
      </template>
    </div>
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import { setupInteractiveFootnotes } from '../utils/InteractiveFootnotes'
export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
  mounted() {
    setupInteractiveFootnotes()
  },
  updated() {
    setupInteractiveFootnotes()
  },
}
</script>

<style lang="stylus">
@require '../../../node_modules/@vuepress/theme-default/styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>

<style lang="stylus">
[DATA-SITE='dtinth'] .theme-default-content:not(.custom) > *:first-child {
  margin-top: 0;
}
</style>

<style lang="stylus" scoped>
h1 {
  margin-bottom: 0;
  max-width: $contentWidth;
  margin: 3.6rem auto 0;
  padding: 2rem 2.5rem 0;
  color: #bbeeff;

  @media (max-width: $MQNarrow) {
    padding: 2rem;
  }

  @media (max-width: $MQMobileNarrow) {
    padding: 1.5rem;
  }
}

.microformats2 {
  display: none;
}
</style>


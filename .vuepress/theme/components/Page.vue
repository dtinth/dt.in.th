<template>
  <main class="page h-entry">
    <data class="u-url u-uid" :value="`https://dt.in.th${$page.path}`"></data>
    <slot name="top" />

    <h1 class="p-name" v-if="$page.frontmatter.showTitle !== false">
      {{ $page.title }}
    </h1>
    <div v-else style="height: 3.6rem"></div>

    <Content class="theme-default-content e-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
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
</style>


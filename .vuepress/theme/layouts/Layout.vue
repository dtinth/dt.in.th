<template>
  <ParentLayout>
    <template #page-top>
      <h1 v-if="$page.frontmatter.showTitle !== false">{{ $page.title }}</h1>
      <div v-else style="height: 3.6rem"></div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  components: {
    ParentLayout
  }
}
</script>

<style lang="stylus">
[DATA-SITE="dtinth"] .theme-default-content:not(.custom) > *:first-child {
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

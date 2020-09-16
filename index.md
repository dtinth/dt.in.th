---
home: true
heroText: dt.in.th
tagline: Thai Pangsakulyanont
footer: :)
---

<div class="page-list">
  <template v-for="project of projects">
    <PageCard :page="project" />
  </template>
</div>

<script>
  import PageCard from './.vuepress/local-components/PageCard.vue'
  export default {
    components: {
      PageCard
    },
    computed: {
      projects() {
        return this.$site.pages
          .filter(p => p.frontmatter.image)
          .sort((a, z) => z.frontmatter.updated < a.frontmatter.updated ? -1 : 1)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .page-list {
    text-align: center;
  }
</style>

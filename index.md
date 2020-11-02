---
home: true
heroText: dt.in.th
tagline: Thai Pangsakulyanont
footer: ':)'
meta:
  - property: 'og:image'
    content: 'https://capture.the.spacet.me/eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL2R0LmluLnRoLyIsIndpZHRoIjoyMTMzLCJoZWlnaHQiOjExMjAsIndhaXRVbnRpbCI6Im5ldHdvcmtpZGxlMCIsImRldmljZVNjYWxlRmFjdG9yIjoxLCJpc3MiOiJkdGludGgifQ.SJD-4PU2gpiLp-9hQ2s69PwxiKDws7IdrSxs9uT8pm6gORtPmAxOY8BUuXVRY_-FAvL3djL-IuwdHqDqnMFTHIpFAkNDf7Yu-CM8gyKzHkdJaK_li1e5m-zmzq7veQ5L0AYrETRQRYffno44HPmKfjyT9et_q7Azj0hxeNNlO-R1LEEJgoQRiMs4QCsby2CzhNArXWVpLeW0Z1Dpp-5u-ZtkLjqH092zO1heIKXCQbNhvlZVaEt-5CG3Tn7qGVqaoUWuo1TGrV7rodaTQRxh-w0kxSVHQEHGKebo--DJuZLJocNU41GwccjYgZHhBRDbDEzvJVFsmk1OJag2mAPNhQ.png'
---

<div class="page-list h-feed">
  <data class="p-name" value="Featured entries"></data>
  <data class="u-url" value="https://dt.in.th/"></data>
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

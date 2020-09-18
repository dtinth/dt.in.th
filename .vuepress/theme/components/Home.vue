<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <header class="hero">
      <h1 id="main-title">dt.in.th</h1>
    </header>
    <Content class="theme-default-content custom" />
    <footer>
      <router-link to="/"
        >@<strong style="color: #d7fc70">dtinth</strong></router-link
      >
      <a rel="me authn" href="https://github.com/dtinth">GitHub</a>
      <a rel="me" href="https://twitter.com/dtinth">Twitter</a>
    </footer>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="stylus" scoped>
.home {
  margin-top: 5rem;
}

#main-title {
  color: rgb(139, 134, 133);
  text-align: center;
  margin: 0px 0px 29px;
  font-size: 64px;
  font-family: 'Arimo SiteTitle', Helvetica, sans-serif;

  @media (min-width: 360px) {
    font-size: 96px;
  }

  @media (min-width: 480px) {
    font-size: 128px;
  }

  @media (min-width: 720px) {
    font-size: 192px;
  }
}

footer {
  padding: 1rem 0.5rem 2rem;
  text-align: center;
  color: #8b8685;
  & > a {
    color: inherit;
    margin: 0 0.5rem;
  }
}
</style>

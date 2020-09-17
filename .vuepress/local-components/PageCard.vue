<template>
  <router-link :to="page.path">
    <article class="page-card" :data-overflown="overflown">
      <div class="page-card-contents">
        <!-- TODO: #20 Use a blurhash as image placeholder -->
        <div
          class="image-container"
          :style="{ backgroundImage: `url(${page.frontmatter.image})` }"
        ></div>
        <div class="page-card-info-container" ref="infoContainer">
          <div class="page-card-info" ref="infoContents">
            <h2>
              {{ page.title }}
            </h2>
            <!-- TODO: #21 Add category or type to PageCard -->
            <!-- TODO: #22 Add item last modified date to PageCard -->
            <p>{{ page.frontmatter.description }}</p>
          </div>
        </div>
      </div>
    </article>
  </router-link>
</template>

<script>
export default {
  props: ['page'],
  data() {
    return { overflown: 'no' }
  },
  mounted() {
    if (
      this.$refs.infoContents.offsetHeight >
      this.$refs.infoContainer.offsetHeight + 5
    ) {
      this.overflown = 'yes'
    }
  }
}
</script>

<style scoped lang="stylus">
.page-list {
  text-align: center;
}
.page-card {
  margin: 0.5rem 0.5rem;
  @media (min-width: 384px) {
    margin: 0.5rem;
    display: inline-block;
    width: 24rem;
  }
  @media (min-width: 1440px) {
    width: 28rem;
  }
  @media (min-width: 1800px) {
    width: 32rem;
  }
  text-align: left;
  vertical-align: top;
  border: 1px solid #656463;
  border-radius: 4px;
  overflow: hidden;
  background: #090807;
  color: #e9e8e7;
  position: relative;
  &[data-overflown='yes']::after {
    transition: 0.3s opacity;
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 3rem;
    background: linear-gradient(to bottom, #09080700, #09080777, #090807, #090807);
    pointer-events: none;
    opacity: 1;
  }
  &[data-overflown='yes']:hover::after {
    opacity: 0;
  }
}
.page-card-info-container {
  height: 10rem;
}
.page-card-info {
  min-height: 10rem;
  background: #090807;
  transition: 0.2s transform;
  .page-card:hover & {
    transform: translate(0, -100%) translate(0, 10rem);
  }
  & > h2 {
    margin: 0;
    padding: 1rem 1rem 0.5rem;
    color: #bef;
    text-shadow: 2px 2px RGBA(187, 238, 255, 0.15);
    border-bottom: 0;
    line-height: 2.0625rem;
    overflow: hidden;
  }
  & > p {
    margin: 0;
    padding: 0 1rem 1rem;
    line-height: 1.7rem;
    overflow: hidden;
  }
}
.image-container {
  position: relative;
  background: #252423 center no-repeat;
  background-size: cover;
  padding-top: 56.25%;
  overflow: hidden;
}
</style>

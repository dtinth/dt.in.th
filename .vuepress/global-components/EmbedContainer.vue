<template>
  <div class="dtinth-embed-container" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  props: ['ratio'],
  computed: {
    style() {
      return {
        paddingTop: 100 / this.ratio + '%',
      }
    },
  },
}
</script>

<style lang="stylus">
.dtinth-embed-container {
  display: block;
  background: #090807;
  position: relative;

  iframe {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
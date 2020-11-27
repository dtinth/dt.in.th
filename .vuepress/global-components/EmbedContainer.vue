<template>
  <div class="dtinth-embed-container" :style="style">
    <template v-if="enabled">
      <slot />
    </template>
  </div>
</template>

<script>
import { activeRouteAnimation } from '../lib/routeAnimations'

export default {
  props: ['ratio'],
  data() {
    console.log(activeRouteAnimation.current)
    return { enabled: !activeRouteAnimation.current }
  },
  mounted() {
    Promise.resolve(activeRouteAnimation.current)
      .catch(() => {})
      .then(() => {
        this.enabled = true
      })
  },
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
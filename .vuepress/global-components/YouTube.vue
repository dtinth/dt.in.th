<template>
  <div class="embed-container">
    <iframe
      width="720"
      height="405"
      :src="'https://www.youtube.com/embed/' + id + '?rel=0'"
      frameborder="0"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  props: ['id'],
}
</script>

<style lang="stylus" scoped>
.embed-container {
  display: block;
  background: #090807;
  position: relative;
  padding-top: 56.25%;

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
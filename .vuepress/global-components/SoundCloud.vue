<template>
  <div class="embed-container">
    <iframe
      width="100%"
      height="300"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      :src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%238b8685&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`"
    />
  </div>
</template>

<script>
export default {
  props: ['id'],
}
</script>

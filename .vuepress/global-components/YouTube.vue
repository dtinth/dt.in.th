<template>
  <EmbedContainer :ratio="720 / 405">
    <iframe
      width="720"
      height="405"
      :src="'https://www.youtube.com/embed/' + id + '?rel=0'"
      frameborder="0"
      allowfullscreen
    />
  </EmbedContainer>
</template>

<script>
export default {
  props: ['id'],
}
</script>

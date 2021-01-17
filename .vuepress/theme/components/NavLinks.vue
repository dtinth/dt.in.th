<template>
  <div class="dtinthのnav-links">
    <NavLinks />
    <a class="dtinthのwebring" href="https://webring.wonderful.software#dt.in.th" title="วงแหวนเว็บ">
      <svg width="32" height="32" viewBox="0 0 416 416" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M53 128.8l-16-8.2a192 192 0 1094.7-88.9l7.1 16.6A174 174 0 1153 128.8z" fill="#8b8685"/>
        <path d="M94.7 92.3L82 126.5 62.6 95.7l-36.4-1.4 23.3-28-9.9-35.1 33.9 13.5 30.3-20.3-2.4 36.4L130 83.3l-35.3 9z" fill="#d7fc70"/>
      </svg>
    </a>
  </div>
</template>

<style>
.navbar .dtinthのnav-links {
  display: flex;
  align-items: center;
}
.navbar .dtinthのwebring {
  display: block;
  margin-left: 20px;
}
.sidebar .dtinthのnav-links {
}
.sidebar .dtinthのwebring {
  display: block;
  margin-top: 0.75rem;
  padding: 0.5rem 0 0.5rem 1.5rem;
}
</style>

<script>
import NavLinks from '@parent-theme/components/NavLinks.vue'

export default {
  components: {
    NavLinks,
  },
}
</script>

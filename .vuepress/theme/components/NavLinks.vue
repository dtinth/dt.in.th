<template>
  <div class="dtinthのnav-links">
    <NavLinks />
    <a class="dtinthのwebring" href="https://webring.wonderful.software#dt.in.th" title="วงแหวนเว็บ">
      <svg width="32" height="32" viewBox="0 0 416 416" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M53 128.8l-16-8.2a192 192 0 1094.7-88.9l7.1 16.6A174 174 0 1153 128.8z" fill="#8b8685"/>
        <path d="M94.7 92.3L82 126.5 62.6 95.7l-36.4-1.4 23.3-28-9.9-35.1 33.9 13.5 30.3-20.3-2.4 36.4L130 83.3l-35.3 9z" fill="#d7fc70"/>
      </svg>
    </a>
    <a class="dtinthのwebring" href="https://creatorsgarten.org/ring" title="Creatorsgarten Webring">
      <svg width="32" height="32" viewBox="0 0 416 416" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="103" cy="103" r="78" stroke="#8b8685" stroke-width="18"/>
        <rect x="235" y="235" width="156" height="156" stroke="#8b8685" stroke-width="18"/>
        <mask id="path-3-inside-1_201_11" fill="white">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M400 190C400 93.9025 322.098 16 226 16L226 190L400 190Z"/>
        </mask>
        <path d="M226 16L226 -2.00001L208 -2.00001L208 16L226 16ZM400 190L400 208L418 208L418 190L400 190ZM226 190L208 190L208 208L226 208L226 190ZM226 34C312.156 34 382 103.844 382 190L418 190C418 83.9613 332.039 -2 226 -2.00001L226 34ZM244 190L244 16L208 16L208 190L244 190ZM400 172L226 172L226 208L400 208L400 172Z" fill="#8b8685" mask="url(#path-3-inside-1_201_11)"/>
        <mask id="path-5-inside-2_201_11" fill="white">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 226C16 322.098 93.9025 400 190 400L190 226L16 226Z"/>
        </mask>
        <path d="M190 400L190 418L208 418L208 400L190 400ZM16 226L16 208L-2 208L-2 226L16 226ZM190 226L208 226L208 208L190 208L190 226ZM190 382C103.844 382 34 312.156 34 226L-2 226C-2 332.039 83.9613 418 190 418L190 382ZM172 226L172 400L208 400L208 226L172 226ZM16 244L190 244L190 208L16 208L16 244Z" fill="#8b8685" mask="url(#path-5-inside-2_201_11)"/>
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
.navbar .dtinthのwebring svg {
  display: block;
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

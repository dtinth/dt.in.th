<template>
  <div class="dtinth-facebook-embed" ref="div">
    <slot />
  </div>
</template>

<script>
const injectFacebookScript = () => {
  var s = document.createElement(`script`)
  s.type = 'text/javascript'
  s.async = true
  s.defer = true
  s.setAttribute('nonce', '3xNYuGZs')
  s.src =
    'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=144270078950946&autoLogAppEvents=1'
  document.getElementsByTagName(`head`)[0].appendChild(s)
}

let injectedFacebookScript = false

const embedClasses = [`.fb-post`].join(`,`)

function checkFacebookEmbeds(container) {
  if (document.querySelector(embedClasses) !== null) {
    if (!injectedFacebookScript) {
      injectFacebookScript()
      injectedFacebookScript = true
    }
    if (typeof FB !== 'undefined') {
      FB.XFBML.parse(container)
    }
  }
}

export default {
  mounted() {
    checkFacebookEmbeds(this.$refs.div)
  }
}
</script>

<style lang="stylus">
.dtinth-facebook-embed {
  text-align: center;
  iframe {
    overflow: hidden;
    border-radius: 5px;
    background: white;
    border: 1px solid #eee;
  }
}
</style>

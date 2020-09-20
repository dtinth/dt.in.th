import CallToAction from './global-components/CallToAction.vue'
import EmbedContainer from './global-components/EmbedContainer.vue'
import FacebookEmbed from './global-components/FacebookEmbed.vue'
import SoundCloud from './global-components/SoundCloud.vue'
import TwitterEmbed from './global-components/TwitterEmbed.vue'
import YouTube from './global-components/YouTube.vue'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('CallToAction', CallToAction)
  Vue.component('EmbedContainer', EmbedContainer)
  Vue.component('FacebookEmbed', FacebookEmbed)
  Vue.component('SoundCloud', SoundCloud)
  Vue.component('TwitterEmbed', TwitterEmbed)
  Vue.component('YouTube', YouTube)
}

<template>
  <router-link :to="page.path" class="h-entry u-url">
    <article
      class="page-card"
      :data-overflown="overflown"
      ref="card"
      @click="animate"
    >
      <div class="page-card-contents">
        <div class="image-container">
          <blurhash-image :blurhash="blurhash" v-if="blurhash"></blurhash-image>
          <img
            loading="lazy"
            :src="page.frontmatter.image"
            @load="$refs.image && $refs.image.setAttribute('data-loaded', '1')"
            ref="image"
            data-zoomable="false"
          />
        </div>
        <div class="page-card-info-container" ref="infoContainer">
          <div class="page-card-info" ref="infoContents">
            <h2 class="p-name">{{ page.title }}</h2>
            <!-- TODO: #21 Add category or type to PageCard -->
            <!-- TODO: #22 Add item last modified date to PageCard -->
            <p class="p-summary">{{ page.frontmatter.description }}</p>
          </div>
        </div>
      </div>
    </article>
  </router-link>
</template>

<script>
import blurhashes from '../data/blurhashes'

export default {
  props: ['page'],
  data() {
    return {
      overflown: 'no',
    }
  },
  methods: {
    animate() {
      const card = this.$refs.card
      if (!card) return
      const clonedCard = card.cloneNode(true)
      const screen = document.createElement('div')
      const container = document.createElement('div')
      const front = document.createElement('div')
      const back = document.createElement('div')
      const rect = card.getBoundingClientRect()
      screen.setAttribute(
        'style',
        `position: fixed; top: 0; right: 0; bottom: 0; left: 0; perspective: 1280px; pointer-events: none; transition: 0.3s opacity; z-index: 99999;`
      )
      container.setAttribute(
        'style',
        `position: absolute; top: ${rect.top}px; left: ${rect.left}px; width: ${
          rect.width
        }px; height: ${
          rect.height
        }px; transform-style: preserve-3d; animation: 1s card-go ease-in; animation-fill-mode: both;
        --offset-x: ${window.innerWidth / 2 - (rect.left + rect.width / 2)}px;
        --offset-y: ${window.innerHeight / 2 - (rect.top + rect.height / 2)}px;
        `
      )
      front.setAttribute(
        'style',
        `position: absolute; top: 0; right: 0; bottom: 0; left: 0; backface-visibility: hidden;`
      )
      back.setAttribute(
        'style',
        `position: absolute; top: 0; right: 0; bottom: 0; left: 0; transform: rotateX(180deg) translateZ(1px); background: #d7fc70; backface-visibility: hidden; border-radius: 10px;`
      )
      clonedCard.style.margin = '0'
      window.animateRoute = (next) => {
        card.style.opacity = 0
        screen.appendChild(container)
        container.appendChild(front)
        container.appendChild(back)
        front.appendChild(clonedCard)
        document.body.appendChild(screen)
        setTimeout(() => {
          requestAnimationFrame(() => {
            next()
            requestAnimationFrame(() => {
              screen.style.opacity = 0
              setTimeout(() => {
                screen.remove()
              }, 500)
            })
          })
        }, 1000)
      }
    },
  },
  computed: {
    blurhash() {
      const page = this.page
      const image = page.frontmatter.image
      return (blurhashes[image] && blurhashes[image].blurhash) || ''
    },
  },
  mounted() {
    if (
      this.$refs.infoContents.offsetHeight >
      this.$refs.infoContainer.offsetHeight + 5
    ) {
      this.overflown = 'yes'
    }
  },
}
</script>

<style>
@keyframes card-go {
  from {
    transform: translate3d(0, 0, 0) rotateY(0deg) rotateZ(0deg);
    animation-timing-function: ease-in;
  }
  to {
    transform: translate3d(var(--offset-x), var(--offset-y), 1024px)
      rotateY(180deg) rotateZ(180deg);
  }
}
</style>

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

  & > blurhash-image {
    background-size: cover;
  }

  & > img {
    object-fit: cover;
    opacity: 0;
    transition: 0.2s opacity;
  }

  & > img[data-loaded='1'] {
    opacity: 1;
  }

  & > blurhash-image, & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

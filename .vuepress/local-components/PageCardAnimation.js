// @ts-check
import { requestRouteAnimation } from '../lib/routeAnimations'
import './PageCardAnimation.css'

let initializationRequested = false
let fx = {
  prepare() {
    return {
      /**
       * @param {HTMLDivElement} screen
       */
      release(screen) {
        screen.style.opacity = '0'
      }
    }
  }
}

export function ensureCardAnimationSystemInitialized() {
  if (initializationRequested) return
  initializationRequested = true
  const iframe = document.createElement('iframe')
  iframe.className = 'PageCardAnimation__fx'
  iframe.src = '/internals/fx.html'
  document.body.appendChild(iframe)
  ;(async () => {
    await new Promise(resolve => {
      window.addEventListener('message', e => {
        if (e.source === iframe.contentWindow && e.data && e.data.fxReady) {
          resolve(null)
        }
      })
    })
    console.log('Fx ready')
    let finishTimeout
    fx = {
      prepare() {
        clearTimeout(finishTimeout)
        iframe.contentWindow?.postMessage(
          { animate: { width: window.innerWidth, height: window.innerHeight } },
          location.origin
        )
        iframe.style.display = 'none'
        iframe.style.width = window.innerWidth + 'px'
        iframe.style.height = window.innerHeight + 'px'
        return {
          release(screen) {
            iframe.style.display = 'block'
            requestAnimationFrame(() => {
              screen.style.display = 'none'
            })
            clearTimeout(finishTimeout)
            finishTimeout = setTimeout(() => {
              iframe.style.display = 'none'
            }, 2000)
          }
        }
      }
    }
  })()
}

export function prepareCardAnimation(card) {
  const clonedCard = card.cloneNode(true)
  const screen = document.createElement('div')
  const container = document.createElement('div')
  const front = document.createElement('div')
  const back = document.createElement('div')
  const rect = card.getBoundingClientRect()
  screen.className = 'PageCardAnimation__screen'
  container.className = 'PageCardAnimation__container'
  container.setAttribute(
    'style',
    `
      top: ${rect.top}px;
      left: ${rect.left}px;
      width: ${rect.width}px;
      height: ${rect.height}px;
      --offset-x: ${window.innerWidth / 2 - (rect.left + rect.width / 2)}px;
      --offset-y: ${window.innerHeight / 2 - (rect.top + rect.height / 2)}px;
    `
  )
  front.className = 'PageCardAnimation__front'
  back.className = 'PageCardAnimation__back'
  clonedCard.style.margin = '0'
  requestRouteAnimation(next => {
    card.style.opacity = 0
    screen.appendChild(container)
    container.appendChild(front)
    container.appendChild(back)
    front.appendChild(clonedCard)
    document.body.appendChild(screen)
    const preparedFx = fx.prepare()
    setTimeout(() => {
      requestAnimationFrame(() => {
        next()
        requestAnimationFrame(() => {
          preparedFx.release(screen)
          setTimeout(() => {
            screen.remove()
          }, 500)
        })
      })
    }, 720)
  })
}

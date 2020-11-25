import { requestRouteAnimation } from '../lib/routeAnimations'
import './PageCardAnimation.css'

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
    setTimeout(() => {
      requestAnimationFrame(() => {
        next()
        requestAnimationFrame(() => {
          screen.opacity = 0
          setTimeout(() => {
            screen.remove()
          }, 500)
        })
      })
    }, 1000)
  })
}

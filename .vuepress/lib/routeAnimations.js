export const registeredRouteAnimation = {
  current: /** @type {RouteAnimation | null} */ (null)
}

export const activeRouteAnimation = {
  current: /** @type {Promise<void> | null} */ (null)
}

/**
 * @typedef {(next: () => void) => void} RouteAnimation
 */

/**
 * @param {RouteAnimation} fn
 */
export function requestRouteAnimation(fn) {
  registeredRouteAnimation.current = fn
}

export function activateRouteAnimation(timeout = 5000) {
  /** @type {() => void} */
  let resolver = () => {}
  const promise = new Promise(resolve => {
    resolver = /** @type {any} */ (resolve)
    setTimeout(resolve, timeout)
  })
  activeRouteAnimation.current = promise
  promise
    .catch(() => {})
    .then(() => {
      if (activeRouteAnimation.current === promise) {
        activeRouteAnimation.current = null
      }
    })
  return { finish: resolver }
}

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
 * Request for a route animation to take place.
 * Once called, the next route transition will invoke `fn`
 * and will block until `fn` calls the `next()` function.
 *
 * @param {RouteAnimation} fn
 */
export function requestRouteAnimation(fn) {
  registeredRouteAnimation.current = fn
}

/**
 * Signifies that a route animation is taking place.
 * This can be used to avoid rendering slow components
 * (such as a YouTube embed) while the animation is running
 * to keep it running smoothly.
 */
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

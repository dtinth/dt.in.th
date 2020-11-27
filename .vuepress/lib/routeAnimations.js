export const registeredRouteAnimation = {
  current: /** @type {RouteAnimation | null} */ (null)
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

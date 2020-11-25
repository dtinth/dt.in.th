export const registeredRouteAnimation = {
  current: null
}

export function requestRouteAnimation(fn) {
  registeredRouteAnimation = fn
}

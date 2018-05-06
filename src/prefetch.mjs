import React from 'react'
const context = React.createContext()

export function Prefetcher ({ children }) {
  return <context.Consumer>{prefetch => children(prefetch)}</context.Consumer>
}

export function createPrefetchContext () {
  const urls = new Set()
  const prefetch = (url, { when: active = true } = {}) => {
    if (active) {
      urls.add(url)
    }
    return url
  }
  return {
    collectUrls (element) {
      return <context.Provider value={prefetch}>{element}</context.Provider>
    },
    getUrls () {
      return [...urls]
    }
  }
}

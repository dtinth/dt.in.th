import React from 'react'
import * as layout from './layout'
import home from './home'
import music from './music'
import talks from './talks'

export const pages = Object.assign(
  {
    '/': home,
  },
  talks,
  music,
)

export default props => {
  const path = props.pageContext.pagePath
  const page = pages[path]
  if (!page) {
    console.error('No page for path "' + path + '"')
    return <div>{props.path}</div>
  }
  return layout.render(page)
}

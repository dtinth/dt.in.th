import React from 'react'
import * as layout from './layout'
import home from './home'

export const pages = Object.assign({
  '/': home,
})

export default props => {
  const path = props.pageContext.pagePath
  const page = pages[path]
  if (!page) {
    console.error('No page for path "' + path + '"')
    return <div>{props.path}</div>
  }
  return layout.render(page)
}

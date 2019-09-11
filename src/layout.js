import React from 'react'
export function render(page) {
  return <React.Fragment>{page.render()}</React.Fragment>
}

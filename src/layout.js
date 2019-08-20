import React from 'react'
import { createGlobalStyle } from 'styled-components'
import titleFont from './arimo-bold-title-subset.woff2'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Arimo SiteTitle;
    font-weight: bold;
    src: url(${titleFont});
  }
  :root, html {
    font-size: 18px;
  }
  html {
    font-family: Arimo, Helvetica, sans-serif;
  }
  body {
    background: #353433;
    color: #e9e8e7;
    margin: 0;
    padding: 0;
  }
  a {
    color: #ffb;
    text-decoration-skip: ink;
  }
`

export function render(page) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {page.render()}
    </React.Fragment>
  )
}

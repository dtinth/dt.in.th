import React from 'react'
import { createGlobalStyle } from 'styled-components'
import titleFont from './fonts/arimo-bold-title-subset.woff2'
import comicMono from './fonts/ComicMono.ttf'
import { MDXProvider } from '@mdx-js/react'
import { Heading, P, Helmet } from './common'
import icon from './d7fc70-circle-192.png'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Arimo SiteTitle;
    font-weight: bold;
    src: url(${titleFont});
  }
  @font-face {
    font-family: Comic Mono;
    src: url(${comicMono});
  }
  :root, html {
    font-size: 18px;
  }
  html {
    font-family: Arimo, Helvetica, sans-serif;
  }
  pre, code {
    font-family: Comic Mono, Cousine, Menlo, Consolas, Monaco, monospace;
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

export default ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="icon" href={icon} />
      <link rel="apple-touch-icon" href={icon} />
    </Helmet>
    <MDXProvider
      components={{
        h1: Heading,
        p: P,
      }}
    >
      {children}
    </MDXProvider>
  </React.Fragment>
)

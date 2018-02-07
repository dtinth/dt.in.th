import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import HomePage from './HomePage'
import titleFont from '!!url-loader!./arimo-bold-title-subset.woff2'
import htmlMinifier from 'html-minifier'
import cheerio from 'cheerio'

/* eslint import/no-webpack-loader-syntax: off */

// List of all pages.
export const pages = {
  '/': HomePage
}

// The global CSS.
const globalCss = `
@font-face {
  font-family: Arimo SiteTitle;
  src: url(${titleFont});
}
:root, html {
  font-size: 18px;
}
html {
  font-family: Helvetica, sans-serif;
}
html.webfont-ready {
  font-family: Arimo, Helvetica, sans-serif;
}
body {
  background: #353433;
  color: #e9e8e7;
  margin: 0;
  padding: 0;
}
`

// Renders a page to HTML.
export function renderPageToHTML (page, clientAssets) {
  const sheet = new ServerStyleSheet()
  const jsx = sheet.collectStyles(page.render())
  const html = ReactDOMServer.renderToStaticMarkup(jsx)
  const result = [
    `<!DOCTYPE html>`,
    `<meta charset=utf-8>`,
    `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
    `<title>dt.in.th</title>`,
    `<style>${globalCss}</style>`,
    sheet.getStyleTags(),
    `<body>`,
    html,
    '<script>',
    clientAssets['main.js'],
    '</script>'
  ]
  const $ = cheerio.load(result.join(''))
  const css = Array.from($('style'))
    .map(x => x.children.map(c => c.data).join('\n'))
    .join('\n')
  $('style').remove()
  $('head').append($('<style></style>').text(css))
  return htmlMinifier.minify($.html(), {
    removeAttributeQuotes: true,
    minifyCSS: true
  })
}

// Express request handler.
export function handleRequest (req, res) {
  const page = pages[req.path]
  if (!page) {
    return 'Not found ^_^'
  }
  return renderPageToHTML(page, {
    'main.js': res.locals.isomorphic.compilation.clientStats.compilation.assets['main.js'].source()
  })
}

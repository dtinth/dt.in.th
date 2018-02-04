import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import HomePage from './HomePage'

// List of all pages.
export const pages = {
  '/': HomePage
}

// The global CSS.
const globalCss = `
body {
  background: #353433;
  color: #e9e8e7;
  margin: 0;
  padding: 0;
  font: 18px Arimo, Helvetica, sans-serif;
}
`

// Renders a page to HTML.
export function renderPageToHTML (page) {
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
    html
  ]
  return result.join('')
}

// Express request handler.
export function handleRequest (req) {
  const page = pages[req.path]
  if (!page) {
    return 'Not found ^_^'
  }
  return renderPageToHTML(page)
}

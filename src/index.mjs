import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import home from './home'
import music from './music'
import titleFont from '!!url-loader!./arimo-bold-title-subset.woff2'
import htmlMinifier from 'html-minifier'
import cheerio from 'cheerio'
import talks from './talks'

/* eslint import/no-webpack-loader-syntax: off */

// List of all pages.
export const pages = Object.assign({
  '/': home
}, talks, music)

// The global CSS.
const globalCss = `
@font-face {
  font-family: Arimo SiteTitle;
  font-weight: bold;
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
a {
  color: #ffb;
  text-decoration-skip: ink;
}
`

const googleAnalytics = `
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-4343503-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-4343503-1');
</script>
`

// Renders a page to HTML.
export function renderPageToHTML (page, clientAsset) {
  const sheet = new ServerStyleSheet()
  const jsx = sheet.collectStyles(page.render())
  const html = ReactDOMServer.renderToStaticMarkup(jsx)
  const result = [
    `<!DOCTYPE html>`,
    `<head>`,
    `<meta charset=utf-8>`,
    `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
    `<title>${page.title}</title>`,
    page.head && ReactDOMServer.renderToStaticMarkup(page.head()),
    `<style>${globalCss}</style>`,
    sheet.getStyleTags(),
    googleAnalytics,
    `</head>`,
    `<body>`,
    html,
    '<script>',
    clientAsset('browser/main.js'),
    '</script>'
  ]

  // Combine all <style> tags (from styled-components) into a single style tag.
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
  return renderPageToHTML(page, (name) => {
    return res.locals.isomorphic.compilation.clientStats.compilation.assets[name].source()
  })
}

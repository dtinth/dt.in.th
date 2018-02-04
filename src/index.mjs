import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'
import Home from './Home'

export default function () {
  const data = <Home />
  const sheet = new ServerStyleSheet()
  const jsx = sheet.collectStyles(data)
  const html = ReactDOMServer.renderToStaticMarkup(jsx)
  const result = [
    `<!DOCTYPE html>`,
    `<meta charset=utf-8><meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
    `<title>dt.in.th</title>`,
    `<style>${globalCss}</style>`,
    sheet.getStyleTags(),
    `<body>`,
    html
  ]
  return result.join('')
}

const globalCss = `
body {
  background: #353433;
  color: #e9e8e7;
  margin: 0;
  padding: 0;
  font: 18px Arimo, Helvetica, sans-serif;
}
`

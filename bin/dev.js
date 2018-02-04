const webpack = require('webpack')
const webpackIsomorphicDevMiddleware = require('webpack-isomorphic-dev-middleware')
const express = require('express')
const app = express()

app.use(webpackIsomorphicDevMiddleware(
  webpack(require('../webpack.config.browser')),
  webpack(require('../webpack.config.node'))
))

app.get('*', (req, res, next) => {
  Promise.resolve(res.locals.isomorphic.exports.handleRequest(req))
    .then(html => res.send(html))
    .catch(next)
})

app.listen(2018, () => console.log('[[ http://localhost:2018/ ]]'))

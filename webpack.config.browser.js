const path = require('path')

module.exports = {
  entry: './src/browser.mjs',
  mode: 'production',
  output: {
    path: path.join(__dirname, 'build', 'browser')
  },
  module: {
    rules: [
      { test: /\.m?js$/, exclude: [/node_modules/], use: ['babel-loader'] }
    ]
  }
}

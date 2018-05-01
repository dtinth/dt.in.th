const path = require('path')

module.exports = {
  entry: './src/browser',
  mode: 'production',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'browser/main.js'
  },
  module: {
    rules: [
      { test: /\.m?js$/, exclude: [/node_modules/], use: ['babel-loader'] }
    ]
  }
}

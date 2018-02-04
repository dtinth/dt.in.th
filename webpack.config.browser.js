module.exports = {
  entry: './src/browser.mjs',
  mode: 'production',
  module: {
    rules: [
      { test: /\.m?js$/, exclude: [/node_modules/], use: ['babel-loader'] }
    ]
  }
}

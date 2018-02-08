const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  target: 'node',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'node/main.js',
    library: 'dtinth',
    libraryTarget: 'commonjs2'
  },
  externals: [ nodeExternals({
    whitelist: [ 'styled-components' ]
  }) ],
  resolve: {
    alias: {
      'styled-components$': require.resolve('styled-components/dist/styled-components.es.js')
    }
  },
  module: {
    rules: [
      { test: /\.m?js$/, exclude: [/node_modules/], use: ['babel-loader'] },
      { test: /\.jpg$/, use: [ { loader: 'file-loader', options: { name: 'assets/[hash].[ext]' } } ] }
    ]
  }
}

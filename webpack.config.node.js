const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  mode: 'development',
  output: {
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
      { test: /\.m?js$/, exclude: [/node_modules/], use: ['babel-loader'] }
    ]
  }
}

var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  mode: 'development',

  context: __dirname,

  entry: {
      main: './assets/js/index.js' // エントリ名とエントリポイント
  },

  output: {
      path: path.resolve('./assets/webpack_bundles/'), // 出力
      filename: "[name]-[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.(ogg|m4a|mp3|wav|mpe?g)$/i,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new BundleTracker({filename: './assets/webpack_bundles/webpack-stats.json'}),
  ],
}
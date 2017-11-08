const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PORT = process.env.PORT || 3003;
module.exports = {
    entry: './app/index.jsx',
    output: {
      publicPath: "/",
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          enforce: "pre",
          exclude: /node_modules/,
          loader: "eslint-loader",
          options: {
              fix: true,
          },
        },
        {
          test: /\.(js|jsx)$/,
          use: {
              loader: 'babel-loader',
              options: {
                  presets: ['react', 'env', 'flow']
              }
          },
          exclude: /node_modules/
        },

        {
          test: /\.scss$/,
          use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
              use: [{
                      loader: "css-loader" // translates CSS into CommonJS
                  },
                  {
                      loader: "sass-loader" // compiles Sass to CSS
                  }
              ],
              fallback: "style-loader" // used when css not extracted
          }))
        }
      ]
    },
    devServer: {
      hot: true,
      port: PORT
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true
        })
    ]
}

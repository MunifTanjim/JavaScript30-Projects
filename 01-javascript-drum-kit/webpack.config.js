const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
})

const htmlWebpack = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src', 'index.html'),
})

const extractCSS = new ExtractTextPlugin({
    filename: '[name].css',
    disable: process.env.NODE_ENV === 'development'
})

module.exports = {
  entry: {
    main: path.join(__dirname, 'src/scripts', 'main.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'link:href', 'audio:src']
          }
        }
      }, {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src/stylesheets'),
        loader:  extractCSS.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
          ]
        })
      }, {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/scripts'),
        loader: 'babel-loader'
      }, {
        test: /\.wav$/,
        include: path.resolve(__dirname, 'src/sounds'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'audio/',
            outputPath: 'audio/'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [ '*', '.js', '.css' ]
  },
  plugins: [
    definePlugin,
    htmlWebpack,
    extractCSS
  ],
}

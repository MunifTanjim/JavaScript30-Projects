const webpack = require('webpack')
const path = require('path')
const sh = require('shelljs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
})

const extractCSS = new ExtractTextPlugin({
  filename: '[name].css',
  disable: process.env.NODE_ENV === 'development'
})

const htmlWebpack = (dir) => new HtmlWebpackPlugin({
  template: path.join(dir, 'index.html')
})

const webpackEntry = (dir) => ({
  main: path.join(dir, 'scripts', 'main.js')
})

const webpackOutput = (num) => ({
  path: path.join(__dirname, 'dist', num),
  filename: '[name].js'
})

const webpackModuleRules = (dir) => ([
  {
    test: /\.html$/,
    include: path.join(dir),
    use: {
      loader: 'html-loader',
      options: {
        attrs: ['img:src', 'link:href', 'audio:src']
      }
    }
  }, {
    test: /\.css$/,
    include: path.join(dir, 'stylesheets'),
    loader:  extractCSS.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
      ]
    })
  }, {
    test: /\.js$/,
    include: path.join(dir, 'scripts'),
    loader: 'babel-loader'
  }, {
    test: /\.wav$/,
    include: path.join(dir, 'sounds'),
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publicPath: 'audio/',
        outputPath: 'audio/'
      }
    }
  }
])

const webpackResolve = {
  extensions: [ '*', '.js', '.css' ]
}

const webpackPlugins = (dir) => ([
  definePlugin,
  htmlWebpack(dir),
  extractCSS
])

const Projects = sh.ls(__dirname)
  .filter(name => name.match(/\d{2}/))
  .map(projectName => {
    let num = projectName.match(/(\d{2})/)
    return {
      num: num[0],
      dir: path.resolve(__dirname, projectName)
    }
  })

const webpackConfigs = Projects.map(project => {
  let {dir, num} = project

  return {
    entry: webpackEntry(dir),
    output: webpackOutput(num),
    module: {
      rules: webpackModuleRules(dir)
    },
    resolve: webpackResolve,
    plugins: webpackPlugins(dir)
  }
})

module.exports = webpackConfigs

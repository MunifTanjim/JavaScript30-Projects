const webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const webpackConfigs = require('./webpack.config.js')

const project = +process.argv[2]

if (project && project>0) {
  let config = webpackConfigs[project - 1]

  config.entry.hot = 'webpack/hot/dev-server'
  config.entry.inline= 'webpack-dev-server/client?http://localhost:8080/'
  config.plugins.push(new webpack.HotModuleReplacementPlugin())

  let compiler = webpack(config);

  let server = new WebpackDevServer(compiler, {
    stats: {
      colors: true
    }
  })
  server.listen(8080)
} else {
  console.error('Enter Project number as first argument, please!')
}

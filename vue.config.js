const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'development' ? '/' : '',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '高德地圖'
      return args
    })
  },

  devServer: {
    open: true,
    host: '0.0.0.0'
    // proxy: {
    //   '/api': {
    //     target: process.env.VUE_APP_BASE_API,
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
})

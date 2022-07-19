const { defineConfig } = require('@vue/cli-service')
const Setting = require('./src/setting')

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'development' ? '/' : '',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = Setting.title
      return args
    })
  },

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#3778e7',
            'link-color': '#3778e7',
            'border-radius-base': '2px'
          },
          javascriptEnabled: true
        }
      }
    }
  },

  devServer: {
    open: true,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: Setting.baseURL,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})

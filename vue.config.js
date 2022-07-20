const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '羅甸縣公安定位'
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
    host: '0.0.0.0'
    // proxy: {
    //   '/api': {
    //     target: '',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
})

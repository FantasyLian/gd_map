const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'development' ? '/' : '',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '罗甸县公安局警力分布系统'
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
    open: true, // 编译后默认打开浏览器
    host: '0.0.0.0', // 域名
    port: 8080, // 端口
    https: true, // 是否https
    proxy: {
      '/api': {
        target: 'https://www.ldc.com',
        changeOrigin: true, // 是否跨域
        ws: false, // 是否支持 websocket
        secure: true, // 如果是 https 接口，需要配置这个参数
        pathRewrite: { // 可以理解为一个重定向或者重新赋值的功能
          '^/api': '' // '^/api': '/'    这种接口配置出来     http://127.0.0.1:10001/login
        } // '^/api': '/api'  这种接口配置出来     http://127.0.0.1:10001/api/login
      }
    }
  }
})

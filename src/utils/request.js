import axios from 'axios'
import local from './local'
import router from '@/router'
import { message } from 'ant-design-vue'

// 开始加载
function startLoading () {
  message.loading({
    content: '加载中...',
    duration: 3000
  })
}

// 停止加载
function stopLoading () {
  message.destroy()
}

// 创建axios实例
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/api', // api 的 base_url
  timeout: 300000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

// 请求拦截
service.interceptors.request.use(
  config => {
    startLoading()
    const token = local.get('token') // token
    token && (config.headers.token = token)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    stopLoading()
    const { status } = response
    if (status === 200) {
      if (response.data.code === 600) {
        message.error(response.data.msg)
        router.push('/login')
        local.clear()
      } else if (response.data.code && response.data.code !== 200) {
        message.error(response.data.msg)
      }
    }
    return response
  },
  error => {
    if (error.response.status === 500) {
      router.push('/500')
    }
    if (error.toString().indexOf('Error: timeout') !== -1) {
      message.warn({
        content: '网络请求超时',
        duration: 5000
      })
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)

export default service

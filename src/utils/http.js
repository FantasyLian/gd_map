import request from '@/utils/request'

export default {
  // get
  $get (url, params) {
    return new Promise((resolve, reject) => {
      request({ url, method: 'GET', params }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // post
  $post (url, data) {
    return new Promise((resolve, reject) => {
      request({ url, method: 'POST', data }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // put
  $put (url, data) {
    return new Promise((resolve, reject) => {
      request({ url, method: 'PUT', data }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // delete
  $delete (url, params) {
    return new Promise((resolve, reject) => {
      request({ url, method: 'DELETE', params }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

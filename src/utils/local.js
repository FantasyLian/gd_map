// 封装本地存储

export default {
  // 取
  get (key) {
    return JSON.parse(localStorage.getItem(key))
  },
  // 存
  set (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  // 删除
  remove (key) {
    localStorage.removeItem(key)
  },
  // 清空
  clear () {
    localStorage.clear()
  }
}

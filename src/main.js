import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Antd from 'ant-design-vue/es'
// import 'ant-design-vue/dist/antd.less'
import '@/assets/styles/index.less'

const app = createApp(App)
app.use(store).use(router).mount('#app')

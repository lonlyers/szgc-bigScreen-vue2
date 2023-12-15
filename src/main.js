import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/assets/css/index.css'
import '@/assets/font/index.css'
import '@/utils/setRem'
import DhComponents from '@/components'

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(DhComponents)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

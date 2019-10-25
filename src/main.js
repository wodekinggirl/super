import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
// import Vuex from 'vuex'
import './assets/styles/common.css'
import 'normalize.css' //引入全局重置样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
// Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router:router,
  // Vuex,
  render: h => h(App),
}).$mount('#app')

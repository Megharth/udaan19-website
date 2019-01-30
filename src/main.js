import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import KsVueScrollmagic from 'ks-vue-scrollmagic'
Vue.config.productionTip = false

Vue.use(KsVueScrollmagic)
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

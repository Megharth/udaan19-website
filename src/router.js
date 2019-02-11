import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import halfWavePrince from './views/halfWavePrince'
import gobletOfEntertainment from './views/gobletOfEntertainment'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/halfWavePrince',
      name: 'halfWavePrince',
      component: halfWavePrince
    },
    {
      path: '/gobletOfEntertainment',
      name: 'gobletOfEntertainment',
      component: gobletOfEntertainment
    }
  ]
})

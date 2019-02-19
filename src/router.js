import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import builderOfAzkaban from './views/buildersOfAzkaban'
import halfWavePrince from './views/halfWavePrince'
import gobletOfWorkshops from './views/gobletOfWorkshops'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/boa',
      name: 'bulidersOfAzkaban',
      component: builderOfAzkaban
    },
    {
      path: '/halfWavePrince',
      name: 'halfWavePrince',
      component: halfWavePrince
    },
    {
      path: '/gobletOfWorkshops',
      name: 'gobletOfWorkshops',
      component: gobletOfWorkshops
    }
  ]
})

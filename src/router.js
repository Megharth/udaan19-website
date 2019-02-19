import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import builderOfAzkaban from './views/buildersOfAzkaban'
import halfWavePrince from './views/halfWavePrince'
// import gobletOfWorkshops from './views/gobletOfWorkshops'
import madHollows from './views/madHollows'
import automotivePhilosophers from './views/automotivePhilosophers'
import scamandersSuitcase from './views/scamandersSuitcase'
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
    /*{
      path: '/gobletOfWorkshops',
      name: 'gobletOfWorkshops',
      component: gobletOfWorkshops
    },*/
    {
      path: '/madHollows',
      name: 'madHollows',
      component: madHollows
    },
    {
      path: '/automotivePhilosophers',
      name: 'automotivePhilosophers',
      component: automotivePhilosophers
    },
    {
      path: '/scamandersSuitcase',
      name: 'scamandersSuitcase',
      component: scamandersSuitcase
    }
  ]
})

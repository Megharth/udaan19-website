import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import builderOfAzkaban from './views/buildersOfAzkaban'

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
    }
  ]
})

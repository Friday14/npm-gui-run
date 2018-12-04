import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: require('@/pages/Dashboard').default
    },
    {
      path: '/project/:id',
      name: 'projects.show',
      component: require('@/pages/projects/ProjectShow').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

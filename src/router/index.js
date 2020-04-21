import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home')
      }
    ]
  },

  {
    path: '/test',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Test',
        component: () => import('@/views/test')
      }
    ]
  }

]

export default new Router({
  routes
})

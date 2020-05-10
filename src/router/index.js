import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Layout,
    name: 'Home',
    redirect: '/',
    children: [
      {
        path: '',
        component: () => import('@/views/home')
      }
    ]
  },

  {
    path: '/test',
    component: Layout,
    name: 'Test',
    redirect: '/test/',
    children: [
      {
        path: '',
        name: 'TestList',
        component: () => import('@/views/test')
      },
      {
        path: ':id',
        name: 'TestDetail',
        hidden: true,
        component: () => import('@/views/test/detail')
      }
    ]
  }

]
export { routes }
export default new Router({
  routes
})

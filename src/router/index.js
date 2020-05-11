import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)

const routes = [
  { // Home
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home'
    },
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '',
        component: () => import('@/views/home')
      }
    ]
  },

  { // Test
    path: '/test',
    name: 'Test',
    meta: {
      title: 'Test'
    },
    component: Layout,
    redirect: '/test/',
    children: [
      {
        path: '',
        name: 'TestList',
        meta: {
          title: 'TestList'
        },
        component: () => import('@/views/test')
      },
      {
        path: ':id',
        name: 'TestDetail',
        meta: {
          title: 'TestDetail'
        },
        component: () => import('@/views/test/detail'),
        hidden: true
      }
    ]
  }
]

export { routes }
export default new Router({
  routes
})

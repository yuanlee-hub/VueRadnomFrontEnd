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

  { // Cookie
    path: '/cookie',
    name: 'Cookie',
    meta: {
      title: 'Cookie'
    },
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/cookie')
      }
    ]
  },

  { // QRCode
    path: '/qrcode',
    name: 'QRCode',
    meta: {
      title: 'QRCode'
    },
    component: Layout,
    redirect: '/qrcode/custom',
    children: [
      {
        path: 'custom',
        name: 'QRCodeCustom',
        meta: {
          title: '自定义二维码内容'
        },
        component: () => import('@/views/qrcode/custom')
      },
      {
        path: 'redirect',
        name: 'QRCodeRedirect',
        meta: {
          title: '扫码跳转'
        },
        component: () => import('@/views/qrcode/redirect')
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

import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)

const routes = [
  { // Home
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '',
        meta: {
          title: 'Home'
        },
        component: () => import('@/views/home')
      }
    ]
  },

  { // Cookie
    path: '/cookie',
    name: 'Cookie',
    component: Layout,
    redirect: '/cookie/',
    children: [
      {
        path: '',
        meta: {
          title: 'Cookie'
        },
        component: () => import('@/views/cookie')
      }
    ]
  },

  { // QRCode
    path: '/qrcode',
    name: 'QRCode',
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
  },

  { // Scoped style
    path: '/scoped-style',
    name: 'ScopedStyle',
    component: Layout,
    redirect: '/scoped-style/',
    children: [
      {
        path: '',
        meta: {
          title: 'ScopedStyle'
        },
        component: () => import('@/views/scoped-style')
      }
    ]
  },

  { // JSON
    path: '/JSON',
    name: 'JSON',
    component: Layout,
    redirect: '/JSON/',
    children: [
      {
        path: '',
        name: 'LocalJSON',
        meta: {
          title: 'LocalJSON'
        },
        component: () => import('@/views/json/localShow')
      },
      {
        path: 'http',
        name: 'HTTPJSON',
        meta: {
          title: 'HTTPJSON'
        },
        component: () => import('@/views/json/http')
      }
    ]
  },

  { // requestPayload
    path: '/requestPayload',
    name: 'RequestPayload',
    component: Layout,
    redirect: '/requestPayload/jquery',
    children: [
      {
        path: 'jquery',
        name: 'JQueryRequestPayload',
        meta: {
          title: 'JQueryRequestPayload'
        },
        component: () => import('@/views/requestPayload/jquery')
      },
      {
        path: 'axios',
        name: 'AxiosRequestPayload',
        meta: {
          title: 'AxiosRequestPayload'
        },
        component: () => import('@/views/requestPayload/axios')
      }
    ]
  },

  { // responsePayload
    path: '/responsePayload',
    name: 'ResponsePayload',
    component: Layout,
    redirect: '/responsePayload/',
    children: [
      {
        path: '',
        meta: {
          title: 'ResponsePayload'
        },
        component: () => import('@/views/responsePayload')
      }
    ]
  },

  { // class & object
    path: '/class-object',
    name: 'ClassObject',
    component: Layout,
    children: [
      {
        path: '',
        meta: {
          title: 'Class & Object'
        },
        component: () => import('@/views/class')
      }
    ]
  },

  { // freeze
    path: '/freeze',
    name: 'Freeze',
    component: Layout,
    children: [
      {
        path: '',
        meta: {
          title: 'Freeze'
        },
        component: () => import('@/views/freeze')
      }
    ]
  },

  { // props-type
    path: '/props-type',
    name: 'PropsType',
    component: Layout,
    children: [
      {
        path: '',
        meta: {
          title: '组件属性数据类型'
        },
        component: () => import('@/views/props-type')
      }
    ]
  },

]

export { routes }
export default new Router({
  routes
})

import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const routes = [
  { // Home
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '',
        name: 'Home',
        meta: {
          title: 'Home'
        },
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
  },

  { // Cookie
    path: '/cookie',
    component: Layout,
    redirect: '/cookie/',
    children: [
      {
        path: '',
        name: 'Cookie',
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
    meta: {
      title: '二维码'
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

  { // Scoped style
    path: '/scoped-style',
    component: Layout,
    redirect: '/scoped-style/',
    children: [
      {
        path: '',
        name: 'ScopedStyle',
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
    meta: {
      title: 'JSON'
    },
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
    meta: {
      title: 'RequestPayload'
    },
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
    component: Layout,
    redirect: '/responsePayload/',
    children: [
      {
        path: '',
        name: 'ResponsePayload',
        meta: {
          title: 'ResponsePayload'
        },
        component: () => import('@/views/responsePayload')
      }
    ]
  },

  { // class & object
    path: '/class-object',
    component: Layout,
    children: [
      {
        path: '',
        name: 'ClassObject',
        meta: {
          title: 'Class & Object'
        },
        component: () => import('@/views/class')
      }
    ]
  },

  { // freeze
    path: '/freeze',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Freeze',
        meta: {
          title: 'Freeze'
        },
        component: () => import('@/views/freeze')
      }
    ]
  },

  { // props-type
    path: '/props-type',
    component: Layout,
    children: [
      {
        path: '',
        name: 'PropsType',
        meta: {
          title: '组件属性数据类型'
        },
        component: () => import('@/views/props-type')
      }
    ]
  },

  { // same-key
    path: '/same-key',
    component: Layout,
    children: [
      {
        path: '',
        name: 'SameKeyPage',
        meta: {
          title: '不同元素使用相同的 key'
        },
        component: () => import('@/views/same-key')
      }
    ]
  },

]

export default new Router({
  routes
})

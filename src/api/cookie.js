import request from '@/utils/request'

export function getCookie() {
  return request({
    url: '/cookie',
    method: 'get'
  })
}

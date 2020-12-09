import request from '@/utils/request'

export function getJSON () {
  return request({
    url: '/json',
    method: 'get'
  })
}

export function getResponsePayload () {
  return request({
    url: '/json/responsePayload',
    method: 'get'
  })
}

export function postJSON (data) {
  return request({
    url: '/json',
    method: 'post',
    data
  })
}

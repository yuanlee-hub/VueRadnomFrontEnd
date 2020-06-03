import request from '@/utils/request'

export function postQRCode({ content }) {
  return request({
    url: '/qrcode',
    method: 'post',
    data: { content }
  })
}

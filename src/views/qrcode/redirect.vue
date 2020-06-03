<template>
    <div id="QRCodeRedirect">
        QRCode data:
        <select v-model="qrcode.content" @change="handlePostQRCode">
            <option value="https://www.qq.com">https://www.qq.com</option>
            <option value="https://www.baidu.com">https://www.baidu.com</option>
            <option value="https://github.com/soldair/node-qrcode">https://github.com/soldair/node-qrcode</option>
            <option value="https://www.tuicool.com/a">https://www.tuicool.com/a</option>
        </select>
        <hr>
        QRCode:<br>
        <img v-if="qrcode.url" :src="qrcode.url" alt="">
    </div>
</template>

<script>
  import { postQRCode } from '@/api/qrcode'

  export default {
    name: 'QRCode',
    data() {
      return {
        qrcode: {
          content: 'https://www.baidu.com',
          url: null
        }
      }
    },
    created() {
      this.handlePostQRCode()
    },
    methods: {
      handlePostQRCode() {
        if (!this.qrcode.content.trim()) return
        postQRCode({ content: this.qrcode.content }).then(res => {
          if (res.code !== 0 || !res.data) return
          this.qrcode.url = res.data.url
        })
      }
    }
  }
</script>

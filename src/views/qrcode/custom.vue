<template>
    <div id="QRCode">
        QRCode data:
        <input v-model="qrcode.content" type="text">
        <button @click="handlePostQRCode">POST QRCode</button>
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
          content: '^_^',
          url: null
        }
      }
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

<template>
    <div id="cookie">
        Cookie:{{ cookie }}
    </div>
</template>

<script>
  import { getCookie } from '@/api/cookie'

  export default {
    name: 'Test',
    data() {
      return {
        cookie: null
      }
    },
    created() {
      this.getCookie()
    },
    methods: {
      getCookie() {
        getCookie().then(res => {
          if (res.code !== 0) return
          console.log('getCookie>res:', res)
          this.cookie = res.data
          document.cookie = 'token=' + res.data.token
          document.cookie = 'maxAge(10s)=' + res.data.token + ';max-age=' + 10
        })
      }
    }
  }
</script>

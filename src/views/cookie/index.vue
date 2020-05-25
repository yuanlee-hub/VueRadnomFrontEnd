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
          this.cookie = res.data
        })
      }
    }
  }
</script>

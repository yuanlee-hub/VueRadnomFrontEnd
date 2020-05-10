<template>
    <div>
        Detail: {{ JSON.stringify(data) }}
    </div>
</template>

<script>
  export default {
    name: "detail",
    data() {
      return {
        data: this.$route.params.data
      }
    },
    created() {
      console.log('$route.params:', this.$route.params)
    }
  }
</script>

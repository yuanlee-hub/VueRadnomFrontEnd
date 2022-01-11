<template>
  <div>
    <pre>
      {{ JSON.stringify(checked) }}
    </pre>
  </div>
</template>

<script>
export default {
  name: "BoolAndStringProp",
  props: {
    checked: {
      type: [Boolean, String],
      default: false
    }
  },

  created() {
    console.log('checked/typeof:', this.checked, typeof this.checked)
  }
}
</script>

<style scoped>

</style>

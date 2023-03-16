<template>
  <div>
    <button @click="updateCount">Update count.</button>
    <h1 :key="count">H1 {{ count}}</h1>
    <h2 :key="count">H2 {{ count}}</h2>
    <h3 :key="count">H3 {{ count}}</h3>
  </div>
</template>

<script>
export default {
  name: "SameKeyView",
  data() {
    return {
      count: 0
    }
  },
  methods: {
    updateCount() {
      this.count++
    }
  }
}
</script>

<style scoped>

</style>
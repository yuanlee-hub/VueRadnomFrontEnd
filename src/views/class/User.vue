<template>
  <div>
    LastName: <input type="text" v-model="user.last">
    <br/>
    FirstName: <input type="text" v-model="user.first">
  </div>
</template>

<script>
export default {
  name: "User",
  props: ['user']
}
</script>

<style scoped>

</style>

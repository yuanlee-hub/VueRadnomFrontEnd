<template>
  <div>
    <h1>class get 模拟 computed</h1>
    <UserCmp :user="user"/>
    FullName: {{ user.full }}
  </div>
</template>

<script>
import UserCmp from "./User.vue";

class User {
  constructor(first, last) {
    this.first = first
    this.last = last
  }
  get full() {
    return this.first + ' ' + this.last
  }
}

export default {
  name: "class-computed",
  components: {
    UserCmp
  },
  data() {
    return {
      user: new User('z', 's')
    }
  }
}
</script>

<style scoped>

</style>

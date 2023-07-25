<template>
  <div>
    <h1>class get 模拟 filter</h1>

    <table width="100%" border="1" cellspacing="0">
      <thead>
      <th>ID</th>
      <th>Name</th>
      <th>Gender</th>
      </thead>
      <tbody>
      <tr v-for="user of users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user._gender }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

class User {
  constructor(_) {
    const { id, name, gender } = { ..._ }
    this.id = id
    this.name = name
    this.gender = gender
  }
  get _gender() {
    return ['男', '女'][this.gender] || 'N/A'
  }
}

export default {
  name: "class-filter",
  data() {
    return {
      users: [
          {id: 1, name: 'ZS', gender: 0},
          {id: 2, name: 'LS', gender: 1},
          {id: 3, name: 'WW'},
          {id: 4, name: 'ZL', gender: 0},
      ].map(_ => new User(_))
    }
  }
}
</script>

<style scoped>

</style>

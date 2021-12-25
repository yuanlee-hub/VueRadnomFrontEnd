<template>
  <div>

  <pre>
    经 Object.freeze() 冻结的对象：
    1.一级属性在语法层面，已无法修改
    2.嵌套的对象，在 Vue 中，已失去响应性
  </pre>
    <hr>

    <button @click="update">Update</button>
    <pre>
    {{ JSON.stringify(CONSTANTS, null, 2) }}
  </pre>


  </div>
</template>

<script>
export default {
  name: 'Freeze',
  data() {
    return {
      CONSTANTS: Object.freeze({
        id: 1,
        user: {
          name: 'aa'
        }
      })
    }
  },
  methods: {
    update() {
      this.CONSTANTS.user.name = 'bb'
    }
  }
}
</script>

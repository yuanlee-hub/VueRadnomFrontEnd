<!--
组件属性数据类型
-->

<template>
  <div>
    <bool-and-string-prop :checked="checked"/>
  </div>
</template>

<script>
import BoolAndStringProp from "./BoolAndStringProp";
export default {
  name: "PropsType",
  components: {
    BoolAndStringProp
  },
  data() {
    return {
      checked: ''
    }
  }
}
</script>

<style scoped>

</style>

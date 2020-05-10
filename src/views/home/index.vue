<template>
    <div id="home" style="text-align: center;">
        <img alt="Vue logo" src="@/assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" year="2020" month="4" date="21" class="hello"/>
    </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld
    }
  }
</script>

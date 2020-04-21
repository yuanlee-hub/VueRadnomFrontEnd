<template>
    <div id="main" class="main">
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key" />
        </transition>
    </div>
</template>

<script>
  export default {
    name: "Layout",
    computed: {
      key() {
        return this.$route.path
      }
    }
  }
</script>

<style scoped>

</style>

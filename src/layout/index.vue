<template>
    <div id="main" class="main">
        <nav-bar></nav-bar>
        <div class="content">
            <transition name="fade-transform" mode="out-in">
                <template>
                    <router-view :key="key" />
                </template>
            </transition>
        </div>
    </div>
</template>

<script>
  import NavBar from "../components/NavBar/index"
  export default {
    name: "Layout",
    components: {
      NavBar
    },
    computed: {
      key() {
        return this.$route.path
      }
    }
  }
</script>

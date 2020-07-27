<template>
    <div id="ScopedStyleBox">
        <h1>H1</h1>
        <h2>H2</h2>
    </div>
</template>

<script>
    export default {
        name: "ScopedStyle"
    }
</script>

<style scoped>
    #ScopedStyleBox {
        background-color: lightcyan;
    }
</style>
<style>
    h1 {
        color: green;
    }
</style>

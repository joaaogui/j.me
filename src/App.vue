<script setup>
import Home from "./components/Home.vue";
import TopBar from "./components/TopBar.vue";
</script>

<template>
  <div class="app">
    <TopBar />
    <Home />
  </div>
</template>

<style scoped>
.app {
  @apply font-raleway text-gray-800 flex flex-col justify-center items-center;
}
</style>

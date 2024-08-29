<template>
  <div class="wrapper">
    <HeaderComponent />
    <main class="page">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<style scoped></style>

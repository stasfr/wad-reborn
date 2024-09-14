<template>
  <div class="wrapper">
    <HeaderComponent />
    <main class="page">
      <slot />
    </main>
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<style scoped></style>

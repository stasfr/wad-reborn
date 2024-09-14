<template>
  <div
    class="min-h-screen overflow-hidden flex flex-col transition-colors duration-300"
  >
    <HeaderComponent />
    <main class="flex-auto my-24 max-w-screen-xl mx-auto px-4">
      <slot />
    </main>
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

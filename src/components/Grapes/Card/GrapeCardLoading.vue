<script setup lang="ts">
const items = ref<Array<{ id: number }>>(
  Array.from({ length: 15 }, (_, i) => ({ id: i + 1 })),
)
</script>

<template>
  <div v-for="item in items" :key="item.id">
    <div class="skeleton space-y-2 p-4 w-72 h-56 box-content">
      <div class="skeleton w-1/2 h-4"></div>
      <div class="skeleton w-5/6 h-8"></div>
      <div class="skeleton w-full h-40"></div>
    </div>
  </div>
</template>

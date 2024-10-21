<script setup lang="ts">
const grapeStore = useGrape()

onMounted(async () => {
  await grapeStore.getConstructor()
})
</script>

<template>
  <div>{{ grapeStore.constructor }}</div>
</template>

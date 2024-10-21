<script setup lang="ts">
import useGrape from '@/composables/useGrape'
import { onMounted } from 'vue'

const grapeStore = useGrape()

onMounted(async () => {
  await grapeStore.getConstructor()
})
</script>

<template>
  <div>{{ grapeStore.constructor }}</div>
</template>

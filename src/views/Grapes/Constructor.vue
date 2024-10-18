<script setup lang="ts">
import { useGrapeStore } from '@/stores/grapes'
import { onMounted } from 'vue'

const grapeStore = useGrapeStore()

onMounted(async () => {
  await grapeStore.getConstructor()
})
</script>

<template>
  <div>{{ grapeStore.constructor }}</div>
</template>

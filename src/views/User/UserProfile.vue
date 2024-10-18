<template>
  <div>{{ userStore.user }}</div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'

const userStore = useUserStore()

onMounted(async () => {
  await userStore.getSession()
})
</script>

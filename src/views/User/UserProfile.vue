<script setup lang="ts">
import useUser from '@/composables/useUser'
import { onMounted } from 'vue'

const userStore = useUser()

onMounted(async () => {
  await userStore.getSession()
})
</script>

<template>
  <div>{{ userStore.user }}</div>
</template>

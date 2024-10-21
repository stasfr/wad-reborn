<script setup lang="ts">
const userStore = useUser()

onMounted(async () => {
  await userStore.getSession()
})
</script>

<template>
  <div>{{ userStore.user }}</div>
</template>

<script setup lang="ts">
const { user, getSession } = useAuth()

onMounted(async () => {
  await getSession()
})
</script>

<template>
  <!-- TODO: изменить логику, после рефакторинга useUser -->
  <div>{{ user }}</div>
</template>

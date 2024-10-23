<script setup lang="ts">
const { user } = useUser()
const { getSession } = useAuth()

onMounted(async () => {
  await getSession()
})
</script>

<template>
  <!-- TODO: изменить логику, после рефакторинга useUser -->
  <div>{{ user }}</div>
</template>

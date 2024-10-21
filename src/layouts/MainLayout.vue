<script setup lang="ts">
const useThemeStore = useTheme()
</script>

<template>
  <div
    class="min-h-screen overflow-hidden flex flex-col transition-colors duration-300"
    :class="useThemeStore.getTheme.value"
  >
    <Header />
    <main class="flex-auto my-24 max-w-screen-xl mx-auto px-4">
      <slot />
    </main>
  </div>
</template>

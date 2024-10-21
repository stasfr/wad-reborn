<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue'

const route = useRoute()

const layouts = {
  MainLayout,
}

const layout = computed(() => {
  const layoutKey = route.meta.layout as keyof typeof layouts

  return layouts[layoutKey || 'MainLayout']
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

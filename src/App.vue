<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup>
import { useRoute } from "vue-router";
import MainLayout from "./layouts/MainLayout.vue";
import { computed } from "vue";

const route = useRoute();

const layouts = {
  MainLayout,
};

const layout = computed(() => {
  const layoutKey = route.meta.layout;

  return layouts[layoutKey || "MainLayout"];
});
</script>

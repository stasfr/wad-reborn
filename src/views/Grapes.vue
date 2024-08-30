<template>
  <div class="_container">{{ grapesStore }}</div>
</template>

<script setup>
import { useGrapeStore } from "@/stores/grapes";
import { onMounted } from "vue";

const grapesStore = useGrapeStore();
onMounted(async () => {
  await grapesStore.getGrapes();
});
</script>

<style scoped></style>

<template>
  <div class="_container">{{ grapesStore.grape }}</div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGrapeStore } from "@/stores/grapes";
import { onMounted } from "vue";

const router = useRouter();
const route = useRoute();
const grapesStore = useGrapeStore();

onMounted(async () => {
  await grapesStore.getSingleGrape(route.params.grapeId);
});
</script>

<style scoped></style>

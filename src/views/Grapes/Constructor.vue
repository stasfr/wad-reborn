<template>
  <div>{{ grapeStore.constructor }}</div>
</template>

<script setup>
import { useGrapeStore } from "@/stores/grapes";
import { onMounted } from "vue";

const grapeStore = useGrapeStore();

onMounted(async () => {
  await grapeStore.getConstructor();
});
</script>

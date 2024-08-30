<template>
  <div class="_container">{{ route.params.grapeId }}</div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>

<style scoped></style>

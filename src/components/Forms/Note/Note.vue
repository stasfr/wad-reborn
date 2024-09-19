<template>
  <div>note taking form to grape with ID: {{ grapeId }}</div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

const grapeId = route.params.grapeId;
</script>

<template>
  <h2>Заметка по винограду</h2>
  <Note />
</template>

<script setup>
import Note from "@/components/Forms/Note/Note.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const grapeId = route.params.grapeId;
</script>

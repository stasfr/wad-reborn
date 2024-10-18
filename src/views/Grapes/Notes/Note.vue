<script setup lang="ts">
import Note from '@/components/Forms/Note/Note.vue'
import { useNoteStore } from '@/stores/note'

const noteStore = useNoteStore()

function getTitle() {
  if (noteStore.note.grapeName.length === 0) {
    return ''
  } else if (noteStore.note.grapeName.length === 1) {
    return 'Заметка по винограду: '
  } else {
    return 'Заметка по виноградам: '
  }
}
</script>

<template>
  <section class="space-y-2">
    <h2 class="text-xl">
      <span>{{ getTitle() }}</span>
      <span v-for="name in noteStore.note.grapeName">{{ name }}</span>
    </h2>
    <Note :grapeId="noteStore.note.grapeId[0]" />
  </section>
</template>

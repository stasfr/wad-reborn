<script setup lang="ts">
import { ref } from 'vue'
import { useNoteStore } from '@/stores/note'
import { useUserStore } from '@/stores/user'

const props = defineProps({
  grapeId: {
    type: Number,
    required: true,
  },
})

const noteStore = useNoteStore()
const userStore = useUserStore()

const title = ref()
const text = ref()

// TODO: добавить валидацию, что все не нулевое
async function saveGrapeNote() {
  const userId = await userStore.getUserId()
  const grapeId = props.grapeId

  const data = await noteStore.saveGrapeNote(
    userId,
    grapeId,
    title.value,
    text.value,
  )

  console.log(data)
}
</script>

<template>
  <form action="" class="space-y-2 last:text-center" @submit.prevent="">
    <input
      type="text"
      placeholder="Заголовок"
      class="input input-bordered w-full max-w-lg"
      v-model="title"
    />
    <textarea
      class="textarea textarea-bordered w-full max-w-lg h-48"
      placeholder="Заметка"
      v-model="text"
    ></textarea>
    <button class="btn" @click="saveGrapeNote">Сохранить</button>
  </form>
</template>

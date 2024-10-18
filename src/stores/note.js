import { defineStore } from 'pinia'
import { ref } from 'vue'
import { API } from '@/services/controller'

export const useNoteStore = defineStore('noteStore', () => {
  const note = ref({
    grapeId: [],
    grapeName: [],
    title: '',
    text: '',
  })

  function addGrapeToNotes(grapeId, grapeName) {
    note.value.grapeId.push(grapeId)
    note.value.grapeName.push(grapeName)
  }

  async function saveGrapeNote(userId, grapeId, title, text) {
    // TODO: добавить валидацию, что все не нулевое
    const data = await API.User.saveGrapeNote(userId, grapeId, title, text)
    if (data.error) return
  }

  return { note, addGrapeToNotes, saveGrapeNote }
})

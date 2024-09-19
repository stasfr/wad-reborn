import { defineStore } from "pinia";
import { ref } from "vue";
import { API } from "@/services/controller";

export const useNoteStore = defineStore("noteStore", () => {
  const note = ref({
    grapeId: [],
    grapeName: [],
    title: "",
    text: "",
  });

  function addGrapeToNotes(grapeId, grapeName) {
    note.value.grapeId.push(grapeId);
    note.value.grapeName.push(grapeName);
  }

  async function saveGrapeNote(userId, grapeId, title, text) {
    try {
      // TODO: добавить валидацию, что все не нулевое
      const data = await API.User.saveGrapeNote(userId, grapeId, title, text);
      if (data.error) throw Error(data.error);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return { note, addGrapeToNotes, saveGrapeNote };
});

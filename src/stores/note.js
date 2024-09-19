import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("noteStore", () => {
  const note = ref();

  return { note };
});

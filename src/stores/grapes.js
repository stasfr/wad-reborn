import { defineStore } from "pinia";
import { ref } from "vue";
import { API } from "@/services/controller";

export const useGrapeStore = defineStore("grapesStore", () => {
  const grapes = ref([]);

  async function getGrapes() {
    try {
      const data = await API.Grapes.getGrapes();
      if (data.error)
        throw Error(
          `\nCode: ${data.error?.code}\nMessage: ${data.error?.message}\nDetails: ${data.error?.details}\nHint: ${data.error?.hint}`
        );
      grapes.value = data.data;
    } catch (error) {
      console.log(error);
    }
  }

  return { grapes, getGrapes };
});

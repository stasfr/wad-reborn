import { defineStore } from "pinia";
import { ref } from "vue";
import { API } from "@/services/controller";

export const useGrapeStore = defineStore("grapesStore", () => {
  const grapes = ref([]);
  const grape = ref({});

  async function getGrapes() {
    try {
      const data = await API.Grapes.getGrapes();
      //TODO: отлавливаться пустой респонс (объекта нет в бд) (мб на основе data.status)
      if (data.error)
        throw Error(
          `\nCode: ${data.error?.code}\nMessage: ${data.error?.message}\nDetails: ${data.error?.details}\nHint: ${data.error?.hint}`
        );
      grapes.value = data.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function getSingleGrape(id) {
    try {
      const data = await API.Grapes.getGrape(id);
      if (data.error)
        throw Error(
          `\nCode: ${data.error?.code}\nMessage: ${data.error?.message}\nDetails: ${data.error?.details}\nHint: ${data.error?.hint}`
        );
      grape.value = data.data;
    } catch (error) {
      console.log(error);
    }
  }

  return { grapes, grape, getGrapes, getSingleGrape };
});

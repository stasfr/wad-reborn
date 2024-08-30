import { defineStore } from "pinia";
import { ref } from "vue";
import { API } from "@/services/controller";

export const useGrapeStore = defineStore("grapesStore", () => {
  const grapes = ref([]);
  const grape = ref({});
  const loading = ref(false);

  async function getGrapes() {
    try {
      loading.value = true;
      const data = await API.Grapes.getGrapes();
      //TODO: отлавливаться пустой респонс (объекта нет в бд) (мб на основе data.status)
      if (data.error)
        throw Error(
          `\nCode: ${data.error?.code}\nMessage: ${data.error?.message}\nDetails: ${data.error?.details}\nHint: ${data.error?.hint}`
        );
      grapes.value = data.data;
      loading.value = false;
    } catch (error) {
      console.log(error);
    }
  }

  async function getSingleGrape(id) {
    try {
      loading.value = true;
      const data = await API.Grapes.getGrape(id);
      if (data.error)
        throw Error(
          `\nCode: ${data.error?.code}\nMessage: ${data.error?.message}\nDetails: ${data.error?.details}\nHint: ${data.error?.hint}`
        );
      grape.value = data.data;
      loading.value = false;
    } catch (error) {
      console.log(error);
    }
  }

  return { grapes, grape, loading, getGrapes, getSingleGrape };
});

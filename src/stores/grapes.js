import { defineStore } from "pinia";
import { ref } from "vue";
import { API } from "@/services/controller";

export const useGrapeStore = defineStore("grapesStore", () => {
  const grapes = ref([]);
  const grape = ref({});
  const loading = ref(false);
  const allCount = ref(0);
  const isAllGrapesLoaded = ref(false);

  async function getAllGrapesCount() {
    try {
      const data = await API.Grapes.getAllGrapesCount();
      if (data.error)
        throw Error(
          `\nCode: ${data.error?.code}\nMessage: ${data.error?.message}\nDetails: ${data.error?.details}\nHint: ${data.error?.hint}`
        );

      allCount.value = data.count;
    } catch (error) {
      console.log(error);
    }
  }

  async function getGrapes() {
    try {
      // включаем skeleton loading
      if (grapes.value.length === 0) loading.value = true;

      // грузим общее кол-во объектов в бд
      if (allCount.value === 0) await getAllGrapesCount();

      const offset = grapes.value.length;

      const data = await API.Grapes.getGrapes(offset);

      //TODO: отлавливаться пустой респонс (объекта нет в бд) (мб на основе data.status)
      if (data.error)
        throw Error(
          `\nCode: ${data.error?.code}\nMessage: ${data.error?.message}\nDetails: ${data.error?.details}\nHint: ${data.error?.hint}`
        );

      grapes.value.push(...data.data);

      if (grapes.value.length === allCount.value) {
        isAllGrapesLoaded.value = true;
      }

      loading.value = false;
    } catch (error) {
      console.log(error);
    }
  }

  async function getSingleGrape(id) {
    try {
      loading.value = true;
      const data = await API.Grapes.getGrapeById(id);
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

  async function getGrapesByName(name) {
    try {
      loading.value = true;
      const data = await API.Grapes.getGrapesByName(name);
      console.log(data);

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

  return {
    grapes,
    grape,
    loading,
    allCount,
    isAllGrapesLoaded,
    getGrapes,
    getSingleGrape,
    getAllGrapesCount,
    getGrapesByName,
  };
});

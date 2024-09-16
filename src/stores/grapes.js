import { defineStore } from "pinia";
import { ref } from "vue";
import { API } from "@/services/controller";

export const useGrapeStore = defineStore("grapesStore", () => {
  const grapes = ref([]);
  const grape = ref({});
  const loading = ref(false);
  const allCount = ref(0);
  const isAllGrapesLoaded = ref(false);
  const favoriteGrapesOfUser = ref([]);

  async function getAllGrapesCount() {
    try {
      const data = await API.Grapes.getAllGrapesCount();
      if (data.error) throw Error(data.error);

      allCount.value = data.count;
    } catch (error) {
      console.log(error);
    }
  }

  async function getGrapes(userId = null) {
    try {
      // включаем skeleton loading
      if (grapes.value.length === 0) loading.value = true;

      // грузим все избранные винограды пользователя
      await getAllFavoriteGrapesByUserId(userId);

      // грузим общее кол-во объектов в бд
      if (allCount.value === 0) await getAllGrapesCount();

      const offset = grapes.value.length;

      const data = await API.Grapes.getGrapes(offset);

      if (data.error) throw Error(data.error);

      grapes.value.push(...data.data);

      if (grapes.value.length === allCount.value) {
        isAllGrapesLoaded.value = true;
      }

      favoriteGrapesOfUser.value.forEach((element) => {
        setGrapeFavorite(element.grape_id);
      });
      console.log(grapes.value);

      loading.value = false;
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllFavoriteGrapesByUserId(userId) {
    try {
      const data = await API.UserGrapes.getAllFavoriteGrapesByUserId(userId);
      if (data.error) throw Error(data.error);

      favoriteGrapesOfUser.value = data.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function getSingleGrape(id) {
    try {
      loading.value = true;
      const data = await API.Grapes.getGrapeById(id);
      if (data.error) throw Error(data.error);

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

      if (data.error) throw Error(data.error);

      grape.value = data.data;
      loading.value = false;
    } catch (error) {
      console.log(error);
    }
  }

  function setGrapeFavorite(grapeId) {
    grapes.value.forEach((element) => {
      if (element.id === grapeId) {
        element.isFavorite = true;
      } else {
        element.isFavorite = false;
      }
    });
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

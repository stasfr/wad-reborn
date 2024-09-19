import { defineStore } from "pinia";
import { ref } from "vue";
import { API } from "@/services/controller";

export const useGrapeStore = defineStore("grapesStore", () => {
  const grapes = ref([]);
  const constructor = ref([]);
  const loading = ref(false);
  const allCount = ref(0);
  const isAllGrapesLoaded = ref(false);
  const tasteProfileTitles = ref({
    ABV: "Крепость",
    body: "Тельность",
    sweet: "Сладость",
    acidity: "Кислотность",
    tannins: "Таннины",
  });

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
      if (grapes.value.length === 0) loading.value = true;

      if (allCount.value === 0) await getAllGrapesCount();

      const offset = grapes.value.length;
      const data = await API.Grapes.getGrapes(offset, userId);
      if (data.error) throw Error(data.error);
      grapes.value.push(...data.data);

      if (grapes.value.length === allCount.value) {
        isAllGrapesLoaded.value = true;
      }

      loading.value = false;
    } catch (error) {
      console.log(error);
    }
  }

  async function getConstructor() {
    try {
      const data = await API.Grapes.getGrapesInConstructor();
      if (data.error) throw Error(data.error);

      // TODO: сделать чек на заполненность конструктора, как в grapes
      constructor.value = [];
      constructor.value.push(...data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleGrapeFavoriteStatus(userId, grapeId, isFavorite) {
    try {
      let data = null;

      if (isFavorite === true) {
        data = await API.User.removeGrapeFromFavorite(userId, grapeId);
        grapes.value.forEach((element) => {
          if (element.id === grapeId) {
            element["Favorite"] = [];
          }
        });
      } else if (isFavorite === false) {
        data = await API.User.addGrapeToFavorite(userId, grapeId);
        if (!data.error) {
          grapes.value.forEach((element) => {
            if (element.id === grapeId) {
              element["Favorite"] = [Date.now()];
            }
          });
        }
      }

      if (data.error) throw Error(data.error);

      return true;
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleGrapeConstructorStatus(userId, grapeId, isAdded) {
    try {
      let data = null;

      if (isAdded === true) {
        data = await API.User.removeGrapeFromGrapeConstructor(userId, grapeId);
        grapes.value.forEach((element) => {
          if (element.id === grapeId) {
            element["GrapeConstructor"] = [];
          }
        });
      } else if (isAdded === false) {
        data = await API.User.addGrapeToGrapeConstructor(userId, grapeId);
        if (!data.error) {
          grapes.value.forEach((element) => {
            if (element.id === grapeId) {
              element["GrapeConstructor"] = [Date.now()];
            }
          });
        }
      }

      if (data.error) throw Error(data.error);

      return true;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    grapes,
    loading,
    allCount,
    isAllGrapesLoaded,
    constructor,
    tasteProfileTitles,
    getGrapes,
    getAllGrapesCount,
    toggleGrapeFavoriteStatus,
    toggleGrapeConstructorStatus,
    getConstructor,
  };
});

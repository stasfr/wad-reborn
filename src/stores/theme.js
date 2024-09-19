import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("themeStore", () => {
  const theme = ref(getThemeFromLocalStorage());
  const themes = ref([
    "cupcake",
    "bumblebee",
    "emerald",
    "retro",
    "valentine",
    "forest",
    "lofi",
    "pastel",
    "wireframe",
    "black",
    "autumn",
    "business",
    "coffee",
    "nord",
  ]);

  function getThemeFromLocalStorage() {
    const themePreference = localStorage.getItem("theme");

    return themePreference ? JSON.parse(themePreference) : "pastel";
  }

  function changeTheme(newTheme) {
    theme.value = newTheme;
    localStorage.setItem("theme", JSON.stringify(theme.value));
  }

  return { theme, themes, changeTheme };
});

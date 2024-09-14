import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("themeStore", () => {
  const theme = ref(getThemeFromLocalStorage());

  function getThemeFromLocalStorage() {
    const themePreference = localStorage.getItem("theme_preference");

    return themePreference ? JSON.parse(themePreference) : "dark";
  }

  function changeTheme(newTheme) {
    theme.value = newTheme;
    localStorage.setItem("theme_preference", JSON.stringify(theme.value));
  }

  return { theme, changeTheme };
});

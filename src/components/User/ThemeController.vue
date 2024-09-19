<template>
  <div class="form-control" v-for="theme in themeStore.themes">
    <label class="label cursor-pointer gap-4">
      <span class="label-text">{{ theme }}</span>
      <input
        type="radio"
        name="theme-radios"
        class="radio theme-controller"
        :value="theme"
        @click="themeStore.changeTheme(theme)"
        :checked="isChecked(theme)"
      />
    </label>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();

function isChecked(theme) {
  return theme === themeStore.theme ? true : false;
}
</script>

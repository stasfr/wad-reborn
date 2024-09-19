<template>
  <div>{{ userStore.user }}</div>
  <div>
    <ThemeController />
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { onMounted } from "vue";
import ThemeController from "@/components/User/ThemeController.vue";

const userStore = useUserStore();

onMounted(async () => {
  await userStore.getSession();
});
</script>

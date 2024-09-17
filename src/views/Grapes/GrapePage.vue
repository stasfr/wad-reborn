<template>
  <div>{{ grape }}</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { API } from "@/services/controller";
import { useUserStore } from "@/stores/user";

const route = useRoute();
const userStore = useUserStore();
const grapeId = ref(route.params.grapeId);
const grape = ref({});
const loading = ref(false);

onMounted(async () => {
  try {
    loading.value = true;

    const userId = await userStore.getUserId();
    const data = await API.Grapes.getGrapeById(grapeId.value, userId);
    if (data.error) throw Error(data.error);
    grape.value = data.data;

    loading.value = false;
  } catch (error) {
    console.log(error);
  }
});
</script>

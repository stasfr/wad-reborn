<template>
  <input
    class="grapes__search"
    type="text"
    placeholder="Поиск"
    v-model="search"
  />
</template>

<script setup>
import { ref } from "vue";
import { useGrapeStore } from "@/stores/grapes";

const search = ref();

const grapesStore = useGrapeStore();
</script>

<style scoped>
.grapes__search {
  font-size: large;
  margin: 0 auto 20px;
  text-align: center;
  border-bottom: 1px solid #500a1f;
  padding-bottom: 5px;
  width: 100%;
}

.grapes__search:focus {
  outline: none;
}
</style>

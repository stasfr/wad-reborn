<template>
  <div class="grapes__search search">
    <div class="search__nav">
      <input
        class="search__input"
        type="text"
        placeholder="Поиск"
        v-model="search"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useGrapeStore } from "@/stores/grapes";

const search = ref("");

const grapesStore = useGrapeStore();

watch(search, async () => {
  if (search === "") {
    await grapesStore.getGrapes();
  } else {
    await grapesStore.getGrapesByName(search);
  }
});
</script>

<style scoped>
.search {
  margin-bottom: 20px;
}
.search__nav {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.search__input {
  font-size: large;
  text-align: center;
  border-bottom: 1px solid #500a1f;
  padding: 5px 0;
  width: 100%;
}
.search__input:focus {
  outline: none;
}
</style>

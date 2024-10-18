<script setup lang="ts">
import { ref, watch } from 'vue'
import { useGrapeStore } from '@/stores/grapes'

const search = ref('')

const grapesStore = useGrapeStore()

watch(search, async () => {
  if (search.value === '') {
    // await grapesStore.getGrapes();
  } else {
    // await grapesStore.getGrapesByName(search);
  }
  console.log(search.value)
})
</script>

<template>
  <div class="mb-4">
    <input
      class="text-xl input w-full text-center"
      type="text"
      placeholder="Поиск"
      v-model="search"
    />
  </div>
</template>

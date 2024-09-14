<template>
  <div class="space-y-4 bg-primary card box-content p-4 w-64">
    <div class="card-title">{{ grape.name }}</div>
    <div class="text-xs">
      <span v-for="name in grape.alt_names"> {{ name }}; </span>
    </div>
    <div class="flex flex-col">
      <div
        v-for="(value, key) in grape.taste_profile"
        :data-tip="titles[key]"
        class="flex items-center gap-2"
      >
        <p class="flex-[45%]">{{ titles[key] }}</p>
        <progress
          class="progress flex-[55%]"
          :value="value * 10"
          max="100"
        ></progress>
      </div>
    </div>
    <div class="card-actions justify-center">
      <RouterLink
        :to="{
          name: 'GrapePage',
          params: {
            grapeId: grape.id,
          },
        }"
        class="btn"
        >Подробнее</RouterLink
      >
      <button class="btn">Добавить</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const titles = ref({
  ABV: "Крепость",
  body: "Тельность",
  sweet: "Сладость",
  acidity: "Кислотность",
  tannins: "Таннины",
});

const props = defineProps({
  grape: {
    type: Object,
    required: true,
  },
});
</script>

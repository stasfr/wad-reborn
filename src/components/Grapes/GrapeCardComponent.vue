<template>
  <div class="space-y-4 bg-primary card box-content p-4 w-64">
    <div class="card-title">{{ grape.name }}</div>
    <div class="text-xs">
      <span v-for="name in grape.alt_names"> {{ name }}; </span>
    </div>
    <div class="flex flex-col">
      <div
        v-for="(value, key) in grape.taste_profile"
        class="flex items-center gap-2"
      >
        <p class="flex-[45%]">{{ grapeStore.tasteProfileTitles[key] }}</p>
        <progress
          class="progress flex-[55%]"
          :value="value * 10"
          max="100"
        ></progress>
      </div>
    </div>
    <div class="menu menu-horizontal justify-center join">
      <GrapeToggleFavoriteBtn
        :grapeId="props.grape.id"
        :favorite="props.grape.Favorite"
      />

      <div class="tooltip" data-tip="Заметка">
        <div class="btn">
          <Book />
        </div>
      </div>

      <GrapeToggleConstructorBtn
        :grapeId="props.grape.id"
        :grapeConstructor="props.grape.GrapeConstructor"
      />

      <div class="tooltip" data-tip="Подробнее">
        <RouterLink
          :to="{
            name: 'GrapePage',
            params: {
              grapeId: grape.id,
            },
          }"
          class="btn"
          ><Bars
        /></RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGrapeStore } from "@/stores/grapes";
import GrapeToggleFavoriteBtn from "./GrapeToggleFavoriteBtn.vue";
import GrapeToggleConstructorBtn from "./GrapeToggleConstructorBtn.vue";
import Bars from "../Icons/Outline/Bars.vue";
import Book from "../Icons/Outline/Book.vue";

const grapeStore = useGrapeStore();

const props = defineProps({
  grape: {
    type: Object,
    required: true,
  },
});
</script>

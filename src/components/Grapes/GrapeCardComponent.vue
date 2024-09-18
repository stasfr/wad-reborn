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
      <GrapeToggleBtn
        :clickFunction="grapeStore.toggleGrapeFavoriteStatus"
        :conditionArray="props.grape.Favorite"
        :tooltipTitles="{ on: 'Удалить из избранного', off: 'В избранное' }"
        :grapeId="props.grape.id"
      >
        <StarOutline class="swap-off" />
        <StarSolid class="swap-on" />
      </GrapeToggleBtn>

      <div class="tooltip" data-tip="Заметка">
        <div class="btn">
          <Book />
        </div>
      </div>

      <GrapeToggleBtn
        :clickFunction="grapeStore.toggleGrapeConstructorStatus"
        :conditionArray="props.grape.GrapeConstructor"
        :tooltipTitles="{ on: 'Удалить из конструктора', off: 'В конструктор' }"
        :grapeId="props.grape.id"
      >
        <SwatchOutline class="swap-off" />
        <SwatchSolid class="swap-on" />
      </GrapeToggleBtn>

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
import GrapeToggleBtn from "./GrapeToggleBtn.vue";
import StarOutline from "../Icons/Outline/Star.vue";
import StarSolid from "../Icons/Solid/Star.vue";
import Bars from "../Icons/Outline/Bars.vue";
import SwatchOutline from "../Icons/Outline/Swatch.vue";
import SwatchSolid from "../Icons/Solid/Swatch.vue";
import Book from "../Icons/Outline/Book.vue";

const grapeStore = useGrapeStore();

const props = defineProps({
  grape: {
    type: Object,
    required: true,
  },
});
</script>

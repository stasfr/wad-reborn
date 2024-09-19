<template>
  <div
    class="space-y-4 bg-primary text-primary-content card box-content p-4 w-64"
  >
    <div class="card-title">{{ grape.name }}</div>
    <div class="text-xs">
      <span
        class="[&:not(:last-child)]:after:content-[';']"
        v-for="name in grape.alt_names"
      >
        {{ ` ${name}` }}
      </span>
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
      <ToggleFavoriteButton
        :grapeId="props.grape.id"
        :favorite="props.grape.Favorite"
        class="join-item"
      />

      <!-- <div class="tooltip" data-tip="Заметка">
        <RouterLink
          :to="{
            name: 'Grape Note Page',
            params: {
              grapeId: grape.id,
            },
          }"
          class="btn join-item"
          ><BookIcon
        /></RouterLink>
      </div> -->

      <ToggleConstructorButton
        :grapeId="props.grape.id"
        :grapeConstructor="props.grape.GrapeConstructor"
      />

      <div class="tooltip" data-tip="Подробнее">
        <RouterLink
          :to="{
            name: 'Grape Page',
            params: {
              grapeId: grape.id,
            },
          }"
          class="btn join-item"
          ><BarsIcon
        /></RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGrapeStore } from "@/stores/grapes";
import ToggleFavoriteButton from "@/components/Grapes/UI/ToggleFavoriteButton.vue";
import ToggleConstructorButton from "@/components/Grapes/UI/ToggleConstructorButton.vue";
import BookIcon from "@/components/Icons/Outline/Book.vue";
import BarsIcon from "@/components/Icons/Outline/Bars.vue";

const grapeStore = useGrapeStore();

const props = defineProps({
  grape: {
    type: Object,
    required: true,
  },
});
</script>

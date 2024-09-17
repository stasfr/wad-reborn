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
    <div class="menu menu-horizontal justify-center join">
      <div class="tooltip" data-tip="В избранное">
        <label class="swap btn">
          <input
            type="checkbox"
            v-model="favoriteCheckbox"
            @click="toggleGrapeFavoriteStatus"
          />
          <StarOutline class="swap-off" />
          <StarSolid class="swap-on" />
        </label>
      </div>
      <div class="tooltip" data-tip="Заметка">
        <div class="btn">
          <Book />
        </div>
      </div>
      <div class="tooltip" data-tip="В конструктор">
        <label class="swap btn">
          <input type="checkbox" />
          <SwatchOutline class="swap-off" />
          <SwatchSolid class="swap-on" />
        </label>
      </div>
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
import { ref } from "vue";
import { API } from "@/services/controller";
import { useUserStore } from "@/stores/user";
import StarOutline from "../Icons/Outline/Star.vue";
import StarSolid from "../Icons/Solid/Star.vue";
import Bars from "../Icons/Outline/Bars.vue";
import SwatchOutline from "../Icons/Outline/Swatch.vue";
import SwatchSolid from "../Icons/Solid/Swatch.vue";
import Book from "../Icons/Outline/Book.vue";

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

async function toggleGrapeFavoriteStatus() {
  const userId = useUserStore().user.id;
  const grapeId = props.grape.id;

  if (favoriteCheckbox.value === true) {
    await API.UserGrapes.removeGrapeFromFavorite(userId, grapeId);
  } else if (favoriteCheckbox.value === false) {
    await API.UserGrapes.addGrapeToFavorite(userId, grapeId);
  } else {
    throw Error("Something wrong");
  }
}

const favoriteCheckbox = ref(props.grape.Favorite.length === 1 ? true : false);
</script>

<template>
  <div :class="{ tooltip: !isFullWidth }" :data-tip="getTooltipTitle()">
    <label class="swap btn">
      <input
        type="checkbox"
        v-model="checkbox"
        @click="toggleGrapeFavoriteStatus"
        :disabled="isDisabled"
      />
      <StarOutline class="swap-off" />
      <StarSolid class="swap-on" />
      <span v-if="isFullWidth" class="ml-10">{{ getTooltipTitle() }}</span>
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useGrapeStore } from "@/stores/grapes";
import StarOutline from "@/components/Icons/Outline/Star.vue";
import StarSolid from "@/components/Icons/Solid/Star.vue";

const userStore = useUserStore();
const grapeStore = useGrapeStore();

const props = defineProps({
  favorite: {
    type: Array,
    required: true,
  },
  grapeId: {
    type: Number,
    required: true,
  },
  isFullWidth: {
    type: Boolean,
    default: false,
  },
});

const isDisabled = ref(false);
const checkbox = ref(props.favorite?.length === 1 ? true : false);

async function toggleGrapeFavoriteStatus() {
  const isFavorite = checkbox.value;
  const userId = ref(await userStore.getUserId());

  isDisabled.value = true;

  const favoriteToggleResult = await grapeStore.toggleGrapeFavoriteStatus(
    userId.value,
    props.grapeId,
    isFavorite
  );

  if (!favoriteToggleResult) {
    checkbox.value = !checkbox.value;
  }

  isDisabled.value = false;
}

function getTooltipTitle() {
  return checkbox.value ? "Удалить из избранного" : "В избранное";
}
</script>

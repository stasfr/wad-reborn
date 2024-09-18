<template>
  <div class="tooltip" :data-tip="getTooltipTitle()">
    <label class="swap btn">
      <input
        type="checkbox"
        v-model="checkbox"
        @click="toggleGrapeConditionStatus"
        :disabled="isDisabled"
      />
      <slot />
    </label>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const props = defineProps({
  clickFunction: {
    type: Function,
    required: true,
  },
  conditionArray: {
    type: Array,
    required: true,
  },
  tooltipTitles: {
    type: Object,
    required: true,
  },
  grapeId: {
    type: Number,
    required: true,
  },
});

const isDisabled = ref(false);
const checkbox = ref(props.conditionArray.length === 1 ? true : false);
const userId = ref(userStore.getUserId());

async function toggleGrapeConditionStatus() {
  const isCondition = checkbox.value;

  isDisabled.value = true;

  const conditionToggleResult = await props.clickFunction(
    userId.value,
    props.grapeId,
    isCondition
  );

  if (!conditionToggleResult) {
    checkbox.value = !checkbox.value;
  }

  isDisabled.value = false;
}

function getTooltipTitle() {
  return checkbox.value ? props.tooltipTitles.on : props.tooltipTitles.off;
}
</script>

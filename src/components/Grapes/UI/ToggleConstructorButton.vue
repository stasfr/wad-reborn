<script setup lang="ts">
import { ref } from 'vue'
import useUser from '@/composables/useUser'
import { useGrapeStore } from '@/stores/grapes'
import SwatchOutline from '@/components/Icons/Outline/Swatch.vue'
import SwatchSolid from '@/components/Icons/Solid/Swatch.vue'

const userStore = useUser()
const grapeStore = useGrapeStore()

const props = defineProps({
  grapeConstructor: {
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
})

const isDisabled = ref(false)
const checkbox = ref(props.grapeConstructor?.length === 1 ? true : false)

async function toggleGrapeConstructorStatus() {
  const isAdded = checkbox.value
  const userId = ref(await userStore.getUserId())

  isDisabled.value = true

  const constructorToggleResult = await grapeStore.toggleGrapeConstructorStatus(
    userId.value,
    props.grapeId,
    isAdded,
  )

  if (!constructorToggleResult) {
    checkbox.value = !checkbox.value
  }

  isDisabled.value = false
}

function getTooltipTitle() {
  return checkbox.value ? 'Удалить из конструктора' : 'В конструктор'
}
</script>

<template>
  <div :class="{ tooltip: !isFullWidth }" :data-tip="getTooltipTitle()">
    <label class="swap btn join-item">
      <input
        type="checkbox"
        v-model="checkbox"
        @click="toggleGrapeConstructorStatus"
        :disabled="isDisabled"
      />
      <SwatchOutline class="swap-off" />
      <SwatchSolid class="swap-on" />
      <span v-if="isFullWidth" class="ml-10">{{ getTooltipTitle() }}</span>
    </label>
  </div>
</template>

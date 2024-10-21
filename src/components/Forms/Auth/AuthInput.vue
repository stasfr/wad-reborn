<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  type: string
  placeholder: string
  icon: string
}

const props = defineProps<Props>()

const model = defineModel()
</script>

<template>
  <label class="input input-bordered flex items-center gap-2">
    <input
      :type="props.type"
      class="grow"
      :placeholder="props.placeholder"
      v-model="model"
    />
    <Icon class="size-6" :icon="props.icon" />
  </label>
</template>

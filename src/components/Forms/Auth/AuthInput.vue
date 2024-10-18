<template>
  <label class="input input-bordered flex items-center gap-2">
    <input
      :type="type"
      class="grow"
      :placeholder="placeholder"
      v-model="model"
    />
    <component :is="icon"></component>
  </label>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  icon: { type: Object },
})

const model = defineModel()
</script>

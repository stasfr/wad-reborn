<script setup lang="ts">
import { type Grape } from '@/types/Grape'

interface Props {
  grape: Grape
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <p>{{ props.grape }}</p>
  </div>
</template>

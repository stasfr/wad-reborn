<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { type Grape } from '@/types/Grape'

interface Props {
  grape: Grape
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="space-y-4 bg-primary text-primary-content card box-content p-4 w-64"
  >
    <div class="card-title">{{ props.grape.name }}</div>
    <div class="text-xs">
      <!-- TODO: изменить index на нормальный key -->
      <span
        class="[&:not(:last-child)]:after:content-[';']"
        v-for="(name, index) in props.grape.alt_names"
        :key="index"
      >
        {{ ` ${name}` }}
      </span>
    </div>
    <div class="menu menu-horizontal justify-center join">
      <div class="tooltip" data-tip="Заметка">
        <RouterLink to="/grapes/new_note" class="btn join-item">
          <Icon icon="iconoir:book" class="size-5" />
        </RouterLink>
      </div>

      <div class="tooltip" data-tip="Подробнее">
        <RouterLink
          :to="{
            name: 'Grape Page',
            params: {
              grapeId: props.grape.id,
            },
          }"
          class="btn join-item"
        >
          <Icon icon="heroicons:bars-3-20-solid" class="size-5" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

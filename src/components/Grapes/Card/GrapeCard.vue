<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { type Grape } from '@/types/Grape'

interface Props {
  grape: Grape
}

const props = defineProps<Props>()

const favoriteButton = ref(false)
const favoriteButtonIcon = computed(() =>
  favoriteButton.value ? 'iconoir:star-solid' : 'iconoir:star',
)

const constructorButton = ref(false)
const constructorButtonIcon = computed(() =>
  constructorButton.value ? 'heroicons:swatch-solid' : 'heroicons:swatch',
)
</script>

<template>
  <Card>
    <template #header> </template>

    <template #title> {{ props.grape.name }} </template>

    <template #subtitle>
      <span
        class="[&:not(:last-child)]:after:content-[';']"
        v-for="alt_name in props.grape.alt_names"
        :key="alt_name"
      >
        {{ ` ${alt_name}` }}
      </span>
    </template>

    <template #content>
      <p v-for="flavor in props.grape.flavors" :key="flavor">
        {{ flavor }}
      </p>
    </template>

    <template #footer>
      <ButtonGroup>
        <Button size="large" @click="favoriteButton = !favoriteButton">
          <Icon class="size-6" :icon="favoriteButtonIcon" />
        </Button>

        <Button size="large">
          <Icon class="size-6" icon="iconoir:notes" />
        </Button>

        <Button size="large" @click="constructorButton = !constructorButton">
          <Icon class="size-6" :icon="constructorButtonIcon" />
        </Button>

        <Button size="large">
          <Icon class="size-6" icon="tabler:dots" />
        </Button>
      </ButtonGroup>
    </template>
  </Card>
</template>

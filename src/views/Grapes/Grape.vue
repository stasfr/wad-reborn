<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { API } from '@/services/controller'
import useUser from '@/composables/useUser'
import { useGrapeStore } from '@/stores/grapes'
import ToggleFavoriteButton from '@/components/Grapes/UI/ToggleFavoriteButton.vue'
import ToggleConstructorButton from '@/components/Grapes/UI/ToggleConstructorButton.vue'

const route = useRoute()
const userStore = useUser()
const grapeStore = useGrapeStore()
const grapeId = ref(route.params.grapeId)
const grape = ref({})
const loading = ref(false)

onMounted(async () => {
  try {
    loading.value = true

    const userId = await userStore.getUserId()
    const data = await API.Grapes.getGrapeById(grapeId.value, userId)
    if (data.error) throw Error(data.error)
    grape.value = data.data[0]

    loading.value = false
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <section class="space-y-8 flex flex-col" v-if="!loading">
    <!-- title (name) -->
    <h2 class="text-xl font-bold">{{ grape.name }}</h2>
    <!-- alternative names -->
    <div v-if="grape.alt_names?.length > 0">
      <span
        class="[&:not(:last-child)]:after:content-[';']"
        v-for="alt_name in grape.alt_names"
      >
        {{ ` ${alt_name}` }}
      </span>
    </div>
    <!-- btns -->
    <div class="flex flex-col items-start gap-2">
      <ToggleFavoriteButton
        :grapeId="grape.id"
        :favorite="grape.Favorite"
        :isFullWidth="true"
      />
      <ToggleConstructorButton
        :grapeId="grape.id"
        :grapeConstructor="grape.GrapeConstructor"
        :isFullWidth="true"
      />
    </div>
    <!-- taste profile -->
    <div class="flex flex-col">
      <div v-for="(value, key) in grape.taste_profile" class="flex flex-col">
        <p>{{ grapeStore.tasteProfileTitles[key] }}</p>
        <progress class="progress" :value="value * 10" max="100"></progress>
      </div>
    </div>
    <!-- flavors -->
    <div class="flex justify-between flex-wrap">
      <div v-for="flavor in grape.flavors">{{ flavor }}</div>
    </div>
    <!-- description -->
    <div>
      {{ grape.description ? grape.description : 'Not info' }}
    </div>
    <!-- data -->
    <div>
      <div>{{ grape.temperature }}</div>
      <div>{{ grape.decant }}</div>
      <div>{{ grape.price }}</div>
      <div>{{ grape.storage_potential }}</div>
      <div>{{ grape.GlassType?.name }}</div>
    </div>
    <!-- grape wine type -->
    <div>
      <div
        v-for="grapeWineType in grape.GrapeWineType"
        class="flex justify-between"
      >
        <div>{{ grapeWineType.WineType.name }}</div>
        <div>{{ grapeWineType.WineType.abbreviation }}</div>
      </div>
    </div>
    <!-- rarity -->
    <div>
      {{ grape.Rarity?.name }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGrapeStore } from '@/stores/grapes'
import useUser from '@/composables/useUser'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import GrapeCard from '@/components/Grapes/Card/GrapeCard.vue'
import GrapeCardLoading from '@/components/Grapes/Card/Loading.vue'
import GrapeSearch from '@/components/Grapes/GrapeSearch.vue'

const userStore = useUser()
const grapesStore = useGrapeStore()
const observer = ref(null) // Ссылка на элемент для наблюдения
const observerInstance = ref(null) // Ссылка на экземпляр IntersectionObserver

onMounted(async () => {
  if (grapesStore.grapes.length === 0) {
    const userSession = await userStore.getSession()
    let userId = null

    if (userSession) {
      userId = userStore.user.id
    }

    await grapesStore.getGrapes(userId)
    await grapesStore.getAllGrapesCount()
  }

  // Инициализация IntersectionObserver
  observerInstance.value = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  })

  if (observer.value) {
    observerInstance.value.observe(observer.value)
  }
})

onBeforeUnmount(() => {
  // Отмена наблюдения при уничтожении компонента
  if (observerInstance.value && observer.value) {
    observerInstance.value.unobserve(observer.value)
  }
})

function handleIntersect(entries) {
  const entry = entries[0]
  if (
    entry.isIntersecting &&
    !grapesStore.loading &&
    !grapesStore.isAllGrapesLoaded
  ) {
    grapesStore.getGrapes()
  }
}
</script>

<template>
  <section>
    <GrapeSearch />
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <GrapeCardLoading v-if="grapesStore.loading" />
      <GrapeCard v-else v-for="grape in grapesStore.grapes" :grape="grape" />
    </div>
    <!-- Скрытый элемент для infinite scroll -->
    <!-- TODO: сделать спиннер при загрузке, иначе бзеру неочевидно, что что-то грузится -->
    <div v-if="!grapesStore.isAllGrapesLoaded" ref="observer"></div>
  </section>
</template>

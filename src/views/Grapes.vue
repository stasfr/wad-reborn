<template>
  <div class="page__grapes grapes">
    <div class="grapes__container _container">
      <div class="grapes__body">
        <GrapeCardComponent
          v-for="grape in grapesStore.grapes"
          :grape="grape"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGrapeStore } from "@/stores/grapes";
import { onMounted } from "vue";
import GrapeCardComponent from "@/components/Grapes/GrapeCardComponent.vue";

const grapesStore = useGrapeStore();
onMounted(async () => {
  await grapesStore.getGrapes();
});
</script>

<style scoped>
.grapes__body {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 40px;
  justify-items: center;
}
@media (max-width: 1090px) {
  .grapes__body {
    grid-template-columns: repeat(2, auto);
  }
}
@media (max-width: 730px) {
  .grapes__body {
    grid-template-columns: repeat(1, auto);
  }
}
</style>

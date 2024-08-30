<template>
  <div class="page__grapes grapes">
    <div class="grapes__container _container">
      <GrapeSearch />
      <div class="grapes__body">
        <GrapeCardLoadingComponent v-if="grapesStore.loading" />
        <GrapeCardComponent
          v-else
          v-for="grape in grapesStore.grapes"
          :grape="grape"
        />
      </div>
      <button
        class="grapes__load-btn"
        @click="pushNewGrapes"
        v-if="!grapesStore.isAllGrapesLoaded"
      >
        Загрузить
      </button>
    </div>
  </div>
</template>

<script setup>
import { useGrapeStore } from "@/stores/grapes";
import { onMounted } from "vue";
import GrapeCardComponent from "@/components/Grapes/GrapeCardComponent.vue";
import GrapeCardLoadingComponent from "@/components/Grapes/GrapeCardLoadingComponent.vue";
import GrapeSearch from "@/components/Grapes/GrapeSearch.vue";

const grapesStore = useGrapeStore();
onMounted(async () => {
  if (grapesStore.grapes.length === 0) {
    await grapesStore.getGrapes();
    await grapesStore.getAllGrapesCount();
  }
});

async function pushNewGrapes() {
  await grapesStore.getGrapes();
}
</script>

<style scoped>
.grapes__container {
  position: relative;
  display: flex;
  flex-direction: column;
}
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
.grapes__load-btn {
  font-size: large;
  background-color: #500f1a;
  color: #ffffff;
  padding: 15px 20px;
  border-radius: 10px;
  margin: 50px auto 0;
  transition: all ease 0.5s;
  border: 1px solid #500f1a;
}
.grapes__load-btn:hover {
  background-color: #ffffff;
  color: #500f1a;
}
</style>

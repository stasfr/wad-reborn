<template>
  <section class="space-y-8">
    <!-- title (name) -->
    <h2>{{ grape.name }}</h2>
    <!-- alternative names -->
    <div>
      <span v-for="alt_name in grape.alt_names">{{ alt_name }}; </span>
    </div>
    <!-- btns -->
    <div>
      <div>Favorite: {{ grape.Favorite?.length === 1 ? "yes" : "no" }}</div>
      <div>
        Constructor: {{ grape.GrapeConstructor?.length === 1 ? "yes" : "no" }}
      </div>
    </div>
    <!-- taste profile -->
    <div class="flex flex-col">
      <div
        v-for="(value, key) in grape.taste_profile"
        :data-tip="titles[key]"
        class="flex flex-col"
      >
        <p>{{ titles[key] }}</p>
        <progress class="progress" :value="value * 10" max="100"></progress>
      </div>
    </div>
    <!-- flavors -->
    <div class="flex justify-between">
      <div v-for="flavor in grape.flavors">{{ flavor }}</div>
    </div>
    <!-- description -->
    <div>
      {{ grape.description ? grape.description : "Not info" }}
    </div>
    <!-- data -->
    <div>
      <div>{{ grape.temperature }}</div>
      <div>{{ grape.decant }}</div>
      <div>{{ grape.price }}</div>
      <div>{{ grape.storage_potential }}</div>
      <div>{{ grape.GlassType.name }}</div>
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
      {{ grape.Rarity.name }}
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { API } from "@/services/controller";
import { useUserStore } from "@/stores/user";

const route = useRoute();
const userStore = useUserStore();
const grapeId = ref(route.params.grapeId);
const grape = ref({});
const loading = ref(false);
const titles = ref({
  ABV: "Крепость",
  body: "Тельность",
  sweet: "Сладость",
  acidity: "Кислотность",
  tannins: "Таннины",
});

onMounted(async () => {
  try {
    loading.value = true;

    const userId = await userStore.getUserId();
    const data = await API.Grapes.getGrapeById(grapeId.value, userId);
    if (data.error) throw Error(data.error);
    grape.value = data.data[0];

    loading.value = false;
  } catch (error) {
    console.log(error);
  }
});
</script>

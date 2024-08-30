<template>
  <div
    class="grape-card"
    @mouseover="hoverEffect = true"
    @mouseleave="hoverEffect = false"
  >
    <div class="grape-card__title">{{ grape.name }}</div>
    <div class="grape-card__alt-names alt-names">
      <span class="alt-names__item" v-for="name in grape.alt_names">
        {{ name }}
      </span>
    </div>
    <div class="grape-card__taste-profile taste-profile">
      <GrapeCardLineComponent
        v-for="(value, key) in grape.taste_profile"
        :tasteProfileData="{ value, key }"
        :hoverEffect="hoverEffect"
      />
    </div>
    <!-- <div class="grape-card__flavors flavors">
      <div class="flavors__flavor" v-for="flavor in grape.Flavors">
        {{ flavor }}
      </div>
    </div>
    <div class="grape-card__handlings handlings">
      <div class="handlings__serve">
        Температура подачи: <br />{{ grape.Handling.serve }}
      </div>
      <div class="handlings__glass-type">
        Бокал: {{ grape.Handling.glass_type }}
      </div>
      <div class="handlings__decant">
        Время декантации: {{ grape.Handling.decant }}
      </div>
      <div class="handlings__cellar">
        Потенциал хранения: {{ grape.Handling.cellar }}
      </div>
    </div> -->
    <div class="grape-card__btn" :class="{ isHover: hoverEffect }">
      <RouterLink
        :to="{
          name: 'GrapePage',
          params: {
            grapeId: grape.id,
          },
        }"
        >Подробнее</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import GrapeCardLineComponent from "./GrapeCardLineComponent.vue";

const props = defineProps({
  grape: {
    type: Object,
    required: true,
  },
});

const hoverEffect = ref(false);
</script>

<style scoped>
.grape-card {
  border-radius: 8px;
  border: 1px solid #500a1f;
  padding: 20px 15px;
  transition: all ease 0.5s;
  color: inherit;
  width: 290px;
}
.grape-card > *:not(:last-child) {
  margin-bottom: 10px;
}
.grape-card:hover {
  border-radius: 16px;
  background-color: #500a1f;
  color: #ffffff;
}
.grape-card__title {
  font-size: large;
  font-weight: 700;
}
.grape-card__alt-names {
  font-size: small;
}
.alt-names__item:not(:last-child)::after {
  content: "; ";
}
.grape-card__btn {
  text-align: center;
  margin-top: 20px;
}
.grape-card__btn a {
  background-color: #500a1f;
  color: #ffffff;
  border-radius: 5px;
  padding: 5px 20px;
  font-size: smaller;
}
.isHover a {
  background-color: #ffffff;
  color: #500a1f;
}
</style>

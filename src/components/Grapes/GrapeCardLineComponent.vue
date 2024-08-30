<template>
  <div
    class="taste-profile__item item-taste-profile"
    :class="{ isLineHover: hoverEffect }"
  >
    <div
      class="item-taste-profile__line"
      :style="{ width: tasteProfileData * 20 + '%' }"
      :class="{ isLineHover: hoverEffect }"
    ></div>
    <div class="item-taste-profile__number">
      {{ tasteProfileData }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  tasteProfileData: {
    type: Number,
    required: true,
  },
  hoverEffect: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.item-taste-profile {
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #500a1f;
  font-size: small;
  height: 10px;
  transition: all ease 0.8s;
}
.item-taste-profile:not(:last-child) {
  margin-bottom: 3px;
}
.item-taste-profile__line {
  position: absolute;
  height: 100%;
  background-color: #500a1f;
  border-radius: 4px;
  left: 0;
  top: 0;
}
.item-taste-profile__number {
  position: relative;
  z-index: 50;
  margin-left: 10px;
  display: none;
}
.isLineHover {
  border: 1px solid #ffffff;
}
.isLineHover > .item-taste-profile__line {
  background-color: #ffffff;
}
</style>

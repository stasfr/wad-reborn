<template>
  <div class="taste-profile__item item-taste-profile">
    <div class="item-taste-profile__title">
      {{ titles[tasteProfileData.key] }}
    </div>
    <div class="item-taste-profile__line" :class="{ isLineHover: hoverEffect }">
      <div
        class="item-taste-profile__line-part"
        :style="{ width: tasteProfileData.value * 20 + '%' }"
        :class="{ isLineHover: hoverEffect }"
      ></div>
      <div
        class="item-taste-profile__number"
        :style="{ width: tasteProfileData.value * 20 + '%' }"
      >
        {{ tasteProfileData.value }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tasteProfileData: {
    type: Object,
    required: true,
  },
  hoverEffect: {
    type: Boolean,
    required: true,
  },
});

const titles = {
  ABV: "Крепость",
  body: "Тельность",
  sweet: "Сладость",
  acidity: "Кислотность",
  tannins: "Таннины",
};
</script>

<style scoped>
.item-taste-profile {
  display: flex;
}
.item-taste-profile__title {
  flex: 100%;
}
.item-taste-profile__line {
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #500a1f;
  font-size: small;
  transition: all ease 0.8s;
}
.item-taste-profile:not(:last-child) {
  margin-bottom: 3px;
}
.item-taste-profile__line-part {
  position: absolute;
  height: 100%;
  background-color: #500a1f;
  border-radius: 8px;
  left: 0;
  top: 0;
}
.item-taste-profile__number {
  position: relative;
  color: #ffffff;
  text-align: end;
  padding-right: 10px;
}
.isLineHover {
  border: 1px solid #ffffff;
}
.isLineHover > .item-taste-profile__line-part {
  background-color: #ffffff;
}
.isLineHover > .item-taste-profile__number {
  color: #500a1f;
}
</style>

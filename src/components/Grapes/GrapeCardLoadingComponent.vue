<template>
  <div class="grape-card__loading">
    <div class="grape-card__loading-text"></div>
    <div class="grape-card__loading-sub-text"></div>
    <div class="grape-card__loading-lines"></div>
    <div class="grape-card__loading-btn"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.grape-card__loading {
  border-radius: 8px;
  padding: 20px 15px;
  width: 290px;
  height: 234px;
  animation: skeleton-loading 2s linear infinite alternate;
  color: #ffffff;
  position: relative;
}

.grape-card__loading > *:not(:last-child) {
  margin-bottom: 10px;
}

.grape-card__loading > * {
  position: relative;
  border-radius: 8px;
  z-index: 50;
  animation: skeleton-loading-text 2s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: rgba(255, 255, 255, 1);
  }

  100% {
    background-color: rgba(80, 10, 31, 0.3);
  }
}

.grape-card__loading-text {
  width: 50%;
  height: 18px;
}

.grape-card__loading-sub-text {
  width: 80%;
  height: 26px;
}

.grape-card__loading-lines {
  width: 100%;
  height: 92px;
}

.grape-card__loading-btn {
  width: 50%;
  height: 26px;
  margin: 0 auto;
}

@keyframes skeleton-loading-text {
  0% {
    background-color: rgba(255, 255, 255, 1);
  }

  100% {
    background-color: rgba(80, 10, 31, 0.3);
  }
}
</style>

<template>
  <form action="">
    <input
      type="text"
      placeholder="Заголовок"
      class="input input-bordered w-full max-w-xs"
      v-model="title"
    />
    <p>{{ title }}</p>
  </form>
</template>

<script setup>
import { ref } from "vue";

const title = ref();
</script>

<template>
  <form class="flex flex-col space-y-4" @submit.prevent="">
    <h2 class="text-center">Вход</h2>
    <label class="input input-bordered flex items-center gap-2">
      <input type="email" class="grow" placeholder="email" v-model="email" />
      <Email />
    </label>
    <label class="input input-bordered flex items-center gap-2">
      <input
        type="password"
        class="grow"
        placeholder="password"
        v-model="password"
      />
      <Password />
    </label>

    <button class="btn" @click="signInWithPassword">Войти</button>
    <button class="btn" @click="signUp">Регистрация</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import Email from "../Icons/Email.vue";
import Password from "../Icons/Password.vue";

const email = ref("stas240600@yandex.ru");
const password = ref("password");

const userStore = useUserStore();

async function signUp() {
  await userStore.signUp({
    email: email.value,
    password: password.value,
  });
}

async function signInWithPassword() {
  await userStore.signInWithPassword({
    email: email.value,
    password: password.value,
  });
}
</script>

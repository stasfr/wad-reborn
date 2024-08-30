<template>
  <form action="" class="login__form">
    <input
      type="email"
      class="login__input"
      placeholder="email"
      v-model="email"
    />
    <input
      type="password"
      class="login__input"
      placeholder="password"
      v-model="password"
    />
    <button class="login__btn">Проверить пользователя</button>
    <button class="login__btn">Войти</button>
    <button class="login__btn">Регистрация</button>
    <button class="login__btn">Выйти</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const email = ref("stas240600@yandex.ru");
const password = ref("password");

const userStore = useUserStore();

async function handleSubmit() {
  await userStore.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  // await userStore.signUp({
  //   email: email.value,
  //   password: password.value,
  // });
}
</script>

<style scoped>
.login__form {
  display: flex;
  flex-direction: column;
  width: 290px;
  margin: 0 auto;
}
.login__form > * {
  font-size: large;
}
.login__form > *:not(:last-child) {
  margin-bottom: 20px;
}
.login__input {
  padding: 20px 10px;
  border: 1px solid #500a1f;
  border-radius: 10px;
}
.login__btn {
  padding: 20px 10px;
  border: 1px solid #500a1f;
  border-radius: 10px;
  background-color: #ffffff;
  transition: all ease 0.5s;
}
.login__btn:hover {
  background-color: #500a1f;
  color: #ffffff;
}
</style>

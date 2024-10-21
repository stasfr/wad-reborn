<script setup lang="ts">
const email = ref('stas240600@yandex.ru')
const password = ref('password')

const userStore = useUser()

async function signInWithPassword() {
  await userStore.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  window.location.reload()
}
</script>

<template>
  <form class="flex flex-col space-y-4" @submit.prevent="">
    <h2 class="text-center">Вход</h2>

    <AuthInput
      type="email"
      placeholder="email"
      v-model="email"
      icon="prime:user"
    />
    <AuthInput
      type="password"
      placeholder="пароль"
      v-model="password"
      icon="prime:key"
    />

    <button class="btn" @click="signInWithPassword">Войти</button>
  </form>
</template>

<template>
  <form class="flex flex-col space-y-4" @submit.prevent="">
    <h2 class="text-center">Вход</h2>

    <AuthInput
      type="email"
      placeholder="email"
      v-model="email"
      :icon="EmailIcon"
    />
    <AuthInput
      type="password"
      placeholder="пароль"
      v-model="password"
      :icon="PasswordIcon"
    />

    <button class="btn" @click="signInWithPassword">Войти</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import EmailIcon from '@/components/Icons/Email.vue'
import PasswordIcon from '@/components/Icons/Password.vue'
import AuthInput from '@/components/Forms/Auth/AuthInput.vue'

const email = ref('stas240600@yandex.ru')
const password = ref('password')

const userStore = useUserStore()

async function signInWithPassword() {
  await userStore.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  window.location.reload()
}
</script>

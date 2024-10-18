<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import EmailIcon from '@/components/Icons/Email.vue'
import PasswordIcon from '@/components/Icons/Password.vue'
import AuthInput from '@/components/Forms/Auth/AuthInput.vue'

const email = ref('stas240600@yandex.ru')
const password = ref('password')
const passwordRepeat = ref('passwordd')
const router = useRouter()

const userStore = useUserStore()

async function signUp() {
  if (password.value === passwordRepeat.value) {
    await userStore.signUp({
      email: email.value,
      password: password.value,
    })
    router.push({ path: '/login' })
  } else {
    //TODO: throw modal with error
    console.log('Пароли не совпадают')
  }
}
</script>

<template>
  <form class="flex flex-col space-y-4" @submit.prevent="">
    <h2 class="text-center">Регистрация</h2>

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
    <AuthInput
      type="password"
      placeholder="пароль повторно"
      v-model="passwordRepeat"
      :icon="PasswordIcon"
    />

    <button class="btn" @click="signUp">Регистрация</button>
  </form>
</template>

<script setup lang="ts">
const email = ref('stas240600@yandex.ru')
const password = ref('password')
const passwordRepeat = ref('passwordd')
const router = useRouter()

const userStore = useUser()

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
      icon="prime:user"
    />
    <AuthInput
      type="password"
      placeholder="пароль"
      v-model="password"
      icon="prime:key"
    />
    <AuthInput
      type="password"
      placeholder="пароль повторно"
      v-model="passwordRepeat"
      icon="prime:key"
    />

    <button class="btn" @click="signUp">Регистрация</button>
  </form>
</template>

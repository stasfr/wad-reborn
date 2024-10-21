<script setup lang="ts">
import { Icon } from '@iconify/vue'

const registerData = ref({
  email: 'stas240600@yandex.ru',
  password: 'password',
  passwordRepeat: 'password',
})

const router = useRouter()

const userStore = useUser()

async function signUp() {
  // TODO: более комплексная валидация
  if (registerData.value.password === registerData.value.passwordRepeat) {
    await userStore.signUp({
      email: registerData.value.email,
      password: registerData.value.password,
    })
    router.push({ path: '/user/login' })
  } else {
    //TODO: throw toast
    console.log('Пароли не совпадают')
  }
}

function resetForm() {
  registerData.value = {
    email: '',
    password: '',
    passwordRepeat: '',
  }
}
</script>

<template>
  <Card>
    <template #title>
      <div class="flex justify-between mb-4 items-center">
        <h2>Регистрация</h2>
        <Button @click="resetForm" severity="secondary" link>
          <template #icon>
            <Icon class="size-5" icon="ri:reset-left-line" />
          </template>
        </Button>
      </div>
    </template>

    <template #content>
      <div class="flex flex-col gap-4 mb-4">
        <FloatLabel variant="on">
          <InputText
            id="email"
            type="text"
            v-model="registerData.email"
            class="w-full"
          />
          <label for="email">Email</label>
        </FloatLabel>

        <FloatLabel variant="on">
          <Password
            v-model="registerData.password"
            inputId="password"
            :feedback="false"
            toggleMask
          />
          <label for="password">Пароль</label>
        </FloatLabel>

        <FloatLabel variant="on">
          <Password
            v-model="registerData.passwordRepeat"
            inputId="passwordRepeat"
            :feedback="false"
            toggleMask
          />
          <label for="passwordRepeat">Пароль повторно</label>
        </FloatLabel>
      </div>
    </template>

    <template #footer>
      <div class="flex justify-end">
        <Button class="" label="Регистрация" @click="signUp" />
      </div>
    </template>
  </Card>
</template>

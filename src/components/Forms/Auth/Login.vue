<script setup lang="ts">
import { Icon } from '@iconify/vue'

const loginData = ref({
  email: 'stas240600@yandex.ru',
  password: 'password',
})

const userStore = useUser()

async function signInWithPassword() {
  // TODO: более комплексная валидация
  // TODO: блок try catch
  await userStore.signInWithPassword({
    email: loginData.value.email,
    password: loginData.value.password,
  })
  window.location.reload()
}

function resetForm() {
  loginData.value = {
    email: '',
    password: '',
  }
}
</script>

<template>
  <Card>
    <template #title>
      <div class="flex justify-between mb-4 items-center">
        <h2>Вход</h2>
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
            v-model="loginData.email"
            class="w-full"
          />
          <label for="email">Email</label>
        </FloatLabel>

        <FloatLabel variant="on">
          <Password
            v-model="loginData.password"
            inputId="password"
            :feedback="false"
            toggleMask
          />
          <label for="password">Пароль</label>
        </FloatLabel>
      </div>
    </template>

    <template #footer>
      <div class="flex justify-end">
        <Button label="Войти" @click="signInWithPassword" />
      </div>
    </template>
  </Card>
</template>

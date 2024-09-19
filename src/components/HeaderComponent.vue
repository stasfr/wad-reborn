<template>
  <header class="absolute w-full left-0 top-0 z-50 border-b-2 border-neutral">
    <div
      class="flex min-h-16 items-center justify-between max-w-screen-xl mx-auto px-4"
    >
      <RouterLink to="/"> WineAndDices </RouterLink>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="avatar rounded-full placeholder">
          <div class="bg-neutral text-neutral-content w-12 rounded-full">
            <!-- TODO: при входе/выходе вылетает ошибка: Cannot read properties of undefined (reading 'charAt')  -->
            <span>{{ user ? user.email?.charAt(0).toUpperCase() : "U" }}</span>
          </div>
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu z-50 rounded bg-neutral text-neutral-content mt-4"
        >
          <li><RouterLink to="/grapes">Виноград</RouterLink></li>
          <li><RouterLink to="/grapes/constructor">Конструктор</RouterLink></li>
          <li><RouterLink to="/grapes/notes">Заметки</RouterLink></li>
          <div class="divider divider-accent"></div>
          <li><RouterLink to="/dices">Кубы</RouterLink></li>
          <div class="divider divider-accent"></div>
          <li v-if="!userStore.user">
            <RouterLink to="/login">Войти</RouterLink>
          </li>
          <li v-if="!userStore.user">
            <RouterLink to="/register">Регистрация</RouterLink>
          </li>
          <li v-if="userStore.user">
            <RouterLink to="/profile">Аккаунт</RouterLink>
          </li>
          <li v-if="userStore.user">
            <button @click="signOut">Выйти</button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { onMounted, ref } from "vue";

const user = ref({});
const userStore = useUserStore();

onMounted(async () => {
  user.value = await userStore.getUser();
});

async function signOut() {
  const signOut = await userStore.signOut();
  window.location.reload();
}
</script>

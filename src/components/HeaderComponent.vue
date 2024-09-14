<template>
  <header class="absolute w-full left-0 top-0 z-50">
    <div
      class="flex min-h-16 items-center justify-between box-content max-w-screen-xl mx-auto px-4"
    >
      <RouterLink to="/"> WineAndDices </RouterLink>
      <div class="dropdown dropdown-hover dropdown-end">
        <div tabindex="0" role="button" class="avatar rounded-full placeholder">
          <div class="bg-neutral text-neutral-content w-12 rounded-full">
            <!-- TODO: при входе/выходе вылетает ошибка: Cannot read properties of undefined (reading 'charAt')  -->
            <span>{{
              userStore.user
                ? userStore.user?.email.charAt(0).toUpperCase()
                : "U"
            }}</span>
          </div>
        </div>
        <ul tabindex="0" class="dropdown-content menu z-50 rounded bg-white">
          <li><RouterLink to="/profile">Аккаунт</RouterLink></li>
          <li><RouterLink to="/">Главная</RouterLink></li>
          <li><RouterLink to="/grapes">Виноград</RouterLink></li>
          <li><RouterLink to="/dices">Кубы</RouterLink></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { onMounted } from "vue";

const userStore = useUserStore();
onMounted(async () => {
  await userStore.getSession();
});
</script>

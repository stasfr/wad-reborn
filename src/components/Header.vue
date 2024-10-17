<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { onMounted, ref, watch } from "vue";
import Menubar from "primevue/menubar";
import ToggleSwitch from "primevue/toggleswitch";
import Avatar from "primevue/avatar";
import useTheme from "@/composables/useTheme";
import Popover from "primevue/popover";
import Button from "primevue/button";
import Menu from "primevue/menu";

const user = ref({});
const userStore = useUserStore();
const useThemeStore = useTheme();

const themeType = ref<boolean>(
  useThemeStore.getTheme.value === "dark" ? true : false
);

const popover = ref();
function togglePopover(event: any) {
  popover.value.toggle(event);
}

onMounted(async () => {
  user.value = await userStore.getUser();
});

watch(themeType, () => {
  useThemeStore.changeTheme();
});

async function signOut() {
  const signOut = await userStore.signOut();
  window.location.reload();
}

const items = ref([
  {
    label: "Главная",
    icon: "pi pi-home",
    to: "/",
  },
  {
    label: "Виноград",
    items: [
      {
        label: "Винограды",
        icon: "pi pi-fw pi-table",
        to: "/grapes",
      },
      {
        label: "Конструктор",
        icon: "pi pi-fw pi-table",
        to: "/grapes/constructor",
      },
      {
        label: "Заметки",
        icon: "pi pi-fw pi-table",
        to: "/grapes/notes",
      },
    ],
  },
  {
    label: "Кубы",
    items: [
      {
        label: "Кубы",
        icon: "pi pi-fw pi-table",
        to: "/dices",
      },
    ],
  },
]);

const profileMenuItems = ref([
  {
    label: "New",
    icon: "pi pi-plus",
  },
  {
    label: "Search",
    icon: "pi pi-search",
  },
]);
</script>

<template>
  <header class="absolute w-full left-0 top-0 z-50">
    <Menubar :model="items">
      <template #start>
        <RouterLink to="/" class="font-bold mr-8">
          <h1>WineAndDices</h1>
        </RouterLink>
      </template>

      <template #item="{ item, props, hasSubmenu, root }">
        <RouterLink
          v-ripple
          class="flex items-center"
          v-bind="props.action"
          :to="item.to"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <Badge
            v-if="item.badge"
            :class="{ 'ml-auto': !root, 'ml-2': root }"
            :value="item.badge"
            :severity="item.severity"
          />
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
            >{{ item.shortcut }}</span
          >
          <i
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down',
              { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root },
            ]"
          ></i>
        </RouterLink>
      </template>

      <template #end>
        <div class="flex gap-4">
          <nav class="flex items-center gap-2">
            <i class="pi pi-sun"></i>
            <ToggleSwitch v-model="themeType" />
            <i class="pi pi-moon"></i>
          </nav>
          <div>
            <Avatar
              shape="circle"
              label="U"
              size="large"
              @click="togglePopover"
            />

            <Popover ref="popover">
              <Menu> </Menu>
              <ul class="flex flex-col gap-4">
                <Button v-if="!userStore.user">
                  <RouterLink to="/login">Войти</RouterLink>
                </Button>

                <Button v-if="!userStore.user">
                  <RouterLink to="/register">Регистрация</RouterLink>
                </Button>

                <Button v-if="userStore.user">
                  <RouterLink to="/profile">Аккаунт</RouterLink>
                </Button>

                <Button v-if="userStore.user" @click="signOut"> Выйти </Button>
              </ul>
            </Popover>
          </div>
        </div>
      </template>
    </Menubar>
  </header>
</template>

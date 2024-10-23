<script setup lang="ts">
import { Icon } from '@iconify/vue'

const useThemeStore = useTheme()
const router = useRouter()

const { user, signOut, getSession } = useAuth()

const themeType = ref<boolean>(
  useThemeStore.getTheme.value === 'dark' ? true : false,
)

const menu = ref()
function toggleMenu(event: Event) {
  menu.value.toggle(event)
}

onMounted(async () => {
  await getSession()

  if (!user.value) {
    profileMenuItems.value = [
      {
        label: 'Вход',
        items: [
          {
            label: 'Войти',
            icon: 'prime:sign-in',
            command: () => router.push('/user/login'),
          },
          {
            label: 'Регистрация',
            icon: 'prime:user-plus',
            command: () => router.push('/user/register'),
          },
        ],
      },
    ]
  } else {
    profileMenuItems.value = [
      {
        label: 'Профиль',
        items: [
          {
            label: 'Аккаунт',
            icon: 'prime:user',
            command: () => router.push('/user/profile'),
          },
          {
            label: 'Выйти',
            icon: 'prime:sign-out',
            command: () => logout(),
          },
        ],
      },
    ]
  }
})

watch(themeType, () => {
  useThemeStore.changeTheme()
})

async function logout() {
  await signOut()
  window.location.reload()
}

// TODO: сделать кастомный RouterLink, чтобы to мог быть undefined
const headerMenuItems = ref([
  {
    label: 'Главная',
    icon: 'prime:home',
    command: () => router.push('/'),
  },
  {
    label: 'Wine',
    icon: 'fluent-emoji-high-contrast:grapes',
    items: [
      {
        label: 'Винограды',
        icon: 'fluent-emoji-high-contrast:grapes',
        command: () => router.push('/grapes'),
      },
      {
        label: 'Конструктор',
        icon: 'tabler:hammer',
        command: () => router.push('/grapes/constructor'),
      },
      {
        label: 'Заметки',
        icon: 'iconoir:notes',
        command: () => router.push('/grapes/notes'),
      },
    ],
  },
  {
    label: 'Dices',
    icon: 'iconoir:dice-six',
    items: [
      {
        label: 'Кубы',
        icon: 'iconoir:dice-six',
        command: () => router.push('/dices'),
      },
    ],
  },
])

const profileMenuItems = ref()
</script>

<template>
  <header class="absolute w-full left-0 top-0 z-50">
    <Menubar :model="headerMenuItems">
      <template #start>
        <RouterLink to="/" class="font-bold mr-8">
          <h1 class="md:block hidden">WineAndDices</h1>
          <h1 class="md:hidden">W&D</h1>
        </RouterLink>
      </template>

      <template #item="{ item, props, hasSubmenu, root }">
        <a class="flex items-center" v-bind="props.action">
          <Icon :icon="item.icon" class="size-5" />

          <span class="ml-2">{{ item.label }}</span>

          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
          >
            {{ item.shortcut }}
          </span>

          <span v-if="hasSubmenu">
            <Icon v-if="root" icon="prime:angle-down" class="ml-2 size-6" />
            <Icon v-else icon="prime:angle-right" class="ml-auto size-6" />
          </span>
        </a>
      </template>

      <template #end>
        <div class="flex gap-4">
          <!-- TODO: сделать на маленьких экранах в profileMenu -->
          <div class="xs:flex items-center gap-2 hidden">
            <Icon class="size-6" icon="prime:sun" />

            <ToggleSwitch v-model="themeType" />

            <Icon class="size-6" icon="prime:moon" />
          </div>

          <div>
            <Avatar
              class="cursor-pointer"
              shape="circle"
              label="U"
              size="large"
              @click="toggleMenu"
            />

            <Menu ref="menu" :model="profileMenuItems" :popup="true">
              <template #submenulabel="{ item }">
                <span class="text-primary font-bold">{{ item.label }}</span>
              </template>

              <template #item="{ item, props }">
                <a class="flex items-center" v-bind="props.action">
                  <Icon :icon="item.icon" class="size-5" />
                  <span>{{ item.label }}</span>
                </a>
              </template>
            </Menu>
          </div>
        </div>
      </template>
    </Menubar>
  </header>
</template>

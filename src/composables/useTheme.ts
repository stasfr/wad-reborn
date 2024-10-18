import { ref, computed } from 'vue'

export default function useTheme() {
  const theme = ref<string>(getThemeFromLocalStorage() || getThemePreference())

  function getThemePreference() {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark'
    }

    return 'light'
  }

  function setThemeToLocalStorage(theme: string) {
    localStorage.setItem('theme', JSON.stringify(theme))
  }

  function getThemeFromLocalStorage() {
    const themePreference = localStorage.getItem('theme')
    return themePreference ? JSON.parse(themePreference) : ''
  }

  function changeTheme() {
    removeThemeFromDOM()
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    applyThemeToDOM()
    setThemeToLocalStorage(theme.value)
  }

  function applyThemeToDOM() {
    document.documentElement.classList.add(theme.value)
  }

  function removeThemeFromDOM() {
    document.documentElement.classList.remove(theme.value)
  }

  const getTheme = computed(() => {
    return theme.value
  })

  applyThemeToDOM()

  return {
    getTheme,
    changeTheme,
  }
}

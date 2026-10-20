import { ref } from 'vue'

const isDark = ref(false)

export function useTheme() {
  const applyTheme = (dark) => {
    if (typeof document === 'undefined') return
    if (dark) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }

  const initTheme = () => {
    if (typeof window === 'undefined') return
    // Default is LIGHT MODE unless user explicitly saved 'dark'
    const saved = localStorage.getItem('theme')
    const shouldBeDark = saved === 'dark'
    isDark.value = shouldBeDark
    applyTheme(shouldBeDark)
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
    try {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    } catch (e) {
      // storage unavailable
    }
  }

  return {
    isDark,
    initTheme,
    toggleTheme,
  }
}

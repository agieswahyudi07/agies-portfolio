<script setup>
import { onMounted } from 'vue'
import { profile } from '../data/cv'
import UiIcon from './UiIcon.vue'
import { useTheme } from '../composables/useTheme'

const { isDark, initTheme, toggleTheme } = useTheme()

onMounted(() => {
  initTheme()
})

const nav = [
  { index: '01', label: 'Experience', href: '#experience' },
  { index: '02', label: 'Work', href: '#work' },
  { index: '03', label: 'Skills', href: '#skills' },
  { index: '04', label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="border-b border-line bg-canvas/90 backdrop-blur-md md:sticky md:top-0 md:z-40">
    <div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 px-6 sm:px-8 py-2.5">
      <!-- Monogram & Name -->
      <a href="#top" class="inline-flex min-h-10 items-center gap-2 font-mono text-xs font-bold tracking-tight text-ink uppercase">
        <span class="w-2 h-2 rounded-full bg-ink"></span>
        <span>{{ profile.shortName }}</span>
      </a>

      <!-- Navigation with Numbers -->
      <nav aria-label="Primary" class="order-3 flex w-full gap-5 sm:gap-6 md:order-none md:w-auto text-xs font-mono">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="nav-link py-2 flex items-center gap-1.5"
        >
          <span class="text-ink-3">{{ item.index }}.</span>
          <span class="hover:text-ink transition-colors">{{ item.label }}</span>
        </a>
      </nav>

      <!-- Action Group -->
      <div class="flex items-center gap-2 md:order-none">
        <button
          type="button"
          @click="toggleTheme"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-2 hover:border-ink hover:text-ink transition-colors"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <UiIcon :name="isDark ? 'sun' : 'moon'" :size="15" />
        </button>

        <a
          :href="profile.resumeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary text-xs h-9 px-3 gap-1.5 font-mono"
        >
          <UiIcon name="download" :size="13" />
          <span>RESUME</span>
        </a>
      </div>
    </div>
  </header>
</template>

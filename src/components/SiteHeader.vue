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
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="border-b border-line bg-canvas md:sticky md:top-0 md:z-40">
    <div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 px-6 py-2">
      <a href="#top" class="inline-flex min-h-11 items-center text-sm font-semibold tracking-tight text-ink">
        {{ profile.shortName }}
      </a>

      <nav aria-label="Primary" class="order-3 flex w-full gap-6 md:order-none md:w-auto">
        <a v-for="item in nav" :key="item.href" :href="item.href" class="nav-link">{{ item.label }}</a>
      </nav>

      <div class="flex items-center gap-2 md:order-none">
        <button
          type="button"
          @click="toggleTheme"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink-2 hover:border-ink hover:text-ink transition-colors"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <UiIcon :name="isDark ? 'sun' : 'moon'" :size="16" />
        </button>

        <a
          :href="profile.resumeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
        >
          <UiIcon name="download" />
          Resume
        </a>
      </div>
    </div>
  </header>
</template>

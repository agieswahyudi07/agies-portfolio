<script setup>
import { profile } from '../data/cv'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line">
    <div class="mx-auto max-w-5xl px-6 py-8">
      <p class="tabular font-mono text-xs text-ink-3">© {{ year }} {{ profile.name }}</p>
    </div>
  </footer>
</template>

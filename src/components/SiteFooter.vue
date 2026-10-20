<script setup>
import { profile } from '../data/cv'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line bg-canvas">
    <div class="mx-auto max-w-5xl px-6 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink-3">
      <div class="flex items-center gap-2">
        <span class="inline-block w-2 h-2 rounded-full bg-ink"></span>
        <span>AGIES WAHYUDI // {{ year }}</span>
      </div>
      <div class="flex items-center gap-4">
        <span>SOUTH TANGERANG, ID [UTC+7]</span>
        <span>•</span>
        <a href="#top" class="hover:text-ink transition-colors underline underline-offset-4">
          BACK TO TOP ↑
        </a>
      </div>
    </div>
  </footer>
</template>

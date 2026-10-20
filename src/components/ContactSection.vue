<script setup>
import { ref } from 'vue'
import { profile } from '../data/cv'
import SectionBlock from './SectionBlock.vue'
import UiIcon from './UiIcon.vue'

const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    window.location.href = `mailto:${profile.email}`
  }
}

const channels = [
  { label: 'GitHub', value: 'agieswahyudi07', url: profile.links.github, icon: 'github' },
  { label: 'LinkedIn', value: 'agieswahyudi', url: profile.links.linkedin, icon: 'linkedin' },
  { label: 'Instagram', value: '@agieswahyudi_', url: profile.links.instagram, icon: 'instagram' },
  { label: 'Resume', value: 'Google Drive', url: profile.resumeUrl, icon: 'download' },
]
</script>

<template>
  <SectionBlock id="contact" title="Contact" index="07" telemetry="DISPATCH // INITIATE TRANSMISSION">
    <!-- Inverted High-Contrast Block -->
    <div class="rounded-2xl border border-line bg-surface p-8 sm:p-12 relative overflow-hidden">
      <!-- Blueprint Watermark Annotation -->
      <span class="absolute top-4 right-4 font-mono text-[10px] text-ink-3 select-none">
        CHANNEL // DIRECT PING
      </span>

      <div class="max-w-2xl">
        <p class="font-mono text-xs uppercase tracking-widest text-ink-3 mb-3">
          // OPEN FOR PRODUCTION ROLES & COLLABORATION
        </p>
        <h3 class="text-2xl sm:text-4xl font-bold tracking-tight text-ink leading-tight">
          Have a backend challenge or system architecture to build?
        </h3>
        <p class="mt-4 text-base text-ink-2 leading-relaxed">
          I'm currently open to fullstack and backend software engineering opportunities, distributed systems challenges, and contract consulting.
        </p>
      </div>

      <!-- Giant Interactive Copy Email Box -->
      <div class="mt-8 pt-8 border-t border-line">
        <button
          type="button"
          @click="copyEmail"
          class="group w-full text-left p-4 sm:p-6 rounded-xl border border-line bg-canvas hover:border-ink transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          :title="'Click to copy email address'"
        >
          <div>
            <span class="block font-mono text-xs text-ink-3 mb-1">
              {{ copied ? '// STATUS: COPIED TO CLIPBOARD' : '// CLICK TO COPY EMAIL' }}
            </span>
            <span class="text-xl sm:text-3xl font-mono font-bold text-ink tracking-tight group-hover:underline underline-offset-4">
              {{ profile.email }}
            </span>
          </div>

          <div class="flex items-center gap-2 self-start sm:self-auto font-mono text-xs font-semibold px-3 py-2 rounded-lg border border-line group-hover:border-ink transition-colors">
            <UiIcon :name="copied ? 'check' : 'copy'" :size="14" />
            <span>{{ copied ? 'Copied' : 'Copy Email' }}</span>
          </div>
        </button>
      </div>

      <!-- Direct Channels Grid -->
      <div class="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
        <a
          v-for="item in channels"
          :key="item.label"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 rounded-lg border border-line bg-canvas hover:border-ink transition-colors flex items-center justify-between group"
        >
          <div class="flex items-center gap-2 truncate">
            <UiIcon :name="item.icon" :size="14" class="text-ink-3 group-hover:text-ink shrink-0" />
            <span class="text-ink-2 group-hover:text-ink truncate">{{ item.label }}</span>
          </div>
          <UiIcon name="arrow-up-right" :size="12" class="text-ink-3 group-hover:text-ink shrink-0" />
        </a>
      </div>
    </div>
  </SectionBlock>
</template>

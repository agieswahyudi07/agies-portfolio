<script setup>
import { profile } from '../data/cv'
import SectionBlock from './SectionBlock.vue'
import UiIcon from './UiIcon.vue'

const contacts = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail', external: false },
  { label: 'GitHub', value: 'agieswahyudi07', href: profile.links.github, icon: 'github', external: true },
  { label: 'LinkedIn', value: 'agieswahyudi', href: profile.links.linkedin, icon: 'linkedin', external: true },
  { label: 'Instagram', value: '@agieswahyudi_', href: profile.links.instagram, icon: 'instagram', external: true },
  { label: 'Resume', value: 'Open CV (Google Drive)', href: profile.resumeUrl, icon: 'download', external: true },
]
</script>

<template>
  <SectionBlock id="contact" title="Contact">
    <p class="max-w-[62ch] text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
      Open to backend and fullstack roles, and to project work.
    </p>

    <ul class="mt-8 divide-y divide-line border-y border-line">
      <li v-for="item in contacts" :key="item.label">
        <a
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
          class="group flex min-h-11 items-center justify-between gap-4 py-3 text-base"
        >
          <span class="flex items-center gap-3 text-ink-2">
            <UiIcon :name="item.icon" />
            {{ item.label }}
          </span>
          <span class="link break-all text-right text-sm">{{ item.value }}</span>
        </a>
      </li>
    </ul>
  </SectionBlock>
</template>

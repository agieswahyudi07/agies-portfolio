<script setup>
import { profile } from '../data/cv'
import UiIcon from './UiIcon.vue'
</script>

<template>
  <section id="top" aria-labelledby="hero-title" class="mx-auto max-w-5xl scroll-mt-16 px-6 pb-20 pt-16 md:pb-28 md:pt-24">
    <p class="flex items-center gap-1.5 font-mono text-xs text-ink-3">
      <UiIcon name="map-pin" :size="14" />
      {{ profile.location }}
    </p>

    <h1 id="hero-title" class="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
      {{ profile.name }}
    </h1>

    <p class="mt-4 text-xl text-ink-2">{{ profile.role }}</p>

    <p class="mt-6 max-w-[62ch] text-base leading-relaxed text-ink-2 md:text-lg">
      {{ profile.summary }}
    </p>

    <div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
      <a :href="`mailto:${profile.email}`" class="btn btn-primary">
        <UiIcon name="mail" />
        Email me
      </a>
      <a
        :href="profile.links.github"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex min-h-11 items-center gap-1 text-sm"
      >
        <span class="link">GitHub</span>
        <UiIcon name="arrow-up-right" :size="14" />
      </a>
      <a
        :href="profile.links.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex min-h-11 items-center gap-1 text-sm"
      >
        <span class="link">LinkedIn</span>
        <UiIcon name="arrow-up-right" :size="14" />
      </a>
    </div>
  </section>
</template>

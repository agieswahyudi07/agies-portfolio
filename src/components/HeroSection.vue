<script setup>
import { profile } from '../data/cv'
import UiIcon from './UiIcon.vue'
</script>

<template>
  <section id="top" aria-labelledby="hero-title" class="mx-auto max-w-5xl scroll-mt-20 px-6 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
    <!-- Blueprint Status Header -->
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4 font-mono text-xs">
      <div class="flex items-center gap-2 text-ink-2">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink opacity-60"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-ink"></span>
        </span>
        <span class="font-medium">STATUS // FULLSTACK DEVELOPER @ ZOVA TEKNOLOGI INDONESIA</span>
      </div>
      <div class="text-ink-3 hidden sm:flex items-center gap-2">
        <UiIcon name="map-pin" :size="12" />
        <span>{{ profile.location }} [UTC+7]</span>
      </div>
    </div>

    <!-- Editorial Swiss Typography -->
    <div class="mt-10 sm:mt-14">
      <p class="font-mono text-xs tracking-widest text-ink-3 uppercase mb-3">
        // 00 — SOFTWARE ENGINEER DOSSIER
      </p>
      <h1 id="hero-title" class="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink leading-[1.05]">
        {{ profile.name }}
      </h1>
      <p class="mt-4 text-xl sm:text-2xl font-medium text-ink-2 tracking-tight">
        {{ profile.role }}
      </p>
      <p class="mt-6 max-w-[65ch] text-base sm:text-lg leading-relaxed text-ink-2">
        {{ profile.summary }}
      </p>
    </div>

    <!-- Technical Blueprint Specs Matrix -->
    <div class="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line rounded-lg overflow-hidden font-mono text-xs">
      <div class="bg-surface p-4">
        <span class="text-ink-3 block mb-1">01 // PRODUCTION SCALE</span>
        <span class="text-ink font-semibold text-sm">~3M Leads DB · 250+ Agencies</span>
      </div>
      <div class="bg-surface p-4">
        <span class="text-ink-3 block mb-1">02 // CORE STACK</span>
        <span class="text-ink font-semibold text-sm">Laravel · MySQL · Redis · Queues</span>
      </div>
      <div class="bg-surface p-4">
        <span class="text-ink-3 block mb-1">03 // ACTIVE SCOPE</span>
        <span class="text-ink font-semibold text-sm">Async Pipelines & Third-Party APIs</span>
      </div>
    </div>

    <!-- CTAs and Links -->
    <div class="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
      <a :href="`mailto:${profile.email}`" class="btn btn-primary">
        <UiIcon name="mail" :size="16" />
        Get in touch
      </a>
      <a
        :href="profile.links.github"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary"
      >
        <span>GitHub</span>
        <UiIcon name="arrow-up-right" :size="14" />
      </a>
      <a
        :href="profile.links.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary"
      >
        <span>LinkedIn</span>
        <UiIcon name="arrow-up-right" :size="14" />
      </a>
    </div>
  </section>
</template>

<script setup>
import { projects } from '../data/cv'
import SectionBlock from './SectionBlock.vue'
import UiIcon from './UiIcon.vue'
</script>

<template>
  <SectionBlock id="work" title="Selected work" index="03" telemetry="SYSTEMS // PRODUCTION CASE STUDIES">
    <div class="space-y-20">
      <article
        v-for="(project, index) in projects"
        :key="project.title"
        class="group border border-line rounded-xl bg-surface p-5 sm:p-8 hover:border-ink transition-colors duration-200"
      >
        <!-- Project Blueprint Header -->
        <div class="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4 mb-6">
          <div class="flex items-center gap-3">
            <span class="font-mono text-xs text-ink-3">
              [PROJ. {{ String(index + 1).padStart(2, '0') }}]
            </span>
            <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-ink">
              {{ project.title }}
            </h3>
          </div>
          <span class="font-mono text-xs text-ink-3">
            {{ project.org }}
          </span>
        </div>

        <!-- Screenshot with Technical Frame -->
        <figure class="relative overflow-hidden rounded-lg border border-line bg-canvas">
          <img
            :src="project.image"
            :alt="project.imageAlt"
            width="1900"
            height="950"
            loading="lazy"
            decoding="async"
            class="aspect-[16/9] sm:aspect-[2/1] w-full object-cover object-top hover:scale-[1.01] transition-transform duration-300"
          />
        </figure>

        <!-- Description and Delivery Points -->
        <div class="mt-6 space-y-4">
          <p class="text-base sm:text-lg font-medium text-ink leading-relaxed">
            {{ project.summary }}
          </p>

          <ul class="max-w-[70ch] list-disc space-y-2 pl-5 text-sm sm:text-base leading-relaxed text-ink-2 marker:text-line-strong">
            <li v-for="point in project.points" :key="point">{{ point }}</li>
          </ul>
        </div>

        <!-- Tech Stack & Live Link Bar -->
        <div class="mt-8 pt-5 border-t border-line flex flex-wrap items-center justify-between gap-4">
          <ul class="flex flex-wrap gap-2" aria-label="Stack used">
            <li v-for="item in project.stack" :key="item" class="tag">
              {{ item }}
            </li>
          </ul>

          <a
            v-if="project.link"
            :href="project.link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-secondary text-xs h-9 px-3 gap-1.5"
          >
            <span>Visit {{ project.link.label }}</span>
            <UiIcon name="arrow-up-right" :size="13" />
          </a>
        </div>
      </article>
    </div>
  </SectionBlock>
</template>

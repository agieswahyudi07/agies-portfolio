<script setup>
import { projects } from '../data/cv'
import SectionBlock from './SectionBlock.vue'
import UiIcon from './UiIcon.vue'
</script>

<template>
  <SectionBlock id="work" title="Selected work">
    <ul class="space-y-16">
      <li v-for="project in projects" :key="project.title">
        <article>
          <figure class="overflow-hidden rounded-lg border border-line bg-surface">
            <img
              :src="project.image"
              :alt="project.imageAlt"
              width="1900"
              height="950"
              loading="lazy"
              decoding="async"
              class="aspect-[2/1] w-full object-cover object-top"
            />
          </figure>

          <div class="mt-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 class="text-lg font-semibold leading-snug">{{ project.title }}</h3>
            <p class="text-sm text-ink-3">{{ project.org }}</p>
          </div>

          <p class="mt-2 max-w-[62ch] text-base text-ink-2">{{ project.summary }}</p>

          <ul class="mt-4 max-w-[68ch] list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-2 marker:text-line-strong">
            <li v-for="point in project.points" :key="point">{{ point }}</li>
          </ul>

          <div class="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ul class="flex flex-wrap gap-2" aria-label="Stack">
              <li v-for="item in project.stack" :key="item" class="tag">{{ item }}</li>
            </ul>
            <a
              v-if="project.link"
              :href="project.link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-11 items-center gap-1 text-sm"
            >
              <span class="link">{{ project.link.label }}</span>
              <UiIcon name="arrow-up-right" :size="14" />
            </a>
          </div>
        </article>
      </li>
    </ul>
  </SectionBlock>
</template>

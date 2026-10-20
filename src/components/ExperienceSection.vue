<script setup>
import { experience } from '../data/cv'
import SectionBlock from './SectionBlock.vue'
import UiIcon from './UiIcon.vue'
</script>

<template>
  <SectionBlock id="experience" title="Experience">
    <ol class="space-y-16">
      <li v-for="job in experience" :key="job.company">
        <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <h3 class="text-lg font-semibold leading-snug">{{ job.role }}</h3>
          <p class="tabular flex items-center gap-2 font-mono text-xs text-ink-3">
            <span v-if="job.current" class="size-1.5 rounded-full bg-ink" aria-hidden="true" />
            {{ job.start }} to {{ job.end }}
          </p>
        </div>

        <p class="mt-1 text-sm text-ink-2">
          {{ job.company }}
          <span class="text-ink-3">· {{ job.location }}</span>
        </p>

        <!-- Project scopes under this role -->
        <div class="mt-8 space-y-8">
          <div
            v-for="(project, i) in job.projects"
            :key="project.name ?? i"
            class="relative border-l border-line pl-4 sm:pl-5"
          >
            <div class="mb-2 flex flex-wrap items-baseline gap-2">
              <h4 class="font-mono text-sm font-semibold tracking-tight text-ink">
                {{ project.name }}
              </h4>
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-0.5 text-xs text-ink-3 hover:text-ink transition-colors"
                :aria-label="`Visit ${project.name}`"
              >
                <span class="link text-xs">visit</span>
                <UiIcon name="arrow-up-right" :size="12" />
              </a>
            </div>

            <p v-if="project.description" class="mb-3 text-xs text-ink-3">
              {{ project.description }}
            </p>

            <ul class="max-w-[68ch] list-disc space-y-2 pl-4 text-base leading-relaxed text-ink-2 marker:text-line-strong">
              <li v-for="point in project.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </div>
      </li>
    </ol>
  </SectionBlock>
</template>

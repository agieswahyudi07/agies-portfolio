<script setup>
import { experience } from '../data/cv'
import SectionBlock from './SectionBlock.vue'
import UiIcon from './UiIcon.vue'
</script>

<template>
  <SectionBlock id="experience" title="Experience" index="02" telemetry="PRODUCTION // CHANGELOG">
    <ol class="space-y-16">
      <li v-for="job in experience" :key="job.company" class="group">
        <!-- Role & Period Bar -->
        <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 pb-3 border-b border-line">
          <div>
            <h3 class="text-xl font-bold tracking-tight text-ink">
              {{ job.role }}
            </h3>
            <p class="font-mono text-xs text-ink-3 mt-1">
              {{ job.company }} <span class="text-line-strong">//</span> {{ job.location }}
            </p>
          </div>
          <p class="tabular flex items-center gap-2 font-mono text-xs text-ink-2 bg-surface px-2.5 py-1 rounded border border-line shrink-0 self-start sm:self-auto">
            <span v-if="job.current" class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink opacity-60"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-ink"></span>
            </span>
            {{ job.start }} — {{ job.end }}
          </p>
        </div>

        <!-- Project Branches -->
        <div class="mt-6 space-y-8 pl-1 sm:pl-2">
          <div
            v-for="(project, i) in job.projects"
            :key="project.name ?? i"
            class="relative border-l-2 border-line hover:border-ink pl-5 sm:pl-6 transition-colors duration-200"
          >
            <!-- Branch Label & Visit Link -->
            <div class="mb-2 flex flex-wrap items-center gap-2.5">
              <span class="font-mono text-xs text-ink-3 select-none">└──</span>
              <h4 class="font-mono text-sm font-semibold tracking-tight text-ink">
                {{ project.name }}
              </h4>
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 font-mono text-xs text-ink-3 hover:text-ink transition-colors px-1.5 py-0.5 rounded border border-line hover:border-ink"
                :aria-label="`Visit ${project.name}`"
              >
                <span>live site</span>
                <UiIcon name="arrow-up-right" :size="11" />
              </a>
            </div>

            <p v-if="project.description" class="mb-3 text-xs font-mono text-ink-3">
              // {{ project.description }}
            </p>

            <ul class="max-w-[70ch] list-disc space-y-2 pl-4 text-sm sm:text-base leading-relaxed text-ink-2 marker:text-line-strong">
              <li v-for="point in project.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </div>
      </li>
    </ol>
  </SectionBlock>
</template>

<script setup>
import { education } from '../data/cv'
import SectionBlock from './SectionBlock.vue'
</script>

<template>
  <SectionBlock id="education" title="Education" index="06" telemetry="ACADEMIC BACKGROUND // CREDENTIALS">
    <div class="border border-line rounded-lg bg-surface overflow-hidden divide-y divide-line">
      <div
        v-for="item in education"
        :key="item.school"
        class="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-6 hover:bg-canvas transition-colors"
      >
        <div>
          <h3 class="text-base sm:text-lg font-bold tracking-tight text-ink">
            {{ item.school }}
          </h3>
          <p class="text-sm font-medium text-ink-2 mt-0.5">
            {{ item.program }}
          </p>
          <p v-if="item.note" class="font-mono text-xs text-ink-3 mt-1">
            // {{ item.note }}
          </p>
        </div>
        <span class="tabular font-mono text-xs text-ink-3 px-2 py-0.5 rounded border border-line bg-surface shrink-0 self-start sm:self-auto">
          {{ item.period }}
        </span>
      </div>
    </div>
  </SectionBlock>
</template>

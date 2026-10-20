<script setup>
import { skills } from '../data/cv'
import SectionBlock from './SectionBlock.vue'
</script>

<template>
  <SectionBlock id="skills" title="Skills" index="04" telemetry="TECHNICAL STACK // ARCHITECTURE MATRIX">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="(group, idx) in skills"
        :key="group.label"
        class="border border-line rounded-lg bg-surface p-5 hover:border-ink transition-colors duration-200"
      >
        <div class="flex items-center justify-between pb-3 mb-4 border-b border-line">
          <h3 class="font-mono text-xs font-bold uppercase tracking-wider text-ink">
            {{ group.label }}
          </h3>
          <span class="font-mono text-[10px] text-ink-3">
            CAT.{{ String(idx + 1).padStart(2, '0') }}
          </span>
        </div>

        <ul class="flex flex-wrap gap-2" :aria-label="group.label">
          <li v-for="item in group.items" :key="item" class="tag text-xs font-mono">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </SectionBlock>
</template>

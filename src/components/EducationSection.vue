<script setup>
import { education } from '../data/cv'
import SectionBlock from './SectionBlock.vue'
</script>

<template>
  <SectionBlock id="education" title="Education">
    <ul class="divide-y divide-line border-y border-line">
      <li
        v-for="item in education"
        :key="item.school"
        class="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
      >
        <div>
          <h3 class="text-base font-semibold">{{ item.school }}</h3>
          <p class="text-sm text-ink-2">{{ item.program }}</p>
          <p v-if="item.note" class="text-sm text-ink-3">{{ item.note }}</p>
        </div>
        <p class="tabular font-mono text-xs text-ink-3">{{ item.period }}</p>
      </li>
    </ul>
  </SectionBlock>
</template>

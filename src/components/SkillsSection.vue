<script setup>
import { skills } from '../data/cv'
import SectionBlock from './SectionBlock.vue'
</script>

<template>
  <SectionBlock id="skills" title="Skills">
    <dl class="divide-y divide-line border-y border-line">
      <div v-for="group in skills" :key="group.label" class="grid gap-3 py-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
        <dt class="text-sm font-medium">{{ group.label }}</dt>
        <dd>
          <ul class="flex flex-wrap gap-2">
            <li v-for="item in group.items" :key="item" class="tag">{{ item }}</li>
          </ul>
        </dd>
      </div>
    </dl>
  </SectionBlock>
</template>

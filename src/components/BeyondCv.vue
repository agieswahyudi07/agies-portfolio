<script setup>
import { toolbox, learning } from '../data/extras'
import SectionBlock from './SectionBlock.vue'
</script>

<template>
  <SectionBlock id="beyond" title="Beyond the CV">
    <p class="max-w-[62ch] text-sm text-ink-3">Tools I use and topics I study that are not on my CV.</p>

    <div class="mt-8 space-y-10">
      <div v-if="toolbox.length">
        <h3 class="text-sm font-medium">Also in my toolbox</h3>
        <ul class="mt-3 flex flex-wrap gap-2">
          <li v-for="tool in toolbox" :key="tool.name" class="tag" :title="tool.note">{{ tool.name }}</li>
        </ul>
      </div>

      <div v-if="learning.length">
        <h3 class="text-sm font-medium">Currently learning</h3>
        <ul class="mt-3 divide-y divide-line border-y border-line">
          <li v-for="item in learning" :key="item.topic" class="grid gap-1 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6">
            <div>
              <p class="text-base">{{ item.topic }}</p>
              <p v-if="item.from" class="text-sm text-ink-3">Grows from: {{ item.from }}</p>
            </div>
            <p v-if="item.status" class="font-mono text-xs text-ink-3 sm:pt-1">{{ item.status }}</p>
          </li>
        </ul>
      </div>
    </div>
  </SectionBlock>
</template>

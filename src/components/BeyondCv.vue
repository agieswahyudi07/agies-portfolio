<script setup>
import { toolbox, learning } from '../data/extras'
import SectionBlock from './SectionBlock.vue'
</script>

<template>
  <SectionBlock id="beyond" title="Beyond the CV" index="05" telemetry="EXPLORATION // TOOLBOX & LEARNING">
    <div class="border border-line rounded-xl bg-surface overflow-hidden">
      <!-- Terminal Header Bar -->
      <div class="flex items-center justify-between px-4 py-3 border-b border-line bg-canvas font-mono text-xs">
        <div class="flex items-center gap-2">
          <span class="inline-block w-2.5 h-2.5 rounded-full border border-line bg-line"></span>
          <span class="text-ink-2 font-medium">dev.agies / supplementary-dossier.sh</span>
        </div>
        <span class="text-ink-3 hidden sm:inline-block">SHELL // ZSH</span>
      </div>

      <div class="p-6 sm:p-8 space-y-8 font-mono">
        <!-- Toolbox Command -->
        <div v-if="toolbox.length">
          <div class="flex items-center gap-2 text-xs text-ink-2 mb-3">
            <span class="text-ink-3">$</span>
            <span class="font-semibold text-ink">agies --query=additional-toolbox</span>
          </div>
          <p class="text-xs text-ink-3 mb-3">
            // Practical tools & frameworks used in projects outside the core CV:
          </p>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="tool in toolbox"
              :key="tool.name"
              class="tag text-xs"
              :title="tool.note"
            >
              {{ tool.name }}
            </li>
          </ul>
        </div>

        <!-- Learning Command -->
        <div v-if="learning.length" class="pt-6 border-t border-line">
          <div class="flex items-center gap-2 text-xs text-ink-2 mb-3">
            <span class="text-ink-3">$</span>
            <span class="font-semibold text-ink">agies --query=active-research</span>
          </div>
          <p class="text-xs text-ink-3 mb-3">
            // Topics currently under study, connected to production engineering:
          </p>
          <ul class="divide-y divide-line border-y border-line text-xs">
            <li
              v-for="item in learning"
              :key="item.topic"
              class="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
            >
              <div>
                <span class="text-ink font-medium">{{ item.topic }}</span>
                <span v-if="item.from" class="text-ink-3 ml-2">// from: {{ item.from }}</span>
              </div>
              <span v-if="item.status" class="text-ink-2 px-2 py-0.5 rounded border border-line bg-canvas self-start sm:self-auto">
                {{ item.status }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </SectionBlock>
</template>

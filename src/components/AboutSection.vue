<script setup>
import { profile } from '../data/cv'
import SectionBlock from './SectionBlock.vue'
</script>

<template>
  <SectionBlock id="about" title="About" index="01" telemetry="BACKGROUND // DOSSIER">
    <div class="grid grid-cols-1 md:grid-cols-[14rem_minmax(0,1fr)] gap-8 sm:gap-12 items-start">
      <!-- Technical Photo Frame -->
      <div class="space-y-2">
        <div class="relative rounded-lg border border-line bg-surface p-2 shadow-xs">
          <img
            src="/images/me.jpg"
            alt="Portrait of Ramadhan Agies Ananda Wahyudi"
            width="768"
            height="1024"
            loading="lazy"
            decoding="async"
            class="aspect-[3/4] w-full rounded-md border border-line object-cover object-top"
          />
        </div>
        <div class="flex items-center justify-between font-mono text-[11px] text-ink-3 px-1">
          <span>FIG. 01 // PORTRAIT</span>
          <span>AUTOPHON</span>
        </div>
      </div>

      <!-- Narrative Bio & Languages -->
      <div class="space-y-6 text-base leading-relaxed text-ink-2">
        <p class="text-lg text-ink font-medium leading-snug">
          I build high-throughput backend systems, resilient asynchronous queues, and third-party API integrations that scale.
        </p>

        <p>
          I studied software engineering in vocational school and have developed production backend systems since 2023: starting with custom ERP modules, then building an automated multi-school asset management system, and now engineering multi-tenant SaaS infrastructure.
        </p>

        <p>
          At Zova Teknologi Indonesia, I architect backend workflows for a platform serving 250+ marketing agencies. My day-to-day work centers around Laravel queues, MySQL schema optimization, Redis caching, third-party API integrations, and Vue.js frontends.
        </p>

        <div class="pt-4 border-t border-line">
          <span class="block font-mono text-xs uppercase tracking-wider text-ink-3 mb-2.5">
            // SPOKEN LANGUAGES
          </span>
          <div class="flex flex-wrap gap-2">
            <span v-for="lang in profile.languages" :key="lang.name" class="tag">
              {{ lang.name }} — {{ lang.level }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </SectionBlock>
</template>

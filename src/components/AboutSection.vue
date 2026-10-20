<script setup>
import { profile } from '../data/cv'
import SectionBlock from './SectionBlock.vue'
</script>

<template>
  <SectionBlock id="about" title="About">
    <div class="flex flex-col gap-8 sm:flex-row sm:gap-10">
      <img
        src="/images/me.jpg"
        alt="Portrait of Ramadhan Agies Ananda Wahyudi"
        width="768"
        height="1024"
        loading="lazy"
        decoding="async"
        class="aspect-[3/4] w-36 shrink-0 rounded-lg border border-line object-cover object-top sm:w-44"
      />

      <div class="max-w-[62ch] space-y-4 text-base leading-relaxed text-ink-2">
        <p>
          I studied software engineering in vocational school and have worked on backend systems since 2023: first ERP
          modules, then an asset management system, and now a lead generation platform.
        </p>
        <p>
          At Zova Teknologi Indonesia I build the backend of a multi-tenant platform used by 250+ marketing agencies. Most
          of that work sits between Laravel queues, third-party APIs, and MySQL, with Vue.js on the front end.
        </p>
        <p class="text-sm text-ink-3">
          Languages:
          <template v-for="(lang, i) in profile.languages" :key="lang.name">
            {{ lang.name }} ({{ lang.level }}){{ i < profile.languages.length - 1 ? ', ' : '' }}
          </template>
        </p>
      </div>
    </div>
  </SectionBlock>
</template>

<script setup>
defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  index: { type: String, default: '' },
  telemetry: { type: String, default: '' },
})
</script>

<template>
  <section :id="id" :aria-labelledby="`${id}-title`" class="mx-auto max-w-5xl scroll-mt-20 px-6 sm:px-8">
    <div v-reveal class="border-t border-line py-16 sm:py-24">
      <!-- Blueprint Section Header -->
      <div class="mb-10 sm:mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-3">
        <div class="flex items-center gap-2.5">
          <span v-if="index" class="font-mono text-xs font-medium tracking-wider text-ink-3">
            {{ index }} //
          </span>
          <h2 :id="`${id}-title`" class="font-mono text-xs sm:text-sm uppercase tracking-widest text-ink font-bold">
            {{ title }}
          </h2>
        </div>
        <span v-if="telemetry" class="font-mono text-[11px] text-ink-3 hidden sm:inline-block tracking-tight">
          [{{ telemetry }}]
        </span>
      </div>

      <div class="min-w-0">
        <slot />
      </div>
    </div>
  </section>
</template>

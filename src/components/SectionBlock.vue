<script setup>
defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <section :id="id" :aria-labelledby="`${id}-title`" class="mx-auto max-w-5xl scroll-mt-16 px-6">
    <div v-reveal class="grid gap-x-12 gap-y-8 border-t border-line py-16 md:grid-cols-[10rem_minmax(0,1fr)] md:py-20">
      <h2 :id="`${id}-title`" class="text-sm font-medium text-ink-3 md:sticky md:top-24 md:self-start">
        {{ title }}
      </h2>
      <div class="min-w-0">
        <slot />
      </div>
    </div>
  </section>
</template>

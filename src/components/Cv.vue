<script setup>
const link = 'https://drive.google.com/u/0/uc?id=1yDcDr3AEyb2D7bCB654YAx_9CDut4NY5&export=download';
</script>

<template>
  <div
    class="animate-float fixed bottom-6 left-6 z-50 bg-white/80 backdrop-blur-md shadow-xl rounded-full px-5 py-3 flex items-center gap-3 transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer group border border-red-600 shadow-red-500"
  >
    <i class="pi pi-arrow-circle-down text-lg transition-transform group-hover:rotate-[-20deg] group-hover:scale-110"></i>
    <a
      :href="link"
      target="_blank"
      download
      class=" font-semibold text-base hover:underline"
    >
      My Resume
    </a>
  </div>
</template>

<style scoped>
/* Keyframes for floating animation */
@keyframes float {
    0%, 100% {
        transform: translatey(0);
    }
    50% {
        transform: translatey(-25px); /* Float effect */
    }
}

/* Applying the floating animation */
.animate-float {
    animation: float 3s ease-in-out infinite; /* Animation duration and smoothness */
}
</style>

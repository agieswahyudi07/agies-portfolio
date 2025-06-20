<script setup>
const link = 'https://drive.google.com/file/d/11A5V9JGupyaGOioxOwuk2sJNumQM86XD/view';
</script>

<template>
  <div
    class="animate-float fixed bottom-26 md:bottom-6 right-4 z-50 bg-white/80 backdrop-blur-md border border-red-600 shadow-xl shadow-red-500 rounded-full px-4 md:px-5 py-2 md:py-3 flex items-center gap-2 transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer group"
  >
    <i class="pi pi-cloud-download text-lg md:text-xl transition-transform group-hover:rotate-[-20deg] group-hover:scale-110"></i>

    <a
      :href="link"
      target="_blank"
      class=" font-semibold text-sm md:text-base hover:underline"
    >
      <span class="md:inline hidden">My Resume</span>
      <span class="md:hidden">CV</span>
    </a>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>

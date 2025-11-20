<script setup>
const link = 'https://drive.google.com/file/d/11A5V9JGupyaGOioxOwuk2sJNumQM86XD/view';
</script>

<template>
  <div
    class="animate-float fixed bottom-26 md:bottom-6 right-4 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 backdrop-blur-md border-2 border-indigo-500 shadow-xl shadow-indigo-500/50 rounded-full px-5 md:px-6 py-3 md:py-4 flex items-center gap-3 transition-all hover:scale-110 hover:shadow-2xl hover:shadow-indigo-500/70 cursor-pointer group"
  >
    <i class="pi pi-cloud-download text-lg md:text-xl text-white transition-transform group-hover:rotate-[-20deg] group-hover:scale-110"></i>

    <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="font-semibold text-sm md:text-base text-white hover:underline"
      aria-label="Download Resume"
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

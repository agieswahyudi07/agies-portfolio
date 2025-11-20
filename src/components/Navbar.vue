<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menu = ref([
  { name: 'Home', link: '#hero' },
  { name: 'About', link: '#about-me' },
  { name: 'Experience', link: '#experiences' },
  { name: 'Tech Stack', link: '#tech-stack' },
  { name: 'Projects', link: '#projects' },
])

const isOpen = ref(false)
const scrollProgress = ref(0)

// Fungsi scroll smooth ke section
function scrollToSection(id) {
  const section = document.querySelector(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
    isOpen.value = false // Tutup dropdown jika mobile
  }
}

// Calculate scroll progress
function updateScrollProgress() {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollableHeight = documentHeight - windowHeight
  scrollProgress.value = (scrollTop / scrollableHeight) * 100
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  updateScrollProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>

<template>
  <nav class="fixed top-0 right-0 left-0 z-50 backdrop-blur-md bg-white/80 text-black border-b border-gray-200/50 shadow-sm px-5 py-4 lg:px-40 transition-all duration-300">
    <!-- Scroll Progress Bar -->
    <div class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-150" :style="{ width: scrollProgress + '%' }"></div>
    <div class="container mx-auto flex justify-between items-center">
      <!-- Brand -->
      <button @click="scrollToSection('#hero')" class="cursor-pointer group">
      <h1 class="text-xl font-bold text-gray-900 flex items-center gap-2 group-hover:text-indigo-600 transition-colors">
        Agies Wahyudi.
        <span class="spin-center text-indigo-600 text-sm">
          <Icon icon="game-icons:ninja-star" class="text-2xl" />
        </span>
      </h1>
      </button>

      <!-- Mobile toggle -->
      <button @click="isOpen = !isOpen" class="md:hidden text-gray-700 focus:outline-none hover:text-indigo-600 transition-colors">
        <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-8 font-medium">
        <li v-for="item in menu" :key="item.name">
          <button
            @click="scrollToSection(item.link)"
            class="relative text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer group"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </button>
        </li>
      </ul>
    </div>

    <!-- Mobile Dropdown -->
    <div
      v-if="isOpen"
      class="md:hidden mt-3 backdrop-blur-md bg-white/90 p-4 rounded-lg transition-all duration-300 font-medium shadow-lg border border-gray-200/50"
    >
      <ul class="space-y-3">
        <li v-for="item in menu" :key="item.name">
          <button
            @click="scrollToSection(item.link)"
            class="block w-full text-left text-gray-700 hover:text-indigo-600 hover:translate-x-2 transition-all cursor-pointer py-2"
          >
            {{ item.name }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.spin-center {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  animation: spin-center 3s linear infinite;
  transform-origin: center;
  line-height: 1;
  height: 1.25rem;
  width: 1.25rem;
}

@keyframes spin-center {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

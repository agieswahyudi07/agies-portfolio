<script setup>
import { ref } from 'vue'

const menu = ref([
  { name: 'Home', link: '#hero' },
  { name: 'About Me', link: '#about-me' },
  { name: 'Experiences', link: '#experiences' },
  { name: 'Tech Stack', link: '#tech-stack' },
  { name: 'Projects', link: '#projects' },
])

const isOpen = ref(false)

// Fungsi scroll smooth ke section
function scrollToSection(id) {
  const section = document.querySelector(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
    isOpen.value = false // Tutup dropdown jika mobile
  }
}
</script>

<template>
  <nav class="fixed top-0 right-0 left-0 z-50 bg-white text-black border-b border-gray-300 px-5 py-4 lg:px-40">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Brand -->
      <button @click="scrollToSection('#hero')" class=" cursor-pointer">
      <h1 class="text-xl font-bold text-black flex items-center gap-2">
        Agies Wahyudi.
        <span class="spin-center text-red-600 text-sm">
          <Icon icon="game-icons:ninja-star" class="text-5xl text-gray-600" />
        </span>
      </h1>
      </button>

      <!-- Mobile toggle -->
      <button @click="isOpen = !isOpen" class="md:hidden text-black focus:outline-none">
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
      <ul class="hidden md:flex space-x-6 font-semibold">
        <li v-for="item in menu" :key="item.name">
          <button
            @click="scrollToSection(item.link)"
            class="hover:underline hover:text-red-500 transition-colors cursor-pointer"
          >
            {{ item.name }}
          </button>
        </li>
      </ul>
    </div>

    <!-- Mobile Dropdown -->
    <div
      v-if="isOpen"
      class="md:hidden mt-3 bg-gray-100 p-4 rounded-md transition-all duration-300 font-semibold"
    >
      <ul class="space-y-2">
        <li v-for="item in menu" :key="item.name">
          <button
            @click="scrollToSection(item.link)"
            class="block w-full text-left hover:underline hover:text-red-500 cursor-pointer"
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

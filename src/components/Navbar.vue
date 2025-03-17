<script setup>
import { ref } from 'vue';

const menu = ref([
  { name: 'Home', link: '#' },
  { name: 'About Me', link: '#' },
  { name: 'Contact', link: '#' }
]);

const isOpen = ref(false);
</script>

<template>
  <nav class="fixed top-0 right-0 left-0 bg-white text-black p-4 border border-b-gray-300 px-5 lg:px-50">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold text-black">Agies's portfolio</h1>
      
      <button @click="isOpen = !isOpen" class="md:hidden text-black focus:outline-none">
        <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      
      <ul class="hidden md:flex space-x-5 font-semibold">
        <li v-for="item in menu" :key="item.name">
          <a :href="item.link" class="hover:underline">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    
    <div v-if="isOpen" class="md:hidden mt-2 bg-gray-100 p-4 font-semibold rounded-md">
      <ul class="space-y-2">
        <li v-for="item in menu" :key="item.name">
          <a :href="item.link" class="block hover:underline">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
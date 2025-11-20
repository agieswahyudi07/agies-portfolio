<script setup>
import { ref } from 'vue'

//DATA
const experiences = ref([
    {
        job: 'Fullstack Developer',
        company: 'Zova Teknologi Indonesia',
        start_date: 'February 2024',
        end_date: 'Present',
        descriptions: [
            "Developed and maintained a multi-tenant SaaS platform serving over 100 marketing agencies and processing 150.000+ of leads monthly.",
            "Engineered the core backend logic using Laravel, implementing queuing and caching mechanisms (Redis) to ensure reliable, high-throughput data processing from 6+ integrated APIs",
            "Designed and optimized the database layer (MySQL), achieving a 200ms average reduction in API response times under high load.",
            "Built and scaled the frontend experience with Vue.js, delivering custom modules that enhanced user experience for a rapidly growing user base.",
            "Collaborated closely with the project lead on deployment strategies and infrastructure requirements to ensure overall platform stability and scalability.",
        ],
    },
    {
        job: 'General Affair Staff (with website development contribution)',
        company: 'Yayasan Al-Hasra',
        start_date: 'July 2023',
        end_date: 'February 2024',
        descriptions: [
            "Developed a comprehensive web-based asset management system tracking 1,000+ assets across 3 school locations, eliminating manual reporting and reducing administrative time by 60%.",
            "Streamlined operational workflows with automated tracking and reporting features, improving data accuracy and enabling real-time asset visibility for foundation management.",
        ],
    },
    {
        job: 'Fullstack Developer',
        company: 'Software House',
        start_date: 'February 2023',
        end_date: 'July 2023',
        descriptions: [
            "Delivered 5+ ERP modules (e.g., inventory, HR) for client projects, meeting 100% of deadlines and improving efficiency for 100+ users .",
            "Fixed 50+ bugs, increasing application stability for 100+ users.",
            "Optimized database queries on average.",
        ],
    },
])

const openItems = ref(new Set([0])) // Open first item by default

// METHODS 
function toggleAccordion(index) {
    if (openItems.value.has(index)) {
        openItems.value.delete(index)
    } else {
        openItems.value.add(index)
    }
}

function isOpen(index) {
    return openItems.value.has(index)
}
// METHODS 
</script>

<template>
  <div class="relative">
    <!-- Timeline Line (Desktop) -->
    <div class="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200"></div>
    
    <div 
      v-for="(item, index) in experiences"
      :key="index"
      v-animateonscroll="{
        enterClass: 'animate-enter slide-in-from-r-8 animate-duration-1000',
        leaveClass: 'animate-leave slide-out-to-r-8 animate-duration-1000'
      }"
      class="relative mb-6 md:pl-20"
    >
      <!-- Timeline Dot (Desktop) -->
      <div class="hidden md:block absolute left-0 top-6 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
      
      <!-- Experience Card -->
      <div class="group relative bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <!-- Gradient Accent Bar -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
        
        <!-- Header Section -->
        <div 
          @click="toggleAccordion(index)"
          class="cursor-pointer px-6 py-5 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300"
        >
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {{ item.company.charAt(0) }}
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {{ item.job }}
                  </h3>
                  <p class="text-base font-semibold text-indigo-600">
                    {{ item.company }}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg border border-indigo-200">
                <p class="text-sm font-semibold text-indigo-700 whitespace-nowrap">
                  {{ item.start_date }} - {{ item.end_date }}
                </p>
              </div>
              <button class="w-10 h-10 rounded-lg bg-gray-100 hover:bg-indigo-100 flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-500 group-hover:text-white">
                <i :class="['pi transition-transform duration-300', isOpen(index) ? 'pi-chevron-up' : 'pi-chevron-down']"></i>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Content Section -->
        <transition name="slide-down">
          <div 
            v-show="isOpen(index)"
            class="px-6 pb-6"
          >
            <div class="pt-4 border-t border-gray-200">
              <ul class="list-none space-y-4">
                <li 
                  v-for="(text, i) in item.descriptions" 
                  :key="i" 
                  class="flex items-start gap-3 group/item"
                >
                  <div class="mt-1.5 flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                    <i class="pi pi-check text-white text-xs"></i>
                  </div>
                  <p class="text-base text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors flex-1">
                    {{ text }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Slide down animation for accordion content */
.slide-down-enter-active {
  transition: all 0.3s ease-out;
}

.slide-down-leave-active {
  transition: all 0.3s ease-in;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

.slide-down-enter-to {
  opacity: 1;
  transform: translateY(0);
  max-height: 1000px;
}

.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 1000px;
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}
</style>

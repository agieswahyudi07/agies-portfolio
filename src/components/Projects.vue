<script setup>  
import { ref } from 'vue';

//DATA
const projects = ref([
    {
        title: 'Exact Match Marketing',
        company: 'Zova Teknologi Indonesia',
        image_src: '/images/exact-match-marketing.png',
        image_alt: 'Exact Match Marketing Images',
        category: 'SaaS Platform',
        tech: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
        descriptions:[
            "Developed and maintained a multi-tenant SaaS platform serving over 100 marketing agencies and processing 150.000+ of leads monthly.",
            "Engineered the core backend logic using Laravel, implementing queuing and caching mechanisms (Redis) to ensure reliable, high-throughput data processing from 6+ integrated APIs",
            "Designed and optimized the database layer (MySQL), achieving a 200ms average reduction in API response times under high load.",
            "Built and scaled the frontend experience with Vue.js, delivering custom modules that enhanced user experience for a rapidly growing user base.",
            "Collaborated closely with the project lead on deployment strategies and infrastructure requirements to ensure overall platform stability and scalability.",
        ],
    },
    {
        title: 'Inventory Management System',
        company: 'Yayasan Al-Hasra',
        image_src: '/images/al-hasra.png',
        image_alt: 'Inventory Management Images',
        category: 'Web Application',
        tech: ['Laravel', 'MySQL', 'Bootstrap'],
        descriptions:[
            "Developed a comprehensive web-based asset management system tracking 1,000+ assets across 3 school locations, eliminating manual reporting processes.",
            "Streamlined operational workflows with automated asset tracking, reducing administrative overhead by 60% and improving data accuracy.",
            "Implemented role-based access control and reporting features, enabling efficient asset management for foundation operations.",
        ],
    },
    {
        title: 'Educational Landing Page',
        company: 'SPNF SKB Sukabumi',
        image_src: '/images/spnf-skb-sukabumi.png',
        image_alt: 'Landing Page of SPNF SKB Sukabumi Images',
        category: 'Landing Page',
        tech: ['Laravel', 'Livewire', 'Filament'],
        descriptions:[
            "Built a modern, responsive landing page using Laravel Livewire, providing an engaging digital presence for the educational institution.",
            "Integrated Filament admin panel for seamless content management, allowing non-technical staff to update announcements and news easily.",
            "Implemented secure authentication system and CRUD functionality for managing users, announcements, and contact submissions.",
            "Designed intuitive user interface that increased visitor engagement and improved information accessibility for students and parents.",
        ],
    },
    {
        title: 'Landingo - Business Landing Page',
        company: 'Landingo',
        image_src: '/images/landingo.png',
        image_alt: 'Landing Page of Landingo Images',
        category: 'Business Website',
        tech: ['Vue.js', 'Tailwind CSS'],
        descriptions:[
            "Created my own business landing page to showcase professional website building services, demonstrating full-stack capabilities.",
            "Designed a conversion-optimized interface with compelling value propositions, clear service offerings, and strategic call-to-action placements.",
            "Implemented modern UI/UX principles with smooth animations and responsive design, ensuring excellent user experience across all devices.",
            "Built with performance in mind, achieving fast load times and SEO optimization to attract and convert potential clients effectively.",
        ],
    },
]);
//DATA

//METHODS
//METHODS



</script>
<template>
  <div 
    v-for="(item, index) in projects"
    :key="index"
    v-animateonscroll="{
      enterClass: index % 2 === 0 
        ? 'animate-enter slide-in-from-l-8 animate-duration-1000' 
        : 'animate-enter slide-in-from-r-8 animate-duration-1000',
      leaveClass: index % 2 === 0 
        ? 'animate-leave slide-out-to-r-8 animate-duration-1000' 
        : 'animate-leave slide-out-to-l-8 animate-duration-1000',
    }"
    class="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16"
  >
    <!-- Text -->
    <div 
      :class="[
        'space-y-4 text-left max-w-lg order-2',
        (index % 2 == 0) ? 'md:order-1' : 'md:order-2'
      ]"
    >
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full">{{ item.category }}</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900">{{ item.title }}</h2>
        <h3 class="text-xl md:text-2xl font-semibold text-indigo-600">{{ item.company }}</h3>
        <div class="flex flex-wrap gap-2 pt-2">
          <span 
            v-for="tech in item.tech" 
            :key="tech"
            class="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-200"
          >
            {{ tech }}
          </span>
        </div>
      </div>
      <div class="space-y-3 text-base text-gray-600 leading-relaxed">
        <div v-for="(text, i) in item.descriptions" :key="i" class="flex flex-row items-start gap-3">
          <i class="pi pi-check-circle text-indigo-600 mt-1 text-lg flex-shrink-0"></i>
          <p>{{ text }}</p>
        </div>
      </div>
    </div>

    <!-- Image -->
    <div 
      :class="[
        'relative group order-1',
        (index % 2 == 0) ? 'md:order-2' : 'md:order-1'
      ]"
      v-animateonscroll="{
        enterClass: index % 2 === 0 
          ? 'animate-enter slide-in-from-r-8 animate-duration-1000' 
          : 'animate-enter slide-in-from-l-8 animate-duration-1000',
        leaveClass: 'animate-leave fade-out-0'
      }"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
      <img 
        :src="item.image_src" 
        :alt="item.image_alt" 
        class="relative mx-auto w-full max-w-2xl md:max-w-4xl lg:max-w-5xl object-contain rounded-2xl shadow-2xl transition-transform duration-300 ease-in-out group-hover:scale-105"
      >
    </div>
  </div>
</template>

<style scoped>

</style>

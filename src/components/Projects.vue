<script setup>  
import { ref } from 'vue';
import Divider from 'primevue/divider';

//DATA
const projects = ref([
    {
        title: 'Exact Match Marketing',
        company: 'Zova Teknologi Indonesia',
        image_src: '/images/general-setting-agency.png',
        image_alt: 'Exact Match Marketing Images',
        descriptions:[
            "Develop and maintain lead generation marketing platform using Vue JS x Laravel, ensuring performance and scalability.",
            "Enhance and optimize the core engine for generating, processing and distributing leads efficiently.",
            "Implement and integrate third-party services and APIs to improve system capabitlities and automation.",
            "Develop custom modules and features tailored to clients business requrements, ensuring seamless functionality and user experience.",
            "Collaborate with cross-functional teams to analyze business needs, troubleshoot issues, and deliver high-quality solutions.",
        ],
    },
    {
        title: 'Inventory Management',
        company: 'Yayasan Al-Hasra',
        image_src: '/images/dashboard-alhasra.png',
        image_alt: 'Inventory Management Images',
        descriptions:[
            "Developed and maintained a Laravel inventory management.",
            "Implemented secure user authentication.",
            "Added full CRUD functionality, allowing users to create, edit, and delete invoices, with the option to download Report in Excel.",
        ],
    },
    {
        title: 'Landing Page',
        company: 'SPNF SKB Sukabumi',
        image_src: '/images/landing-page-spnfskb_sukabumi.png',
        image_alt: 'Landing Page Images',
        descriptions:[
            "Developed and maintained a Laravel Livewire landing page.",
            "Using Filament for the admin panel.",
            "Implemented secure user authentication.",
            "Add CRUD funcionality for users, announcement and Contact US.",
        ],
    },
]);
//DATA

//METHODS
//METHODS



</script>
<template>
      <div v-for="(item, index) in projects" class="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-5 md:py-10">
          <!-- Text -->
          <div :class="[
            'space-y-2 text-left max-w-md justify-self-center order-2',
             (index % 2 == 0) ? ' md:justify-self-end  md:order-1 ' : ' md:justify-self-start md:order-2'
             ]"
              v-animateonscroll="{
                enterClass: index % 2 === 0 
                  ? 'animate-enter slide-in-from-l-8 animate-duration-1000' 
                  : 'animate-enter slide-in-from-r-8 animate-duration-1000',
                leaveClass: 'animate-leave fade-out-0'
              }"

             >
            <h2 class=" text-3xl font-semibold">{{ item.title }}</h2>
            <h3 class=" text-xl font-semibold">{{ item.company }}</h3>
            <div class="space-y-1 text-left text-sm flex flex-col justify-items-center max-w-md">
                <div v-for="text in item.descriptions" class="flex flex-row ">
                    <i class="pi pi-circle mt-1 mr-3"></i><p>{{ text }}</p>
                </div>
            </div>
          </div>
          
          <Divider 
        :pt="{
            root:{
                class: 'w-full h-px bg-gray-900 order-3 md:bg-white my-3 md:my-0'
            }
        }"
          />

            <!-- Image -->
            <img :src="item.image_src" :alt="item.image_alt" :class="[
              'mx-auto h-48 w-full max-w-md md:h-72 md:w-[30rem] object-cover rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl order-1',
               (index % 2 == 0) ? ' md:order-2' : ' md:order-1'
               ]"
               
               v-animateonscroll="{
                  enterClass: index % 2 === 0 
                    ? 'animate-enter slide-in-from-l-8 animate-duration-1000' 
                    : 'animate-enter slide-in-from-r-8 animate-duration-1000',
                  leaveClass: 'animate-leave fade-out-0'
                }"
            >
        </div>
</template>

<style scoped>

</style>

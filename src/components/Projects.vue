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
            "Developed and maintained a multi-tenant lead generation platform, processing 10,000+ leads/month, with a 20% increase in scalability through core engine optimization.",
            "Integrated 6+ third-party platforms (Stripe, Google Sheets, Zapier, GoHighLevel, MailboxPower, BigDBM), boosting automation efficiency by 25%.",
            "Built custom modules tailored to client needs, enhancing user experience for 1,000+ active users across tenant accounts.",
            "Collaborated with cross-functional teams to streamline issue resolution, improving platform stability for 1,000+ users.",
        ],
    },
    {
        title: 'Inventory Management',
        company: 'Yayasan Al-Hasra',
        image_src: '/images/dashboard-alhasra.png',
        image_alt: 'Inventory Management Images',
        descriptions:[
            "Developed a web-based asset management system for 1.000+ assets across 3 schools and reducing manual reporting.",
            "Managed operational assets and requirements, ensuring seamless foundation operations.",
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
      <div v-for="(item, index) in projects"
      v-animateonscroll="{
        enterClass: index % 2 === 0 
          ? 'animate-enter slide-in-from-l-8 animate-duration-1000' 
          : 'animate-enter slide-in-from-r-8 animate-duration-1000',
        leaveClass: index % 2 === 0 
          ? 'animate-leave slide-out-to-r-8 animate-duration-1000' 
          : 'animate-leave slide-out-to-l-8 animate-duration-1000',
      }"
      class="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-5 md:py-10">
          <!-- Text -->
          <div :class="[
            'space-y-2 text-left max-w-md justify-self-center order-2',
             (index % 2 == 0) ? ' md:justify-self-end  md:order-1 ' : ' md:justify-self-start md:order-2'
             ]"
              
             >
            <h2 class=" text-3xl font-semibold">{{ item.title }}</h2>
            <h3 class=" text-xl font-semibold">{{ item.company }}</h3>
            <div class="space-y-1 text-left text-sm flex flex-col justify-items-center max-w-md">
                <div v-for="text in item.descriptions" class="flex flex-row text-gray-600">
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

<script setup>
import { onMounted, ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
//DATA
const experiences = ref([
    {
        job: 'Fullstack Developer',
        company: 'Zova Teknologi Indonesia',
        start_date: 'February 2024',
        end_date: 'Present',
        descriptions: [
            "Developed and maintained a multi-tenant lead generation platform, processing 10,000+ leads/month, with a 20% increase in scalability through core engine optimization.",
            "Integrated 6+ third-party platforms (Stripe, Google Sheets, Zapier, GoHighLevel, MailboxPower, BigDBM), boosting automation efficiency by 25%.",
            "Built custom modules tailored to client needs, enhancing user experience for 1,000+ active users across tenant accounts.",
            "Collaborated with cross-functional teams to streamline issue resolution, improving platform stability for 1,000+ users.",
        ],
    },
    {
        job: 'General Affair Staff (with website development contribution)',
        company: 'Yayasan Al-Hasra',
        start_date: 'July 2023',
        end_date: 'February 2024',
        descriptions: [
            "Developed a web-based asset management system for 1.000+ assets across 3 schools and reducing manual reporting.",
            "Managed operational assets and requirements, ensuring seamless foundation operations.",
        ],
    },
    {
        job: 'Fullstack Developer',
        company: 'Software House',
        start_date: 'February 2023',
        end_date: 'May 2023',
        descriptions: [
            "Delivered 5+ ERP modules (e.g., inventory, HR) for client projects, meeting 100% of deadlines and improving efficiency for 100+ users.",
            "Fixed 20+ bugs, increasing application stability for 100+ users.",
            "Optimized database queries, reducing API response times by 200ms on average.",
        ],
    },

])
const indexExperiences = ref([]) 
//DATA

// METHODS 
function get_index(array) {
    return array.map((_, index) => index);
}
// METHODS 

// HOOKS 
onMounted(() => {
    indexExperiences.value = get_index(experiences.value)
})
// HOOKS 
</script>

<template>
  <Accordion 
    :activeIndex="indexExperiences" 
    :multiple="true"
    pt:root:v-animateonscroll="{
                    enterClass: 'animate-enter slide-in-from-r-8 animate-duration-1000',
                    leaveClass: 'animate-leave slide-out-to-r-8 animate-duration-1000'
                }" 
     :pt="{
            root: { 
                class: 'swing-in-top-fwd flex flex-col gap-5 border rounded-lg border-gray-300 justify-self-center md:px-5 md:py-5 sm:min-w-150 md:min-w-200 lg:min-w-250 w-full',
                // v-animateonscroll: {
                //     enterClass: 'animate-enter slide-in-from-r-8 animate-duration-1000',
                //     leaveClass: 'animate-leave slide-out-to-r-8 animate-duration-1000'
                // }
            },
            tab: { class: 'mb-3 ' }
        }"
    >
    <AccordionTab
      v-for="(item, index) in experiences"
      :key="index"
      :header="item.job"
      :pt="{
        header: {
          class: ' flex text-xl justify-between items-center cursor-pointer px-4 py-2 hover:underline hover:text-red-500 hover:bg-gray-200 text-sm font-medium border border-gray-300 rounded-md w-full'
        },
        content: {
          class: ' p-4 bg-white border border-gray-300 rounded-lg shadow-sm mt-3'
        }
      }"
    >
      <div class="flex flex-col gap-3 p-5 rounded-sm bg-gray-800 inset-shadow-sm inset-shadow-red-500">
        <h1 class="text-xl font-semibold text-center text-gray-200">
          {{ item.company }}
        </h1>
        <p class="text-sm text-center text-gray-400">
          {{ item.start_date }} - {{ item.end_date }}
        </p>
        <ul class="list-disc list-inside text-sm text-gray-300 space-y-1 text-left">
          <li v-for="(text, i) in item.descriptions" :key="i">{{ text }}</li>
        </ul>
      </div>
    </AccordionTab>
  </Accordion>
</template>

<style scoped>
.swing-in-top-fwd {
	-webkit-animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
	        animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
}
@-webkit-keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
}
@keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
}
</style>

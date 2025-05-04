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
            "Develop and maintain lead generation marketing platform, ensuring performance and scalability.",
            "Enhance and optimize the core engine for generating, processing and distributing leads efficiently.",
            "Implement and integrate third-party services and APIs to improve system capabitlities and automation.",
            "Develop custom modules and features tailored to clients business requrements, ensuring seamless functionality and user experience.",
            "Collaborate with cross-functional teams to analyze business needs, troubleshoot issues, and deliver high-quality solutions.",
        ],
    },
    {
        job: 'Fullstack Developer',
        company: 'Yayasan Al-Hasra',
        start_date: 'July 2023',
        end_date: 'February 2024',
        descriptions: [
            "Management of Foundation Assets Encompassing Three Schools.",
            "Provision of Operational Requirements for the Foundation and Schools.",
            "Development of a Web System to Facilitate Asset Management and Requirements.",
        ],
    },
    {
        job: 'Fullstack Developer',
        company: 'Software House',
        start_date: 'February 2023',
        end_date: 'May 2023',
        descriptions: [
            "Developing, designing, and maintaining websites.",
            "Writing and maintaining website code.",
            "Creating and updating website features.",
            "Creating and managing databases for websites.",
            "Troubleshooting technical issues on websites.",
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
        <h1 class="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">
          {{ item.company }}
        </h1>
        <p class="text-sm text-center text-gray-600 dark:text-gray-400">
          {{ item.start_date }} - {{ item.end_date }}
        </p>
        <ul class="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1 text-left">
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

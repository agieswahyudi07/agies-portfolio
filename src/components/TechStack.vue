<script setup>
    import {ref} from 'vue'

    const techStack = ref([
    {
        title:'Frontend',
        tech: [
            { name: 'HTML5', icon: 'devicon:html5' },
            { name: 'CSS3', icon: 'devicon:css3' },
            { name: 'JavaScript', icon: 'devicon:javascript' },
            { name: 'Vue.js', icon: 'devicon:vuejs' },
            { name: 'Alpine JS', icon: 'devicon:alpinejs' },
            { name: 'Tailwind CSS', icon: 'devicon:tailwindcss' },
            { name: 'Livewire', icon: 'devicon:livewire' },
            { name: 'Filament', icon: 'simple-icons:filament' },
        ],
    },
    {
        title:'Backend',
        tech: [
            { name: 'PHP', icon: 'devicon:php' },
            { name: 'Laravel', icon: 'devicon:laravel' },
            { name: 'Node.js', icon: 'devicon:nodejs-wordmark' },
            { name: 'Express JS', icon: 'devicon:express' },
            { name: 'MySQL', icon: 'devicon:mysql' },
            { name: 'REDIS', icon: 'devicon:redis' },
            { name: 'REST API', icon: 'mdi:api' }
        ]
    },
    {
        // title:'Tools & DevOps',
        title:'Tools',
        tech: [
            { name: 'Git', icon: 'devicon:git' },
            { name: 'GitHub', icon: 'devicon:github' },
            { name: 'Sourcetree', icon: 'devicon:sourcetree' },
            { name: 'Docker', icon: 'devicon:docker' },
            // { name: 'Figma', icon: 'devicon:figma' },
            { name: 'VS Code', icon: 'devicon:vscode' },
            { name: 'ChatGPT', icon: 'arcticons:openai-chatgpt' },
            { name: 'Postman', icon: 'devicon:postman' }
        ]
    }
    ]);
</script>

<template>
  <div class="max-w-screen-xl mx-auto text-center">
    <div class="space-y-16 " v-for="stack in techStack">
      <div class="my-10">
        <h2 class="text-2xl font-semibold text-gray-700 mb-8">{{ stack.title }}</h2>
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-4 lg:gap-x-10 gap-y-8">
            <div v-for="item in stack.tech"  class="flex flex-col items-center gap-3 justify-center p-4 border-2 border-gray-300 rounded-lg aspect-square transition-all duration-300 hover:shadow-lg hover:border-red-300">
                <Icon :icon="item.icon" class="text-5xl text-gray-600" />
                <span class="text-sm font-medium text-gray-700">{{ item.name }}</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid > div:hover i {
  color: #EF4444; /* Warna merah-500 dari Tailwind */
  transform: scale(1.1);
}

.grid > div i {
  transition: color 0.3s ease, transform 0.3s ease;
}
</style>
<script setup>
    import {ref, onMounted, nextTick} from 'vue'

    const getHoverColorClass = (textColor) => {
        const colorMap = {
            'text-blue-600': 'group-hover:text-blue-600',
            'text-purple-600': 'group-hover:text-purple-600',
            'text-indigo-600': 'group-hover:text-indigo-600',
            'text-green-600': 'group-hover:text-green-600',
            'text-red-600': 'group-hover:text-red-600'
        }
        return colorMap[textColor] || 'group-hover:text-indigo-600'
    }

    onMounted(() => {
        nextTick(() => {
            // Use Intersection Observer for smooth animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('tech-stack-visible')
                        observer.unobserve(entry.target)
                    }
                })
            }, {
                threshold: 0.1,
                rootMargin: '100px'
            })

            // Observe all tech stack containers
            const containers = document.querySelectorAll('.tech-stack-container')
            containers.forEach(container => {
                observer.observe(container)
            })
        })
    })

    const techStack = ref([
    {
        title:'Languages',
        icon: 'mdi:code-tags',
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-50 to-cyan-50',
        borderColor: 'border-blue-200',
        hoverBorder: 'hover:border-blue-400',
        textColor: 'text-blue-600',
        tech: [
            { name: 'PHP', icon: 'devicon:php' },
            { name: 'JavaScript', icon: 'devicon:javascript' },
            { name: 'SQL', icon: 'tabler:sql' },
        ],
    },
    {
        title:'Backend',
        icon: 'mdi:server',
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-50 to-pink-50',
        borderColor: 'border-purple-200',
        hoverBorder: 'hover:border-purple-400',
        textColor: 'text-purple-600',
        tech: [
            { name: 'Laravel', icon: 'devicon:laravel' },
            { name: 'Livewire', icon: 'devicon:livewire' },
            { name: 'Filament', icon: 'simple-icons:filament' },
            { name: 'Node.js', icon: 'devicon:nodejs-wordmark' },
            { name: 'Express JS', icon: 'devicon:express' },
            { name: 'MySQL', icon: 'devicon:mysql' },
            { name: 'REDIS', icon: 'devicon:redis' },
            { name: 'MongoDB', icon: 'devicon:mongodb' },
            { name: 'REST API', icon: 'mdi:api' }
        ]
    },
    {
        title:'Frontend',
        icon: 'mdi:palette',
        gradient: 'from-indigo-500 to-purple-500',
        bgGradient: 'from-indigo-50 to-purple-50',
        borderColor: 'border-indigo-200',
        hoverBorder: 'hover:border-indigo-400',
        textColor: 'text-indigo-600',
        tech: [
            { name: 'Vue.js', icon: 'devicon:vuejs' },
            { name: 'Alpine JS', icon: 'devicon:alpinejs' },
            { name: 'Tailwind CSS', icon: 'devicon:tailwindcss' },
            { name: 'Bootstrap', icon: 'devicon:bootstrap' },
        ],
    },
    {
      title:'AI & Automation',
      icon: 'mage:robot',
      gradient: 'from-red-500 to-orange-500',
      bgGradient: 'from-red-50 to-orange-50',
      borderColor: 'border-red-200',
      hoverBorder: 'hover:border-red-400',
      textColor: 'text-red-600',
      tech: [
        { name: 'OpenAI', icon: 'arcticons:openai-chatgpt' },
        { name: 'Gemini', icon: 'vscode-icons:file-type-gemini' },
        { name: 'N8N', icon: 'simple-icons:n8n' },
      ]
    },
    {
        title:'DevOps & Tools',
        icon: 'mdi:wrench',
        gradient: 'from-green-500 to-emerald-500',
        bgGradient: 'from-green-50 to-emerald-50',
        borderColor: 'border-green-200',
        hoverBorder: 'hover:border-green-400',
        textColor: 'text-green-600',
        tech: [
            { name: 'Git', icon: 'devicon:git' },
            { name: 'GitHub', icon: 'devicon:github' },
            { name: 'Sourcetree', icon: 'devicon:sourcetree' },
            { name: 'Docker', icon: 'devicon:docker' },
            { name: 'VS Code', icon: 'devicon:vscode' },
            { name: 'Cursor', icon: 'catppuccin:cursor' },
            { name: 'Postman', icon: 'devicon:postman' }
        ]
    }
    ]);
</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <div 
      v-for="stack in techStack" 
      :key="stack.title"
      v-animateonscroll="{
        enterClass: 'animate-enter slide-in-from-b-8 animate-duration-1000',
        once: true
      }"
      class="mb-20"
    >
      <!-- Category Header -->
      <div class="flex items-center justify-center gap-4 mb-12">
        <div :class="`w-12 h-12 rounded-xl bg-gradient-to-br ${stack.gradient} flex items-center justify-center shadow-lg`">
          <Icon :icon="stack.icon" class="text-white text-xl" />
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">{{ stack.title }}</h2>
      </div>
      
      <!-- Tech Grid -->
      <div 
        :class="`tech-stack-container relative p-8 rounded-3xl bg-gradient-to-br ${stack.bgGradient} border-2 ${stack.borderColor}`"
      >
        <div class="flex flex-wrap justify-center gap-4 lg:gap-6">
          <div 
            v-for="(item, idx) in stack.tech" 
            :key="item.name"
            :style="{ animationDelay: `${idx * 100}ms` }"
            :class="`tech-stack-item group relative flex flex-col items-center gap-3 justify-center p-5 bg-white border-2 ${stack.borderColor} ${stack.hoverBorder} rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-28 md:w-32 cursor-pointer overflow-hidden`"
          >
            <!-- Gradient overlay on hover -->
            <div :class="`absolute inset-0 bg-gradient-to-br ${stack.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`"></div>
            
            <!-- Icon -->
            <div class="relative transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Icon 
                :icon="item.icon" 
                :class="[
                  'text-5xl md:text-6xl text-gray-600 transition-colors duration-300',
                  getHoverColorClass(stack.textColor)
                ]"
              />
            </div>
            
            <!-- Name -->
            <span 
              :class="[
                'text-xs md:text-sm font-semibold text-gray-700 transition-colors duration-300 text-center',
                getHoverColorClass(stack.textColor)
              ]"
            >
              {{ item.name }}
            </span>
            
            <!-- Shine effect on hover -->
            <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tech stack item - hidden by default */
.tech-stack-item {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* When container is visible, animate items */
.tech-stack-container.tech-stack-visible .tech-stack-item {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Optimize for smooth animations */
.tech-stack-item {
  will-change: opacity, transform;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Remove will-change after animation to save resources */
.tech-stack-container.tech-stack-visible .tech-stack-item {
  will-change: auto;
}

/* Smooth hover transitions */
.group {
  backface-visibility: hidden;
  transform: translateZ(0);
}
</style>
<script setup>
  import Navbar from './components/Navbar.vue'
  import Cv from './components/Cv.vue'
  import WorkExperiences from './components/WorkExperiences.vue'
  import TechStack from './components/TechStack.vue'
  import Projects from './components/Projects.vue'
  import { onMounted, ref } from 'vue'
  
  const fullText = ref("I transform ideas into powerful digital experiences. Specializing in full-stack development, I craft scalable web applications that drive business growth. From concept to deployment, I deliver solutions that are fast, reliable, and user-centric.")
  const typedText = ref('')
  const index = ref(0)

  function typeWriter() {
    if (index.value < fullText.value.length) {
      typedText.value += fullText.value.charAt(index.value);
      index.value++;
      setTimeout(typeWriter, 35);
    }
  }

  const scrollToAbout = () => {
    const section = document.getElementById("about-me");
    section?.scrollIntoView({ behavior: "smooth" });
  }

  onMounted(() => {
    typeWriter();
  })

</script>

<template>
    <Navbar/>
    <Cv/>  
    <section id="hero" name="hero" class="relative min-h-screen min-w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <!-- Animated background elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div class="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div class="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div class="relative mx-auto h-screen content-center text-center max-w-screen-xl pt-20 pb-15 md:pt-0 md:pb-0 flex flex-col justify-center items-center px-5">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/80 backdrop-blur-sm border border-indigo-200/50 mb-4 animate-fade-in">
            <span class="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
            <span class="text-sm font-medium text-indigo-700">Available for new projects</span>
          </div>
          <h1 class="tracking-in-contract text-lg md:text-xl px-5 tracking-tight md:tracking-wide text-gray-600 font-medium mb-2">Hello, I'm</h1>
          <h1 class="tracking-in-contract text-4xl md:text-7xl font-bold px-5 tracking-tight md:tracking-wide bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Ramadhan Agies Ananda Wahyudi
          </h1>
          <div class="mb-4">
            <span class="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm md:text-base font-semibold shadow-lg">
              Fullstack Developer
            </span>
          </div>
          <p class="typewriter-wrap text-base md:text-lg text-justify px-5 md:mx-40 md:text-center text-gray-600 mt-5 max-w-3xl leading-relaxed">
            {{ typedText }}<span class="caret text-indigo-600 text-xl font-bold">|</span>
          </p>
          <div class="flex flex-row gap-6 text-3xl justify-center mt-8">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/agieswahyudi07/" class="group" aria-label="GitHub Profile">
              <i class="pi pi-github text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 hover:rotate-6"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/agieswahyudi/" class="group" aria-label="LinkedIn Profile">
              <i class="pi pi-linkedin text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 hover:rotate-6"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/agieswahyudi_/" class="group" aria-label="Instagram Profile">
              <i class="pi pi-instagram text-gray-600 hover:text-pink-600 transition-all duration-300 hover:scale-110 hover:rotate-6"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:agieswahyudi@gmail.com" class="group" aria-label="Send Email">
              <i class="pi pi-envelope text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 hover:rotate-6"></i>
            </a>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 mt-12">
            <Button
              class="button-float flex items-center gap-2 px-8 py-3 cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              rounded
              aria-label="Scroll to About Me"
              @click="scrollToAbout"
            >
              <span>Explore My Work</span>
              <i class="pi pi-arrow-down text-lg"></i>
            </Button>
            <a 
              href="mailto:agieswahyudi@gmail.com"
              class="flex items-center gap-2 px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-gray-200"
            >
              <i class="pi pi-envelope"></i>
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
    </section>
    <section id="about-me" name="about-me" class="relative min-h-screen w-full py-20 px-5 md:px-10 bg-white">
      <div class="max-w-screen-xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            About<span class="text-indigo-600">/</span><span class="font-bold">ME</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafting digital solutions that make a difference
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
          <!-- Image -->
          <div v-animateonscroll="{ enterClass:'animate-enter slide-in-from-r-8 animate-duration-1000',leaveClass: 'animate-leave slide-out-to-r-8 animate-duration-1000' }" class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img 
            src="/images/me.jpg" 
            alt="Agies Wahyudi - Fullstack Developer based in Jakarta, Indonesia" 
            loading="lazy"
            decoding="async"
            width="400"
            height="400"
            class="relative mx-auto object-center h-64 w-full md:h-96 md:w-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
          >
          </div>
          <!-- Text -->
          <div v-animateonscroll="{ enterClass:'animate-enter slide-in-from-l-8 animate-duration-1000',leaveClass: 'animate-leave slide-out-to-l-8 animate-duration-1000' }" class="flex flex-col space-y-6 text-left">
            <p class="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Fullstack Developer with 2+ years of experience building high-performance, scalable web applications. My journey has been defined by turning complex challenges into elegant solutions that drive real business value.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              Currently, I'm engineering robust SaaS platforms that process 150,000+ leads monthly, serving over 100 marketing agencies. My expertise spans the entire development stack — from crafting intuitive user interfaces with Vue.js to architecting resilient backend systems with Laravel.
            </p>
            <div class="grid grid-cols-2 gap-4 pt-4">
              <div class="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 hover:shadow-lg transition-shadow">
                <div class="text-3xl font-bold text-indigo-600">2+</div>
                <div class="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div class="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:shadow-lg transition-shadow">
                <div class="text-3xl font-bold text-purple-600">150K+</div>
                <div class="text-sm text-gray-600 font-medium">Leads Processed</div>
              </div>
              <div class="p-4 bg-gradient-to-br from-pink-50 to-indigo-50 rounded-xl border border-pink-100 hover:shadow-lg transition-shadow">
                <div class="text-3xl font-bold text-pink-600">100+</div>
                <div class="text-sm text-gray-600 font-medium">Agencies Served</div>
              </div>
              <div class="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-100 hover:shadow-lg transition-shadow">
                <div class="text-3xl font-bold text-blue-600">99.9%</div>
                <div class="text-sm text-gray-600 font-medium">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="experiences" name="experiences" class="relative min-h-screen w-full py-20 px-5 md:px-10 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-screen-xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            my<span class="text-indigo-600">/</span><span class="font-bold">Experiences</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Building impactful solutions, one project at a time
          </p>
        </div>
        <div class="max-w-4xl mx-auto">
          <WorkExperiences/>
        </div>
      </div>
    </section>
    <section id="tech-stack" name="tech-stack" class="relative w-full min-h-fit py-20 px-5 md:px-10 bg-white">
      <div class="max-w-screen-xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            my<span class="text-indigo-600">/</span><span class="font-bold">Tech Stack</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>
        <div class="px-5 lg:px-5">
          <TechStack/>
        </div>
      </div>
    </section>
    <section id="projects" name="projects" class="relative min-h-screen w-full py-20 px-5 md:px-10 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-screen-xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            my<span class="text-indigo-600">/</span><span class="font-bold">Projects</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing real-world solutions that drive results
          </p>
        </div>
        <div class="space-y-24">
          <Projects/>
        </div>
      </div>
    </section>
    <section id="footer" name="footer" class="min-h-fit w-full py-20 px-5 md:px-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div class="max-w-screen-xl mx-auto py-10 flex flex-col items-center gap-10">
        <div class="text-center space-y-6 max-w-3xl">
          <p class="tracking-in-contract text-4xl md:text-6xl font-bold px-5 tracking-tight md:tracking-wide">
            Let's Build Something Amazing Together
          </p>
          <p class="tracking-in-contract text-lg md:text-xl px-5 text-indigo-100 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you need a full-stack developer, technical consultant, or a collaborator for your next big idea — let's connect!
          </p>
          <div class="pt-4">
            <a 
              href="mailto:agieswahyudi@gmail.com"
              class="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-indigo-50"
            >
              <i class="pi pi-envelope"></i>
              <span>Start a Conversation</span>
            </a>
          </div>
        </div>
        <div class="flex flex-row gap-6 text-4xl pt-4">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/agieswahyudi07/" class="hover:scale-110 hover:rotate-6 transition-all duration-300 hover:text-indigo-200" aria-label="GitHub">
            <i class="pi pi-github"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/agieswahyudi/" class="hover:scale-110 hover:rotate-6 transition-all duration-300 hover:text-indigo-200" aria-label="LinkedIn">
            <i class="pi pi-linkedin"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/agieswahyudi_/" class="hover:scale-110 hover:rotate-6 transition-all duration-300 hover:text-pink-200" aria-label="Instagram">
            <i class="pi pi-instagram"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:agieswahyudi@gmail.com" class="hover:scale-110 hover:rotate-6 transition-all duration-300 hover:text-indigo-200" aria-label="Email">
            <i class="pi pi-envelope"></i>
          </a>
        </div>
        <div class="text-sm text-center text-indigo-100 pt-8 border-t border-white/20 w-full max-w-md">
          <p>©2025 Agies Wahyudi. Crafted with passion in Jakarta, Indonesia.<span class="caret text-white text-xl">|</span></p>
        </div>
      </div>
    </section>

</template>

<style scoped>
/*  ANIMATIONS  */

.spin-center {
    animation: spin-center 10s linear infinite;
    display: inline-block;
    transform-origin: center center;
  }
@keyframes spin-center {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.typewriter-wrap {
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: normal; /* multiline allowed */
  line-height: 1.6;
  position: relative;
}

.caret {
  display: inline-block;
  animation: blink 0.75s step-end infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.button-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.tracking-in-contract {
	-webkit-animation: tracking-in-contract 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	        animation: tracking-in-contract 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}
@-webkit-keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}
@keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}

/*  ANIMATIONS  */

/* Animations */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

</style>

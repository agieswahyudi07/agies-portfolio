<script setup>
  import Navbar from './components/Navbar.vue'
  import WorkExperiences from './components/WorkExperiences.vue'
  import Projects from './components/Projects.vue'
  import { onMounted, ref } from 'vue'
  
  const fullText = ref("I build fast, scalable, and user-friendly web applications. With a strong foundation in both frontend and backend development, I create digital solutions that are both functional and visually engaging.")
  const typedText = ref('')
  const index = ref(0)

  function typeWriter() {
    if (index.value < fullText.value.length) {
      typedText.value += fullText.value.charAt(index.value);
      index.value++;
      setTimeout(typeWriter, 40); // kecepatan ketik per huruf
    }
  }

  onMounted(() => {
    typeWriter();
  })

</script>

<template>
    <Navbar/>
    <section id="hero" name="hero" class="min-h-dvh min-w-full border border-b-gray-300">
        <div class="mx-auto h-dvh content-center text-center space-y-10 max-w-screen-xl">
          <h1  class="tracking-in-contract text-5xl font-semibold px-5 tracking-tight md:tracking-wide z-50">Fullstack Developer</h1>
          <p class="typewriter-wrap text-base text-justify px-5 md:mx-40 md:text-center">
            {{ typedText }}<span class="caret text-amber-300 text-xl">|</span>
          </p>
        </div>
    </section>
    <section id="about-me" name="about-me" class="min-h-screen w-full border-b border-gray-300 py-10 px-5 md:content-center">
      <div class=" max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:border md:border-gray-300 md:rounded-lg md:py-20">
        <!-- Image -->
        <img v-animateonscroll="{ enterClass:'animate-enter slide-in-from-r-8 animate-duration-1000',leaveClass: 'animate-leave slide-out-to-r-8 animate-duration-1000' }" src="/images/me.jpg" alt="Agies Wahyudi Image" class="mx-auto object-center h-48 w-96 md:h-72 md:w-120 object-cover rounded-xl shadow-lg">
        <!-- Text -->
        <div v-animateonscroll="{ enterClass:'animate-enter slide-in-from-l-8 animate-duration-1000',leaveClass: 'animate-leave slide-out-to-l-8 animate-duration-1000' }" class="space-y-5 text-left max-w-md justify-self-center md:justify-self-start">
          <h1  class=" text-4xl">About <span class="font-semibold">ME</span></h1>
          <p>I'm Agies Wahyudi, a Fullstack Web Developer with 2 years of experience in Laravel 10, Vue.js, REST API development, and third-party integrations.</p>
          <p>I've built lead generation platforms, asset management systems, and custom web solutions. Skilled in backend/frontend development, database optimization, and automation,</p>
          <p>I'm passionate about solving challenges and continuously growing as a developer.</p>
        </div>
      </div>
    </section>
    <section id="experiences" name="experiences" class="min-h-screen w-full border-b border-gray-300 py-10 px-5 md:content-center">
      <h1 class=" text-4xl text-center my-10">my <span class="font-semibold">Experiences</span></h1>
      <div class=" max-w-screen-xl mx-auto grid grid-cols-1 justify-items-center md:py-5 mt-5">
        <div class="space-y-10 text-center max-w-md">
          <div class="w-full">
              <WorkExperiences/>
          </div>
        </div>
      </div>
    </section>
    <section id="projects" name="projects" class="min-h-screen w-full border-b border-gray-300 py-10 px-5 md:content-center">
      <h1 class=" text-4xl text-center my-10">my <span class="font-semibold">Projects</span></h1>
      <div class=" max-w-screen-xl mx-auto ">
        <Projects/>
      </div>
    </section>
    <section id="footer" name="footer" class="min-h-fit w-full border-b border-gray-300 py-5 px-5 md:content-center flex flex-col items-center gap-2">
        <div class="text-sm text-center">
          ©2025 Agies Wahyudi. All rights reserved.
        </div>
        <div class="flex flex-row gap-5 text-3xl">
          <a target="_blank" href="https://github.com/agieswahyudi07/">
            <i class="pi pi-github"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/agieswahyudi/">
            <i class="pi pi-linkedin"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/agieswahyudi_/">
            <i class="pi pi-instagram"></i>
          </a>
          <a target="_blank" href="mailto:agieswahyudi@gmail.com">
            <i class="pi pi-envelope"></i>
          </a>
        </div>
    </section>

</template>

<style scoped>
/*  ANIMATIONS  */

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

</style>

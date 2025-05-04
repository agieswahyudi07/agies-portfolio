<script setup>
  import Navbar from './components/Navbar.vue'
  import Cv from './components/Cv.vue'
  import WorkExperiences from './components/WorkExperiences.vue'
  import Projects from './components/Projects.vue'
  import { onMounted, ref } from 'vue'
  
  const fullText = ref("I'm a Fullstack Developer based in Jakarta. I build fast, scalable, and user-friendly web applications. With a strong foundation in both frontend and backend development, I create digital solutions that are both functional and visually engaging.")
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
    <Cv/>  
    <section id="hero" name="hero" class="relative honey-comb min-h-full min-w-full border border-b-gray-300">
        <div class="mx-auto h-dvh content-center text-center max-w-screen-xl pt-20 pb-15 md:pt-0 md:pb-0">
          <h1  class="tracking-in-contract text-lg md:text-1xl px-5 tracking-tight md:tracking-wide">Hello, my name is</h1>
          <h1  class="tracking-in-contract text-4xl md:text-6xl font-semibold px-5 tracking-tight md:tracking-wide">Ramadhan Agies Ananda Wahyudi</h1>
          <p class="typewriter-wrap text-sm md:text-base text-justify px-5 md:mx-40 md:text-center text-gray-600 mt-5">
            {{ typedText }}<span class="caret text-red-600 text-xl">|</span>
          </p>
          <div class="flex flex-row gap-5 text-2xl justify-self-center mt-5">
            <a target="_blank" href="https://github.com/agieswahyudi07/">
              <i class="pi pi-github hover:text-red-500" ></i>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/agieswahyudi/">
              <i class="pi pi-linkedin hover:text-red-500"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/agieswahyudi_/">
              <i class="pi pi-instagram hover:text-red-500"></i>
            </a>
            <a target="_blank" href="mailto:agieswahyudi@gmail.com">
              <i class="pi pi-envelope hover:text-red-500"></i>
            </a>
          </div>
        </div>
    </section>
    <section id="about-me" name="about-me" class="relative min-h-screen w-full border-b border-gray-300 py-10 px-10 md:content-center ">
        <!-- SVG decorative background -->
        <div class="absolute inset-0 -z-10">
          <img src="/images/bg-about-me.png" alt="background" class="w-full h-full object-cover object-right-bottom sm:object-bottom " />
        </div>

      <div class=" max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:border md:border-red-600 shadow-sm shadow-red-500 rounded-xl md:py-20  bg-white justify-self-center">
        <!-- Image -->
        <img v-animateonscroll="{ enterClass:'animate-enter slide-in-from-r-8 animate-duration-1000',leaveClass: 'animate-leave slide-out-to-r-8 animate-duration-1000' }" src="/images/me.jpg" alt="Agies Wahyudi Image" class="mx-auto object-center h-48 w-96 md:h-72 md:w-120 object-cover rounded-t-xl md:rounded-xl  shadow-lg">
        <!-- Text -->
        <div v-animateonscroll="{ enterClass:'animate-enter slide-in-from-l-8 animate-duration-1000',leaveClass: 'animate-leave slide-out-to-l-8 animate-duration-1000' }" class="space-y-5 text-left max-w-md justify-self-center md:justify-self-start text-gray-600 px-5 pb-5 md:pb-0 md:px-0">
          <h1  class=" text-4xl text-black">About<span class="caret text-red-600">/</span><span class="font-semibold">ME</span></h1>
          <p>I'm Agies Wahyudi, a Fullstack Web Developer with 2 years of experience in Laravel Framework, Vue.js, REST API development, and third-party integrations.</p>
          <p>I've built lead generation platforms, asset management systems, and custom web solutions. Skilled in backend/frontend development, database optimization, and automation,</p>
          <p>I'm passionate about solving challenges and continuously growing as a developer.</p>
        </div>
      </div>
    </section>
    <section id="experiences" name="experiences" class="relative min-h-screen w-full border-b border-gray-300 py-10 px-5 md:content-center">
      <h1 class=" text-4xl text-center my-10">my<span class="caret text-red-600">/</span><span class="font-semibold"></span><span class="font-semibold">Experiences</span></h1>
      <div class=" max-w-screen-xl mx-auto grid grid-cols-1 justify-items-center md:py-5 mt-5">
        <div class="space-y-10 text-center max-w-md">
          <div class="w-full">
              <WorkExperiences/>
          </div>
        </div>
      </div>
    </section>
    <section id="projects" name="projects" class="relative min-h-screen w-full border-b border-gray-300 py-10 px-5 md:content-center">
      <h1 class=" text-4xl text-center my-10">my<span class="caret text-red-600">/</span><span class="font-semibold"></span><span class="font-semibold">Projects</span></h1>
      <div class=" max-w-screen-xl mx-auto ">
        <Projects/>
      </div>
    </section>
    <section id="footer" name="footer" class="min-h-fit w-full border-b border-gray-300 py-5 px-5 md:content-center flex flex-col items-center gap-2">
        <div class="text-sm text-center">
          ©2025 Agies Wahyudi. All rights reserved.<span class="caret text-red-600 text-xl">|</span>
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

/* STYLES */
.gridlines {
  
  width: 100%;
  height: 100vh;
 
  background: #333;
  background-image: linear-gradient(rgba(255, 255, 255, 0.7) .1em, transparent .1em), linear-gradient(90deg, rgba(255, 255, 255, 0.7) .1em, transparent .1em);
  background-size: 3em 3em;
}

.wavy {
  margin: 0;
  padding: 0;
  
  width: 100%;
  height: 100vh;
 
  background-color: #1F2937;
  opacity: 1;
  background-size: 26px 26px;
  background-image: repeating-linear-gradient(45deg, #ffffff 0, #ffffff 2.6px, #1F2937 0, #1F2937 50%);
}

.honey-comb {
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.honey-comb::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.2; /* opacity background tanpa memengaruhi children */
  background:
      radial-gradient(circle farthest-side at 0% 50%,#ffffff 23.5%,#0000 0)105px 150px,
      radial-gradient(circle farthest-side at 0% 50%,#ffb5b5 24%,#0000 0)95px 150px,
      linear-gradient(#ffffff 14%,#0000 0, #0000 85%,#ffffff 0)0 0,
      linear-gradient(150deg,#ffffff 24%,#ffb5b5 0,#ffb5b5 26%,#0000 0,#0000 74%,#ffb5b5 0,#ffb5b5 76%,#ffffff 0)0 0,
      linear-gradient(30deg,#ffffff 24%,#ffb5b5 0,#ffb5b5 26%,#0000 0,#0000 74%,#ffb5b5 0,#ffb5b5 76%,#ffffff 0)0 0,
      linear-gradient(90deg,#ffb5b5 2%,#ffffff 0,#ffffff 98%,#ffb5b5 0%)0 0 #ffffff;
  background-size: 200px 300px;
  background-color: #ffffff;
}


/* STYLES */

</style>

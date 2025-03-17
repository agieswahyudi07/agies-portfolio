<script setup>
  import Navbar from './components/Navbar.vue'

</script>

<template>
    <Navbar/>
    <section id="hero" name="hero" class="min-h-dvh min-w-full border border-b-gray-300">
        <div class="mx-auto h-dvh content-center text-center space-y-10 max-w-screen-xl">
          <h1 class="text-5xl font-semibold tracking-tight md:tracking-wide">Hello, welcome to my portfolio !</h1>
          <p class="text-base text-justify md:mx-40 md:text-center">I build fast, scalable, and user-friendly web applications. With a strong foundation in both frontend and backend development, I create digital solutions that are both functional and visually engaging.</p>
        </div>
    </section>
    <section id="about-me" name="about-me" class="min-h-screen w-full border-b border-gray-300 py-10 px-5 md:content-center">
      <div class=" max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <!-- Image -->
        <img src="/images/me.jpg" alt="Agies Wahyudi Image" class="mx-auto h-48 w-96 md:h-60 md:w-120 object-cover rounded-xl shadow-lg">
        
        <!-- Text -->
        <div class="space-y-5 text-left max-w-md">
          <h1 class=" text-4xl">About <span class="font-semibold">ME</span></h1>
          <p>I'm Agies Wahyudi, a Fullstack Web Developer with 2 years of experience in Laravel 10, Vue.js, REST API development, and third-party integrations.</p>
          <p>I've built lead generation platforms, asset management systems, and custom web solutions. Skilled in backend/frontend development, database optimization, and automation,</p>
          <p>I'm passionate about solving challenges and continuously growing as a developer.</p>
        </div>
      </div>
    </section>
</template>

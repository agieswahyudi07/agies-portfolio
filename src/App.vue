<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import WorkSection from './components/WorkSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import BeyondCv from './components/BeyondCv.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
  >
    Skip to content
  </a>

  <SiteHeader />

  <main id="main">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <WorkSection />
    <SkillsSection />
    <BeyondCv />
    <EducationSection />
    <ContactSection />
  </main>

  <SiteFooter />
</template>

<script setup lang="ts">
import SiteHeader from '@widgets/header/ui/SiteHeader.vue'
import HeroSection from '@widgets/hero/ui/HeroSection.vue'
import BenefitsSection from '@widgets/benefits/ui/BenefitsSection.vue'
import CourseSection from '@widgets/course-content/ui/CourseSection.vue'
import AuthorSection from '@widgets/author/ui/AuthorSection.vue'
import GallerySection from '@widgets/gallery/ui/GallerySection.vue'
import ReviewsSection from '@widgets/reviews/ui/ReviewsSection.vue'
import TelegramSection from '@widgets/telegram/ui/TelegramSection.vue'
import OfferSection from '@widgets/offer/ui/OfferSection.vue'
import FaqSection from '@widgets/faq/ui/FaqSection.vue'
import WaveDivider from '@shared/ui/WaveDivider.vue'

const PAGE = 'var(--c-page)'
const FAFA = 'var(--c-page-2)'
const PINK = 'var(--c-pink)'
</script>

<template>
  <SiteHeader />
  <main class="page">
    <HeroSection />
    <BenefitsSection />

    <!-- pink ribbon between benefits and course -->
    <WaveDivider :from="PAGE" :to="PINK" :height="64" />
    <div class="ribbon" />
    <WaveDivider :from="PINK" :to="FAFA" :height="64" />

    <CourseSection />

    <WaveDivider :from="FAFA" :to="PINK" :height="80" />
    <AuthorSection />
    <WaveDivider :from="PINK" :to="FAFA" :height="80" />

    <GallerySection />

    <WaveDivider :from="FAFA" :to="PINK" :height="80" />
    <ReviewsSection />
    <WaveDivider :from="PINK" :to="FAFA" :height="80" />

    <TelegramSection />
    <OfferSection />

    <WaveDivider :from="FAFA" :to="PINK" :height="80" />
    <FaqSection />
  </main>
</template>

<style scoped>
.page {
  /* pull content up so the sticky header floats over the hero top */
  margin-top: -107px;
}
.ribbon {
  height: 6px;
  background: var(--c-pink);
}
@media (max-width: 760px) {
  .page {
    margin-top: -76px;
  }
}
</style>

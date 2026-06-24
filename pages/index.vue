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
import RibbonBand from '@shared/ui/RibbonBand.vue'

const PAGE = 'var(--c-page)'
const FAFA = 'var(--c-page-2)'
const PINK = 'var(--c-pink)'
</script>

<template>
  <SiteHeader />
  <main class="page">
    <HeroSection />

    <!-- mobile: benefits sits on a pink band (Figma Rectangle 47 73:809) -->
    <WaveDivider class="wd-mobile" :from="PAGE" :to="PINK" :height="64" :mobile-height="24" />
    <BenefitsSection />
    <WaveDivider class="wd-mobile" :from="PINK" :to="FAFA" :height="64" :mobile-height="24" />

    <!-- desktop: pink ribbon between benefits and course (Figma 111:3) -->
    <RibbonBand class="wd-desktop" :above="PAGE" :below="FAFA" :height="273" />

    <CourseSection />

    <WaveDivider :from="FAFA" :to="PINK" :height="80" />
    <AuthorSection />
    <!-- desktop: gallery is its own fafa section; mobile merges author+gallery+reviews on one pink band -->
    <WaveDivider class="wd-desktop" :from="PINK" :to="FAFA" :height="80" />

    <GallerySection />

    <WaveDivider class="wd-desktop" :from="FAFA" :to="PINK" :height="80" />
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
  overflow: clip;
}
/* Wave dividers that exist only on one breakpoint (mobile re-bands several sections). */
.wd-mobile {
  display: none;
}
@media (max-width: 767px) {
  .wd-desktop {
    display: none;
  }
  .wd-mobile {
    display: block;
  }
  .page {
    margin-top: -76px;
  }
}
</style>

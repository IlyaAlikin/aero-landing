<script setup lang="ts">
// Desktop frame "пк" — Figma 57:22, 1920×8676. Pixel-exact canvas; sections render
// their children at exact frame coordinates.
import FigmaCanvas from '@shared/ui/FigmaCanvas.vue'
import FrameBackgrounds from './FrameBackgrounds.vue'
import SiteHeader from '@widgets/header/ui/SiteHeader.vue'
import HeroArt from '@widgets/hero/ui/HeroArt.vue'
import HeroSection from '@widgets/hero/ui/HeroSection.vue'
import BenefitsSection from '@widgets/benefits/ui/BenefitsSection.vue'
import CourseSection from '@widgets/course-content/ui/CourseSection.vue'
import AuthorSection from '@widgets/author/ui/AuthorSection.vue'
import GallerySection from '@widgets/gallery/ui/GallerySection.vue'
import ReviewsSection from '@widgets/reviews/ui/ReviewsSection.vue'
import TelegramSection from '@widgets/telegram/ui/TelegramSection.vue'
import OfferSection from '@widgets/offer/ui/OfferSection.vue'
import FaqSection from '@widgets/faq/ui/FaqSection.vue'
</script>

<template>
  <FigmaCanvas :frame-w="1920" :frame-h="8676" class="frame">
    <HeroArt />
    <FrameBackgrounds />
    <HeroSection />
    <BenefitsSection />
    <CourseSection />
    <AuthorSection />
    <GallerySection />
    <ReviewsSection />
    <TelegramSection />
    <OfferSection />
    <FaqSection />
    <SiteHeader />
  </FigmaCanvas>
</template>

<style scoped>
.frame {
  background: var(--c-page); /* Figma frame fill #f2f2f2 */
}
</style>

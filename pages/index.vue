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
const PINK = 'var(--c-pink)'
const CLEAR = 'transparent' /* second (grey) colour of dividers → see-through */
</script>

<template>
  <SiteHeader />
  <main class="page">
    <HeroSection />

    <!-- mobile: benefits sits on a pink band with up-bulging curves (Figma 117:83) -->
    <WaveDivider class="wd-mobile" flip :from="PAGE" :to="PINK" :height="64" :mobile-height="24" />
    <BenefitsSection />
    <WaveDivider class="wd-mobile" flip :from="PINK" :to="CLEAR" :height="64" :mobile-height="24" />

    <!-- desktop: pink ribbon overlaps the cards' lower part + the dog's paws (Figma 112:23) -->
    <RibbonBand class="wd-desktop hero-overlap" :above="CLEAR" :below="CLEAR" :height="273" />

    <CourseSection />

    <!-- desktop (≥992): the pink block's wavy top is drawn inside AuthorSection (so it also clips
         the photo) and there is no bottom wave. ≤991 switches to the mobile stack, which gets its
         own pink band: top curve bulges UP at the centre (flip), bottom curve bulges DOWN (Figma 118:129). -->
    <WaveDivider class="wd-author" flip :from="PAGE" :to="PINK" :height="80" />
    <AuthorSection />
    <WaveDivider class="wd-author" :from="PINK" :to="CLEAR" :height="80" />

    <GallerySection />

    <!-- desktop: reviews top+bottom are deep wave overlays inside ReviewsSection.
         mobile: plain dividers (top like the author — flip bulge-up). -->
    <WaveDivider class="wd-mobile" flip :from="PAGE" :to="PINK" :height="80" />
    <ReviewsSection />
    <WaveDivider class="wd-mobile" :from="PINK" :to="CLEAR" :height="80" />

    <TelegramSection />
    <OfferSection />

    <WaveDivider :from="PAGE" :to="PINK" :height="80" />
    <FaqSection />
  </main>
</template>

<style scoped lang="scss">
.page {
  /* pull content up so the sticky header floats over the hero top */
  margin-top: -107px;
  overflow: clip;
}
/* Desktop pink ribbon pulled up over the cards' lower part + dog paws.
   Layering: dog (z0) < ribbon (z1) < cards (z2, set in BenefitsSection). */
.hero-overlap {
  position: relative;
  z-index: 1;
  margin-top: -101px; /* Figma 112:23: ribbon top lands 131px below the card top */

  @media (max-width: 1400px) {
    margin-top: -150px;
  }
}
/* Wave dividers that exist only on one breakpoint (mobile re-bands several sections). */
.wd-mobile {
  display: none;
}
/* Author switches to its mobile stack at ≤991 (not 767) — its top divider follows. */
.wd-author {
  display: none;
}
@media (max-width: 991px) {
  .wd-author {
    display: block;
    position: relative;
    z-index: 1;
  }
}
@media (max-width: 767px) {
  .wd-desktop {
    display: none;
  }
  .wd-mobile {
    display: block;
    position: relative;
    z-index: 1;
  }
  .page {
    margin-top: -76px;
  }
}
</style>

<script setup lang="ts">
// Hero — Figma 57:25 / 57:32 / 57:27 / 57:33. Block layout: text column + dog art.
import AppButton from '@shared/ui/AppButton.vue'
</script>

<template>
  <section class="hero">
    <div class="hero__inner container">
      <div class="hero__text">
        <h1 class="hero__title">
          <span class="dim">Научитесь создавать</span>
          <span class="accent">современные<br />и качественные</span>
          <!-- desktop keeps the forced break; mobile (Figma Heading 73:802) is one line -->
          <span class="dim">оформления <br class="hero__brk" />из шаров</span>
        </h1>
        <p class="hero__sub">
          Пошаговая система работы с шарами, материалами и техниками
          <b>от практика с реальным опытом.</b>
        </p>
        <img class="hero__dog hero__dog--mobile" src="/img/hero-dog.png" alt="Собачка из шаров" />
        <div class="hero__cta">
          <AppButton label="Перейти к покупке" variant="pink" size="lg" />
        </div>
      </div>
      <img class="hero__dog hero__dog--desktop" src="/img/hero-dog.png" alt="Собачка из шаров" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  background: var(--c-page);
  padding-top: clamp(7.5rem, 12vw, 10.625rem);
  padding-bottom: 0;
}
.hero__inner {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 1.4vw, 1.25rem);
}
.hero__text {
  flex: 1 1 0;
  min-width: 0;
}
.hero__title {
  max-width: 53.3%; /* Figma Huge Subtitle box ≈640 of 1200 col */
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: clamp(1.5rem, 3.2vw, 2.875rem); /* 24 → 46px */
  line-height: 1.2;
  text-transform: uppercase;
}
.hero__title .dim {
  display: block;
  color: rgba(27, 27, 27, 0.8);
}
.hero__title .accent {
  display: block;
  color: var(--c-pink);
  font-weight: 700;
}
.hero__sub {
  margin-top: clamp(0.75rem, 1.3vw, 1.125rem);
  max-width: 40.8%; /* ≈490 of 1200 col */
  font-family: var(--font-suisse);
  font-weight: 400;
  font-size: clamp(0.9375rem, 1.6vw, 1.4375rem); /* 15 → 23px */
  line-height: 1.45;
  letter-spacing: -0.02em; /* ≈ -0.46px at 23px, scales with font */
  color: var(--c-ink-1b);
}
.hero__sub b {
  font-weight: 700;
}
.hero__cta {
  margin-top: clamp(1.25rem, 1.95vw, 1.75rem);
  max-width: 34rem; /* 544px cap */
  width: 100%;
  box-shadow: 0 31.837px 63.674px -15.918px rgba(233, 97, 129, 0.5);
  border-radius: clamp(1.5rem, 2.8vw, 2.487rem); /* 39.796px */

  @media(max-width: 992px) {
    max-width: 20rem;
  }
}

.hero__dog--desktop {
  position: absolute; /* Figma 57:33: big head-crop anchored right, body covered by next section */
  z-index: 0;
  right: -10px;
  top: -30px;
  width: 1000px;
  max-width: 54vw;
  height: auto;
  pointer-events: none;
}
.hero__dog--mobile {
  display: none;
}

@media (max-width: 767px) {
  .hero {
    padding-top: clamp(5rem, 28vw, 7rem);
  }
  .hero__inner {
    flex-direction: column;
    text-align: center;
  }
  .hero__title {
    max-width: 100%; /* full-width centred on mobile (dog moves below) */
    font-size: clamp(1.25rem, 6.4vw, 1.75rem); /* Figma Heading 73:802 ≈24 @375 */
    line-height: 1.2;
    text-transform: none; /* Figma mobile heading is mixed-case, not uppercase */
  }
  /* Figma mobile: last line is "оформления из шаров" on ONE line (desktop keeps the break) */
  .hero__brk {
    display: none;
  }
  .hero__sub {
    margin-inline: auto;
    max-width: min(80%, 19rem); /* Figma Huge Title box ≈303 */
    font-size: clamp(0.8125rem, 4vw, 1rem); /* ≈15 @375 */
    line-height: 1.2; /* Figma mobile */
    letter-spacing: -0.02em; /* Figma tracking -0.3, scales with font */
  }
  .hero__dog--desktop {
    display: none;
  }
  /* Figma Huge Background Image 73:801: 394px wide on the 320 frame (x:-37), full-bleed.
     Button (73:803 @y466) overlaps the dog's lower body. */
  .hero__dog--mobile {
    display: block;
    width: 123vw; /* 394 / 320 — fluid */
    max-width: none;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 1.6vw 0 -32vw; /* tuck under the button, fluid */
    z-index: 0;
  }
  .hero__cta {
    position: relative;
    z-index: 1;
    height: auto;
  }
}
</style>

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
          <span class="dim">оформления<br />из шаров</span>
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

<style scoped>
.hero {
  position: relative;
  background: var(--c-page);
  padding-top: 8px; /* lift title to Figma y≈184 (measured title = pad + ~176) */
  padding-bottom: 0;
}
.hero__inner {
  display: flex;
  align-items: center;
  gap: 20px;
}
.hero__text {
  flex: 1 1 0;
  min-width: 0;
}
.hero__title {
  max-width: 640px; /* Figma Huge Subtitle box 773px in 1200 col */
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: 46px;
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
  margin-top: 18px;
  max-width: 490px;
  font-family: var(--font-suisse);
  font-weight: 400;
  font-size: 23px;
  line-height: 1.45;
  letter-spacing: -0.46px; /* Figma Huge Title ls-0.46 */
  color: var(--c-ink-1b);
}
.hero__sub b {
  font-weight: 700;
}
.hero__cta {
  margin-top: 28px;
  width: 544px;
  max-width: 100%;
  box-shadow: 0 31.837px 63.674px -15.918px rgba(233, 97, 129, 0.5);
  border-radius: 39.796px;
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

@media (max-width: 900px) {
  .hero {
    padding-top: 110px;
  }
  .hero__inner {
    flex-direction: column;
    text-align: center;
  }
  .hero__title {
    font-size: 24px;
  }
  .hero__sub {
    margin-inline: auto;
    font-size: 15px;
  }
  .hero__dog--desktop {
    display: none;
  }
  .hero__dog--mobile {
    display: block;
    width: 78%;
    margin: 6px auto 0;
  }
  .hero__cta {
    height: 68px;
  }
}
</style>

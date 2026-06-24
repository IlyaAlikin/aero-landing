<script setup lang="ts">
// Hero — fluid between two Figma frames: mobile 394 (112:44) ↔ desktop 1920 (112:43).
// Typography/spacing interpolate via clamp(); layout (row↔column) switches at 767px.
import AppButton from '@shared/ui/AppButton.vue'
</script>

<template>
  <section class="hero">
    <div class="hero__frame">
      <div class="hero__inner">
        <div class="hero__text">
          <h1 class="hero__title">
            <span class="dim">Научитесь создавать</span>
            <span class="accent">современные<br />и качественные</span>
            <!-- desktop keeps the forced break; mobile is "оформления из шаров" on one line -->
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
      </div>
      <img class="hero__dog hero__dog--desktop" src="/img/hero-dog.png" alt="Собачка из шаров" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  background: var(--c-page);
  padding-top: clamp(72px, 70.7px + 6.42vw, 170px); /* Figma: pad-top mob 72 → desktop 170 */
  padding-bottom: 0;

  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
}
@media (min-width: 1200px) {
  .hero {
    padding-top: clamp(150px, 80px + 6.25vw, 200px); /* 1200→150 … 1920→200 */
  }
}
.hero__frame {
  max-width: 1920px;
  margin-inline: auto;
  position: relative;
  container-type: inline-size; /* base for the dog's cqw offset (capped at 1920 by max-width) */
}
.hero__inner {
  width: 100%;
  max-width: 1243px;
  margin-inline: auto;
  padding-inline: 20px;
}
.hero__text {
  position: relative;
  z-index: 1;
}
.hero__title {
  max-width: clamp(300px, 177.9px + 30.99vw, 773px); /* Figma: mob 300 → desktop 773 */
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: clamp(24px, 18.32px + 1.4417vw, 46px); /* Figma: 24 → 46 */
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
  margin-top: clamp(8px, 4.64px + 0.852vw, 21px); /* Figma: 8 → 21 */
  max-width: clamp(303px, 255.76px + 11.99vw, 486px); /* Figma: 303 → 486 */
  font-family: var(--font-suisse);
  font-weight: 400;
  font-size: clamp(15px, 12.935px + 0.5242vw, 23px); /* Figma: 15 → 23 */
  line-height: clamp(18px, 14.04px + 1.006vw, 33.35px); /* Figma: lh 1.2 → 1.45 */
  letter-spacing: -0.02em; /* Figma: -0.3px@15 / -0.46px@23 → same -0.02em */
  color: var(--c-ink-1b);
}
.hero__sub b {
  font-weight: 700;
}
.hero__cta {
  margin-top: 21px; /* Figma desktop: subtitle → button */
  width: clamp(300px, 237px + 15.99vw, 544px); /* Figma: 300 → 544 */
  border-radius: clamp(21.93px, 17.317px + 1.171vw, 39.796px); /* match button radius */
  /* Figma shadow: mob 0 17.5 35 -8.8 → desktop 0 31.8 63.7 -15.9 */
  box-shadow:
    0 clamp(17.544px, 13.854px + 0.9366vw, 31.837px)
    clamp(35.088px, 27.708px + 1.8732vw, 63.674px)
    clamp(-15.918px, -6.927px - 0.4683vw, -8.772px)
    rgba(233, 97, 129, 0.5);
}
.hero__dog--desktop {
  position: absolute; /* Figma 107:5868: 1039×1250 @1920, x818 y-69 */
  z-index: 0;
  left: 42.6%; /* Figma x818 of 1920 */
  /* top scales with the CONTAINER width (same base as left/width) so the dog never drifts:
     -230px @1920 = -230/1920 = -11.98cqw. Container is capped at 1920 → offset caps too. */
  top: -11.98cqw;
  width: 62.1%; /* Figma 1039 of 1920; height auto ≈1250 (ratio 64/77) */
  height: auto;
  pointer-events: none;
}
.hero__dog--mobile {
  display: none;
}

/* ── layout switch: row → column (no fluid here, hard breakpoint) ── */
@media (max-width: 767px) {
  .hero__inner {
    text-align: center;
  }
  .hero__title {
    margin-inline: auto;
    text-transform: none; /* Figma mobile heading is mixed-case */
  }
  .hero__brk {
    display: none; /* "оформления из шаров" on one line */
  }
  .hero__sub {
    margin-inline: auto;
  }
  .hero__dog--desktop {
    display: none;
  }
  /* Figma mobile Huge Background Image 107:6588: 394px full-bleed, y215; button overlaps lower body. */
  .hero__dog--mobile {
    display: block;
    width: 100vw; /* Figma 394 of 394 — full-bleed */
    max-width: none;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: -22px 0 -182px; /* dog box top 151, button top 396 over the dog */
    z-index: 0;
  }
  .hero__cta {
    position: relative;
    z-index: 1;
    margin: 0 auto; /* centred; overlap handled by dog negative margin */
  }
}

/* 576–768: centred text reads a bit small for the viewport width — bump it up a touch */
@media (min-width: 576px) and (max-width: 767px) {
  .hero__title {
    font-size: calc(18px + 2.2vw); /* ≈31px@576 → 35px@767 (was ≈27→29) */
  }
  .hero__sub {
    font-size: calc(11px + 1.1vw); /* ≈17px@576 → 19px@767 */
  }
}
</style>

<script setup lang="ts">
// "Как выглядит обучение изнутри?" — Figma 57:300/301/295.
// #2: continuously rotating slider — thumbs duplicated ×3 for a seamless marquee.
const thumbs = [
  '/img/gallery/v1.png',
  '/img/gallery/v2.png',
  '/img/gallery/v3.png',
  '/img/gallery/v4.png',
]
const loop = [...thumbs, ...thumbs, ...thumbs]
</script>

<template>
  <section class="gallery">
    <div class="gallery__head container">
      <h2 class="gallery__title">Как выглядит обучение изнутри?</h2>
      <div class="gallery__swipe">
        <span>Листайте, чтобы посмотреть больше</span>
        <img src="/img/gallery/arrow.svg" alt="" />
      </div>
    </div>

    <div class="gallery__viewport">
      <div class="gallery__track">
        <div v-for="(t, i) in loop" :key="i" class="thumb">
          <img :src="t" alt="Видео обучения" draggable="false" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  background: var(--c-page); /* match section 1 (hero) */
  padding: clamp(2rem, 3.5vw, 3.125rem) 0 clamp(2.5rem, 4.2vw, 3.75rem);
  overflow: hidden;
}
.gallery__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(1rem, 1.7vw, 1.5rem);
  flex-wrap: wrap;
}
.gallery__title {
  font-family: var(--font-suisse);
  font-weight: 600;
  font-size: clamp(1.05rem, 2.5vw, 2.25rem); /* 16.73 → 36 */
  line-height: 1.1;
  color: var(--c-ink);
}
.gallery__swipe {
  display: inline-flex;
  align-items: center;
  gap: clamp(0.5rem, 0.85vw, 0.75rem);
  color: var(--c-ink);
}
.gallery__swipe span {
  max-width: 13.2rem; /* Figma Swipe Text box 211px -> 2 lines */
  font-family: var(--font-suisse);
  font-weight: 400;
  font-size: clamp(1rem, 1.46vw, 1.3125rem); /* 21 */
}
.gallery__swipe img {
  width: clamp(3rem, 5vw, 4.5rem); /* 72 */
  height: auto; /* thin line-arrow, not a stretched blob */
}

.gallery__viewport {
  margin-top: clamp(0.75rem, 1.4vw, 1.25rem);
  overflow: hidden;
}
.gallery__track {
  display: flex;
  gap: clamp(1rem, 3.2vw, 2.875rem); /* 46 */
  width: max-content;
  animation: marquee 28s linear infinite;
}
.gallery__track:hover {
  animation-play-state: paused;
}
.thumb {
  flex: none;
  height: clamp(7rem, 18.5vw, 16.625rem); /* 266 */
  width: auto;
  aspect-ratio: 489 / 266;
  border-radius: clamp(0.875rem, 2vw, 1.875rem); /* 30 */
  overflow: hidden;
  box-shadow: 0 4px 52px rgba(0, 0, 0, 0.06);
}
.thumb:nth-child(4n + 2) {
  aspect-ratio: 519 / 266; /* Figma: 2nd photo wider (57:297) */
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

/* one third of the track = the original 4 thumbs */
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% / 3));
  }
}

@media (max-width: 767px) {
  /* Figma: gallery is merged into the author pink band (Stats Section 73:890) */
  .gallery {
    background: var(--c-pink);
    padding: 14px 0 18px;
  }
  .gallery__title {
    font-size: 16.73px; /* Figma Internal Look Text 73:898 — Suisse Bold 16.73 */
    font-weight: 700;
    line-height: 1.25;
    color: var(--c-ink-2f); /* #2f2f2f */
    opacity: 0.8;
  }
  /* Figma mobile Stats Section has only title + image row — no swipe hint */
  .gallery__swipe {
    display: none;
  }
  .gallery__viewport {
    margin-top: 12px; /* Figma title y3890 -> image row y3947 */
  }
  .thumb {
    width: 204px; /* Figma Image Row image 204×111 */
    height: 111px;
    border-radius: 14px;
  }
  .thumb:nth-child(4n + 2) {
    width: 216px; /* Figma 2nd image 216 */
  }
  .gallery__track {
    gap: 19px; /* Figma row gap ≈19 */
  }
}
</style>

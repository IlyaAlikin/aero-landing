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
  background: var(--c-page-2);
  padding: 50px 0 60px;
  overflow: hidden;
}
.gallery__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.gallery__title {
  font-family: var(--font-suisse);
  font-weight: 600;
  font-size: 36px;
  line-height: 1.1;
  color: var(--c-ink);
}
.gallery__swipe {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--c-ink);
}
.gallery__swipe span {
  max-width: 211px; /* Figma Swipe Text box 211px -> 2 lines */
  font-family: var(--font-suisse);
  font-weight: 400;
  font-size: 21px;
}
.gallery__swipe img {
  width: 72px;
  height: 15px; /* thin line-arrow, not a stretched blob */
}

.gallery__viewport {
  margin-top: 20px;
  overflow: hidden;
}
.gallery__track {
  display: flex;
  gap: 46px;
  width: max-content;
  animation: marquee 28s linear infinite;
}
.gallery__track:hover {
  animation-play-state: paused;
}
.thumb {
  flex: none;
  width: 489px;
  height: 266px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 4px 52px rgba(0, 0, 0, 0.06);
}
.thumb:nth-child(4n + 2) {
  width: 519px; /* Figma: 2nd photo wider (57:297) */
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

@media (max-width: 760px) {
  .gallery__title {
    font-size: 22px;
  }
  .gallery__swipe span {
    font-size: 14px;
  }
  .gallery__swipe img {
    width: 54px;
  }
  .thumb {
    width: 280px;
    height: 158px;
    border-radius: 18px;
  }
  .gallery__track {
    gap: 20px;
  }
}
</style>

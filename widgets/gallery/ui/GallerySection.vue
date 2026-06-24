<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
// "Как выглядит обучение изнутри?" — Figma 57:300/301/295.
// Infinite slider: scroll-snap by slide (swipe + arrow), seamless loop, no autoplay.
const thumbs = [
  '/img/gallery/v1.png',
  '/img/gallery/v2.png',
  '/img/gallery/v3.png',
  '/img/gallery/v4.png',
]
// ×3 copies — we sit in the middle copy and jump by one period at the edges,
// so scrolling feels endless in both directions.
const loop = [...thumbs, ...thumbs, ...thumbs]

const viewport = ref<HTMLElement | null>(null)
let setW = 0 // pixel width of one copy (period)
let settle: ReturnType<typeof setTimeout> | undefined

function measure() {
  const vp = viewport.value
  if (!vp) return
  const items = vp.querySelectorAll<HTMLElement>('.thumb')
  if (items.length >= 5) setW = items[4].offsetLeft - items[0].offsetLeft
}

// silently re-centre into the middle copy once scrolling has stopped
function normalize() {
  const vp = viewport.value
  if (!vp || !setW) return
  if (vp.scrollLeft < setW) vp.scrollTo({ left: vp.scrollLeft + setW, behavior: 'instant' as ScrollBehavior })
  else if (vp.scrollLeft >= setW * 2) vp.scrollTo({ left: vp.scrollLeft - setW, behavior: 'instant' as ScrollBehavior })
}

function onScroll() {
  clearTimeout(settle)
  settle = setTimeout(normalize, 120)
}

function next() {
  const vp = viewport.value
  if (!vp) return
  const track = vp.firstElementChild as HTMLElement
  const first = track?.firstElementChild as HTMLElement | null
  const gap = track ? parseFloat(getComputedStyle(track).columnGap) || 0 : 0
  const step = first ? first.offsetWidth + gap : vp.clientWidth
  vp.scrollBy({ left: step, behavior: 'smooth' })
}

function start() {
  measure()
  if (viewport.value && setW) viewport.value.scrollTo({ left: setW, behavior: 'instant' as ScrollBehavior })
}

onMounted(async () => {
  await nextTick()
  start()
  window.addEventListener('resize', measure)
})
onBeforeUnmount(() => window.removeEventListener('resize', measure))
</script>

<template>
  <section class="gallery">
    <div class="gallery__head container">
      <h2 class="gallery__title">Как выглядит<br class="gallery__brk" /> обучение изнутри?</h2>
      <div class="gallery__swipe">
        <span>Листайте, чтобы посмотреть больше</span>
        <button class="gallery__nav" type="button" aria-label="Следующие" @click="next">
          <img src="/img/gallery/arrow.svg" alt="" />
        </button>
      </div>
    </div>

    <div ref="viewport" class="gallery__viewport" @scroll="onScroll">
      <div class="gallery__track">
        <div v-for="(t, i) in loop" :key="i" class="thumb">
          <img :src="t" alt="Видео обучения" draggable="false" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.gallery {
  background: var(--c-page); /* match section 1 (hero) */
  padding: 70px 0 85px;
  overflow: hidden;

  @media(max-width: 1440px) {
    padding: 0 0 80px 0;
  }

  @media(max-width: 768px) {
    padding: 0 0 70px 0;
  }
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
.gallery__brk {
  display: none; /* break only on mobile (Figma 107:6334) */
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
/* Figma Swipe Container: arrow 72 wide inside a 48-tall clickable area */
.gallery__nav {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 48px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
}
.gallery__nav img {
  /* SVG has preserveAspectRatio="none" → pin the box to the arrow ratio (73×14.7279)
     or it stretches into a black bar */
  width: 72px;
  aspect-ratio: 73 / 14.7279;
  height: auto;
  display: block;
}

.gallery__viewport {
  margin-top: 90px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */

  @media(max-width: 1440px) {
    margin-top: 50px;
  }

  @media(max-width: 768px) {
    margin-top: 30px;
  }

  @media(max-width: 576px) {
    margin-top: 15px;
  }
}
.gallery__viewport::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
.gallery__track {
  display: flex;
  gap: clamp(1rem, 3.2vw, 2.875rem); /* 46 */
  width: max-content;
  /* full-bleed: slides flow edge-to-edge so the loop is seamless and there is no
     empty gutter on the left */
  padding-inline: 0;
}
.thumb {
  flex: none;
  scroll-snap-align: start;
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

@media (max-width: 767px) {
  .gallery__title {
    font-size: 16.73px; /* Figma Internal Look Text 73:898 — Suisse Bold 16.73 */
    font-weight: 700;
    line-height: 1.25;
    color: var(--c-ink-2f); /* #2f2f2f */
    opacity: 0.8;
  }
  .gallery__brk {
    display: inline; /* "Как выглядит" / "обучение изнутри?" */
  }
  /* Figma mobile Stats Section has only title + image row — no swipe hint / arrow */
  .gallery__swipe {
    display: none;
  }
  .gallery__viewport {
    margin-top: 12px; /* Figma title y3890 -> image row y3947 */
  }
  .gallery__track {
    gap: 19px; /* Figma row gap ≈19 */
  }
  .thumb {
    width: 204px; /* Figma Image Row image 204×111 */
    height: 111px;
    border-radius: 14px;
  }
  .thumb:nth-child(4n + 2) {
    width: 216px; /* Figma 2nd image 216 */
  }
}
</style>

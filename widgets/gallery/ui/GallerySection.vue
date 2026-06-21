<script setup lang="ts">
// Gallery "Как выглядит обучение изнутри?" — Figma 57:300, 57:301, 57:295 (Image Row).
import { pos } from '@shared/lib/figma'

interface Thumb {
  src: string
  w: number
  h: number
}
const thumbs: Thumb[] = [
  { src: '/img/gallery/v1.png', w: 489, h: 266 },
  { src: '/img/gallery/v2.png', w: 519, h: 266 },
  { src: '/img/gallery/v3.png', w: 489, h: 258 },
  { src: '/img/gallery/v4.png', w: 489, h: 258 },
]
</script>

<template>
  <section>
    <!-- Title 57:300 @(360,3536) Suisse SemiBold 36 #1d1d1d -->
    <h2 class="title" :style="pos(360, 3536, 605)">Как выглядит обучение изнутри?</h2>

    <!-- Swipe hint 57:301 @(1277,3531) -->
    <div class="swipe" :style="pos(1277, 3531, 283, 48)">
      <span class="swipe__text">Листайте, чтобы посмотреть больше</span>
      <img class="swipe__arrow" src="/img/gallery/arrow.svg" alt="" />
    </div>

    <!-- Image row 57:295 @(-36,3676) gap 46, bleeds off right -->
    <div class="row" :style="pos(-36, 3676)">
      <div v-for="(t, i) in thumbs" :key="i" class="thumb" :style="{ width: t.w + 'px', height: t.h + 'px' }">
        <img :src="t.src" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.title {
  font-family: var(--font-suisse);
  font-weight: 600;
  font-size: 36px;
  line-height: 1.1;
  color: var(--c-ink);
  white-space: nowrap;
}

.swipe {
  display: flex;
  align-items: center;
  gap: 0;
}
.swipe__text {
  width: 211px;
  font-family: var(--font-suisse);
  font-weight: 400;
  font-size: 21px;
  line-height: 1.1;
  color: var(--c-ink);
}
.swipe__arrow {
  width: 72px;
  height: 16px;
}

.row {
  display: flex;
  gap: 46px;
  align-items: flex-start;
}
.thumb {
  flex: none;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 4px 52px rgba(0, 0, 0, 0.06);
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}
</style>

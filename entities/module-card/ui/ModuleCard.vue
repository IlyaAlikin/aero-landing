<script setup lang="ts">
// Telegram module card — Figma 57:247 / 57:264 / 57:279. Blue card with title, description,
// faint dashed lines and a white photo-collage box (two tilted photos).
import type { CSSProperties } from 'vue'

interface Photo {
  src: string
  rot: number
  x: number
  y: number
  w: number
  h: number
}
defineProps<{ title: string[]; desc: string; photos: Photo[] }>()

const LINE_XS = [194, 218, 241, 265, 289, 313, 337]

function photoStyle(p: Photo): CSSProperties {
  return {
    position: 'absolute',
    left: `${p.x}px`,
    top: `${p.y}px`,
    width: `${p.w}px`,
    height: `${p.h}px`,
    transform: `rotate(${p.rot}deg)`,
    borderRadius: '20px',
    objectFit: 'cover',
  }
}
</script>

<template>
  <div class="mod">
    <!-- faint dashed lines (57:250–256) -->
    <img
      v-for="lx in LINE_XS"
      :key="lx"
      class="mod__line"
      src="/img/modules/line.svg"
      alt=""
      aria-hidden="true"
      :style="{ left: lx + 'px', top: '137px' }"
    />

    <!-- white photo box (57:257) @(28,28) 308×193 r28 -->
    <div class="mod__box">
      <img v-for="(p, i) in photos" :key="i" :src="p.src" alt="" :style="photoStyle(p)" />
    </div>

    <h3 class="mod__title" :style="{ top: '230px' }">
      <template v-for="(l, i) in title" :key="i">{{ l }}<br v-if="i < title.length - 1" /></template>
    </h3>
    <p class="mod__desc">{{ desc }}</p>
  </div>
</template>

<style scoped>
.mod {
  position: absolute;
  inset: 0;
  background: var(--c-blue);
  border-radius: 28.692px;
  overflow: hidden;
}
.mod__line {
  position: absolute;
  width: 169px;
  height: 1.2px;
  transform-origin: 0 0;
  transform: rotate(90deg);
  pointer-events: none;
}
.mod__box {
  position: absolute;
  left: 28px;
  top: 28px;
  width: 308px;
  height: 193px;
  background: var(--c-white);
  border-radius: 28px;
  overflow: hidden;
}
.mod__box img {
  pointer-events: none;
}
.mod__title {
  position: absolute;
  left: 29px;
  font-family: var(--font-inter);
  font-weight: 700;
  font-size: 23.662px;
  line-height: 1.3;
  letter-spacing: -0.7099px;
  color: var(--c-white);
}
.mod__desc {
  position: absolute;
  left: 28px;
  top: 296px;
  width: 309px;
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 17.036px;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.8);
}
</style>

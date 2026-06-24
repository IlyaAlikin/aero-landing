<script setup lang="ts">
// Telegram module card — Figma 57:247 / 57:264 / 57:279. Blue card with title, description,
// faint dashed lines and a white photo-collage box (two tilted photos).
// Fully fluid: the parent (.tg__module) is a size container; every internal dimension is
// expressed in cqw (% of the card width) so the whole card scales smoothly with its column.
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

// Design card width = 364px → 1cqw = 3.64px. Convert any design px to cqw.
const DESIGN_W = 364
const cq = (v: number) => `${((v * 100) / DESIGN_W).toFixed(4)}cqw`

function photoStyle(p: Photo): CSSProperties {
  return {
    position: 'absolute',
    left: cq(p.x),
    top: cq(p.y),
    width: cq(p.w),
    height: cq(p.h),
    transform: `rotate(${p.rot}deg)`,
    borderRadius: cq(20),
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
      :style="{ left: cq(lx), top: cq(137), width: cq(169), height: cq(1.2) }"
    />

    <!-- white photo box (57:257) @(28,28) 308×193 r28 -->
    <div class="mod__box" :style="{ left: cq(28), top: cq(28), width: cq(308), height: cq(193), borderRadius: cq(28) }">
      <img v-for="(p, i) in photos" :key="i" :src="p.src" alt="" :style="photoStyle(p)" />
    </div>

    <h3 class="mod__title" :style="{ left: cq(29), top: cq(230), fontSize: cq(23.662), letterSpacing: cq(-0.7099) }">
      <template v-for="(l, i) in title" :key="i">{{ l }}<br v-if="i < title.length - 1" /></template>
    </h3>
    <p class="mod__desc" :style="{ left: cq(28), top: cq(296), width: cq(309), fontSize: cq(17.036) }">{{ desc }}</p>
  </div>
</template>

<style scoped>
.mod {
  position: absolute;
  inset: 0;
  background: var(--c-blue);
  border-radius: 7.882cqw; /* 28.692px / 364 */
  overflow: hidden;
}
.mod__line {
  position: absolute;
  transform-origin: 0 0;
  transform: rotate(90deg);
  pointer-events: none;
}
.mod__box {
  position: absolute;
  background: var(--c-white);
  overflow: hidden;
}
.mod__box img {
  pointer-events: none;
}
.mod__title {
  position: absolute;
  margin: 0;
  font-family: var(--font-inter);
  font-weight: 700;
  line-height: 1.3;
  color: var(--c-white);
}
.mod__desc {
  position: absolute;
  margin: 0;
  font-family: var(--font-inter);
  font-weight: 400;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.8);
}
</style>

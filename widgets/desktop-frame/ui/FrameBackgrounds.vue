<script setup lang="ts">
// Frame background layers — Figma 57:22 background rects & wave dividers, in z-order.
import { pos } from '@shared/lib/figma'

type Kind = 'pink' | 'fafafa' | 'white' | 'waveA' | 'waveB'
interface Bg {
  k: Kind
  r: [number, number, number, number]
}

const layers: Bg[] = [
  { k: 'pink', r: [0, 3462, 1920, 672] }, // 57:26
  { k: 'waveA', r: [0, 864, 1920, 215] }, // 57:34
  { k: 'fafafa', r: [0, 1022, 1920, 7875] }, // 57:35
  { k: 'waveB', r: [0, 7549, 1920, 215] }, // 57:36
  { k: 'waveB', r: [0, 5123, 1920, 215] }, // 57:37
  { k: 'waveB', r: [0, 4096, 1920, 215] }, // 57:38
  { k: 'pink', r: [0, 7762, 1920, 1555] }, // 57:39 FAQ
  { k: 'pink', r: [0, 4311, 1920, 597] }, // 57:48 reviews
  { k: 'pink', r: [0, 2400, 1920, 1066] }, // 57:59 author
  { k: 'waveA', r: [0, 2319, 1920, 215] }, // 57:127 author wavy top
  { k: 'white', r: [0, 8897, 1920, 653] }, // 57:369
]

const SOLID: Record<string, string> = {
  pink: 'var(--c-pink)',
  fafafa: 'var(--c-page-2)',
  white: 'var(--c-white)',
}
</script>

<template>
  <template v-for="(l, i) in layers" :key="i">
    <img
      v-if="l.k === 'waveA' || l.k === 'waveB'"
      class="wave"
      :src="l.k === 'waveA' ? '/img/wave-a.svg' : '/img/wave-b.svg'"
      :style="pos(l.r[0], l.r[1], l.r[2], l.r[3])"
      alt=""
      aria-hidden="true"
    />
    <div v-else :style="{ ...pos(l.r[0], l.r[1], l.r[2], l.r[3]), background: SOLID[l.k] }" />
  </template>
</template>

<style scoped>
.wave {
  display: block;
}
</style>

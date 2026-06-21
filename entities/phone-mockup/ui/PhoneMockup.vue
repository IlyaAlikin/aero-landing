<script setup lang="ts">
// iPhone-12 (wooden hand) mockup — Figma 57:201 / 57:209 / 57:217. Frame image with the
// screen content masked to the screen shape (mask svg 85eac743). 339×685.
import type { CSSProperties } from 'vue'
import { computed } from 'vue'

const props = defineProps<{ variant: 1 | 2 | 3 }>()

interface Layer {
  img?: string
  black?: boolean
  x: number
  y: number
  w: number
  h: number
  mx: number
  my: number
}

const MASK = '/img/phones/screen-mask.svg'

const variants: Record<number, Layer[]> = {
  1: [
    { black: true, x: 18, y: 15, w: 302, h: 652, mx: 1, my: 1 },
    { img: '/img/phones/p1.png', x: 19, y: 245, w: 301, h: 153, mx: 0, my: -229 },
  ],
  2: [
    { img: '/img/phones/p2-screen.png', x: 18, y: 15, w: 302, h: 652, mx: 1, my: 1 },
    { img: '/img/phones/p2-icon.png', x: 19, y: -8, w: 322, h: 683, mx: 0, my: 24 },
  ],
  3: [
    { black: true, x: 18, y: 15, w: 302, h: 652, mx: 1, my: 1 },
    { img: '/img/phones/p3.png', x: 19, y: 291, w: 321, h: 127, mx: 0, my: -275 },
  ],
}

const layers = computed(() => variants[props.variant])

function layerStyle(l: Layer): CSSProperties {
  return {
    position: 'absolute',
    left: `${l.x}px`,
    top: `${l.y}px`,
    width: `${l.w}px`,
    height: `${l.h}px`,
    background: l.black ? '#000' : undefined,
    maskImage: `url(${MASK})`,
    WebkitMaskImage: `url(${MASK})`,
    maskSize: '301px 651px',
    WebkitMaskSize: '301px 651px',
    maskPosition: `${l.mx}px ${l.my}px`,
    WebkitMaskPosition: `${l.mx}px ${l.my}px`,
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
  }
}
</script>

<template>
  <div class="phone">
    <img class="phone__frame" src="/img/phones/frame.png" alt="" />
    <div v-for="(l, i) in layers" :key="i" :style="layerStyle(l)">
      <img v-if="l.img" :src="l.img" alt="" />
    </div>
  </div>
</template>

<style scoped>
.phone {
  position: relative;
  width: 339px;
  height: 685px;
  flex: none;
}
.phone__frame {
  position: absolute;
  inset: 0;
  width: 339px;
  height: 685px;
  object-fit: fill;
}
.phone div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>

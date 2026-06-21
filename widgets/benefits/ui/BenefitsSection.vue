<script setup lang="ts">
// Benefits row — Figma 57:93 / 57:104 / 57:115 @ y733, x 360/768/1176, 385×189, r=30.315.
import type { CSSProperties } from 'vue'
import { pos } from '@shared/lib/figma'

interface Card {
  x: number
  title: string[]
  desc: string[]
  img: string
  imgWrap: CSSProperties
  imgStyle: CSSProperties
}

const LINE_XS = [205, 230, 255, 280, 306, 331, 356]

const cards: Card[] = [
  {
    x: 360,
    title: ['Сертификат', 'об обучении'],
    desc: ['Выдаем сертификат после', 'прохождения обучения'],
    img: '/img/bcard-cert.png',
    imgWrap: { ...pos(210, 54, 211, 151), overflow: 'hidden' },
    // 57:103 inner scale/offset
    imgStyle: { position: 'absolute', width: '139.36%', height: '129.4%', left: '-19.4%', top: '-14.7%', maxWidth: 'none' },
  },
  {
    x: 768,
    title: ['Проверенные', 'методы'],
    desc: ['Обучаем проверенным', 'техникам работ'],
    img: '/img/bcard-balloons.png',
    imgWrap: pos(152, -86, 275, 412), // 57:114 overflows top
    imgStyle: { position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' },
  },
  {
    x: 1176,
    title: ['Обучаем', 'базе'],
    desc: ['Понятная база', 'по аэродизайну'],
    img: '/img/bcard-dog.png',
    imgWrap: pos(143, -22, 224, 270), // 57:125, mirrored
    imgStyle: { position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' },
  },
]
</script>

<template>
  <article v-for="c in cards" :key="c.x" class="bcard" :style="pos(c.x, 733, 385, 189)">
    <!-- decorative dashed lines (57:96–102) -->
    <img
      v-for="lx in LINE_XS"
      :key="lx"
      class="bcard__line"
      src="/img/card-line.svg"
      alt=""
      aria-hidden="true"
      :style="{ left: lx + 'px', top: '1px' }"
    />

    <div class="bcard__imgwrap" :style="c.imgWrap">
      <img :src="c.img" :style="c.imgStyle" alt="" />
    </div>

    <h3 class="bcard__title" :style="pos(30, 51)">
      <template v-for="(l, i) in c.title" :key="i">{{ l }}<br v-if="i < c.title.length - 1" /></template>
    </h3>
    <p class="bcard__desc" :style="pos(30, 113)">
      <template v-for="(l, i) in c.desc" :key="i">{{ l }}<br v-if="i < c.desc.length - 1" /></template>
    </p>
  </article>
</template>

<style scoped>
.bcard {
  background: var(--c-white);
  border-radius: 30.315px;
  overflow: hidden;
}

.bcard__line {
  position: absolute;
  width: 178px;
  height: 1.263px;
  transform-origin: 0 0;
  transform: rotate(90deg);
  pointer-events: none;
}

.bcard__imgwrap {
  pointer-events: none;
}
.bcard__imgwrap img {
  display: block;
}

.bcard__title {
  font-family: var(--font-inter);
  font-weight: 700;
  font-size: 21.22px;
  line-height: 1.3;
  letter-spacing: -0.6366px;
  color: var(--c-black);
  white-space: nowrap;
}
.bcard__desc {
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 12.884px;
  line-height: 1.3;
  color: rgba(0, 0, 0, 0.8);
  white-space: nowrap;
}
</style>

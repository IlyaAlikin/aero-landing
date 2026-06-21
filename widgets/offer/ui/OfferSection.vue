<script setup lang="ts">
// Offer + pricing — Figma 57:304 (slogan), 57:305-319 (polaroids), 57:320/336/342 (features),
// 57:348 (pricing panel with 2 gradient cards + 2 buttons).
import { pos } from '@shared/lib/figma'
import AppButton from '@shared/ui/AppButton.vue'

interface Polaroid {
  src: string
  x: number
  y: number
  w: number
  h: number
  rot: number
}
const polaroids: Polaroid[] = [
  { src: '/img/offer/p1.png', x: 1154, y: 6532, w: 293, h: 322, rot: -17.16 },
  { src: '/img/offer/p2.png', x: 1278, y: 6700, w: 293, h: 322, rot: 0 },
  { src: '/img/offer/p3.png', x: 797, y: 6749, w: 293, h: 322, rot: 11.46 },
  { src: '/img/offer/p4.png', x: 1435, y: 6960, w: 211, h: 232, rot: 17.06 },
  { src: '/img/offer/p5.png', x: 1014, y: 6830, w: 358, h: 393, rot: -11.1 },
]

interface Feature {
  y: number
  title: string[]
  tw: number
  img: string
  flip?: boolean
  cover?: boolean
}
const features: Feature[] = [
  { y: 6714, title: ['Полный доступ', 'к программе'], tw: 154, img: '/img/bcard-balloons.png' },
  { y: 6830, title: ['Сертификат', 'после завершения'], tw: 190, img: '/img/bcard-cert.png', cover: true },
  { y: 6958, title: ['Доступ из любой точки мира'], tw: 190, img: '/img/offer/globe.png', flip: true },
]

const ICON_GRAD =
  'linear-gradient(97.38deg, #ff1e8b 28.5%, #ff75b0 81.5%)'
</script>

<template>
  <section id="pricing">
    <!-- Slogan 57:304 @(362,6461) Suisse Light 64.582 -->
    <h2 class="slogan" :style="pos(362, 6461, 804)">
      Начните создавать красивые <b>композиции&nbsp; из шаров уже сегодня</b>
    </h2>

    <!-- Polaroids 57:305-319 -->
    <div
      v-for="(p, i) in polaroids"
      :key="i"
      class="polaroid"
      :style="{ ...pos(p.x, p.y, p.w, p.h), transform: `rotate(${p.rot}deg)` }"
    >
      <img class="polaroid__photo" :src="p.src" alt="" />
      <img class="polaroid__frame" src="/img/offer/frame.png" alt="" />
    </div>

    <!-- Feature rows 57:320/336/342 @(362, y) 325×116 r7.334 -->
    <div v-for="(f, i) in features" :key="i" class="feat" :style="pos(362, f.y, 325, 116)">
      <div class="feat__icon" :style="{ backgroundImage: ICON_GRAD }">
        <img :src="f.img" alt="" :class="{ 'feat__img--flip': f.flip }" />
      </div>
      <p class="feat__text" :style="{ width: f.tw + 'px' }">
        <template v-for="(l, j) in f.title" :key="j">{{ l }}<br v-if="j < f.title.length - 1" /></template>
      </p>
    </div>

    <!-- Pricing panel 57:348 @(362,7073) 1066×426 r15 -->
    <div class="panel" :style="pos(362, 7073, 1066, 426)" />

    <!-- headers -->
    <p class="ph ph--heavy" :style="pos(377, 7126, 422)">Стоимость курса “Баблс”</p>
    <p class="ph" :style="pos(902, 7085, 431)">Стоимость курса <b>“Аэродизайн с нуля”</b></p>

    <!-- price cards -->
    <div class="pcard pcard--pink" :style="pos(377, 7191, 513, 155)" />
    <div class="pcard pcard--beige" :style="pos(902, 7191, 513, 155)" />

    <!-- prices -->
    <p class="price price--white" :style="pos(444, 7244, 249)">8 990₽</p>
    <p class="price price--old price--old-w" :style="pos(710, 7258, 114)">9 990₽</p>
    <p class="price price--dark" :style="pos(959, 7244, 271)">10 990₽</p>
    <p class="price price--old price--old-d" :style="pos(1248, 7258, 129)">15 990₽</p>

    <!-- buttons -->
    <div class="pbtn" :style="{ ...pos(377, 7374, 512, 113), boxShadow: '0 28.395px 56.79px -14.197px rgba(233,97,129,0.5)' }">
      <AppButton label="Перейти к покупке" variant="pink" size="md" />
    </div>
    <div class="pbtn" :style="{ ...pos(902, 7374, 512, 113), boxShadow: '0 28.395px 56.79px -14.197px rgba(245,200,169,0.5)' }">
      <AppButton label="Перейти к покупке" variant="beige" size="md" />
    </div>
  </section>
</template>

<style scoped>
.slogan {
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: 64.582px;
  line-height: 1.2;
  color: var(--c-ink);
}
.slogan b {
  font-weight: 700;
}

.polaroid {
  transform-origin: center;
}
.polaroid__photo,
.polaroid__frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.polaroid__photo {
  object-fit: cover;
  border-radius: 8px;
  padding: 6%;
}

.feat {
  background: var(--c-white);
  border-radius: 7.334px;
  overflow: hidden;
}
.feat__icon {
  position: absolute;
  left: 24px;
  top: 15px;
  width: 76px;
  height: 85px;
  border-radius: 4.89px;
  overflow: hidden;
}
.feat__icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.feat__img--flip {
  transform: scaleX(-1);
}
.feat__text {
  position: absolute;
  left: 122px;
  top: 36px;
  font-family: var(--font-suisse);
  font-weight: 600;
  font-size: 18.744px;
  line-height: 1.15;
  color: var(--c-ink-2f);
}

.panel {
  background: var(--c-white);
  border-radius: 15px;
  box-shadow: 0 4px 67px rgba(0, 0, 0, 0.06);
}

.ph {
  font-family: var(--font-sf);
  font-weight: 400;
  font-size: 32.04px;
  line-height: 1.25;
  letter-spacing: 0.32px;
  color: var(--c-ink-20);
}
.ph--heavy,
.ph b {
  font-weight: 800;
}

.pcard {
  border-radius: 32.716px;
  box-shadow: inset 1.258px 1.258px 100px rgba(255, 255, 255, 0.3);
}
.pcard--pink {
  background: linear-gradient(to right, #e96181 0%, #ff87a3 47.6%, #e96181 100%);
}
.pcard--beige {
  background: linear-gradient(to right, #f5c8a9 0%, #ffdcc4 47.6%, #f5c8a9 100%);
}

.price {
  font-family: var(--font-sf);
  font-weight: 600;
  font-size: 69.207px;
  line-height: 48.323px;
  letter-spacing: 0.692px;
  text-transform: uppercase;
  white-space: nowrap;
}
.price--old {
  white-space: nowrap;
}
.price--white {
  color: var(--c-white);
}
.price--dark {
  color: var(--c-ink-20);
}
.price--old {
  font-weight: 500;
  font-size: 32.04px;
  line-height: 22.372px;
  letter-spacing: 0.32px;
  text-decoration: line-through;
}
.price--old-w {
  color: rgba(255, 255, 255, 0.4);
}
.price--old-d {
  color: rgba(32, 32, 32, 0.4);
}

.pbtn {
  border-radius: 35.494px;
}
</style>

<script setup lang="ts">
// "Что внутри курса?" — Figma 57:75 (title) + 7 cards (57:42–57:72). Each card = white
// rounded rect + pink icon tile + masked white icon + title + description, at frame coords.
import type { CSSProperties } from 'vue'
import { pos } from '@shared/lib/figma'

interface Card {
  rect: [number, number, number, number]
  tile: [number, number, number, number]
  icon: { src?: string; plus?: boolean; x: number; y: number; w: number; h: number }
  title: { t: string; x: number; y: number }
  desc: { t: string; x: number; y: number; w: number }
}

const cards: Card[] = [
  {
    rect: [360, 1312, 373, 285], tile: [394, 1280, 67, 66],
    icon: { plus: true, x: 415, y: 1300, w: 26, h: 26 },
    title: { t: 'Основы', x: 394, y: 1379 },
    desc: { t: 'Освоите базовые принципы аэродизайна, научитесь уверенно работать с шарами и разберётесь в инструментах, которые используются в профессии.', x: 394, y: 1435, w: 339 },
  },
  {
    rect: [774, 1312, 372, 285], tile: [809, 1280, 66, 66],
    icon: { src: '/img/ic/report.png', x: 823, y: 1291, w: 43, h: 43 },
    title: { t: 'Подготовка', x: 809, y: 1379 },
    desc: { t: 'Поймёте, как правильно подготавливать и обрабатывать шары, чтобы избежать брака и увеличить срок службы готовых оформлений.', x: 809, y: 1435, w: 332 },
  },
  {
    rect: [1187, 1312, 373, 285], tile: [1222, 1280, 67, 66],
    icon: { src: '/img/ic/school.png', x: 1234, y: 1292, w: 43, h: 43 },
    title: { t: 'Материалы', x: 1223, y: 1379 },
    desc: { t: 'Научитесь выбирать качественные материалы для разных задач, будете понимать, что действительно стоит использовать в работе.', x: 1223, y: 1435, w: 327 },
  },
  {
    rect: [360, 1652, 569, 285], tile: [394, 1620, 67, 66],
    icon: { src: '/img/ic/technique.png', x: 406, y: 1630, w: 43, h: 43 },
    title: { t: 'Техники', x: 394, y: 1719 },
    desc: { t: 'Освоите практические приёмы и современные техники, которые помогут создавать аккуратные, эстетичные и востребованные оформления.', x: 394, y: 1775, w: 461 },
  },
  {
    rect: [993, 1652, 567, 285], tile: [1027, 1620, 67, 66],
    icon: { src: '/img/ic/warning.png', x: 1039, y: 1631, w: 43, h: 43 },
    title: { t: 'Ошибки', x: 1027, y: 1719 },
    desc: { t: 'Разберёте самые распространённые ошибки в работе аэродизайнеров, научитесь их предотвращать и находить решения в нестандартных ситуациях.', x: 1027, y: 1775, w: 406 },
  },
  {
    rect: [360, 1992, 569, 285], tile: [394, 1960, 67, 66],
    icon: { src: '/img/ic/system.png', x: 411, y: 1976, w: 33, h: 33 },
    title: { t: 'Система работы', x: 394, y: 2059 },
    desc: { t: 'Выстроите понятный алгоритм работы от подготовки материалов до готового результата, чтобы выполнять заказы быстрее, увереннее и без хаоса.', x: 394, y: 2115, w: 474 },
  },
  {
    rect: [975, 1992, 567, 285], tile: [1027, 1960, 67, 66],
    icon: { src: '/img/ic/tree.png', x: 1042, y: 1974, w: 37, h: 37 },
    title: { t: 'Виды шаров', x: 1027, y: 2059 },
    desc: { t: 'Научитесь выбирать качественные шары и использовать их максимально эффективно.', x: 1027, y: 2115, w: 406 },
  },
]

function maskStyle(src: string): CSSProperties {
  return {
    maskImage: `url(${src})`,
    WebkitMaskImage: `url(${src})`,
  }
}
</script>

<template>
  <section id="course">
    <!-- Title 57:75 @(536,1179) w849, Suisse Light 64.582 center -->
    <h2 class="title" :style="pos(536, 1179, 849)">
      Что <b>внутри курса?</b>
    </h2>

    <template v-for="c in cards" :key="c.title.t">
      <div class="card" :style="pos(...c.rect)" />
      <div class="tile" :style="pos(...c.tile)" />

      <span v-if="c.icon.plus" class="plus" :style="pos(c.icon.x, c.icon.y, c.icon.w, c.icon.h)">
        <i class="plus__v" /><i class="plus__h" />
      </span>
      <span
        v-else
        class="icon"
        :style="{ ...pos(c.icon.x, c.icon.y, c.icon.w, c.icon.h), ...maskStyle(c.icon.src!) }"
      />

      <h3 class="card__title" :style="pos(c.title.x, c.title.y)">{{ c.title.t }}</h3>
      <p class="card__desc" :style="pos(c.desc.x, c.desc.y, c.desc.w)">{{ c.desc.t }}</p>
    </template>
  </section>
</template>

<style scoped>
.title {
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: 64.582px;
  line-height: 1.2;
  color: var(--c-ink);
  text-align: center;
}
.title b {
  font-weight: 700;
}

.card {
  background: var(--c-white);
  border-radius: 40px; /* 57:45 */
}
.tile {
  background: var(--c-pink);
  border-radius: 20px; /* 57:65 */
}

.icon {
  background-color: var(--c-white);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
}

/* Plus icon 57:72 — two white rounded bars */
.plus {
  display: block;
}
.plus__v,
.plus__h {
  position: absolute;
  background: var(--c-white);
  border-radius: 2px;
}
.plus__v {
  left: 11px;
  top: 0;
  width: 4px;
  height: 26px;
}
.plus__h {
  left: 0;
  top: 11px;
  width: 26px;
  height: 4px;
}

.card__title {
  font-family: var(--font-suisse);
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
  color: var(--c-black);
  white-space: nowrap;
}
.card__desc {
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: 18px;
  line-height: 1.5;
  color: var(--c-black);
}
</style>

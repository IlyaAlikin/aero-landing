<script setup lang="ts">
// "Что внутри курса?" — Figma 57:75 + 7 cards. Block grid (3 / 2 / 2), icons masked white.
import type { CSSProperties } from 'vue'

interface Card {
  title: string
  desc: string
  icon?: string
  plus?: boolean
  iconSize: number
  wide: boolean
}
const cards: Card[] = [
  { title: 'Основы', desc: 'Освоите базовые принципы аэродизайна, научитесь уверенно работать с шарами и разберётесь в инструментах, которые используются в профессии.', plus: true, iconSize: 26, wide: false },
  { title: 'Подготовка', desc: 'Поймёте, как правильно подготавливать и обрабатывать шары, чтобы избежать брака и увеличить срок службы готовых оформлений.', icon: '/img/ic/report.png', iconSize: 43, wide: false },
  { title: 'Материалы', desc: 'Научитесь выбирать качественные материалы для разных задач, будете понимать, что действительно стоит использовать в работе.', icon: '/img/ic/school.png', iconSize: 43, wide: false },
  { title: 'Техники', desc: 'Освоите практические приёмы и современные техники, которые помогут создавать аккуратные, эстетичные и востребованные оформления.', icon: '/img/ic/technique.png', iconSize: 43, wide: true },
  { title: 'Ошибки', desc: 'Разберёте самые распространённые ошибки в работе аэродизайнеров, научитесь их предотвращать и находить решения в нестандартных ситуациях.', icon: '/img/ic/warning.png', iconSize: 43, wide: true },
  { title: 'Система работы', desc: 'Выстроите понятный алгоритм работы от подготовки материалов до готового результата, чтобы выполнять заказы быстрее, увереннее и без хаоса.', icon: '/img/ic/system.png', iconSize: 33, wide: true },
  { title: 'Виды шаров', desc: 'Научитесь выбирать качественные шары и использовать их максимально эффективно.', icon: '/img/ic/tree.png', iconSize: 37, wide: true },
]
function maskStyle(src: string, size: number): CSSProperties {
  return { maskImage: `url(${src})`, WebkitMaskImage: `url(${src})`, width: `${size}px`, height: `${size}px` }
}
</script>

<template>
  <section id="course" class="course">
    <div class="container">
      <h2 class="course__title">Что <b>внутри курса?</b></h2>
      <div class="course__grid">
        <article v-for="c in cards" :key="c.title" class="cc" :class="{ 'cc--wide': c.wide }">
          <span class="cc__tile">
            <span v-if="c.plus" class="cc__plus"><i /><i /></span>
            <span v-else class="cc__icon" :style="maskStyle(c.icon!, c.iconSize)" />
          </span>
          <h3 class="cc__title">{{ c.title }}</h3>
          <p class="cc__desc">{{ c.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.course {
  background: var(--c-page-2);
  padding: 56px 0 80px;
}
.course__title {
  text-align: center;
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: 64.582px;
  line-height: 1.2;
  color: var(--c-ink);
  margin-bottom: 55px; /* tighter title->cards gap per macet */
}
.course__title b {
  font-weight: 700;
}
.course__grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 55px 41px; /* Figma row≈55 / col≈41 */
}
.cc {
  position: relative;
  grid-column: span 2;
  min-height: 285px;
  background: var(--c-white);
  border-radius: 40px;
  padding: 70px 34px 30px;
}
.cc--wide {
  grid-column: span 3;
}
.cc__tile {
  position: absolute;
  top: -33px;
  left: 34px;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background: var(--c-pink);
  display: flex;
  align-items: center;
  justify-content: center;
}
.cc__icon {
  background-color: var(--c-white);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
}
.cc__plus {
  position: relative;
  width: 26px;
  height: 26px;
}
.cc__plus i {
  position: absolute;
  background: var(--c-white);
  border-radius: 2px;
}
.cc__plus i:first-child {
  left: 11px;
  top: 0;
  width: 4px;
  height: 26px;
}
.cc__plus i:last-child {
  left: 0;
  top: 11px;
  width: 26px;
  height: 4px;
}
.cc__title {
  font-family: var(--font-suisse);
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
  color: var(--c-black);
}
.cc__desc {
  margin-top: 22px; /* Figma desc @1435 vs title @1379 */
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: 18px;
  line-height: 1.5;
  color: var(--c-black);
}

@media (max-width: 900px) {
  .course__title {
    font-size: 24px;
    margin-bottom: 56px;
  }
  .course__grid {
    grid-template-columns: 1fr;
    gap: 42px; /* Figma item pitch 16 + badge overhang 26 */
  }
  .cc,
  .cc--wide {
    grid-column: auto;
    min-height: 0;
    border-radius: 32.279px; /* Figma rounded-[32.279px] */
    padding: 54px 27px 28px; /* Figma title top80 (card top26 -> 54), left 27 */
  }
  .cc__tile {
    width: 54px; /* Figma 54×53 */
    height: 53px;
    top: -26px; /* Figma card top 26 -> badge sits above */
    left: 27px;
    border-radius: 16.139px; /* Figma */
  }
  .cc__title {
    font-size: 17.753px; /* Figma Suisse Medium 17.753 */
  }
  .cc__desc {
    margin-top: 18px; /* Figma title top80 -> desc top125 */
    font-size: 14.525px; /* Figma Suisse Light 14.525 */
  }
}
</style>

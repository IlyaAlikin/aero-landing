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
  // size is relative to the 67px tile, which is a size container → scale the icon with it.
  const c = `${((size * 100) / 67).toFixed(2)}cqw`
  return { maskImage: `url(${src})`, WebkitMaskImage: `url(${src})`, width: c, height: c }
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
  padding: clamp(2.25rem, 4vw, 3.5rem) 0 clamp(2.5rem, 5.5vw, 5rem);
}
.course__title {
  text-align: center;
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: clamp(1.5rem, 4.5vw, 4.036rem); /* 24 → 64.582px */
  line-height: 1.2;
  color: var(--c-ink);
  margin-bottom: clamp(2.375rem, 3.8vw, 3.4375rem); /* 55px */
}
.course__title b {
  font-weight: 700;
}
.course__grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: clamp(2.25rem, 3.8vw, 3.4375rem) clamp(1.25rem, 2.85vw, 2.5625rem); /* row≈55 / col≈41 */
}
.cc {
  position: relative;
  grid-column: span 2;
  min-height: clamp(14rem, 20vw, 17.8rem); /* 285 */
  background: var(--c-white);
  border-radius: clamp(1.75rem, 2.8vw, 2.5rem); /* 40px */
  padding: clamp(3rem, 4.9vw, 4.375rem) clamp(1.25rem, 2.4vw, 2.125rem) clamp(1.25rem, 2vw, 1.875rem);
}
.cc--wide {
  grid-column: span 3;
}
.cc__tile {
  position: absolute;
  container-type: inline-size; /* icon/plus inside scale with the tile */
  top: clamp(-2.06rem, -2.3vw, -1.4rem); /* -33 */
  left: clamp(1.25rem, 2.36vw, 2.125rem); /* 34 */
  width: clamp(3rem, 4.65vw, 4.1875rem); /* 67 */
  height: clamp(3rem, 4.65vw, 4.1875rem);
  border-radius: clamp(0.875rem, 1.4vw, 1.25rem); /* 20 */
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
  width: 38.81cqw; /* 26 of 67 tile */
  height: 38.81cqw;
}
.cc__plus i {
  position: absolute;
  background: var(--c-white);
  border-radius: 2.99cqw;
}
.cc__plus i:first-child {
  left: 16.42cqw;
  top: 0;
  width: 5.97cqw;
  height: 38.81cqw;
}
.cc__plus i:last-child {
  left: 0;
  top: 16.42cqw;
  width: 38.81cqw;
  height: 5.97cqw;
}
.cc__title {
  font-family: var(--font-suisse);
  font-weight: 500;
  font-size: clamp(1.11rem, 1.53vw, 1.375rem); /* 17.753 → 22 */
  line-height: 1.5;
  color: var(--c-black);
}
.cc__desc {
  margin-top: clamp(1.125rem, 1.5vw, 1.375rem); /* 22 */
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: clamp(0.9rem, 1.25vw, 1.125rem); /* 14.525 → 18 */
  line-height: 1.5;
  color: var(--c-black);
}

@media (max-width: 767px) {
  .course {
    padding: clamp(2rem, 9.6vw, 2.5rem) 0 clamp(2.25rem, 10.7vw, 2.75rem);
  }
  .course__title {
    margin-bottom: clamp(1.75rem, 10vw, 2.6rem); /* 38px */
  }
  .course__grid {
    grid-template-columns: 1fr;
    gap: clamp(2.25rem, 11vw, 2.875rem); /* Figma item pitch 16 + badge overhang 26 */
  }
  .cc,
  .cc--wide {
    grid-column: auto;
    min-height: clamp(12rem, 61vw, 15rem); /* Figma card bg h230 */
    border-radius: clamp(1.5rem, 8.6vw, 2.02rem); /* 32.279 */
    padding: 65px 30px 25px 30px;
    box-shadow: 0 4px 65px rgba(0, 0, 0, 0.1); /* Figma card shadow */
  }
  .cc__tile {
    width: clamp(2.8rem, 14.4vw, 3.375rem); /* 54 */
    height: clamp(2.75rem, 14.1vw, 3.3125rem); /* 53 */
    top: clamp(-1.625rem, -6.9vw, -1.3rem); /* -26 */
    left: clamp(1.25rem, 7.2vw, 1.6875rem); /* 27 */
    border-radius: clamp(0.8rem, 4.3vw, 1.0086rem); /* 16.139 */
  }
}
</style>

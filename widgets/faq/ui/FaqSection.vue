<script setup lang="ts">
// FAQ — Figma 57:76 (title), 57:128 (container, 6 rows). Accordion toggles the +/− icon.
import { pos } from '@shared/lib/figma'
import { useFaqStore } from '@features/faq-accordion/model/store'

const faq = useFaqStore()

const rows = [
  { y: 7842, q: 'Подойдет ли курс новичку', w: 332 },
  { y: 7967, q: 'Смогу ли я разобраться без опыта?', w: 445 },
  { y: 8092, q: 'На какое время предоставляется доступ к курсу?', w: 623 },
  { y: 8217, q: 'Выдается ли сертификат?', w: 327 },
  { y: 8342, q: 'Есть ли обратная связь?', w: 307 },
  { y: 8467, q: 'Что понадобится для обучения?', w: 404 },
]
</script>

<template>
  <section id="faq">
    <!-- Title 57:76 @(360,7645) Suisse 64.582 white UPPER -->
    <h2 class="title" :style="pos(360, 7645, 667)">
      <span class="title--light">Ответы на</span><span> частые вопросы</span>
    </h2>

    <!-- Rows 57:129… @(360, y) 1200×100 r15 -->
    <button
      v-for="(r, i) in rows"
      :key="i"
      class="row"
      :style="pos(360, r.y, 1200, 100)"
      @click="faq.toggle(i)"
    >
      <span class="row__q" :style="{ width: r.w + 'px' }">{{ r.q }}</span>
      <span class="row__icon" :class="{ 'row__icon--open': faq.isOpen(i) }">
        <i class="bar bar--h" /><i class="bar bar--v" />
      </span>
    </button>
  </section>
</template>

<style scoped>
.title {
  font-family: var(--font-suisse);
  font-weight: 700;
  font-size: 64.582px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--c-white);
}
.title--light {
  font-weight: 300;
}

.row {
  display: block;
  background: var(--c-white);
  border-radius: 15px;
  text-align: left;
}
.row__q {
  position: absolute;
  left: 51px;
  top: 35px;
  font-family: var(--font-suisse);
  font-weight: 450;
  font-size: 25px;
  line-height: 1.2;
  color: var(--c-black);
}
/* +/- icon (57:132) 22×21 @ right */
.row__icon {
  position: absolute;
  left: 1146px;
  top: 40px;
  width: 22px;
  height: 21px;
}
.bar {
  position: absolute;
  background: var(--c-black);
}
.bar--h {
  left: 0;
  top: 9.5px;
  width: 22px;
  height: 2px;
}
.bar--v {
  left: 10px;
  top: 0;
  width: 2px;
  height: 21px;
  transition: opacity 0.2s ease;
}
.row__icon--open .bar--v {
  opacity: 0;
}
</style>

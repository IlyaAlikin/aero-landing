<script setup lang="ts">
// FAQ — Figma 57:76/128. Block accordion; toggles the +/− icon (no answer body in the mockup).
import { useFaqStore } from '@features/faq-accordion/model/store'

const faq = useFaqStore()
const questions = [
  'Подойдет ли курс новичку',
  'Смогу ли я разобраться без опыта?',
  'На какое время предоставляется доступ к курсу?',
  'Выдается ли сертификат?',
  'Есть ли обратная связь?',
  'Что понадобится для обучения?',
]
</script>

<template>
  <section id="faq" class="faq">
    <div class="container">
      <h2 class="faq__title"><span class="faq__title--light">Ответы на</span> частые вопросы</h2>

      <div class="faq__list">
        <button v-for="(q, i) in questions" :key="i" class="row" @click="faq.toggle(i)">
          <span class="row__q">{{ q }}</span>
          <span class="row__icon" :class="{ 'row__icon--open': faq.isOpen(i) }">
            <i class="bar bar--h" /><i class="bar bar--v" />
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background: var(--c-pink);
  padding: 56px 0 70px;
}
.faq__title {
  max-width: 760px; /* wraps to 2 lines: 'ОТВЕТЫ НА ЧАСТЫЕ' / 'ВОПРОСЫ' */
  font-family: var(--font-suisse);
  font-weight: 700;
  font-size: 64.582px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--c-white);
  margin-bottom: 44px;
}
.faq__title--light {
  font-weight: 300;
}
.faq__list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 100px;
  background: var(--c-white);
  border-radius: 15px;
  padding: 0 51px;
  text-align: left;
}
.row__q {
  font-family: var(--font-suisse);
  font-weight: 450;
  font-size: 25px;
  line-height: 1.2;
  color: var(--c-black);
}
.row__icon {
  position: relative;
  flex: none;
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

@media (max-width: 760px) {
  .faq__title {
    font-size: 21px; /* Figma Suisse Medium 21 */
    font-weight: 500;
    text-transform: none; /* Figma mobile title is not uppercase */
    margin-bottom: 15px; /* Figma FAQ Section gap 15 (title -> list) */
  }
  .faq__title--light {
    font-weight: 500; /* single weight on mobile */
  }
  .faq__list {
    gap: 9px; /* Figma FAQ List gap 9 */
  }
  .row {
    min-height: 43px; /* Figma collapsed item h43 */
    padding: 0 22px; /* Figma question left 22 */
    border-radius: 6.463px; /* Figma rounded-[6.463px] */
  }
  .row__q {
    font-size: 10.771px; /* Figma Suisse Book 10.771 */
    font-weight: 450;
  }
  /* Figma Expand Icon 9×9 */
  .row__icon {
    width: 9px;
    height: 9px;
  }
  .bar--h {
    left: 0;
    top: 4px;
    width: 9px;
    height: 1px;
  }
  .bar--v {
    left: 4px;
    top: 0;
    width: 1px;
    height: 9px;
  }
}
</style>

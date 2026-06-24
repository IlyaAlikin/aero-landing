<script setup lang="ts">
// FAQ — Figma 107:6087 (desktop) / 107:6411 (mobile). Single-open accordion with answer
// bodies; +/− icon toggle; smooth height animation; deep top wave (like AuthorSection).
import { useFaqStore } from '@features/faq-accordion/model/store'
import WaveDivider from '@shared/ui/WaveDivider.vue'

const PAGE = 'var(--c-page)'
const faq = useFaqStore()
const items = [
  {
    q: 'Подойдёт ли курс новичку?',
    a: 'Да. В программе собрана информация от базовых знаний до более продвинутых техник, поэтому обучение подойдёт как новичкам, так и действующим аэродизайнерам, которые хотят повысить качество своих работ.',
  },
  {
    q: 'Смогу ли я разобраться без опыта?',
    a: 'Да. Все уроки записаны в понятном формате и выстроены последовательно — от простых тем к более сложным. Вы сможете изучать материал в удобном темпе и постепенно осваивать новые техники.',
  },
  {
    q: 'На какое время предоставляется доступ к курсу?',
    a: 'После покупки вы получаете доступ к закрытому Telegram-каналу, где размещены все материалы обучения. Доступ сохраняется без ограничений по времени, поэтому вы сможете возвращаться к урокам в любой момент.',
  },
  {
    q: 'Выдаётся ли сертификат?',
    a: 'Да. После прохождения обучения вы получаете сертификат, подтверждающий освоение программы курса.',
  },
  {
    q: 'Есть ли обратная связь?',
    a: 'Да. Если в процессе обучения у вас возникнут вопросы, вы сможете обратиться за обратной связью и получить необходимые рекомендации по изучаемым темам.',
  },
  {
    q: 'Что понадобится для обучения?',
    a: 'Для прохождения курса понадобится только телефон, планшет или компьютер с доступом в Telegram. Все материалы находятся в закрытом канале, поэтому вы сможете изучать уроки в удобное время и из любого места. Для отработки практики понадобятся шары и базовые расходные материалы, которые используются в аэродизайне.',
  },
]
</script>

<template>
  <section id="faq" class="faq">
    <!-- deep wavy top edge (like AuthorSection), desktop only -->
    <WaveDivider class="faq__wave" :from="PAGE" to="transparent" :height="215" />

    <div class="container">
      <h2 class="faq__title"><span class="faq__title--light">Ответы на</span> частые вопросы</h2>

      <div class="faq__list">
        <div v-for="(item, i) in items" :key="i" class="row" :class="{ 'row--open': faq.isOpen(i) }">
          <button class="row__head" type="button" :aria-expanded="faq.isOpen(i)" @click="faq.toggle(i)">
            <span class="row__q">{{ item.q }}</span>
            <span class="row__icon" :class="{ 'row__icon--open': faq.isOpen(i) }">
              <i class="bar bar--h" /><i class="bar bar--v" />
            </span>
          </button>
          <div class="row__body">
            <div class="row__body-inner">
              <p class="row__answer">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  position: relative;
  background: var(--c-pink);
  padding: 56px 0 70px;
}
/* wavy top overlay (page crescent over the pink), like AuthorSection */
.faq__wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  pointer-events: none;
}
.faq > .container {
  position: relative;
  z-index: 1;
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
/* Accordion items — fluid between Figma mobile (428: q10.771 / a8 / h43 / pad22 / r6.463)
   and desktop (1200: q25 / a18.744 / h100 / pad51 / r15) via clamp, so the tablet range
   interpolates smoothly with no jump or skew. */
.faq__list {
  display: flex;
  flex-direction: column;
  gap: clamp(9px, 2.083vw, 25px);
}
.row {
  background: var(--c-white);
  border-radius: clamp(6.463px, 1.25vw, 15px);
  padding: 0 clamp(22px, 4.25vw, 51px); /* Figma question left 22 → 51 */
}
.row__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(12px, 2vw, 24px);
  width: 100%;
  min-height: clamp(43px, 8.333vw, 100px); /* collapsed height, constant per width → body grows linearly */
  background: none;
  border: 0;
  padding: 0;
  text-align: left;
  cursor: pointer;
}
.row__q {
  font-family: var(--font-suisse);
  font-weight: 450;
  font-size: clamp(10.771px, 2.083vw, 25px); /* Figma 10.771 → 25 */
  line-height: 1.2;
  color: var(--c-black);
}
/* +/− icon (Figma 9×9 → 22×22) — bars sized as % of the icon so they scale with it */
.row__icon {
  position: relative;
  flex: none;
  width: clamp(9px, 1.833vw, 22px);
  height: clamp(9px, 1.833vw, 22px);
}
.bar {
  position: absolute;
  background: var(--c-black);
}
.bar--h {
  top: 50%;
  left: 0;
  width: 100%;
  height: 9.5%;
  transform: translateY(-50%);
}
.bar--v {
  left: 50%;
  top: 0;
  width: 9.5%;
  height: 100%;
  transform: translateX(-50%);
  transition: opacity 0.25s ease;
}
.row__icon--open .bar--v {
  opacity: 0;
}
/* smooth height animation via grid-template-rows 0fr → 1fr */
.row__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s ease;
}
.row--open .row__body {
  grid-template-rows: 1fr;
}
.row__body-inner {
  overflow: hidden;
}
.row__answer {
  margin: 0;
  padding: 0 0 clamp(14px, 2.75vw, 33px); /* head min-height spaces the question; bottom 14 → 33 */
  max-width: 1069px;
  font-family: var(--font-suisse);
  font-weight: 450;
  font-size: clamp(8px, 1.562vw, 18.744px); /* Figma 8 → 18.744 */
  line-height: 1.35;
  color: var(--c-ink-2f); /* #2f2f2f */
}

@media (max-width: 767px) {
  .faq__wave {
    display: none; /* mobile uses a plain divider before the section */
  }
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
}
</style>

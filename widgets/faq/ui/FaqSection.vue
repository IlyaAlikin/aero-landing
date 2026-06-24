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
.faq__list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.row {
  background: var(--c-white);
  border-radius: 15px;
  padding: 0 51px; /* Figma: question left 51 */
}
.row__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  min-height: 100px; /* collapsed item height — constant, so the body grows linearly (smooth) */
  background: none;
  border: 0;
  padding: 0;
  text-align: left;
  cursor: pointer;
}
.row__q {
  font-family: var(--font-suisse);
  font-weight: 450;
  font-size: 25px;
  line-height: 1.2;
  color: var(--c-black);
}
/* +/− icon (Figma) — vertical bar fades out when open */
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
  padding: 0 0 33px; /* head min-height already spaces the question; bottom ~33 */
  max-width: 1069px;
  font-family: var(--font-suisse);
  font-weight: 450;
  font-size: 18.744px;
  line-height: 1.35;
  color: var(--c-ink-2f); /* #2f2f2f */
}

@media (max-width: 767px) {
  .faq__wave {
    display: none; /* mobile uses a plain divider before the section */
  }
}
@media (max-width: 760px) {
  .faq {
    padding: 56px 0 70px;
  }
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
    padding: 15px 22px 0; /* Figma: question top 15 / left 22 */
    border-radius: 6.463px; /* Figma rounded-[6.463px] */
  }
  .row__head {
    gap: 12px;
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
  .row__answer {
    padding: 0 0 14px; /* head min-height spaces the question; bottom ~14 */
    font-size: 8px; /* Figma mobile answer 8 */
    line-height: 1.2;
    color: var(--c-black);
  }
}
</style>

<script setup lang="ts">
// Telegram channel — Figma 57:240/225/239/247-279/241. Block layout; phone sits UNDER the
// white panel (#4 z-index); CTA is a real link (#3-style).
import AppButton from '@shared/ui/AppButton.vue'
import ModuleCard from '@entities/module-card/ui/ModuleCard.vue'

const modules = [
  {
    title: ['Работа', 'с шарами'],
    desc: 'Правила надува латексных шаров, Прозрачный шар с конфетти, Шар с перьями, Дабл Стафф, Дабл Стафф с поталью, Шары 5", Шар с парящими 5" на леске, Фольгированные шары',
    photos: [
      { src: '/img/modules/m1a.png', rot: -11.09, x: -15, y: 25, w: 187, h: 142 },
      { src: '/img/modules/m1b.png', rot: 8.71, x: 150, y: 35, w: 180, h: 151 },
    ],
  },
  {
    title: ['Блок ', 'Bubbles'],
    desc: 'Правила надува латексных шаров, Прозрачный шар с конфетти, Шар с перьями, Дабл Стафф, Дабл Стафф с поталью, Шары 5", Шар с парящими 5" на леске, Фольгированные шары',
    photos: [
      { src: '/img/modules/m2b.png', rot: 10.47, x: -25, y: 28, w: 196, h: 149 },
      { src: '/img/modules/m2a.png', rot: -7.66, x: 150, y: 18, w: 202, h: 176 },
    ],
  },
  {
    title: ['Дополнительные', 'материалы'],
    desc: 'Дополнительные материалы, Коробка-сюрприз с игрушкой внутри, Поставщики Лучшие фирмы, которыми пользуюсь лично. Расчёт себестоимости, Чек-лист по печати на плоттере, Подборка шрифтов, Как сделать макет',
    photos: [
      { src: '/img/modules/m3a.png', rot: 6.85, x: -10, y: -8, w: 227, h: 121 },
      { src: '/img/modules/m3b.png', rot: -8.68, x: 35, y: 70, w: 312, h: 79 },
    ],
  },
]
</script>

<template>
  <section id="telegram" class="tg">
    <div class="tg__top container">
      <p class="tg__desc">
        Также у нас есть закрытый <span class="tg__blue">Telegram канал,</span>
        в котором вы найдете материалы <br class="tg__brk" /><b>с нуля до профи</b>
      </p>
      <div class="tg__phone">
        <img class="tg__phone-img" src="/img/tg/tg_phone.png" alt="Telegram канал" draggable="false" />
      </div>
    </div>

    <div class="tg__panel container">
      <div class="tg__modules">
        <div v-for="(m, i) in modules" :key="i" class="tg__module">
          <ModuleCard :title="m.title" :desc="m.desc" :photos="m.photos" />
        </div>
      </div>
      <div class="tg__cta">
        <AppButton label="Хочу перейти в канал" variant="blue" size="lg" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.tg {
  position: relative;
  background: var(--c-page); /* match section 1 (hero) */
  padding: 85px 0 0;

  @media (max-width: 768px) {
    padding: 40px 0 0;
  }

   @media (max-width: 576px) {
    padding: 30px 0 0;
   }
}
.tg__top {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: clamp(1rem, 3.4vw, 2.5625rem); /* Figma 41 */
  min-height: clamp(0rem, 30vw, 26rem);
}
.tg__desc {
  flex: 1 1 0;
  max-width: 55.56%; /* Figma desc 667 of 1200 (keeps the right margin like the macro) */
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: clamp(1.3125rem, 5vw, 4.036rem); /* 21 → 64.582px (hits max near the 1200 design width) */
  line-height: 1.2;
  color: var(--c-ink);
}
.tg__blue {
  font-weight: 700;
  color: var(--c-blue); /* #2F9DCD per Figma */
}
.tg__desc b {
  font-weight: 700;
}
.tg__brk {
  display: none; /* "с нуля до профи" on its own line — mobile only */
}
@media (max-width: 767px) {
  .tg__brk {
    display: inline;
  }
}
.tg__phone {
  position: relative;
  z-index: 1;
  flex: 0 0 34.7%; /* 416 of the 1200 content column — scales with the container */
  /* Figma: phone y13..872, panel top y490 → lower 382px tucks under the panel.
     382 / 1200 = 31.83% (margin % is of the container width). */
  margin-bottom: -31.83%;
}
.tg__phone-img {
  display: block;
  width: 100%;
  height: auto;
}

.tg__panel {
  position: relative;
  z-index: 2;
}
.tg__panel::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  /* white panel ends half a button-height above the panel bottom, so the CTA (last child)
     straddles the edge: top half on the white panel, bottom half below it (Figma 107:5986) */
  bottom: clamp(34px, 26.9px + 1.802vw, 61.5px);
  background: var(--c-white);
  border-radius: clamp(1.5rem, 3.2vw, 3.125rem); /* 50px */
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.05);
}
.tg__modules {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: start;
  gap: clamp(0.75rem, 2.5vw, 2.0625rem); /* 33px */
  padding: clamp(2rem, 3.6vw, 3rem) clamp(1rem, 2.7vw, 2.5rem) 0;
}
.tg__module {
  position: relative;
  container-type: inline-size; /* internals (ModuleCard) sized in cqw → scales with the column */
  width: 100%;
  max-width: 22.75rem; /* 364px design cap */
  aspect-ratio: 364 / 475;
}
.tg__cta {
  position: relative;
  display: block;
  width: clamp(20rem, 45.34%, 34rem); /* Figma button 544 of 1200, centred */
  /* last child; the shortened white ::before makes its bottom half overhang the panel */
  margin: clamp(1.5rem, 2.2vw, 2rem) auto 0;
  border-radius: clamp(1.5rem, 2.8vw, 2.487rem); /* 39.796px */
  box-shadow: 0 31.837px 63.674px -15.918px #58a4c9;
}

@media (max-width: 1100px) {
  .tg__top {
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 0;
  }
  .tg__desc {
    max-width: none; /* full width when stacked */
  }
  .tg__phone {
    flex-basis: auto;
    width: min(38%, 18rem);
    margin-bottom: -10%;
  }
}
@media (max-width: 576px) {
  .tg__top {
    gap: clamp(0.75rem, 4vw, 1.25rem);
  }
  .tg__module:nth-child(1) {
    order: 2;
  }
  .tg__module:nth-child(2) {
    order: 1;
  }
  .tg__module:nth-child(3) {
    order: 3;
  }
  .tg__phone {
    width: min(48%, 11rem); /* Figma iPhone-Air 171 */
    margin-bottom: -30%;
  }
  .tg__modules {
    grid-template-columns: 1fr;
    gap: clamp(0.5rem, 2.6vw, 0.75rem);
    padding: 10px 0 24px 0; /* white panel padded top & bottom around the stacked cards */
  }
  .tg__module {
    width: min(75%, 15rem); /* Figma mobile module card 240 */
    max-width: none;
  }
  .tg__cta {
    display: none; /* Figma mobile: no CTA button in this section */
  }
  .tg__panel {
    background: var(--c-white);
    border-radius: clamp(1.5rem, 3.2vw, 3.125rem);
    box-shadow: 0 10px 60px rgba(0, 0, 0, 0.05);
    width: max(300px, 70.09cqw);
  }
  .tg__panel::before {
    display: none;
  }
}
</style>

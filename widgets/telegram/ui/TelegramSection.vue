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
        в котором вы найдете материалы <b>с нуля до профи</b>
      </p>
      <div class="tg__phone">
        <img class="tg__phone-frame" src="/img/tg/air-frame.png" alt="" draggable="false" />
        <img class="tg__phone-screen" src="/img/tg/air-screen.png" alt="" draggable="false" />
      </div>
    </div>

    <div class="tg__panel container">
      <div class="tg__modules">
        <div v-for="(m, i) in modules" :key="i" class="tg__module">
          <ModuleCard :title="m.title" :desc="m.desc" :photos="m.photos" />
        </div>
      </div>
      <a class="tg__cta" href="https://t.me/VikaRusskikh" target="_blank" rel="noopener">
        <AppButton label="Хочу перейти в канал" variant="blue" size="lg" />
      </a>
    </div>
  </section>
</template>

<style scoped>
.tg {
  position: relative;
  background: var(--c-page-2);
  padding: 40px 0 40px;
}
.tg__top {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 30px;
  min-height: 420px;
}
.tg__desc {
  flex: 1 1 0;
  max-width: 667px;
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: 64.582px;
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
.tg__phone {
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
  width: 416px;
  height: 720px;
  margin-bottom: -260px; /* lower part tucks under the panel (#4) */
}
.tg__phone-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top;
}
.tg__phone-screen {
  position: absolute;
  left: 5.6%;
  top: 1.6%;
  width: 88.5%;
  height: 84%;
  object-fit: cover;
  object-position: top;
  border-radius: 52px;
}

.tg__panel {
  position: relative;
  z-index: 2;
}
.tg__panel::before {
  content: '';
  position: absolute;
  inset: 0; /* Figma Feature Background spans the full content width */
  background: var(--c-white);
  border-radius: 50px;
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.05);
}
.tg__modules {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 33px; /* Figma card x-gaps 33/32 */
  padding: 48px 40px 0;
}
.tg__module {
  position: relative;
  flex: 0 0 364px;
  width: 364px;
  height: 475px;
}
.tg__cta {
  position: relative;
  display: block;
  width: 544px;
  max-width: calc(100% - 80px);
  margin: 32px auto 40px;
  border-radius: 39.796px;
  box-shadow: 0 31.837px 63.674px -15.918px #58a4c9;
}

@media (max-width: 1100px) {
  .tg__top {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .tg__phone {
    margin-bottom: -120px;
  }
}
@media (max-width: 760px) {
  .tg {
    padding: 24px 0 40px;
  }
  .tg__top {
    min-height: 0;
    gap: 16px;
  }
  .tg__desc {
    font-size: 21px; /* Figma Additional Info 21 */
  }
  .tg__phone {
    width: 171px; /* Figma iPhone-Air 171×353 */
    height: 353px;
    margin-bottom: -110px; /* lower part tucks under the panel */
  }
  .tg__panel::before {
    border-radius: 24px;
  }
  .tg__modules {
    flex-direction: column;
    align-items: center;
    gap: 10px; /* Figma card pitch ≈9–10 */
    padding: 40px 0 0;
  }
  .tg__module {
    width: 240px; /* Figma mobile module card 240×314 */
    height: 314px;
  }
  /* mobile module card == desktop card scaled 0.6593 (240/364):
     reproduces Figma box 203×127, title 15.62, desc 11.25, line tops exactly */
  .tg__module :deep(.mod) {
    inset: 0 auto auto 0;
    width: 364px;
    height: 475px;
    transform: scale(0.6593);
    transform-origin: top left;
  }
  .tg__cta {
    display: none; /* Figma mobile: no CTA button in this section */
  }
}
</style>

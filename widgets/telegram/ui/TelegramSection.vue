<script setup lang="ts">
// Telegram channel — Figma 57:240 (desc), 57:225 (iPhone-Air), 57:239 (white panel),
// 57:247/264/279 (modules), 57:241 (button).
import { pos } from '@shared/lib/figma'
import AppButton from '@shared/ui/AppButton.vue'
import ModuleCard from '@entities/module-card/ui/ModuleCard.vue'

const modules = [
  {
    x: 382,
    title: ['Работа', 'с шарами'],
    desc: 'Правила надува латексных шаров, Прозрачный шар с конфетти, Шар с перьями, Дабл Стафф, Дабл Стафф с поталью, Шары 5", Шар с парящими 5" на леске, Фольгированные шары',
    photos: [
      { src: '/img/modules/m1a.png', rot: -11.09, x: -15, y: 25, w: 187, h: 142 },
      { src: '/img/modules/m1b.png', rot: 8.71, x: 150, y: 35, w: 180, h: 151 },
    ],
  },
  {
    x: 779,
    title: ['Блок ', 'Bubbles'],
    desc: 'Правила надува латексных шаров, Прозрачный шар с конфетти, Шар с перьями, Дабл Стафф, Дабл Стафф с поталью, Шары 5", Шар с парящими 5" на леске, Фольгированные шары',
    photos: [
      { src: '/img/modules/m2b.png', rot: 10.47, x: -25, y: 28, w: 196, h: 149 },
      { src: '/img/modules/m2a.png', rot: -7.66, x: 150, y: 18, w: 202, h: 176 },
    ],
  },
  {
    x: 1176,
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
  <section id="telegram">
    <!-- Description 57:240 @(360,5209) Suisse Light 64.582 -->
    <p class="desc" :style="pos(360, 5209, 667)">
      <span>Также у нас есть закрытый </span><span class="desc--tg">Telegram канал,</span
      ><span> в котором вы найдете материалы<br /></span><span class="desc--b">с нуля до профи</span>
    </p>

    <!-- iPhone-Air mockup 57:225 @(1068,5222) 416×859 -->
    <div class="airphone" :style="pos(1068, 5222, 416, 859)">
      <img class="airphone__frame" src="/img/tg/air-frame.png" alt="" />
      <img class="airphone__screen" src="/img/tg/air-screen.png" alt="" />
    </div>

    <!-- White panel 57:239 @(362,5699) 1198×611 r50 -->
    <div class="panel" :style="pos(362, 5699, 1198, 611)" />

    <!-- Module cards @ y5747 -->
    <div
      v-for="m in modules"
      :key="m.x"
      :style="pos(m.x, 5747, m.x === 779 ? 365 : 364, 475)"
    >
      <ModuleCard :title="m.title" :desc="m.desc" :photos="m.photos" />
    </div>

    <!-- Button 57:241 @(688,6254) 544×123 blue -->
    <div
      class="cta"
      :style="{ ...pos(688, 6254, 544, 123), boxShadow: '0 31.837px 63.674px -15.918px #58a4c9' }"
    >
      <AppButton label="Хочу перейти в канал" variant="blue" size="lg" />
    </div>
  </section>
</template>

<style scoped>
.desc {
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: 64.582px;
  line-height: 1.2;
  color: var(--c-ink);
}
.desc--tg {
  font-weight: 700;
  color: var(--c-blue);
}
.desc--b {
  font-weight: 700;
}

.airphone {
  z-index: 2;
}
.airphone__frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.airphone__screen {
  position: absolute;
  left: 17px;
  top: 15px;
  width: 382px;
  height: 829px;
  object-fit: cover;
  object-position: top;
  border-radius: 52px;
}

.panel {
  background: var(--c-white);
  border-radius: 50px;
}

.cta {
  border-radius: 39.796px;
}
</style>

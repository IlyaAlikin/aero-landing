<script setup lang="ts">
// Benefits — Figma 57:93/104/115. Block grid of 3 cards.
interface Card {
  title: string
  desc: string
  img: string
  cls: string
}
const cards: Card[] = [
  { title: 'Сертификат об обучении', desc: 'Выдаем сертификат после прохождения обучения', img: '/img/bcard-cert.png', cls: 'cert' },
  { title: 'Проверенные методы', desc: 'Обучаем проверенным техникам работ', img: '/img/bcard-balloons.png', cls: 'balloons' },
  { title: 'Обучаем базе', desc: 'Понятная база по аэродизайну', img: '/img/bcard-dog.png', cls: 'dog' },
]
</script>

<template>
  <section class="benefits">
    <div class="benefits__inner container">
      <article v-for="c in cards" :key="c.title" class="bcard">
        <h3 class="bcard__title">{{ c.title }}</h3>
        <p class="bcard__desc">{{ c.desc }}</p>
        <img class="bcard__img" :class="`bcard__img--${c.cls}`" :src="c.img" alt="" draggable="false" />
      </article>
    </div>
  </section>
</template>

<style scoped>
.benefits {
  background: var(--c-page);
  margin-top: 175px; /* push stat cards down to Figma y733 (first-screen spacing) */
  padding-bottom: 40px;
}
.benefits__inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 23px;
}
.bcard {
  position: relative;
  min-height: 189px;
  background: var(--c-white);
  border-radius: 30.315px;
  padding: 51px 30px 24px;
  overflow: hidden;
}
.bcard__title {
  position: relative;
  z-index: 2;
  max-width: 58%;
  font-family: var(--font-inter);
  font-weight: 700;
  font-size: 21.22px;
  line-height: 1.3;
  letter-spacing: -0.6366px;
  color: var(--c-black);
}
.bcard__desc {
  position: relative;
  z-index: 2;
  margin-top: 8px;
  max-width: 52%;
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 12.884px;
  line-height: 1.3;
  color: rgba(0, 0, 0, 0.8);
}
.bcard__img {
  position: absolute;
  z-index: 1;
  pointer-events: none;
}
.bcard__img--cert {
  width: 211px;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
}
.bcard__img--balloons {
  width: 275px; /* Figma 57:114 */
  right: -42px;
  top: -86px;
}
.bcard__img--dog {
  width: 224px; /* Figma 57:125 */
  right: 18px;
  top: -22px;
  transform: scaleX(-1);
}

@media (max-width: 900px) {
  .benefits__inner {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .bcard {
    min-height: 148px;
    border-radius: 24px;
  }
  .bcard__title {
    font-size: 16.6px;
  }
  .bcard__desc {
    font-size: 10px;
  }
}
</style>

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

<style scoped lang="scss">
.benefits {
  background: var(--c-page);
  margin-top: clamp(7rem, 12vw, 10.9rem); /* push stat cards down (≈175) */
  padding-bottom: clamp(1.5rem, 3vw, 2.5rem);

  @media (max-width: 1440px) {
    margin-top: clamp(6rem, 10vw, 6rem); /* ≤1440 */
  }

  @media (max-width: 1024px) {
    margin-top: 50px;
  }
}
.benefits__inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1rem, 1.6vw, 1.4375rem); /* 23px */
}

.bcard {
  position: relative;
  z-index: 2; /* stay above the pink ribbon that overlaps the cards' lower part */
  container-type: inline-size; /* title/desc/images sized in cqw → scale with the card */
  min-height: clamp(9rem, 15.5vw, 11.8rem); /* 189 */
  background: var(--c-white);
  border-radius: clamp(1.25rem, 2.5vw, 1.895rem); /* 30.315 */
  padding: clamp(2rem, 4.2vw, 3.19rem) clamp(1.25rem, 2.5vw, 1.875rem) clamp(1rem, 2vw, 1.5rem);
  overflow: hidden;
}
.bcard__title {
  position: relative;
  z-index: 2;
  max-width: 58%;
  font-family: var(--font-inter);
  font-weight: 700;
  font-size: 5.5cqw; /* 21.22 of 384 */
  line-height: 1.3;
  letter-spacing: -0.165cqw;
  color: var(--c-black);
}
.bcard__desc {
  position: relative;
  z-index: 2;
  margin-top: 2.08cqw;
  max-width: 52%;
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 3.35cqw; /* 12.884 */
  line-height: 1.3;
  color: rgba(0, 0, 0, 0.8);
}
.bcard__img {
  position: absolute;
  z-index: 1;
  pointer-events: none;
}
.bcard__img--cert {
  width: 54.85cqw; /* 211 */
  right: 3.64cqw;
  top: 50%;
  transform: translateY(-50%);
}
.bcard__img--balloons {
  width: 60cqw; /* fit fully inside the card instead of slicing the right balloon */
  right: 1cqw;
  top: 50%;
  transform: translateY(-50%);
}
.bcard__img--dog {
  width: 58.23cqw; /* 224 */
  right: 4.68cqw;
  top: -5.72cqw;
  transform: scaleX(-1);
}

@media (max-width: 767px) {
  /* Figma: Banner cards sit on a pink band (Rectangle 47 73:809), not grey */
  .benefits {
    position: relative;
    z-index: 1;
    background: var(--c-pink);
    margin-top: 0;
    padding: 18px 0 12px;
  }
  .benefits__inner {
    grid-template-columns: 1fr;
    gap: clamp(0.875rem, 5.6vw, 1.375rem); /* Figma Banner itemSpacing 21 */
  }
  .bcard {
    aspect-ratio: 300 / 148; /* Figma card 300×148 → fluid height */
    min-height: 0;
    border-radius: clamp(0.9rem, 6.3vw, 1.485rem); /* 23.752 */
    padding: clamp(1.9rem, 10.7vw, 2.5rem) 0 0 clamp(1rem, 6.27vw, 1.47rem); /* title top40 / left23.5 */
  }
  .bcard__title {
    max-width: 43.3cqw; /* 130 of 300 */
  }
  .bcard__desc {
    margin-top: 2cqw; /* 6 */
    max-width: 50cqw; /* 150 */
  }
  /* mobile image placement (Figma, card 300×148) — widths are shared (cqw); only positions differ */
  .bcard__img--cert {
    right: -10cqw; /* left165 in 300 -> right -30 */
    top: 14cqw;
    transform: none;
  }
  .bcard__img--balloons {
    width: 71.49cqw; /* keep original mobile framing (Figma card 300×148) */
    right: -11.33cqw; /* left119 -> right -34 */
    top: -22.33cqw;
    transform: none; /* reset desktop vertical centering */
  }
  .bcard__img--dog {
    right: 4cqw; /* left112 -> right 12 */
    top: -5.67cqw;
    transform: scaleX(-1);
  }
}
</style>

<script setup lang="ts">
// Benefits — desktop "Certificate Section" 107:5898 (3 cards 385×189),
// mobile "Banner" 107:6598 (3 cards 303×148 full-width on pink band).
// Title/desc are two-line (explicit break) and positioned per Figma.
interface Card {
  title: [string, string]
  desc: [string, string]
  img: string
  cls: string
}
const cards: Card[] = [
  { title: ['Сертификат', 'об обучении'], desc: ['Выдаем сертификат после', 'прохождения обучения'], img: '/img/bcard-cert.png', cls: 'cert' },
  { title: ['Проверенные', 'методы'], desc: ['Обучаем проверенным', 'техникам работ'], img: '/img/bcard-balloons.png', cls: 'balloons' },
  { title: ['Обучаем', 'базе'], desc: ['Понятная база', 'по аэродизайну'], img: '/img/bcard-dog.png', cls: 'dog' },
]
</script>

<template>
  <section class="benefits">
    <div class="benefits__inner container">
      <article v-for="c in cards" :key="c.cls" class="bcard">
        <img class="bcard__img" :class="`bcard__img--${c.cls}`" :src="c.img" alt="" draggable="false" />
        <h3 class="bcard__title">{{ c.title[0] }}<br />{{ c.title[1] }}</h3>
        <p class="bcard__desc">{{ c.desc[0] }}<br />{{ c.desc[1] }}</p>
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

/* Card is the query container with NO padding so cqw is measured against the
   full card width (385 desktop / 303 mobile) — matches Figma px exactly. */
.bcard {
  position: relative;
  z-index: 2; /* stay above the pink ribbon that overlaps the cards' lower part */
  container-type: inline-size;
  aspect-ratio: 385 / 189; /* Figma card 385×189 → height tracks fluid width */
  background: var(--c-white);
  border-radius: clamp(1.25rem, 2.36vw, 1.895rem); /* 30.315 */
  overflow: hidden;
}
.bcard__title {
  position: absolute;
  z-index: 2;
  left: 7.79cqw; /* 30 of 385 */
  top: 13.25cqw; /* 51 of 385 */
  font-family: var(--font-inter);
  font-weight: 700;
  font-size: 5.51cqw; /* 21.22 of 385 */
  line-height: 1.3;
  letter-spacing: -0.165cqw; /* -0.6366 of 385 */
  color: var(--c-black);
  white-space: nowrap;
}
.bcard__desc {
  position: absolute;
  z-index: 2;
  left: 7.79cqw;
  top: 29.35cqw; /* 113 of 385 */
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 3.347cqw; /* 12.884 of 385 */
  line-height: 1.3;
  color: rgba(0, 0, 0, 0.8);
  white-space: nowrap;
}
.bcard__img {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  max-width: none;
}
.bcard__img--cert {
  width: 54.81cqw; /* 211 of 385 */
  right: -9.35cqw; /* left210 -> right -36 */
  top: 14.03cqw; /* 54 */
}
.bcard__img--balloons {
  width: 71.43cqw; /* 275 */
  right: -10.91cqw; /* left152 -> right -42 */
  top: -22.34cqw; /* -86 */
}
.bcard__img--dog {
  width: 58.18cqw; /* 224 */
  right: 4.68cqw; /* left143 -> right 18 */
  top: -5.71cqw; /* -22 */
  transform: scaleX(-1);
}

@media (max-width: 767px) {
  /* Figma: Banner cards sit on the pink band (Rectangle 47), not grey. */
  .benefits {
    position: relative;
    z-index: 1;
    background: var(--c-pink);
    margin-top: 0;
    padding: 18px 0 12px;
  }
  .benefits__inner {
    grid-template-columns: 1fr;
    gap: clamp(0.875rem, 5.6vw, 1.3125rem); /* Banner itemSpacing 21 */
  }
  /* Mobile card 303×148; cqw recomputed for this aspect/positions. */
  .bcard {
    aspect-ratio: 303 / 148; /* Figma mobile card 303×148 */
    border-radius: clamp(0.9rem, 7.84vw, 1.485rem); /* 23.752 */
  }
  .bcard__title {
    left: 8.25cqw; /* 25 of 303 */
    top: 13.2cqw; /* 40 of 303 */
    font-size: 5.49cqw; /* 16.627 of 303 */
    letter-spacing: -0.165cqw; /* -0.4988 of 303 */
  }
  .bcard__desc {
    left: 8.25cqw;
    top: 29.04cqw; /* 88 of 303 */
    font-size: 3.332cqw; /* 10.095 of 303 */
  }
  .bcard__img--cert {
    width: 54.46cqw; /* 165 of 303 */
    right: -8.91cqw; /* left165 -> right -27 */
    top: 13.86cqw; /* 42 */
  }
  .bcard__img--balloons {
    width: 70.96cqw; /* 215 */
    right: -10.23cqw; /* left119 -> right -31 */
    top: -22.11cqw; /* -67 */
  }
  .bcard__img--dog {
    width: 58.09cqw; /* 176 */
    right: 4.95cqw; /* left112 -> right 15 */
    top: -5.61cqw; /* -17 */
    transform: scaleX(-1);
  }
}
</style>

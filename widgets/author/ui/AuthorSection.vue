<script setup lang="ts">
// Author / stats / quote — Figma 57:176/182/234/166. Block: white card + photo on the right.
</script>

<template>
  <section id="author" class="author">
    <!-- DESKTOP (Figma 57:176): white card on the left + photo on the right -->
    <div class="author__inner container author__desktop">
      <div class="card">
        <h2 class="card__name"><b>Автор обучения - </b><span>Виктория Русских</span></h2>

        <div class="stats">
          <div class="stat">
            <span class="stat__num">200+</span>
            <span class="stat__label">Учеников прошло мое обучение</span>
          </div>
          <div class="stat">
            <span class="stat__num">8+</span>
            <span class="stat__label">Лет практического опыта</span>
          </div>
        </div>

        <div class="quote">
          <span class="quote__mark"><img src="/img/quote-mark.svg" alt="" /></span>
          <h3 class="quote__title">Меня выбирают не только за знания, но и за подход к обучению</h3>
          <p class="quote__text">
            Я знаю, как сложно новичкам разобраться в большом количестве информации.
            Поэтому создала курс где собрала все самое важное и полезное простым и
            понятным языком
          </p>
        </div>
      </div>
    </div>

    <!-- MOBILE (Figma Stats Section 73:890): title (white on pink) -> photo -> card{quote, stats} -->
    <div class="author__mobile container">
      <h2 class="am__name"><b>Автор обучения -</b> Виктория Русских</h2>
      <img class="am__photo" src="/img/author-photo.png" alt="Виктория Русских" draggable="false" />
      <div class="am__card">
        <span class="am__mark"><img src="/img/quote-mark.svg" alt="" /></span>
        <h3 class="am__qtitle">Меня выбирают не только за знания, но и за подход к обучению</h3>
        <p class="am__qtext">
          <b>Я знаю, как сложно новичкам разобраться в большом количестве информации.</b>
          Поэтому создала курс где собрала все самое важное и полезное простым и понятным языком
        </p>
        <div class="am__stats">
          <div class="am__stat">
            <span class="am__num">200+</span>
            <span class="am__label">Учеников прошло мое обучение</span>
          </div>
          <div class="am__stat">
            <span class="am__num">8+</span>
            <span class="am__label">Лет практического опыта</span>
          </div>
        </div>
      </div>
    </div>

    <img class="author__photo author__desktop" src="/img/author-photo.png" alt="Виктория Русских" draggable="false" />

    <!-- #3 clickable telegram -->
    <a class="tg" href="https://t.me/VikaRusskikh" target="_blank" rel="noopener">
      <span class="tg__cap">Автор обучения<br />Виктория Русских</span>
      <span class="tg__pill">
        <img class="tg__icon" src="/img/tg-icon.svg" alt="" />
        <span class="tg__handle">@VikaRusskikh</span>
      </span>
    </a>
  </section>
</template>

<style scoped>
.author {
  position: relative;
  background: var(--c-pink);
  overflow: hidden;
  padding: clamp(1rem, 2vw, 1.5rem) 0 clamp(2rem, 3.3vw, 3rem);
}
.author__inner {
  position: relative;
  z-index: 2;
}
.card {
  width: min(92%, 39.375rem); /* 630px cap, fluid below */
  background: var(--c-white);
  border-radius: clamp(0.75rem, 1.1vw, 1rem); /* 16 */
  padding: clamp(1.5rem, 3vw, 2.3125rem) clamp(1.5rem, 3.6vw, 3.25rem) clamp(2rem, 3.5vw, 3.125rem);
}
.card__name {
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: clamp(1.5rem, 4vw, 3.625rem); /* 24 → 58 */
  line-height: 1.2;
  color: var(--c-ink-22);
}
.card__name b {
  font-weight: 700;
}
.stats {
  margin-top: clamp(1.5rem, 3vw, 2.75rem);
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 1.8vw, 1.625rem);
}
.stat {
  display: flex;
  flex-direction: column;
}
.stat__num {
  font-family: var(--font-suisse);
  font-weight: 700;
  font-size: clamp(2.625rem, 6.25vw, 5.625rem); /* 42 → 90 */
  line-height: 1;
  color: var(--c-beige);
}
.stat__label {
  margin-top: -0.2em;
  max-width: min(85%, 17.2rem); /* 275 */
  font-family: var(--font-suisse);
  font-weight: 400;
  font-size: clamp(0.875rem, 2.05vw, 1.847rem); /* 14 → 29.554 */
  line-height: 1.157; /* Figma 34.2/29.554 */
  color: var(--c-ink-22);
}
.quote {
  margin-top: clamp(1.5rem, 3vw, 2.75rem);
}
.quote__mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(1.9rem, 3.95vw, 3.5625rem); /* 57 */
  height: clamp(1.9rem, 3.95vw, 3.5625rem);
  border-radius: clamp(0.25rem, 0.25vw, 0.228rem); /* 3.65 */
  background: var(--c-ink-2f);
}
.quote__mark img {
  width: 47.4%; /* 27 of 57 */
  height: auto;
}
.quote__title {
  margin-top: clamp(1.125rem, 2.1vw, 1.875rem);
  max-width: min(92%, 36.125rem); /* 578 */
  font-family: var(--font-suisse);
  font-weight: 700;
  font-size: clamp(1.0625rem, 2.11vw, 1.901rem); /* 17 → 30.416 */
  line-height: 1.25;
  color: var(--c-ink-2f);
  opacity: 0.8;
}
.quote__text {
  margin-top: clamp(0.8rem, 1.25vw, 1.125rem);
  max-width: min(88%, 33.3rem); /* 533 */
  font-family: var(--font-suisse);
  font-weight: 400;
  font-size: clamp(0.8125rem, 1.52vw, 1.369rem); /* 13 → 21.899 */
  line-height: 1.5;
  color: var(--c-ink-2f);
  opacity: 0.8;
}

.author__photo {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  /* author-photo.png is a centred cut-out with transparent left/right margins.
     Anchor by height and bleed the transparent right margin past the edge (section
     overflow:hidden clips it) so the subject hugs the pink edge. max() tracks viewport
     but caps the bleed on wide screens where the section height stops growing. */
  right: max(-32.4rem, -36vw);
  height: 100%;
  width: auto;
  max-width: none;
  object-fit: cover;
  pointer-events: none;
}

.tg {
  position: absolute;
  z-index: 3;
  left: calc(50% + 4.65vw); /* Figma Author Info @x1027 (≈ +67px) */
  top: clamp(30rem, 48.5vw, 44rem); /* Figma pill @y ≈699, tracks the section */
}
.tg__cap {
  display: block;
  font-family: var(--font-sf);
  font-size: clamp(0.8rem, 1.06vw, 0.957rem); /* 15.307 */
  line-height: 1.15;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 0.5rem;
}
.tg__pill {
  display: inline-flex;
  align-items: center;
  gap: clamp(0.5rem, 0.9vw, 0.8125rem);
  background: var(--c-white);
  border-radius: clamp(0.4rem, 0.52vw, 0.466rem);
  padding: clamp(0.4rem, 0.55vw, 0.5rem) clamp(0.75rem, 1.1vw, 1rem);
}
.tg__icon {
  width: clamp(0.9rem, 1.25vw, 1.125rem);
  height: auto;
}
.tg__handle {
  font-family: var(--font-sf);
  font-size: clamp(1rem, 1.39vw, 1.25rem);
  color: var(--c-grey-555);
}

/* Mobile author block (Figma Stats Section 73:890) — hidden on desktop */
.author__mobile {
  display: none;
}

@media (max-width: 767px) {
  .author {
    padding: clamp(1rem, 7.5vw, 1.75rem) 0 clamp(0.25rem, 1.9vw, 0.5rem); /* pink band; gallery continues below */
  }
  .author__desktop {
    display: none;
  }
  .author__mobile {
    display: block;
    position: relative;
  }
  /* Author Title 73:893 — Suisse Light ≈24, white, centered */
  .am__name {
    margin: 0;
    font-family: var(--font-suisse);
    font-weight: 300;
    font-size: clamp(1.25rem, 7.5vw, 1.85rem);
    line-height: 1.2;
    color: var(--c-white);
    text-align: center;
  }
  .am__name b {
    font-weight: 700;
  }
  /* Photo (Figma IMG_4762 73:894) */
  .am__photo {
    display: block;
    position: relative;
    z-index: 0;
    width: 100%;
    height: auto;
    margin-top: clamp(0.25rem, 1.9vw, 0.5rem);
  }
  /* White card (Figma Rectangle 2478 73:895) — overlaps the photo's lower part */
  .am__card {
    position: relative;
    z-index: 1;
    margin-top: clamp(-6.5rem, -21.9vw, -3rem);
    background: var(--c-white);
    border-radius: clamp(0.75rem, 5vw, 1.25rem);
    padding: clamp(0.9rem, 5.6vw, 1.4rem);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  }
  /* Quote mark (Stats Icon Background 73:904 — ≈31×31 dark) */
  .am__mark {
    display: flex;
    align-items: center;
    justify-content: center;
    width: clamp(1.6rem, 9.7vw, 2.4rem);
    height: clamp(1.6rem, 9.7vw, 2.4rem);
    border-radius: clamp(0.2rem, 1.25vw, 0.35rem);
    background: var(--c-ink-2f);
  }
  .am__mark img {
    width: 48%; /* Figma quote vector 15 of 31 */
    height: auto;
  }
  /* Quote title (Stats Intro 73:897 — Suisse Bold ≈16.73, #2f2f2f @80%) */
  .am__qtitle {
    margin: clamp(0.9rem, 5.6vw, 1.4rem) 0 0;
    font-family: var(--font-suisse);
    font-weight: 700;
    font-size: clamp(0.95rem, 5.23vw, 1.3rem);
    line-height: 1.25;
    color: var(--c-ink-2f);
    opacity: 0.8;
  }
  /* Quote text (Stats Description 73:896 — Suisse ≈12.045, #2f2f2f @80%; 1st sentence SemiBold) */
  .am__qtext {
    margin: clamp(0.65rem, 4vw, 1rem) 0 0;
    font-family: var(--font-suisse);
    font-weight: 400;
    font-size: clamp(0.7rem, 3.76vw, 0.95rem);
    line-height: 1.5;
    color: var(--c-ink-2f);
    opacity: 0.8;
  }
  .am__qtext b {
    font-weight: 600; /* Figma SemiBold */
  }
  /* Stats 200+/8+ as two columns (Figma Statistics Container 73:906) */
  .am__stats {
    margin-top: clamp(0.75rem, 4.7vw, 1.2rem);
    display: flex;
  }
  .am__stat {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .am__num {
    font-family: var(--font-suisse);
    font-weight: 700;
    font-size: clamp(2.2rem, 13.26vw, 3.3rem); /* Figma Suisse Bold 42.437 */
    line-height: 1;
    color: var(--c-beige); /* #f5c8a9 */
  }
  .am__label {
    margin-top: clamp(0.25rem, 1.9vw, 0.5rem);
    max-width: 40%; /* Figma label box w127/129 of 320 */
    font-family: var(--font-suisse);
    font-weight: 400;
    font-size: clamp(0.75rem, 4.35vw, 1rem); /* Figma Suisse Regular 13.914 */
    line-height: 1.15;
    color: var(--c-ink-1a); /* #1a1a1a */
  }
}
</style>

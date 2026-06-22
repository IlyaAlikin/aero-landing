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
  padding: 24px 0 48px;
}
.author__inner {
  position: relative;
  z-index: 2;
}
.card {
  width: 630px;
  max-width: 100%;
  background: var(--c-white);
  border-radius: 16px;
  padding: 37px 52px 50px;
}
.card__name {
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: 58px;
  line-height: 1.2;
  color: var(--c-ink-22);
}
.card__name b {
  font-weight: 700;
}
.stats {
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}
.stat {
  display: flex;
  flex-direction: column;
}
.stat__num {
  font-family: var(--font-suisse);
  font-weight: 700;
  font-size: 90px;
  line-height: 1;
  color: var(--c-beige);
}
.stat__label {
  margin-top: -6px;
  max-width: 275px;
  font-family: var(--font-suisse);
  font-weight: 400;
  font-size: 29.554px;
  line-height: 1.157; /* Figma 34.2/29.554 */
  color: var(--c-ink-22);
}
.quote {
  margin-top: 44px;
}
.quote__mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 57px;
  height: 57px;
  border-radius: 3.65px; /* Figma 57:180 */
  background: var(--c-ink-2f);
}
.quote__mark img {
  width: 27px;
  height: 24px;
}
.quote__title {
  margin-top: 30px;
  max-width: 578px;
  font-family: var(--font-suisse);
  font-weight: 700;
  font-size: 30.416px;
  line-height: 1.25;
  color: var(--c-ink-2f);
  opacity: 0.8;
}
.quote__text {
  margin-top: 18px;
  max-width: 533px;
  font-family: var(--font-suisse);
  font-weight: 400;
  font-size: 21.899px;
  line-height: 1.5;
  color: var(--c-ink-2f);
  opacity: 0.8;
}

.author__photo {
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  bottom: 0;
  width: 74%; /* Figma IMG_4762 1424px ≈ 74% of 1920 */
  height: 100%;
  object-fit: cover; /* fill right side top-to-bottom, no pink gaps (Figma 57:165) */
  object-position: right top;
  pointer-events: none;
}

.tg {
  position: absolute;
  z-index: 3;
  left: calc(50% + 67px); /* Figma Author Info @x1027 */
  top: 699px; /* Figma pill @y3018 from pink top y2319 */
}
.tg__cap {
  display: block;
  font-family: var(--font-sf);
  font-size: 15.307px;
  line-height: 1.15;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 8px;
}
.tg__pill {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  background: var(--c-white);
  border-radius: 7.463px;
  padding: 8px 16px;
}
.tg__icon {
  width: 18px;
  height: 16px;
}
.tg__handle {
  font-family: var(--font-sf);
  font-size: 20px;
  color: var(--c-grey-555);
}

/* Mobile author block (Figma Stats Section 73:890) — hidden on desktop */
.author__mobile {
  display: none;
}

@media (max-width: 767px) {
  .author {
    padding: 24px 0 6px; /* pink band; gallery continues below on the same pink */
  }
  .author__desktop {
    display: none;
  }
  .author__mobile {
    display: block;
    position: relative;
  }
  /* Author Title 73:893 — Suisse Light 24, white, centered */
  .am__name {
    margin: 0;
    font-family: var(--font-suisse);
    font-weight: 300;
    font-size: 24px;
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
    margin-top: 6px;
  }
  /* White card (Figma Rectangle 2478 73:895) — overlaps the photo's lower part */
  .am__card {
    position: relative;
    z-index: 1;
    margin-top: -70px;
    background: var(--c-white);
    border-radius: 16px;
    padding: 18px 18px 22px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  }
  /* Quote mark (Stats Icon Background 73:904 — 31×31 dark) */
  .am__mark {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 31px;
    height: 31px;
    border-radius: 4px;
    background: var(--c-ink-2f);
  }
  .am__mark img {
    width: 15px; /* Figma quote vector 15×13 */
    height: 13px;
  }
  /* Quote title (Stats Intro 73:897 — Suisse Bold 16.73, #2f2f2f @80%) */
  .am__qtitle {
    margin: 18px 0 0;
    font-family: var(--font-suisse);
    font-weight: 700;
    font-size: 16.73px;
    line-height: 1.25;
    color: var(--c-ink-2f);
    opacity: 0.8;
  }
  /* Quote text (Stats Description 73:896 — Suisse 12.045, #2f2f2f @80%; 1st sentence SemiBold) */
  .am__qtext {
    margin: 13px 0 0;
    font-family: var(--font-suisse);
    font-weight: 400;
    font-size: 12.045px;
    line-height: 1.5;
    color: var(--c-ink-2f);
    opacity: 0.8;
  }
  .am__qtext b {
    font-weight: 600; /* Figma SemiBold */
  }
  /* Stats 200+/8+ as two columns (Figma Statistics Container 73:906) */
  .am__stats {
    margin-top: 15px;
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
    font-size: 42.437px; /* Figma Suisse Bold 42.437 */
    line-height: 1;
    color: var(--c-beige); /* #f5c8a9 */
  }
  .am__label {
    margin-top: 6px;
    max-width: 127px; /* Figma label box w127/129 */
    font-family: var(--font-suisse);
    font-weight: 400;
    font-size: 13.914px; /* Figma Suisse Regular 13.914 */
    line-height: 1.15;
    color: var(--c-ink-1a); /* #1a1a1a */
  }
}
</style>

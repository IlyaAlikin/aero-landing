<script setup lang="ts">
// Author / stats / quote — Figma 57:165, 57:173, 57:176, 57:182, 57:234, 57:166.
import { pos } from '@shared/lib/figma'
</script>

<template>
  <section id="author">
    <!-- Author photo (57:175) — pre-positioned export 2010×1147; placed at native size so the
         woman lands on the right with her base at the pink section bottom (3466). -->
    <img
      class="photo"
      :style="pos(0, 2319, 2010, 1147)"
      src="/img/author-photo.png"
      alt="Виктория Русских"
    />

    <!-- White quote card (57:177) @(360,2400) 630×1011 r16 -->
    <div class="card" :style="pos(360, 2400, 630, 1011)" />

    <!-- Author title (57:182) @(413,2437) w524, Suisse 58/1.2 #222 -->
    <h2 class="atitle" :style="pos(413, 2437, 524)">
      <b>Автор обучения - </b><span>Виктория Русских</span>
    </h2>

    <!-- Statistics (57:234) -->
    <p class="stat-num" :style="pos(413, 2616, 246, 104)">200+</p>
    <p class="stat-label" :style="pos(413, 2712, 269, 68)">Учеников прошло мое обучение</p>
    <p class="stat-num" :style="pos(413, 2799, 123, 104)">8+</p>
    <p class="stat-label" :style="pos(413, 2896, 275, 68)">Лет практического опыта</p>

    <!-- Quote (57:176) -->
    <div class="qmark" :style="pos(412, 3018, 57, 57)">
      <img src="/img/quote-mark.svg" alt="" :style="pos(16, 17, 27, 24)" />
    </div>
    <h3 class="qtitle" :style="pos(412, 3107, 578)">
      Меня выбирают не только за знания, но и за подход к обучению
    </h3>
    <p class="qdesc" :style="pos(412, 3193, 533)">
      <span class="qdesc__semi">Я знаю, как сложно новичкам разобраться<br />в большом количестве информации.</span
      ><span><br />Поэтому создала курс где собрала<br />все самое важное и полезное простым<br />и понятным языком</span>
    </p>

    <!-- Author info + telegram pill (57:166) -->
    <div class="ainfo" :style="pos(1027, 2969)">
      <p class="ainfo__dim">Автор обучения</p>
      <p class="ainfo__name">Виктория Русских</p>
    </div>
    <a class="tg-pill" :style="pos(1027, 3018, 196, 41)" href="#" aria-label="Telegram @VikaRusskikh">
      <span class="tg-pill__row" :style="pos(18, 7)">
        <img class="tg-pill__icon" src="/img/tg-icon.svg" alt="" />
        <span class="tg-pill__handle">@VikaRusskikh</span>
      </span>
    </a>
  </section>
</template>

<style scoped>
.photo {
  pointer-events: none;
}

.card {
  background: var(--c-white);
  border-radius: 16px;
}

.atitle {
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: 58px;
  line-height: 1.2;
  color: var(--c-ink-22);
}
.atitle b {
  font-weight: 700;
}

.stat-num {
  font-family: var(--font-suisse);
  font-weight: 700;
  font-size: 90.139px;
  line-height: 1;
  color: var(--c-beige);
}
.stat-label {
  font-family: var(--font-suisse);
  font-weight: 400;
  font-size: 29.554px;
  line-height: 1.1;
  color: var(--c-ink-22);
}

.qmark {
  background: var(--c-ink-2f);
  border-radius: 3.65px;
}
.qtitle {
  font-family: var(--font-suisse);
  font-weight: 700;
  font-size: 30.416px;
  line-height: 1.25;
  color: var(--c-ink-2f);
  opacity: 0.8;
}
.qdesc {
  font-family: var(--font-suisse);
  font-weight: 400;
  font-size: 21.899px;
  line-height: 1.5;
  color: var(--c-ink-2f);
  opacity: 0.8;
}
.qdesc__semi {
  font-weight: 600;
}

.ainfo {
  font-family: var(--font-sf);
  font-size: 15.307px;
  line-height: 1.1;
  color: var(--c-white);
  white-space: nowrap;
}
.ainfo__dim {
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 3px;
}

.tg-pill {
  background: var(--c-white);
  border-radius: 7.463px;
}
.tg-pill__row {
  display: flex;
  align-items: center;
  gap: 13px;
}
.tg-pill__icon {
  width: 18px;
  height: 16px;
}
.tg-pill__handle {
  font-family: var(--font-sf);
  font-size: 20px;
  line-height: 1;
  color: var(--c-grey-555);
  white-space: nowrap;
}
</style>

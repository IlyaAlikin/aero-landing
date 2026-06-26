<script setup lang="ts">
import WaveDivider from '@shared/ui/WaveDivider.vue'
// Author / stats / quote — Figma 57:176/182/234/166. Block: white card + photo on the right.
// Desktop pink block (Figma Group 23 / 107:6041): wavy TOP edge + rounded BOTTOM corners,
// no bottom wave. The photo is clipped to this shape (top by the wave, bottom by the radius).
const PAGE = 'var(--c-page)' // colour above the wave (matches the section above)
</script>

<template>
  <section id="author" class="author">
    <!-- DESKTOP: wavy top edge of the pink block; sits over the photo so it clips it too (Figma 107:6042) -->
    <WaveDivider class="author__wave author__desktop" :from="PAGE" to="transparent" :height="215" />

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
      <img class="am__photo" src="/img/photo-author.png" alt="Виктория Русских" draggable="false" />
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

    <img class="author__photo author__desktop" src="/img/photo-author.png" alt="Виктория Русских" draggable="false" />

    <!-- #3 clickable telegram -->
    <a class="tg" href="https://t.me/VikaRusskikh" target="_blank" rel="noopener">
      <span class="tg__cap"><span class="tg__cap-muted">Автор обучения</span><br />Виктория Русских</span>
      <span class="tg__pill">
        <img class="tg__icon" src="/img/tg-icon.svg" alt="" />
        <span class="tg__handle">@VikaRusskikh</span>
      </span>
    </a>
  </section>
</template>

<style scoped lang="scss">
.author {
  position: relative;
  background: var(--c-pink);
  overflow: hidden;
  /* Figma 107:6041: rounded bottom corners (no bottom wave on desktop) */
  /* border-radius: 0 0 clamp(2rem, 3vw, 3.5rem) clamp(2rem, 3vw, 3.5rem); */
  /* top: 81px to clear the wave + sit the card where Figma 107:6055 starts */
  padding: 80px 0 clamp(2rem, 3.3vw, 3rem);
}
/* Wavy top edge (Figma 107:6042). Above photo (z1), below the card (z2, later in DOM). */
.author__wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  pointer-events: none;
}
.author__inner {
  position: relative;
  z-index: 2;
}
.card {
  width: min(92%, 39.375rem); /* 630px cap, fluid below */
  background: var(--c-white);
  border-radius: clamp(0.75rem, 1.1vw, 1rem); /* 16 */
  padding: clamp(1.5rem, 3vw, 2.3125rem) clamp(1.5rem, 3.6vw, 3.25rem) clamp(2rem, 3.5vw, 3.375rem); /* Figma 37 / 52 / 54 */
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
  margin-top: clamp(1.5rem, 2.2vw, 2rem); /* Figma gap title→stat = 32 */
  display: flex;
  flex-direction: column;
  gap: clamp(1.25rem, 2.2vw, 2rem); /* Figma gap between stats = 32 */
}
.stat {
  display: flex;
  flex-direction: column;
}
.stat__num {
  font-family: var(--font-suisse);
  font-weight: 700;
  font-size: clamp(2.625rem, 6.25vw, 5.625rem); /* 42 → 90 */
  line-height: 1.155; /* Figma num box 104/90.139 */
  color: var(--c-beige);
}
.stat__label {
  margin-top: 0; /* Figma: desc box directly below num box */
  max-width: min(85%, 17.2rem); /* 275 */
  font-family: var(--font-suisse);
  font-weight: 400;
  font-size: clamp(0.875rem, 2.05vw, 1.847rem); /* 14 → 29.554 */
  line-height: 1.157; /* Figma 34.2/29.554 */
  color: var(--c-ink-22);
}
.quote {
  margin-top: clamp(1.5rem, 2.2vw, 2rem); /* Figma gap stat→quote = 32 */
}
.quote__mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(2.25rem, 3.95vw, 3.5625rem); /* 57 */
  height: clamp(2.25rem, 3.95vw, 3.5625rem);
  border-radius: clamp(0.25rem, 0.25vw, 0.228rem); /* 3.65 */
  background: var(--c-ink-2f);
}
.quote__mark img {
  /* SVG has preserveAspectRatio="none" → must pin both dims to glyph ratio 27×24 */
  width: 47.4%; /* 27/57 */
  height: 42.1%; /* 24/57 */
}
.quote__title {
  margin-top: clamp(1.25rem, 2.2vw, 2rem); /* Figma gap mark→title = 32 */
  max-width: min(92%, 36.125rem); /* 578 */
  font-family: var(--font-suisse);
  font-weight: 700;
  font-size: clamp(1.0625rem, 2.11vw, 1.901rem); /* 17 → 30.416 */
  line-height: 1.25;
  color: var(--c-ink-2f);
  opacity: 0.8;
}
.quote__text {
  margin-top: clamp(0.4rem, 0.7vw, 0.625rem); /* Figma gap title→text = 10 */
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
  /* Figma 119:167: anchored to bottom-right, width 1424/2010 of the section.
     Portrait source → cover fills the box; object-position keeps the face/balloon
     (skirt is cropped to fill), and the wave overlay clips the very top. */
  right: -12vw; /* nudge the photo slightly to the right (bleeds off the edge) */
  bottom: 0;
  width: 70.85%; /* 1424 / 2010 */
  height: 100%;
  max-width: none;
  object-fit: cover;
  object-position: center top;
  pointer-events: none;

  @media(max-width: 1040px) {
    right: -8vw;
  }
}

.tg {
  position: absolute;
  z-index: 3;
  /* Figma Author Info @x1027. Natural position above ~1230px; below that the fixed
     630px card's right edge (~650px) stays put, so floor `left` past it (42rem) and
     cap it so the pill never overflows the right edge. */
  left: clamp(42rem, calc(50% + 4.65vw), calc(100% - 13rem));
  top: clamp(30rem, 48.5vw, 44rem); /* Figma pill @y ≈699, tracks the section */
}
.tg__cap {
  display: block;
  font-family: var(--font-sf);
  font-size: clamp(0.8rem, 1.06vw, 0.957rem); /* 15.307 */
  line-height: 1.15;
  color: #fff; /* Figma: line 2 = white */
  margin-bottom: 0.5rem;
}
.tg__cap-muted {
  color: rgba(255, 255, 255, 0.4); /* Figma: line 1 = 40% white */
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
  /* SVG preserveAspectRatio="none" → lock box to glyph ratio 18×16 */
  width: clamp(0.9rem, 1.25vw, 1.125rem); /* 18 */
  height: auto;
  aspect-ratio: 18 / 16;
  flex: none;
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

/* MOBILE — Figma frame 118:129 (428px ref), made fluid: values scale with the
   viewport (vw = px / 428 × 100), capped at the Figma px above 428, floored for
   readability below. Negative offsets cap with max(), max-widths with min().
   Switches in at ≤767px — the stack is capped to a phone-width column and centred. */
@media (max-width: 767px) {
  .author {
    /* floor at Figma (title y27), grow on tablet, cap at the 700-column value */
    padding: clamp(27px, 6.31vw, 44px) 0 clamp(24px, 5.61vw, 39px);
    border-radius: 0; /* mobile merges author+gallery+reviews on one pink band */
  }
  .author__desktop {
    display: none;
  }
  .tg {
    display: none; /* Instagram/Telegram button is not in the mobile frame */
  }
  /* The stack is a centred column; everything inside scales with the COLUMN width via
     cqw (1cqw = 1% of column), so on tablets it fills out instead of looking sparse.
     cqw number = Figma px / 428 × 100; ceilings = that value at the 700px column cap. */
  .author__mobile {
    display: block;
    position: relative;
    container-type: inline-size; /* cqw base = this box; NO padding so base = full 428 (Figma) */
    max-width: 700px; /* column cap on tablets — raise/lower to fill more/less */
    margin-inline: auto;
    padding-inline: 0;
  }
  /* Author Title 107:6329 — Suisse 24, white, centred, w300 */
  .am__name {
    margin: 0 auto;
    max-width: max(300px, 70.09cqw);
    font-family: var(--font-suisse);
    font-weight: 300;
    font-size: max(24px, 5.61cqw); /* Figma 24 @428, grows on tablet */
    line-height: 1.2;
    color: var(--c-white);
    text-align: center;
  }
  .am__name b {
    font-weight: 700;
  }
  /* Photo 107:6330 — full-bleed 428×402 (object-cover portrait crop), overlaps title bottom */
  .am__photo {
    display: block;
    position: relative;
    z-index: 0;
    width: 100%; /* full-bleed the column (container has no padding) */
    aspect-ratio: 428 / 402; /* Figma photo box */
    height: auto;
    object-fit: cover;
    object-position: top center;
    margin: min(-6px, -1.4cqw) 0 0 0; /* Figma: title 27..85, photo at y79 → -6px overlap */
  }
  /* White card 107:6331 — w300 centred (64px margins), overlaps the photo's lower 120px */
  .am__card {
    position: relative;
    z-index: 1;
    width: max(300px, 70.09cqw);
    margin: min(-120px, -28.04cqw) auto 0; /* Figma: photo ends 481, card top at 361 */
    background: var(--c-white);
    border-radius: max(20px, 4.67cqw);
    /* Figma 118:125: content inset is 18 left / 0 right (text box reaches the card edge) */
    padding: max(18px, 4.21cqw) 0 max(22px, 5.14cqw) max(18px, 4.21cqw);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  }
  /* Quote mark 118:124 — 31×31 dark */
  .am__mark {
    display: flex;
    align-items: center;
    justify-content: center;
    width: max(31px, 7.24cqw); /* Figma 31 @428 */
    height: max(31px, 7.24cqw);
    border-radius: max(6px, 1.4cqw);
    background: var(--c-ink-2f);
  }
  .am__mark img {
    /* SVG preserveAspectRatio="none" → pin both dims to glyph ratio 27×24 */
    width: max(15px, 3.5cqw); /* Figma glyph 15 @428 */
    height: max(13.33px, 3.11cqw); /* 15 × 24/27 */
  }
  /* Stats Intro 107:6333 — Suisse Bold 16.73, #2f2f2f @80%, w213 */
  .am__qtitle {
    margin: max(18px, 4.21cqw) 0 0; /* Figma: icon 18..49, intro at card-rel 67 */
    max-width: max(213px, 49.77cqw);
    font-family: var(--font-suisse);
    font-weight: 700;
    font-size: max(16.73px, 3.91cqw); /* Figma 16.73 @428 */
    line-height: 1.25;
    color: var(--c-ink-2f);
    opacity: 0.8;
  }
  /* Stats Description 107:6332 — Suisse 12.045, #2f2f2f @80%; 1st sentence SemiBold */
  .am__qtext {
    margin: max(13px, 3.04cqw) 0 0; /* Figma: intro ends 130, desc at 143 */
    max-width: max(282px, 65.89cqw);
    font-family: var(--font-suisse);
    font-weight: 400;
    font-size: max(12.045px, 2.81cqw); /* Figma 12.045 @428 */
    line-height: 1.5;
    color: var(--c-ink-2f);
    opacity: 0.8;
  }
  .am__qtext b {
    font-weight: 600; /* Figma SemiBold */
  }
  /* Statistics 107:6342 — 200+/8+ side by side */
  .am__stats {
    margin-top: max(15px, 3.5cqw); /* Figma: desc ends 233, stats at 248 */
    display: flex;
  }
  .am__stat {
    display: flex;
    flex-direction: column;
  }
  .am__stat:first-child {
    width: max(135px, 31.54cqw); /* Figma: 200+ @x82, 8+ @x217 → 135px column */
  }
  .am__num {
    font-family: var(--font-suisse);
    font-weight: 700;
    font-size: max(42.437px, 9.92cqw); /* Figma 42.437 @428 */
    line-height: 1;
    color: var(--c-beige); /* #f5c8a9 */
  }
  .am__label {
    margin-top: max(3px, 0.7cqw); /* Figma: num 609.., label at 654 */
    max-width: max(129px, 30.14cqw);
    font-family: var(--font-suisse);
    font-weight: 400;
    font-size: max(13.914px, 3.25cqw); /* Figma 13.914 @428 */
    line-height: 1.15;
    color: var(--c-ink-1a); /* #1a1a1a */
  }
}
</style>

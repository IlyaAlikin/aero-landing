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
      <img class="am__photo" src="/img/author-photo-mobile.png" alt="Виктория Русских" draggable="false" />
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

<style scoped>
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
  right: -5vw; /* nudge the photo slightly to the right (bleeds off the edge) */
  bottom: 0;
  width: 70.85%; /* 1424 / 2010 */
  height: 100%;
  max-width: none;
  object-fit: cover;
  object-position: center top;
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

/* MOBILE — exact px from Figma frame 118:129 (428px wide) */
@media (max-width: 767px) {
  .author {
    padding: 27px 0 24px; /* Figma: title at y27; gallery continues below */
    border-radius: 0; /* mobile merges author+gallery+reviews on one pink band */
  }
  .author__desktop {
    display: none;
  }
  .tg {
    display: none; /* Instagram/Telegram button is not in the mobile frame */
  }
  .author__mobile {
    display: block;
    position: relative;
  }
  /* Author Title 107:6329 — Suisse 24, white, centred, w300 */
  .am__name {
    margin: 0 auto;
    max-width: 300px;
    font-family: var(--font-suisse);
    font-weight: 300;
    font-size: 24px; /* Figma mobile */
    line-height: 1.2;
    color: var(--c-white);
    text-align: center;
  }
  .am__name b {
    font-weight: 700;
  }
  /* Photo 107:6330 — full-width 428×402 (object-cover portrait crop), overlaps title bottom */
  .am__photo {
    display: block;
    position: relative;
    z-index: 0;
    width: calc(100% + 20px); /* break out of the container's 10px padding → full-bleed 428 */
    aspect-ratio: 428 / 402; /* Figma photo box */
    height: auto;
    object-fit: cover;
    object-position: top center;
    margin: -6px 0 0 -10px; /* Figma: title 27..85, photo at y79; -10 breaks the gutter */
  }
  /* White card 107:6331 — w300 centred (64px margins), overlaps the photo's lower 120px */
  .am__card {
    position: relative;
    z-index: 1;
    width: 300px;
    max-width: 300px;
    margin: -120px auto 0; /* Figma: photo ends 481, card top at 361 */
    background: var(--c-white);
    border-radius: 20px;
    padding: 18px 18px 22px; /* Figma: content inset x82 = 18 from card */
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  }
  /* Quote mark 118:124 — 31×31 dark */
  .am__mark {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 31px; /* Figma */
    height: 31px;
    border-radius: 6px;
    background: var(--c-ink-2f);
  }
  .am__mark img {
    /* SVG preserveAspectRatio="none" → pin both dims to glyph ratio 27×24 */
    width: 15px; /* Figma quote glyph */
    height: 13.33px; /* 15 × 24/27 */
  }
  /* Stats Intro 107:6333 — Suisse Bold 16.73, #2f2f2f @80%, w213 */
  .am__qtitle {
    margin: 18px 0 0; /* Figma: icon 18..49, intro at card-rel 67 */
    max-width: 213px;
    font-family: var(--font-suisse);
    font-weight: 700;
    font-size: 16.73px; /* Figma mobile */
    line-height: 1.25;
    color: var(--c-ink-2f);
    opacity: 0.8;
  }
  /* Stats Description 107:6332 — Suisse 12.045, #2f2f2f @80%; 1st sentence SemiBold */
  .am__qtext {
    margin: 13px 0 0; /* Figma: intro ends 130, desc at 143 */
    max-width: 282px;
    font-family: var(--font-suisse);
    font-weight: 400;
    font-size: 12.045px; /* Figma mobile */
    line-height: 1.5;
    color: var(--c-ink-2f);
    opacity: 0.8;
  }
  .am__qtext b {
    font-weight: 600; /* Figma SemiBold */
  }
  /* Statistics 107:6342 — 200+/8+ side by side */
  .am__stats {
    margin-top: 15px; /* Figma: desc ends 233, stats at 248 */
    display: flex;
  }
  .am__stat {
    display: flex;
    flex-direction: column;
  }
  .am__stat:first-child {
    width: 135px; /* Figma: 200+ @x82, 8+ @x217 → 135px column */
  }
  .am__num {
    font-family: var(--font-suisse);
    font-weight: 700;
    font-size: 42.437px; /* Figma mobile */
    line-height: 1;
    color: var(--c-beige); /* #f5c8a9 */
  }
  .am__label {
    margin-top: 3px; /* Figma: num 609.., label at 654 */
    max-width: 129px; /* Figma label box w127/129 */
    font-family: var(--font-suisse);
    font-weight: 400;
    font-size: 13.914px; /* Figma mobile */
    line-height: 1.15;
    color: var(--c-ink-1a); /* #1a1a1a */
  }
}
</style>

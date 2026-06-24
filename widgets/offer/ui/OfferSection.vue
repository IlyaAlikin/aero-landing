<script setup lang="ts">
// Offer + pricing — Figma 57:304/305-319/320-345/348. Block layout.
import type { CSSProperties } from 'vue'
import AppButton from '@shared/ui/AppButton.vue'

// 5 collage images — exact Figma Image Containers (frame coords, section padding-box top = y6411).
// dx = frameX - 960 (centre-anchored), dy = frameY - 6411. z = draw order (5 on top).
interface Polaroid { src: string; w: number; h: number; dx: number; dy: number; rot: number; z: number }
const polaroids: Polaroid[] = [
  { src: '/img/offer/p1.png', w: 375, h: 394, dx: 153, dy: -1, rot: -8, z: 1 },
  { src: '/img/offer/p2.png', w: 293, h: 322, dx: 318, dy: 289, rot: 6, z: 2 },
  { src: '/img/offer/p3.png', w: 351, h: 374, dx: -256, dy: 312, rot: -11, z: 3 },
  { src: '/img/offer/p4.png', w: 270, h: 284, dx: 378, dy: 523, rot: 14, z: 4 },
  { src: '/img/offer/p5.png', w: 427, h: 455, dx: 19, dy: 319, rot: 3, z: 5 },
]
function polStyle(p: Polaroid): CSSProperties {
  return {
    left: `calc(50% + ${p.dx}px)`,
    top: `${p.dy}px`,
    width: `${p.w}px`,
    height: `${p.h}px`,
    zIndex: String(p.z),
    transform: `rotate(${p.rot}deg)`,
  }
}

const features = [
  { title: ['Полный доступ', 'к программе'], img: '/img/bcard-balloons.png', flip: false },
  { title: ['Сертификат', 'после завершения'], img: '/img/bcard-cert.png', flip: false },
  { title: ['Доступ из любой точки мира'], img: '/img/offer/globe.png', flip: true },
]
const ICON_GRAD = 'linear-gradient(97.38deg, #ff1e8b 28.5%, #ff75b0 81.5%)'
</script>

<template>
  <section id="pricing" class="offer">
    <div class="container">
      <h2 class="slogan">Начните создавать красивые <b>композиции из шаров уже сегодня</b></h2>

      <div class="offer__mid">
        <div class="features">
          <div v-for="(f, i) in features" :key="i" class="feat">
            <div class="feat__icon" :style="{ backgroundImage: ICON_GRAD }">
              <img :src="f.img" :class="{ 'feat__img--flip': f.flip }" alt="" draggable="false" />
            </div>
            <p class="feat__text">
              <template v-for="(l, j) in f.title" :key="j">{{ l }}<br v-if="j < f.title.length - 1" /></template>
            </p>
          </div>
        </div>

      </div>

      <div class="collage" aria-hidden="true">
        <div v-for="(p, i) in polaroids" :key="i" class="pol" :style="polStyle(p)">
          <img class="pol__photo" :src="p.src" alt="" draggable="false" />
          <img class="pol__frame" src="/img/offer/frame.png" alt="" draggable="false" />
        </div>
      </div>

      <div class="panel">
        <div class="pcol">
          <p class="pcol__head">Стоимость курса “Баблс”</p>
          <div class="pcard pcard--pink">
            <span class="pcard__now">8 990₽</span><span class="pcard__old pcard__old--w">9 990₽</span>
          </div>
          <a class="pcol__btn" href="#"><AppButton label="Перейти к покупке" variant="pink" size="md" /></a>
        </div>
        <div class="pcol">
          <p class="pcol__head pcol__head--dark"><span>Стоимость курса </span><b>“Аэродизайн с нуля”</b></p>
          <div class="pcard pcard--beige">
            <span class="pcard__now pcard__now--dark">10 990₽</span><span class="pcard__old pcard__old--d">15 990₽</span>
          </div>
          <a class="pcol__btn" href="#"><AppButton label="Перейти к покупке" variant="beige" size="md" /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.offer {
  position: relative;
  background: var(--c-page); /* match section 1 (hero) */
  padding: 50px 0 70px;
}
.slogan {
  max-width: 804px;
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: 64.582px;
  line-height: 1.2;
  color: var(--c-ink);
}
.slogan b {
  font-weight: 700;
}

.offer__mid {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  margin-top: 30px;
}
.features {
  flex: 0 0 325px;
  display: flex;
  flex-direction: column;
  gap: 0; /* Figma: cards 1&2 flush, 3rd +12px */
  position: relative;
  z-index: 3;
}
.feat:last-child {
  margin-top: 12px;
}
.feat {
  position: relative;
  height: 116px;
  background: var(--c-white);
  border-radius: 7.334px;
  box-shadow: 0 4px 65px rgba(0, 0, 0, 0.06);
}
.feat__icon {
  position: absolute;
  left: 24px;
  top: 15px;
  width: 76px;
  height: 85px;
  border-radius: 4.89px;
  overflow: hidden;
}
.feat__icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.feat__img--flip {
  transform: scaleX(-1);
}
.feat__text {
  position: absolute;
  left: 122px;
  top: 36px;
  font-family: var(--font-suisse);
  font-weight: 600;
  font-size: 18.744px;
  line-height: 1.2; /* Figma normal */
  color: var(--c-ink-2f);
}

.collage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* behind the white price panel (z2), above section bg */
  pointer-events: none;
}
.pol {
  position: absolute; /* size/pos/z set inline from Figma Image Containers */
}
.pol__photo,
.pol__frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.pol__photo {
  object-fit: cover;
  border-radius: 8px;
  padding: 6%;
}

.panel {
  position: relative;
  z-index: 2; /* above the collage; collage tucks behind its top edge like macet */
  width: 1066px; /* Figma Main Container 1066px, left-aligned (gap on right) */
  max-width: 100%;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  background: var(--c-white);
  border-radius: 15px;
  box-shadow: 0 4px 67px rgba(0, 0, 0, 0.06);
  padding: 40px 28px 28px; /* Figma inner 1038×402 in 1066×426 */
}
.pcol__head {
  font-family: var(--font-sf);
  font-weight: 800;
  font-size: 32px;
  line-height: 1.25;
  letter-spacing: 0.32px;
  color: var(--c-ink-20);
  min-height: 84px;
}
.pcol__head--dark span {
  font-weight: 400;
}
.pcard {
  display: flex;
  align-items: center; /* price vertically centered in card */
  gap: 18px;
  height: 155px;
  padding: 0 40px;
  border-radius: 32.716px;
  box-shadow: inset 1.258px 1.258px 100px rgba(255, 255, 255, 0.3);
}
.pcard--pink {
  background: linear-gradient(to right, #e96181 0%, #ff87a3 47.6%, #e96181 100%);
}
.pcard--beige {
  background: linear-gradient(to right, #f5c8a9 0%, #ffdcc4 47.6%, #f5c8a9 100%);
}
.pcard__now {
  font-family: var(--font-sf);
  font-weight: 600;
  font-size: 69.207px;
  line-height: 1;
  letter-spacing: 0.692px;
  color: var(--c-white);
  white-space: nowrap;
}
.pcard__now--dark {
  color: var(--c-ink-20);
}
.pcard__old {
  font-family: var(--font-sf);
  font-weight: 500;
  font-size: 32.04px;
  text-decoration: line-through;
  white-space: nowrap;
}
.pcard__old--w {
  color: rgba(255, 255, 255, 0.4);
}
.pcard__old--d {
  color: rgba(32, 32, 32, 0.4);
}
.pcol__btn {
  display: block;
  margin-top: 28px;
  border-radius: 35px;
}
.pcol:first-child .pcol__btn {
  box-shadow: 0 28.395px 56.79px -14.197px rgba(233, 97, 129, 0.5);
}
.pcol:last-child .pcol__btn {
  box-shadow: 0 28.395px 56.79px -14.197px rgba(245, 200, 169, 0.5);
}

@media (max-width: 900px) {
  .slogan {
    font-size: 21px; /* Figma Slogan Text 21 */
  }
  .offer__mid {
    flex-direction: column;
  }
  .features {
    flex-basis: auto;
    width: 100%;
    gap: 6px; /* Figma Benefits Column gap 6 */
  }
  .feat {
    height: 107px; /* Figma Benefit Item h107 */
    border-radius: 6.767px;
  }
  .feat:last-child {
    margin-top: 0; /* gap handles spacing on mobile */
  }
  .feat__icon {
    left: 23px; /* Figma 73:1031 */
    top: 14px;
    width: 70px;
    height: 78px;
    border-radius: 4.511px;
  }
  .feat__text {
    left: 113px; /* Figma 73:1030 */
    top: 33px;
    font-size: 17.293px; /* Figma Suisse SemiBold 17.293 */
  }
  .collage {
    display: none; /* TODO: mobile collage positions — pending visual pass */
  }
  .panel {
    grid-template-columns: 1fr;
    padding: 24px 18px 30px;
  }
  .pcol__head {
    font-size: 18.798px; /* Figma Price Info SF Pro 18.798 */
    min-height: 0;
  }
  .pcard {
    height: 91px; /* Figma Price Container h91 */
    padding: 0 24px;
  }
  .pcard__now {
    font-size: 40.604px; /* Figma Price SF Pro Semibold 40.604 */
  }
  .pcard__old {
    font-size: 16px;
  }
}
</style>

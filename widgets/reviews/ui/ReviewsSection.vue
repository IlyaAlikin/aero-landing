<script setup lang="ts">
// "Отзывы учениц" — Figma 57:184 (title), 57:200 (phones row), 57:185 (dots), 57:193 (arrows).
import { computed } from 'vue'
import { pos } from '@shared/lib/figma'
import PhoneMockup from '@entities/phone-mockup/ui/PhoneMockup.vue'
import { useReviewsStore } from '@features/reviews-slider/model/store'

const store = useReviewsStore()

// 3 visible phones; their content cycles through the 3 designs as the carousel moves.
const base: Array<1 | 2 | 3> = [1, 2, 3]
const slots = [446, 790, 1134] // frame x of each phone
function variantFor(slot: number): 1 | 2 | 3 {
  const idx = (((slot + store.active - 2) % 3) + 3) % 3
  return base[idx]
}
const phones = computed(() => slots.map((x, i) => ({ x, variant: variantFor(i) })))
const dots = computed(() => Array.from({ length: store.total }, (_, i) => i))
</script>

<template>
  <section id="reviews">
    <!-- Title 57:184 @(536,4184) Suisse 64.582 white center -->
    <h2 class="title" :style="pos(536, 4184, 849)"><b>Отзывы </b><span>учениц</span></h2>

    <!-- Phones row 57:200 @ y4313, x 446/790/1134, gap 5 -->
    <div v-for="(p, i) in phones" :key="i" :style="pos(p.x, 4313)">
      <PhoneMockup :variant="p.variant" />
    </div>

    <!-- Nav arrows 57:194 / 57:197 @ y4625, 60×60 -->
    <button class="nav" :style="pos(420, 4625, 60, 60)" aria-label="Назад" @click="store.prev()">
      <svg viewBox="0 0 10 15"><path d="M9 1 2 7.5 9 14" fill="none" stroke="currentColor" stroke-width="2" /></svg>
    </button>
    <button class="nav" :style="pos(1500, 4625, 60, 60)" aria-label="Вперёд" @click="store.next()">
      <svg viewBox="0 0 10 15"><path d="M1 1 8 7.5 1 14" fill="none" stroke="currentColor" stroke-width="2" /></svg>
    </button>

    <!-- Dots 57:185 @(907,5019) -->
    <div class="dots" :style="pos(907, 5019, 137, 16)">
      <button
        v-for="d in dots"
        :key="d"
        class="dot"
        :class="{ 'dot--active': d === store.active }"
        :aria-label="`Отзыв ${d + 1}`"
        @click="store.set(d)"
      />
    </div>
  </section>
</template>

<style scoped>
.title {
  font-family: var(--font-suisse);
  font-weight: 700;
  font-size: 64.582px;
  line-height: 1.2;
  color: var(--c-white);
  text-align: center;
}
.title span {
  font-weight: 300;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--c-white);
  color: var(--c-pink);
}
.nav svg {
  width: 10px;
  height: 15px;
}

.dots {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--c-grey-line);
  flex: none;
  transition: all 0.2s ease;
}
.dot--active {
  width: 16px;
  height: 16px;
  background: var(--c-white);
}
</style>

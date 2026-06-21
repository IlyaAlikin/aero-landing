<script setup lang="ts">
// "Отзывы учениц" — Figma 57:184/200/185/193. Arrows sit OUTSIDE the phones (#1).
import { computed } from 'vue'
import PhoneMockup from '@entities/phone-mockup/ui/PhoneMockup.vue'
import { useReviewsStore } from '@features/reviews-slider/model/store'

const store = useReviewsStore()
const base: Array<1 | 2 | 3> = [1, 2, 3]
function variantFor(slot: number): 1 | 2 | 3 {
  return base[(((slot + store.active - 2) % 3) + 3) % 3]
}
const phones = computed(() => [0, 1, 2].map((s) => variantFor(s)))
const dots = computed(() => Array.from({ length: store.total }, (_, i) => i))
</script>

<template>
  <section id="reviews" class="reviews">
    <div class="container">
      <h2 class="reviews__title"><b>Отзывы</b> <span>учениц</span></h2>

      <div class="stage">
        <button class="arrow" aria-label="Назад" @click="store.prev()">
          <svg viewBox="0 0 10 15"><path d="M9 1 2 7.5 9 14" fill="none" stroke="currentColor" stroke-width="2.2" /></svg>
        </button>

        <div class="phones">
          <PhoneMockup v-for="(v, i) in phones" :key="i" class="phones__item" :class="{ 'phones__item--center': i === 1 }" :variant="v" />
        </div>

        <button class="arrow" aria-label="Вперёд" @click="store.next()">
          <svg viewBox="0 0 10 15"><path d="M1 1 8 7.5 1 14" fill="none" stroke="currentColor" stroke-width="2.2" /></svg>
        </button>
      </div>

      <div class="dots">
        <button
          v-for="d in dots"
          :key="d"
          class="dot"
          :class="{ 'dot--active': d === store.active }"
          :aria-label="`Отзыв ${d + 1}`"
          @click="store.set(d)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews {
  background: var(--c-pink);
  padding: 24px 0 40px;
}
.reviews__title {
  text-align: center;
  font-family: var(--font-suisse);
  font-weight: 700;
  font-size: 64.582px;
  line-height: 1.2;
  color: var(--c-white);
}
.reviews__title span {
  font-weight: 300;
}

.stage {
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
}
.phones {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.phones__item {
  flex: none;
  transform: scale(0.86);
}

.arrow {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--c-white);
  color: var(--c-pink);
}
.arrow svg {
  width: 10px;
  height: 15px;
}

.dots {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--c-grey-line);
  transition: all 0.2s ease;
}
.dot--active {
  width: 16px;
  height: 16px;
  background: var(--c-white);
}

@media (max-width: 1100px) {
  .phones__item:not(.phones__item--center) {
    display: none;
  }
}
@media (max-width: 760px) {
  .reviews__title {
    font-size: 30px;
  }
  .stage {
    gap: 6px;
  }
  .phones__item {
    transform: scale(0.62);
    margin-inline: -40px;
  }
  .arrow {
    width: 44px;
    height: 44px;
  }
}
</style>

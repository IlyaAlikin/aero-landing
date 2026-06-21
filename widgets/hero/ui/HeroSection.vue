<script setup lang="ts">
// Hero — Figma: 57:25 (H1), 57:32 (subtitle), 57:27 (button), 57:33 (dog art).
import { pos } from '@shared/lib/figma'
import AppButton from '@shared/ui/AppButton.vue'
</script>

<template>
  <!-- H1: 57:25 @(358,173) w773, Suisse Light 46/1.2 uppercase -->
  <h1 class="title" :style="pos(358, 173, 773)">
    <span class="title__dim">Научитесь создавать </span><span class="title__accent"
      >современные<br />и качественные </span
    ><span class="title__dim">оформления<br />из шаров</span>
  </h1>

  <!-- Subtitle: 57:32 @(358,475) w486, Suisse Regular 23 / 1.45, tracking -0.32 -->
  <p class="subtitle" :style="pos(358, 475, 486)">
    <span>Пошаговая система работы с шарами, материалами и техниками </span
    ><span class="subtitle__bold">от практика<br />с реальным опытом.</span>
  </p>

  <!-- Button: 57:27 @(358,592) 544×123 -->
  <div
    class="cta"
    :style="{ ...pos(358, 592, 544, 123), boxShadow: '0 31.837px 63.674px -15.918px rgba(233,97,129,0.5)' }"
  >
    <AppButton label="Перейти к покупке" variant="pink" size="lg" />
  </div>
</template>

<style scoped>
.title {
  font-family: var(--font-suisse);
  font-weight: 300;
  font-size: 46px;
  line-height: 1.2;
  text-transform: uppercase;
  margin: 0;
}
.title__dim {
  color: rgba(27, 27, 27, 0.8);
}
.title__accent {
  color: var(--c-pink);
  font-weight: 700;
}

.subtitle {
  font-family: var(--font-suisse);
  font-weight: 400;
  font-size: 23px;
  line-height: 1.45;
  letter-spacing: -0.32px;
  color: var(--c-ink-1b);
}
.subtitle__bold {
  font-weight: 700;
}

.cta {
  border-radius: 39.796px;
}
</style>

<script setup lang="ts">
// Desktop header / floating nav — Figma 57:77 (bar) + 57:78 (container).
import { pos } from '@shared/lib/figma'
import { NAV_LINKS } from '@shared/config/nav'
</script>

<template>
  <!-- Nav bar background: 57:77 @(360,45) 1200×87, #ececec, r=27.32 -->
  <div class="bar" :style="pos(360, 45, 1200, 87)" />

  <!-- Nav container: 57:78 @(381,61) 1158×55, flex gap 35, items center -->
  <nav class="nav" :style="pos(381, 61, 1158, 55)">
    <a
      v-for="link in NAV_LINKS"
      :key="link.label"
      class="nav__item"
      :class="{ 'nav__item--accent': link.accent }"
      :style="{ width: link.width + 'px' }"
      :href="link.href"
    >
      {{ link.label }}
    </a>
  </nav>
</template>

<style scoped>
.bar {
  background: var(--c-nav);
  border-radius: 27.32px;
  overflow: hidden;
}

.nav {
  display: flex;
  gap: 35px;
  align-items: center;
}

.nav__item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  /* Figma padding: pt 18 / pr 34 / pb 19 / pl 35 */
  padding: 18px 34px 19px 35px;
  background: var(--c-white);
  border-radius: 19.514px;
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 14.013px;
  line-height: 1.3;
  letter-spacing: -0.4204px;
  color: var(--c-black);
  white-space: nowrap;
}

.nav__item--accent {
  background: var(--c-pink);
  color: var(--c-white);
  font-weight: 700;
}
</style>

<script setup lang="ts">
// Sticky floating nav (Figma 57:77/57:78) + mobile burger menu (Figma 59:2).
// Anchors scroll to sections (#7) with scroll-spy active highlighting.
import { ref } from 'vue'
import { NAV_LINKS } from '@shared/config/nav'
import { useScrollSpy } from '@features/scroll-spy/model/useScrollSpy'

const SECTION_IDS = ['course', 'author', 'reviews', 'pricing', 'telegram', 'faq']
const { active } = useScrollSpy(SECTION_IDS)

const open = ref(false)
function isActive(href: string) {
  return href === `#${active.value}`
}
</script>

<template>
  <header class="header">
    <div class="header__inner container">
      <!-- Mobile-only avatar logo (Figma mobile 73:1148 — 56×56 round). Desktop keeps the nav pill. -->
      <a class="header__logo" href="#" aria-label="На главную">
        <img src="/img/logo.png" alt="" />
      </a>

      <nav class="nav">
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

      <button
        class="burger"
        type="button"
        aria-label="Меню"
        :aria-expanded="open"
        @click="open = !open"
      >
        <span /><span /><span />
      </button>
    </div>

    <!-- Mobile overlay menu (59:2) -->
    <transition name="menu">
      <div v-if="open" class="menu" @click.self="open = false">
        <nav class="menu__panel">
          <a
            v-for="link in NAV_LINKS"
            :key="link.label"
            class="menu__item"
            :class="{ 'menu__item--accent': link.accent }"
            :href="link.href"
            @click="open = false"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  padding-top: 20px;
  pointer-events: none;
}
.header__inner {
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.nav {
  display: flex;
  gap: 35px; /* Figma 57:78 itemSpacing */
  align-items: center;
  background: var(--c-nav);
  border-radius: 27.32px;
  padding: 16px 21px;
  pointer-events: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}
.nav__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  padding: 0 10px; /* width is fixed per item (Figma 57:79..91), text centered */
  background: var(--c-white);
  border-radius: 19.514px;
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: 14.013px;
  letter-spacing: -0.4204px;
  color: var(--c-black);
  white-space: nowrap;
  transition: background 0.2s, color 0.2s;
}
.nav__item--active {
  background: var(--c-pink);
  color: var(--c-white);
}
.nav__item--accent {
  background: var(--c-pink);
  color: var(--c-white);
  font-weight: 700;
}

/* Mobile-only round avatar logo (Figma 73:1148: 56×56, radius 1000px). */
.header__logo {
  display: none;
  width: 56px; /* Figma mobile size-[56px] */
  height: 56px;
  border-radius: 50%; /* Figma rounded-[1000px] */
  overflow: hidden;
  pointer-events: auto;
  flex: 0 0 auto;
}
.header__logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Burger — mobile only. Figma 73:1149: bare 3 lines, 32×21, 1px black, no box. */
.burger {
  display: none;
  width: 32px; /* Figma Menu w-[32px] */
  height: 21px; /* Figma Menu viewBox 32×21 */
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  pointer-events: auto;
}
.burger span {
  width: 100%;
  height: 1px; /* Figma stroke 1px */
  background: var(--c-black);
}

/* Mobile menu overlay */
.menu {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 70px;
  pointer-events: auto;
}
.menu__panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #d9d9d9;
  border-radius: 28px;
  padding: 28px 36px;
  width: 280px;
}
.menu__item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--c-white);
  border-radius: 30px;
  padding: 18px 24px;
  font-family: var(--font-inter);
  font-size: 16px;
  color: var(--c-black);
  text-align: center;
}
.menu__item--accent {
  background: var(--c-pink);
  color: var(--c-white);
  font-weight: 700;
}
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

@media (max-width: 900px) {
  .nav {
    display: none;
  }
  .header__inner {
    justify-content: space-between; /* Figma mobile: logo left, burger right */
    align-items: center;
  }
  .header__logo {
    display: block;
  }
  .burger {
    display: flex;
  }
}
</style>

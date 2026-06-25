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
      <!-- Desktop nav (Figma 107:5875): round logo + floating white pills, gap 52, no container. -->
      <nav class="nav">
        <a class="nav__logo" href="#" aria-label="На главную">
          <img src="/img/logo.png" alt="" />
        </a>
        <a
          v-for="link in NAV_LINKS"
          :key="link.label"
          class="nav__item"
          :class="{ 'nav__item--accent': link.accent, 'nav__item--active': isActive(link.href) }"
          :style="{ flexGrow: link.width }"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener' : undefined"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Mobile bar (Figma 107:6632): round logo left, burger right -->
      <a class="header__logo" href="#" aria-label="На главную">
        <img src="/img/logo.png" alt="" />
      </a>

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
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener' : undefined"
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
  padding-top: clamp(0.75rem, 1.4vw, 1.25rem); /* 20 */
  pointer-events: none;
}
.header__inner {
  display: flex;
  justify-content: center;
  pointer-events: none;
}

/* Figma 107:6261 — menu sits on a light #ececec rounded bar (gap 52), fills the container. */
.nav {
  display: flex;
  width: 100%;
  gap: clamp(0.75rem, 3.61vw, 3.25rem); /* 52 at the 1440 design */
  align-items: center;
  pointer-events: auto;
  background: var(--c-nav); /* #ececec */
  border-radius: clamp(1.2rem, 1.9vw, 1.7075rem); /* 27.32 */
  padding: clamp(0.7rem, 1.1vw, 1rem) clamp(0.9rem, 1.46vw, 1.3125rem); /* 16 / 21 */
}
/* Round avatar logo as the first row item (56×56), fixed size. */
.nav__logo {
  flex: 0 0 auto;
  width: clamp(2.6rem, 3.9vw, 3.5rem); /* 56 — fluid, never grows */
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
}
.nav__logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.nav__item {
  display: inline-flex;
  flex: 1 1 0; /* rubber: pills fill the row, proportions via flex-grow=link.width */
  min-width: 0;
  align-items: center;
  justify-content: center;
  height: clamp(2.4rem, 3.82vw, 3.4375rem); /* 55 — fluid pill height */
  padding: 0 clamp(0.4rem, 0.7vw, 0.625rem); /* 10 */
  background: var(--c-white);
  border-radius: clamp(0.75rem, 1.35vw, 1.22rem); /* 19.514 */
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: clamp(0.7rem, 0.97vw, 0.876rem); /* 14.013 */
  letter-spacing: -0.03em;
  color: var(--c-black);
  white-space: nowrap;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: background 0.3s ease, color 0.3s ease;
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
  height: 20px; /* Figma 107:6634 Menu h-[20px] */
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

@media (max-width: 767px) {
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

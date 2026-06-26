<script setup lang="ts">
// Footer — Figma 107:6253 (desktop) / 107:6573 (mobile). Dark #2f2f2f band: nav menu on a
// light #ececec bar, social icons, legal links + business info.
import { NAV_LINKS } from '@shared/config/nav'
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <!-- desktop: nav menu on the light bar (like the header) -->
      <nav class="footer__menu">
        <a class="footer__logo" href="#" aria-label="На главную"><img src="/img/logo.png" alt="" /></a>
        <a
          v-for="link in NAV_LINKS"
          :key="link.label"
          class="footer__item"
          :class="{ 'footer__item--accent': link.accent }"
          :style="{ flexGrow: link.width }"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener' : undefined"
        >{{ link.label }}</a>
      </nav>

      <!-- mobile: round logo + burger (Figma 107:6577) -->
      <div class="footer__bar">
        <a class="footer__logo" href="#" aria-label="На главную"><img src="/img/logo.png" alt="" /></a>
        <span class="footer__burger" aria-hidden="true"><span /><span /><span /></span>
      </div>

      <div class="footer__social">
        <a href="https://t.me/VikaRusskikh" target="_blank" rel="noopener" aria-label="Telegram">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.14-3.05-1.99 1.93c-.23.23-.42.42-.83.42z" /></svg>
        </a>
        <a href="https://www.instagram.com/len_krk_59" target="_blank" rel="noopener" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>

      <div class="footer__links">
        <a
          class="footer__link"
          href="https://docs.google.com/document/d/10i1XNl1X5uWmuZGeEM68TorV6lflUgP3NRE8iH-wqtw/edit?usp=sharing"
          target="_blank"
          rel="noopener"
        >Политика конфиденциальности</a>
        <a class="footer__link" href="#">Соглашение на обработку персональных данных</a>
        <a
          class="footer__link"
          href="https://docs.google.com/document/d/1DUbyXIMvpjbP9_HFO4pbEuEvpSfpU9-_OQUKvrkttwg/edit?usp=sharing"
          target="_blank"
          rel="noopener"
        >Публичная оферта</a>
        <p class="footer__legal">
          ИП Русских Олег Игоревич<br />
          ИНН 591610036427<br />
          ОГРНИП: 317595800135673
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--c-ink-2f); /* #2f2f2f */
  padding: 33px 0 60px;
}
.footer__inner {
  display: flex;
  flex-direction: column;
}

/* nav menu on the light bar (Figma 107:6261) */
.footer__menu {
  display: flex;
  width: 100%;
  gap: clamp(0.75rem, 3.61vw, 3.25rem); /* 52 */
  align-items: center;
  background: var(--c-nav); /* #ececec */
  border-radius: clamp(1.2rem, 1.9vw, 1.7075rem); /* 27.32 */
  padding: clamp(0.7rem, 1.1vw, 1rem) clamp(0.9rem, 1.46vw, 1.3125rem); /* 16 / 21 */
}
.footer__logo {
  flex: 0 0 auto;
  width: clamp(2.6rem, 3.9vw, 3.5rem); /* 56 */
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
}
.footer__logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.footer__item {
  display: inline-flex;
  flex: 1 1 0;
  min-width: 0;
  align-items: center;
  justify-content: center;
  height: clamp(2.4rem, 3.82vw, 3.4375rem); /* 55 */
  padding: 0 clamp(0.4rem, 0.7vw, 0.625rem);
  background: var(--c-white);
  border-radius: clamp(0.75rem, 1.35vw, 1.22rem); /* 19.514 */
  font-family: var(--font-inter);
  font-weight: 400;
  font-size: clamp(0.7rem, 0.97vw, 0.876rem); /* 14.013 */
  letter-spacing: -0.03em;
  color: var(--c-black);
  white-space: nowrap;
}
.footer__item--accent {
  background: var(--c-pink);
  color: var(--c-white);
  font-weight: 700;
}

/* mobile bar — hidden on desktop */
.footer__bar {
  display: none;
  align-items: center;
  justify-content: space-between;
}
.footer__burger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 32px;
  height: 21px;
}
.footer__burger span {
  height: 1px;
  background: var(--c-white);
}

.footer__social {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 30px;
  color: var(--c-pink);
}
.footer__social a {
  display: inline-flex;
  color: inherit;
}
.footer__social svg {
  width: 28px;
  height: 28px;
  display: block;
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 29px;
  font-family: var(--font-suisse);
  font-weight: 400;
  font-size: 14.013px;
  line-height: 1.3;
  letter-spacing: -0.03em;
  color: var(--c-white);
}
.footer__link {
  color: var(--c-white);
  width: max-content;
  max-width: 100%;
}
.footer__legal {
  margin: 0;
  color: var(--c-white);
}

@media (max-width: 767px) {
  .footer {
    padding: 8px 0 24px;
  }
  .footer__menu {
    display: none; /* mobile shows the compact bar instead */
  }
  .footer__bar {
    display: flex;
  }
  .footer__logo {
    width: 33px; /* Figma mobile logo 33 */
  }
  .footer__social {
    margin-top: 18px;
    gap: 12px;
  }
  .footer__social svg {
    width: 16px;
    height: 16px;
  }
  .footer__links {
    margin-top: 20px;
    gap: 12px; /* Figma mobile Footer Links gap 12 */
    font-size: 8px; /* Figma mobile text 8 */
  }
}
</style>

<script setup lang="ts">
// CTA button with leading play-triangle — Figma buttons 57:27 / 57:241 / 57:359 / 57:364.
type Variant = 'pink' | 'blue' | 'beige'
type Size = 'lg' | 'md'

withDefaults(defineProps<{ label: string; variant?: Variant; size?: Size }>(), {
  variant: 'pink',
  size: 'lg',
})
</script>

<template>
  <button :class="['btn', `btn--${variant}`, `btn--${size}`]" type="button">
    <!-- Polygon 6 — proportions from Figma viewBox 19.43×17.81 -->
    <svg class="btn__tri" viewBox="0 0 19.43 17.81" aria-hidden="true">
      <path d="M19.43 8.9 0 17.81V0z" fill="currentColor" />
    </svg>
    <span class="btn__label">{{ label }}</span>
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: clamp(7px, 0.83vw, 12px);
  width: 100%;
  font-family: var(--font-inter);
  font-weight: 600;
}

.btn__tri {
  flex: 0 0 auto;
}

/* size lg — fluid between the two Figma frames: mobile 394 (h68, font17.544, r21.93)
   ↔ desktop 1920 (h123, font31.837, r39.796). Linear clamp, no breakpoint jumps. */
.btn--lg {
  height: clamp(68px, 53.8px + 3.604vw, 123px);
  border-radius: clamp(21.93px, 17.317px + 1.171vw, 39.796px);
  font-size: clamp(17.544px, 13.854px + 0.9366vw, 31.837px);
  letter-spacing: -0.01em;
}
.btn--lg .btn__tri {
  width: clamp(14px, 10.902px + 0.7864vw, 26px);
  height: clamp(14px, 11.16px + 0.7208vw, 25px);
}

/* size md — Figma 57:359/57:364: h 113, font 28, radius 35 */
.btn--md {
  height: 113px;
  border-radius: 35px;
  font-size: 28px;
  letter-spacing: -0.28px;
}
.btn--md .btn__tri {
  width: 25px;
  height: 23px;
}

.btn--pink {
  background: var(--c-pink);
  color: var(--c-white);
}
.btn--blue {
  background: var(--c-blue);
  color: var(--c-white);
}
.btn--beige {
  background: var(--c-beige);
  color: var(--c-ink-20);
}

@media (max-width: 760px) {
  /* btn--lg is fully fluid via clamp() above — no override needed here. */
  /* Figma mobile offer button 73:1068: h66, radius 20.824, font 16.659, ls -0.1666 */
  .btn--md {
    height: 66px;
    border-radius: 20.824px;
    font-size: 16.659px;
    letter-spacing: -0.1666px;
  }
  .btn--md .btn__tri {
    width: 13px;
    height: 13px;
  }
}
</style>

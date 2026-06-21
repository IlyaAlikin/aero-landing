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
  gap: 12px;
  width: 100%;
  height: 100%;
  font-family: var(--font-inter);
  font-weight: 600;
}

.btn__tri {
  flex: 0 0 auto;
}

/* size lg — Figma 57:27/57:241: h 123, font 31.837, radius 39.796 */
.btn--lg {
  border-radius: 39.796px;
  font-size: 31.837px;
  letter-spacing: -0.3184px;
}
.btn--lg .btn__tri {
  width: 26px;
  height: 25px;
}

/* size md — Figma 57:359/57:364: h 113, font 28, radius 35 */
.btn--md {
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
</style>

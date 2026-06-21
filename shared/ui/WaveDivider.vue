<script setup lang="ts">
// Full-bleed wavy transition between two sections (Figma wave dividers 57:34 etc.).
// `from` = colour above the curve, `to` = colour below. Centre dip matches Figma.
withDefaults(
  defineProps<{ from?: string; to?: string; height?: number; mobileHeight?: number }>(),
  { from: 'var(--c-page)', to: 'var(--c-pink)', height: 70, mobileHeight: 34 },
)
const PATH = 'M0 0C0 0 584.126 36.9745 960 36.9745C1335.87 36.9745 1920 0 1920 0V215H0V0Z'
</script>

<template>
  <div
    class="wd"
    :style="{ background: from, '--h': height + 'px', '--mh': mobileHeight + 'px' }"
    aria-hidden="true"
  >
    <svg viewBox="0 0 1920 215" preserveAspectRatio="none">
      <path :d="PATH" :fill="to" />
    </svg>
  </div>
</template>

<style scoped>
.wd {
  position: relative;
  width: 100%;
  height: var(--h);
  line-height: 0;
}
.wd svg {
  display: block;
  width: 100%;
  height: 100%;
}
@media (max-width: 760px) {
  .wd {
    height: var(--mh);
  }
}
</style>

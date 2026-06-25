<script setup lang="ts">
// Desktop pink ribbon band — exact Figma Group 2 (111:3), viewBox 1920×273.
// Top edge dips down 37px at centre, bottom edge rises 37px at centre.
// `above`/`below` fill the transparent centre gaps so it blends with its neighbours.
withDefaults(
  defineProps<{ above?: string; below?: string; height?: number }>(),
  { above: 'transparent', below: 'transparent', height: 273 },
)
const TOP = 'M0 0C0 0 584.126 36.9745 960 36.9745C1335.87 36.9745 1920 0 1920 0V215H0V0Z'
const BOTTOM = 'M0 273C0 273 584.126 236.025 960 236.025C1335.87 236.025 1920 273 1920 273V58H0V273Z'
</script>

<template>
  <div
    class="ribbon"
    :style="{ '--h': height + 'px', '--above': above, '--below': below }"
    aria-hidden="true"
  >
    <svg viewBox="0 0 1920 273" preserveAspectRatio="none">
      <path :d="TOP" fill="var(--c-pink)" />
      <path :d="BOTTOM" fill="var(--c-pink)" />
    </svg>
  </div>
</template>

<style scoped>
.ribbon {
  width: 100%;
  height: var(--h);
  line-height: 0;
  /* hard split hides behind the solid pink centre; gaps show the neighbour colours */
  background: linear-gradient(to bottom, var(--above) 50%, var(--below) 50%);
}
.ribbon svg {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

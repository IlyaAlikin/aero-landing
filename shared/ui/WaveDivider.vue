<script setup lang="ts">
import { computed } from 'vue'
// Full-bleed wavy transition between two sections (Figma wave dividers 57:34 etc.).
// `from` = colour above the curve, `to` = colour below. Centre dip matches Figma.
const props = withDefaults(
  defineProps<{ from?: string; to?: string; height?: number; mobileHeight?: number; flip?: boolean }>(),
  { from: 'transparent', to: 'var(--c-pink)', height: 215, mobileHeight: 34, flip: false },
)
// `BODY` = region below the curve (filled with `to`); `CAP` = the thin wave above it
// (filled with `from`). Drawing both — instead of a solid `from` background — lets `to`
// be transparent so the area below the curve shows through.
// Default curve dips DOWN at the centre (desktop). `flip` bulges it UP at the centre
// (Figma mobile benefits band 117:83).
const BODY = computed(() =>
  props.flip
    ? 'M0 36.9745C0 36.9745 584.126 0 960 0C1335.87 0 1920 36.9745 1920 36.9745V215H0V36.9745Z'
    : 'M0 0C0 0 584.126 36.9745 960 36.9745C1335.87 36.9745 1920 0 1920 0V215H0V0Z',
)
const CAP = computed(() =>
  props.flip
    ? 'M0 36.9745C0 36.9745 584.126 0 960 0C1335.87 0 1920 36.9745 1920 36.9745L1920 0L0 0Z'
    : 'M0 0C0 0 584.126 36.9745 960 36.9745C1335.87 36.9745 1920 0 1920 0Z',
)
</script>

<template>
  <div
    class="wd"
    :style="{ '--h': height + 'px', '--mh': mobileHeight + 'px' }"
    aria-hidden="true"
  >
    <!-- Each path is stroked with its own fill colour via non-scaling-stroke: this
         expands the fill by ~0.5 screen-px on every side, sealing the sub-pixel
         antialiasing seam along the shared curve AND the straight edges where the
         divider meets the neighbouring sections (the pink/grey hairlines on mobile).
         A transparent colour yields a transparent stroke, so nothing is added below
         a see-through curve. -->
    <svg viewBox="0 0 1920 215" preserveAspectRatio="none" shape-rendering="geometricPrecision">
      <path :d="BODY" :fill="to" :stroke="to" stroke-width="1" vector-effect="non-scaling-stroke" />
      <path :d="CAP" :fill="from" :stroke="from" stroke-width="1" vector-effect="non-scaling-stroke" />
    </svg>
  </div>
</template>

<style scoped>
.wd {
  position: relative;
  width: 100%;
  height: var(--h);
  line-height: 0;
  background: transparent; /* below-curve area is the `to` path, so it can be see-through */
}
.wd svg {
  display: block;
  position: absolute;
  left: 0;
  /* bleed 1px past the top & bottom so the filled straight edges overlap the
     neighbouring sections — kills the hairline seam at fractional device-pixel
     ratios. preserveAspectRatio=none means the 2px overscan is imperceptible. */
  top: -1px;
  width: 100%;
  height: calc(100% + 2px);
}
@media (max-width: 760px) {
  .wd {
    height: var(--mh);
  }
}
</style>

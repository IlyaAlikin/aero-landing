<script setup lang="ts">
// Mobile frame "моб" — Figma 57:389, 320×7982. Built after the desktop frame is verified.
import FigmaCanvas from '@shared/ui/FigmaCanvas.vue'
</script>

<template>
  <FigmaCanvas :frame-w="320" :frame-h="7982" class="frame">
    <!-- mobile sections added in the mobile step -->
  </FigmaCanvas>
</template>

<style scoped>
.frame {
  background: var(--c-white); /* Figma mobile frame fill #ffffff */
}
</style>

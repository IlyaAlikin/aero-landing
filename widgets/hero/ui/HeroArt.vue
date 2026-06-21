<script setup lang="ts">
// Hero art (57:33) @(818,-69) 1039×1250 — rendered beneath #fafafa so it's clipped
// like in Figma. Original framing: image fills the box (object-cover).
import { pos } from '@shared/lib/figma'
</script>

<template>
  <img
    class="dog"
    :style="pos(818, -69, 1039, 1250)"
    src="/img/hero-dog.png"
    alt="Собачка из розовых воздушных шаров"
  />
</template>

<style scoped>
.dog {
  object-fit: cover;
  pointer-events: none;
}
</style>

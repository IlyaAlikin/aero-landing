<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

// Pixel-exact canvas: children are absolutely positioned at their exact Figma frame
// coordinates inside a `frameW`×`frameH` box; the whole box is scaled to fit the parent
// width (capped at 1× so it never upscales beyond the native frame) and centered.
const props = withDefaults(defineProps<{ frameW: number; frameH: number }>(), {
  frameW: 1920,
  frameH: 1080,
})

const outer = ref<HTMLElement | null>(null)
const scale = ref(1)
let ro: ResizeObserver | null = null

function update() {
  if (!outer.value) return
  scale.value = Math.min(1, outer.value.clientWidth / props.frameW)
}

const offsetLeft = computed(() => {
  if (!outer.value) return 0
  return Math.max(0, (outer.value.clientWidth - props.frameW * scale.value) / 2)
})

onMounted(() => {
  update()
  ro = new ResizeObserver(update)
  if (outer.value) ro.observe(outer.value)
  window.addEventListener('resize', update)
})
onBeforeUnmount(() => {
  ro?.disconnect()
  window.removeEventListener('resize', update)
})
</script>

<template>
  <div ref="outer" class="fc" :style="{ height: frameH * scale + 'px' }">
    <div
      class="fc__inner"
      :style="{
        width: frameW + 'px',
        height: frameH + 'px',
        transform: `translateX(${offsetLeft}px) scale(${scale})`,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.fc {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.fc__inner {
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;
}
</style>

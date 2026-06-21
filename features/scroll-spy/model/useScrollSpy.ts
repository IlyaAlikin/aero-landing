import { ref, onMounted, onBeforeUnmount } from 'vue'

// Tracks which section is currently in view to highlight the matching nav item (#7).
export function useScrollSpy(ids: string[]) {
  const active = ref<string>(ids[0] ?? '')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) active.value = e.target.id
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { active }
}

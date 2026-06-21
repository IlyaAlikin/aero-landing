import { defineStore } from 'pinia'

// Reviews carousel state — 5 positions (matching the 5 nav dots in Figma 57:185),
// centre position active by default as shown in the mockup.
const TOTAL = 5

export const useReviewsStore = defineStore('reviews', {
  state: () => ({ total: TOTAL, active: 2 }),
  actions: {
    set(i: number) {
      this.active = (i + this.total) % this.total
    },
    next() {
      this.set(this.active + 1)
    },
    prev() {
      this.set(this.active - 1)
    },
  },
})

import { defineStore } from 'pinia'

// FAQ accordion open-state. The Figma mockup has no answer bodies (only questions + “+”),
// so toggling switches the +/− icon; no answer text is invented.
export const useFaqStore = defineStore('faq', {
  state: () => ({ open: new Set<number>() }),
  actions: {
    toggle(i: number) {
      if (this.open.has(i)) this.open.delete(i)
      else this.open.add(i)
    },
    isOpen(i: number) {
      return this.open.has(i)
    },
  },
})

import { defineStore } from 'pinia'

// FAQ accordion open-state — single-open: opening one closes the others.
export const useFaqStore = defineStore('faq', {
  state: () => ({ open: 0 as number }), /* Figma: first item open by default */
  actions: {
    toggle(i: number) {
      this.open = this.open === i ? -1 : i
    },
    isOpen(i: number) {
      return this.open === i
    },
  },
})

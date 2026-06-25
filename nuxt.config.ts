import { fileURLToPath } from 'node:url'

// FSD layers are aliased so imports read "top-down": pages → widgets → features → entities → shared
export default defineNuxtConfig({
  compatibilityDate: '2025-06-01',
  ssr: true,
  devtools: { enabled: false },

  modules: ['@pinia/nuxt'],

  css: ['~/app/styles/fonts.css', '~/app/styles/tokens.css', '~/app/styles/global.css'],

  typescript: {
    strict: true,
    typeCheck: false,
  },

  // Images live in /public and are referenced by absolute URL — keep the Vue compiler
  // from rewriting static `src="/img/..."` into module imports.
  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          img: [],
          image: [],
          source: [],
        },
      },
    },
  },

  alias: {
    '@app': fileURLToPath(new URL('./app', import.meta.url)),
    '@pages': fileURLToPath(new URL('./pages', import.meta.url)),
    '@widgets': fileURLToPath(new URL('./widgets', import.meta.url)),
    '@features': fileURLToPath(new URL('./features', import.meta.url)),
    '@entities': fileURLToPath(new URL('./entities', import.meta.url)),
    '@shared': fileURLToPath(new URL('./shared', import.meta.url)),
  },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Аэродизайн — обучение работе с шарами',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
})

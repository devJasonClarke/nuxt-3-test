import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    css: ["~/assets/scss/main.scss"],
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@import "@/assets/scss/main.scss";',
            },
          },
        },
      },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      "link": [
        {
          rel: "preconnect", 
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect", 
          href: "https://fonts.gstatic.com"
        },
        {
          rel: "stylesheet", 
          href: "https://fonts.googleapis.com/css2?family=Mali:wght@200&display=swap"
        },
        {
          rel: "stylesheet", 
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        }
      ],
      "style": [],
      "script": [],
      "noscript": []
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["bootstrap/dist/css/bootstrap.min.css",
        "bootstrap-icons/font/bootstrap-icons.css"
  ],
  compatibilityDate: "2024-09-06",
  modules: ["@nuxtjs/supabase"],
  supabase: { redirect: true },

})
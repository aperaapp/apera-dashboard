// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL || 'https://yrkpgoovsicngdnbqxsi.supabase.co',
      supabaseKey: process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlya3Bnb292c2ljbmdkbmJxeHNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzODIzMzYsImV4cCI6MjA4NDk1ODMzNn0.M_JjxaGRiCq8Op-Vj61RsxQWoWyITlx_Iw18aC1NUfo',
    },
    // Private (server-side only)
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  },
  extends: ["@nuxt/ui-pro"],
  nitro: {
    preset: "cloudflare_pages",
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
    "@hebilicious/vue-query-nuxt",
    "vue-sonner/nuxt",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxthub/core",
  ],

  ui: {
    safelistColors: ["primary", "red", "orange", "green"],
  },

  colorMode: {
    disableTransition: true,
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    "/": { prerender: true },
  },

  devtools: {
    enabled: true,
  },

  typescript: {
    strict: false,
  },

  future: {
    compatibilityVersion: 4,
  },
  supabase: {
    redirect: false,
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  compatibilityDate: "2024-07-11",
});
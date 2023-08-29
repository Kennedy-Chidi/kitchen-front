export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Kitchen Grace",
    htmlAttrs: {
      lang: "en",
      "data-wf-domain": "kitchengrace.io",
      "data-wf-page": "64b6be9c94ade9f930694692",
      "data-wf-site": "64b6be9c94ade9f93069468e",
    },

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {
        content: "One of the best online Grocery Platform in Nigeria.",
        name: "description",
      },
      {
        content: "Welcome to Kitchen Grace",
        property: "og:title",
      },
      {
        content: "The best place to flourish your kitchen with nourishment.",
        property: "og:description",
      },
      {
        content: "https://kitchengrace.io/Logo.png",
        property: "og:image",
      },
      {
        content: "Welcome to Kitchen Grace",
        property: "twitter:title",
      },
      {
        content: "The best place to flourish your kitchen with nourishment.",
        property: "twitter:description",
      },
      {
        content: "https://kitchengrace.io/Logo.png",
        property: "twitter:image",
      },
      { property: "og:type", content: "website" },
      { content: "summary_large_image", name: "twitter:card" },
      { content: "width=device-width, initial-scale=1", name: "viewport" },
      { content: "Webflow", name: "generator" },
    ],

    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "/css/style.css" },
      { rel: "stylesheet", type: "text/css", href: "/css/custom.css" },
      { href: "https://fonts.googleapis.com", rel: "preconnect" },

      {
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
        crossorigin: "anonymous",
      },
      {
        href: "/favicon.ico",
        rel: "shortcut icon",
        type: "image/x-icon",
      },
      {
        href: "/favicon.ico",
        rel: "apple-touch-icon",
      },
    ],

    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
        type: "text/javascript",
      },
      {
        src: "/script/query.js",
        type: "text/javascript",
      },
      {
        src: "/script/smartSupp.js",
        type: "text/javascript",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ['@/assets/custom.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/fontLoader.js", mode: "client" },
    // { src: "~/plugins/iconify.js", mode: "client" },
    { src: "~/plugins/socket.io.js", ssr: false },
  ],

  router: {
    base: "/",
    middleware: ["isAuthenticated"],
  },

  auth: {
    strategies: {
      local: {
        // scheme: 'refresh'
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer",
        },
        user: {
          property: "user",
          autoFetch: true,
        },

        endpoints: {
          login: { url: "/users/login", method: "post" },
          logout: false,
          user: { url: "/users/get-user", method: "get" },
        },
        cookie: {
          options: {
            sameSite: "lax", // Set to 'none' for cross-site access
          },
        },
      },
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  extends: ["nuxt-seo-kit"],
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],

  generate: {
    routes: [
      // Add the confirmation route to the generated routes
    ],
  },

  runtimeConfig: {
    public: {
      siteName: "Kitchen Grace",
      siteDescription: "The best place to nourish your Kitchen",
      language: "en",
    },
  },

  axios: {
    // baseURL: process.env.API_DEV_URL,
    baseURL: "https://kitchen.up.railway.app/api",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    target: "static",
  },
};

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'google-slides',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'bootstrap-vue/nuxt',
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAeymUKTWh1WQa61hcsDCVlC8ipbxfsUs8",
          authDomain: "pwa-googe-slide.firebaseapp.com",
          projectId: "pwa-googe-slide",
          storageBucket: "pwa-googe-slide.appspot.com",
          messagingSenderId: "1052585376279",
          appId: "1:1052585376279:web:723c4d94293c6164b07a52",
          //measurementId: '<measurementId>'
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          database: true, // Just as example. Can be any other service.
        }
      }
    ]
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

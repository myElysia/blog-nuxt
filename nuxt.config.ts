// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dir: undefined,
  $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
  // app配置项
  app: {
    // 页面过渡效果
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  compatibilityDate: '2025-07-15',
  // Color-Mode
  colorMode: {
    classSuffix: '',
  },
  // Nuxt UI 引入CSS
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },
  // Nuxt Fonts 配置项, 位置: https://fonts.nuxt.com/get-started/configuration
  fonts: {
    defaults: {
      weights: [400],  // 默认 [400 700]
      styles: ['normal', 'italic'],
      subsets: [
        'cyrillic-ext',
        'cyrillic',
        'greek-ext',
        'greek',
        'vietnamese',
        'latin-ext',
        'latin',
      ]
    },
  },
  modules: [
      '@nuxt/eslint',
      '@nuxt/image',
      '@nuxt/scripts',
      '@nuxtjs/color-mode',
      '@pinia/nuxt',
  ],
  // vueuse
  vueuse: {
    ssrHandlers: true,
  }
})
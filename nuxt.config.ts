// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app配置项
  app: {
    // 页面过渡效果
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  compatibilityDate: '2025-07-15',
  // Nuxt Content 配置项
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,  // 递归三层目录检索
        }
      }
    }
  },
  // Nuxt UI 引入CSS
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  // Nuxt Fonts 配置项
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
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ]
})
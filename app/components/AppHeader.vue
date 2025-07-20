<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
    [
      {
        label: "筑梦小栈~",
        to: "/"
      }
    ],
    [
       {
        label: '首页',
        icon: 'i-lucide-house',
        to: '/'
      },
      {
        label: '文章',
        icon: 'i-lucide-book-open',
        to: '/blog',
        children: [
           {
              label: '归档',
              icon: 'i-lucide-archive',
              to: '/archives'
            },
            {
              label: '分类',
              icon: 'i-lucide-list',
              to: '/categorys'
            },
            {
              label: '标签',
              icon: 'i-material-symbols-tab',
              to: '/tabs',
            }
        ]
      },
      {
        label: '关于我',
        icon: 'i-lucide-monitor-speaker',
        to: '/me',
      }
    ],
    [
      {
        label: "github",

      }
    ]
])
</script>
<template>
  <div>
    <UNavigationMenu arrow content-orientation="vertical" color="neutral" :items="items" class="w-full h-20" />
  </div>
</template>
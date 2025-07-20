<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())
</script>

<template>
  <li v-for="post in posts" :key="post.id">
    <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
  </li>
</template>

<style scoped>

</style>
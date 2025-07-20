<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  const result = queryCollection('blog').path(`/blog/${slug}`).first();
  return result;
})
// SEO 内容抓取优化.
useSeoMeta({
  title: post.value?.title,
  description: post.value?.description
})
</script>

<template>
  <ContentRenderer :value="post" />
</template>
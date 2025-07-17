<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  const result = queryCollection('blog').path(`/blog/${slug}`).first();
  console.log(result);
  return result;
})
</script>

<template>
  <ContentRenderer :value="post" />
</template>
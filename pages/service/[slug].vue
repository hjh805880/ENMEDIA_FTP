<script setup>

import { useRoute } from "vue-router";

const route = useRoute();
const article = ref(null);
const error = ref(null);

const fetchData = async () => {
  try {
    const response = await fetch(`/api/markdown?slug=${route.params.slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const jsonData = await response.json();
    article.value = jsonData;
  } catch (e) {
    error.value = e;
    console.error("No content found for slug:", route.params.slug);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div>
    <SubTop subTopImg="/img/subtop_visual_service.webp" subTopTitle="SERVICE" subTopDesc="전문적이고 체계적인 최적의 솔루션을 제공하는 이엔미디어 입니다." />
    <article v-if="article" class="lg:px-12 lg:py-32 lg:bg-black-100 py-14 w-full px-4 text-left">
      <div v-html="article.htmlContent" class="lg:prose-h1:text-4xl prose-h1:font-extrabold prose-h6:text-black-500 prose-h6:text-sm prose-h6:mt-10 prose-p:text-black-700 prose-li:text-black-600 prose-base lg:max-w-gui prose-h2:font-bold text-black-800 prose-li:list-disc lg:px-16 lg:py-24 px-2 py-8 mx-auto bg-white"></div>
    </article>
  </div>
</template>
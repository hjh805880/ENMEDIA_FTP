<script setup>
import SubTop from "@/components/SubTop.vue";
</script>

<template>
  <SubTop subTopImg="/img/subtop_visual_portfolio.webp" subTopTitle="PORTFOLIO" subTopDesc="브랜드를 특별하게 만드는 단 하나의 차이, 이엔미디어" />
  <section id="portfolio" class="px-12 pt-32 bg-[url('/img/section3_visual_bg.webp')] bg-cover bg-center bg-no-repeat w-screen overflow-hidden">
    <PortfolioList :showCategoryButtons="true" />
  </section>
</template>

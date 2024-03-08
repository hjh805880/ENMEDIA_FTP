<script setup>
const selectedItem = ref(null);

const closeModal = () => {
  selectedItem.value = null;
};
</script>

<template>
  <div>
    <SubTop subTopImg="/img/subtop_visual_portfolio.webp" subTopTitle="PORTFOLIO" subTopDesc="브랜드를 특별하게 만드는 단 하나의 차이, 이엔미디어" />
    <section id="portfolio" class="lg:px-12 px-4 lg:pt-32 pt-24 bg-[url('~/assets/img/section3_visual_bg.webp')] bg-cover bg-center bg-no-repeat w-screen overflow-hidden">
      <PortfolioList :categoryButtons="true" @selectItem="selectedItem = $event" />
      <PortfolioListModal :item="selectedItem" @close="closeModal" />
    </section>
  </div>
</template>

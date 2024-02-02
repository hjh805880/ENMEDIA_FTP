<script setup>
import { useAsyncData } from "nuxt/app";

const { data: portfolio, error } = await useAsyncData("portfolio", () => {
  return $fetch("/api/portfolio");
});

const sortedPortfolio = computed(() => {
  if (!portfolio.value || error.value) return [];
  return portfolio.value.sort((a, b) => a.title.localeCompare(b.title));
});

const isOffset = (index) => {
  return index % 5 === 1 || index % 5 === 3;
};

let selectedItem = ref(null);

const openModal = (item) => {
  selectedItem.value = item;
};
</script>

<template>
  <section id="portfolio" class="bg-[url('~/assets/img/section3_visual_bg.webp')] bg-cover bg-center bg-no-repeat w-screen overflow-hidden">
    <div class="max-w-gui space-y-14 h-full px-12 py-32 mx-auto">
      <div class="grid grid-cols-5 gap-5">
        <div v-for="(item, index) in sortedPortfolio" :key="item.slug" class="shadow-primary-700/60 group/portfolio text-black-800 rounded-2xl pb-14 relative w-full col-span-1 overflow-hidden text-center bg-white shadow-xl" :class="{ 'transform translate-y-24': isOffset(index) }">
          <a @click.prevent="openModal(item)">
            <div class="colCenter w-full space-y-6">
              <div class="lg:h-32 w-full overflow-hidden">
                <NuxtImg :src="`/portfolio/${item.titleImg}`" :alt="`이엔미디어 포트폴리오 업체 ${item.title} 썸네일 이미지`" class="group-hover/portfolio:scale-100 w-full h-full transition-all duration-700 ease-in-out scale-150" />
              </div>
              <div class="px-4 space-y-4">
                <NuxtImg :src="`/portfolio/${item.logo}`" :alt="`이엔미디어 포트폴리오 업체 ${item.title} 로고`" class="w-16" />
                <div class="space-y-1">
                  <h4 class="text-2xl font-bold">{{ item.title }}</h4>
                  <p class="font-light">{{ item.titleSub }}</p>
                </div>
              </div>
              <div class="bg-primary-500 group-hover/portfolio:bottom-0 absolute left-0 rowCenter transition-all duration-300 ease-in-out -bottom-[100%] w-full h-8 text-white">
                <i class="fa-solid fa-circle-plus animate-spin animate-duration-[3000ms] text-xl"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div v-if="selectedItem" class="fixed top-0 left-0 z-[999999] bg-black-800/60 flex items-center justify-center w-screen h-screen min-h-lvh">
      <div class="shadow-black-800/60 flex flex-col items-center justify-between w-full max-w-3xl bg-white shadow-lg">
        <div class="bg-primary-500 flex items-center justify-between w-full px-8 py-5 text-white">
          <div class="rowCenter space-x-8">
            <div class="rowCenter space-x-4">
              <span class="text-2xl font-bold">{{ selectedItem.title }}</span>
              <span class="font-light">{{ selectedItem.titleSub }}</span>
            </div>
            <div class="rowCenter space-x-2">
              <div v-for="(workItem, index) in selectedItem.work" :key="`work-${index}`" class="text-primary-500 px-4 py-1 text-sm font-medium bg-white rounded-full">
                {{ workItem }}
              </div>
            </div>
          </div>
          <button @click="selectedItem = null" class="pl-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
        <div class="py-14 flex items-center justify-center w-full px-16 space-x-12">
          <div class="max-w-[40%] size-full aspect-1 overflow-hidden rounded-full shadow-inner">
            <NuxtImg :src="`/portfolio/${selectedItem.titleImg}`" :alt="`이엔미디어 포트폴리오 업체 ${selectedItem.title} 타이틀 이미지`" class="hover:scale-125 object-cover w-full h-full transition-all duration-500 ease-in-out shadow-inner" />
          </div>
          <div class="flex flex-col w-full max-w-[60%] space-y-6 items-start justify-center">
            <div class="rowCenter space-x-4">
              <NuxtImg :src="`/portfolio/${selectedItem.logo}`" :alt="`이엔미디어 포트폴리오 업체 ${selectedItem.title} 로고`" class="w-14" />
              <div class="text-black-800 text-3xl font-bold">{{ selectedItem.title }}</div>
              <div class="text-black-700 font-light">{{ selectedItem.titleSub }}</div>
            </div>

            <div class="grid items-start justify-start w-full grid-cols-2 gap-2">
              <span class="text-black-800 text-lg font-bold text-left"><b class="text-primary-500">-</b> 업종</span>
              <span class="text-black-700 font-light text-left">{{ selectedItem.category }}</span>
              <span class="text-black-800 text-lg font-bold text-left"><b class="text-primary-500">-</b> 작업기간</span>
              <span class="text-black-700 font-light text-left">{{ selectedItem.term }}</span>
              <span class="text-black-800 text-lg font-bold text-left"><b class="text-primary-500">-</b> 홈페이지</span>
              <NuxtLink :to="`${selectedItem.homepage}`" target="_blank" class="has-[:hover]:text-primary-500 has-[:hover]:underline-offset-4 has-[:hover]:underline flex items-center text-black-700 justify-start space-x-1">
                <span class="font-semibold text-left">{{ selectedItem.homepage }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </NuxtLink>
              <div class="flex items-center justify-start w-full col-span-2 my-2 space-x-2">
                <div v-for="(historyItem, index) in selectedItem.history" :key="`history-${index}`" class="text-black-500 border-black-500 hover:text-primary-500 hover:border-primary-500 px-2 py-1 text-xs font-medium border rounded-full">
                  {{ historyItem }}
                </div>
              </div>
              <span class="text-black-800 text-lg font-bold text-left"><b class="text-primary-500">-</b> TARGET</span>
              <span class="text-black-700 font-light text-left">{{ selectedItem.target }}</span>
              <span class="text-black-800 text-lg font-bold text-left"><b class="text-primary-500">-</b> STRATEGY</span>
              <span class="text-black-700 font-light text-left">{{ selectedItem.strategy }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

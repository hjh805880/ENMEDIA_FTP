<script setup>
const props = defineProps({
  maxItems: Number,
  showCategoryButtons: Boolean,
});

const { data: portfolio, error } = await useAsyncData("portfolio", () => $fetch("/api/portfolio"));
const selectedCategory = ref(null);

const filteredPortfolio = computed(() => {
  if (!portfolio.value || error.value) return [];
  let filtered = portfolio.value.filter((item) => item && item.title != null);
  if (selectedCategory.value) {
    filtered = filtered.filter((item) => item.category === selectedCategory.value);
  }
  const sorted = filtered.sort((a, b) => {
    if (a.position !== undefined && b.position !== undefined) {
      return a.position - b.position;
    } else if (a.position !== undefined) {
      return -1;
    } else if (b.position !== undefined) {
      return 1;
    }
    return (a.title || "").localeCompare(b.title || "");
  });
  return props.maxItems ? sorted.slice(0, props.maxItems) : sorted;
});

const setCategory = (category) => {
  selectedCategory.value = selectedCategory.value === category ? null : category;
};

const isOffset = (index) => index % 5 === 1 || index % 5 === 3;

const selectedItem = ref(null);
const openModal = (item) => {
  selectedItem.value = item;
};

const isLastItemOffset = computed(() => {
  const lastIndex = filteredPortfolio.value.length - 1;
  return isOffset(lastIndex);
});
</script>

<template>
  <div>
    <div class="max-w-gui w-full h-full pb-56 mx-auto space-y-24" :style="isLastItemOffset ? 'padding-bottom: 14rem;' : ''">
      <div data-aos="fade-up" data-aos-duration="1000" v-if="showCategoryButtons" class="rowCenter category-buttons space-x-6 text-xl font-bold *:px-6 *:py-1 *:rounded-full">
        <button @click="setCategory('법무법인')" :class="{ 'text-primary-500 bg-white border-2 border-white': selectedCategory === '법무법인', 'bg-transparent text-white border-2 border-white': selectedCategory !== '법무법인' }">법무법인</button>
        <button @click="setCategory('대출/대부업')" :class="{ 'text-primary-500 bg-white border-2 border-white': selectedCategory === '대출/대부업', 'bg-transparent text-white border-2 border-white': selectedCategory !== '대출/대부업' }">대출/대부업</button>
        <button @click="setCategory('프랜차이즈')" :class="{ 'text-primary-500 bg-white border-2 border-white': selectedCategory === '프랜차이즈', 'bg-transparent text-white border-2 border-white': selectedCategory !== '프랜차이즈' }">프랜차이즈</button>
        <button @click="setCategory('요식업')" :class="{ 'text-primary-500 bg-white border-2 border-white': selectedCategory === '요식업', 'bg-transparent text-white border-2 border-white': selectedCategory !== '요식업' }">요식업</button>
        <button @click="setCategory('쇼핑몰')" :class="{ 'text-primary-500 bg-white border-2 border-white': selectedCategory === '쇼핑몰', 'bg-transparent text-white border-2 border-white': selectedCategory !== '쇼핑몰' }">쇼핑몰</button>
        <button @click="setCategory('병원/의료업')" :class="{ 'text-primary-500 bg-white border-2 border-white': selectedCategory === '병원/의료업', 'bg-transparent text-white border-2 border-white': selectedCategory !== '병원/의료업' }">병원/의료업</button>
        <button @click="setCategory('삼성화재')" :class="{ 'text-primary-500 bg-white border-2 border-white': selectedCategory === '삼성화재', 'bg-transparent text-white border-2 border-white': selectedCategory !== '삼성화재' }">삼성화재</button>
        <button @click="setCategory('그 외')" :class="{ 'text-primary-500 bg-white border-2 border-white': selectedCategory === '그 외', 'bg-transparent text-white border-2 border-white': selectedCategory !== '그 외' }">그 외</button>
      </div>
      <div class="grid grid-cols-5 gap-5">
        <div v-for="(item, index) in filteredPortfolio" :key="item.slug" class="shadow-primary-700/60 group/portfolio text-black-800 rounded-2xl pb-14 relative w-full col-span-1 overflow-hidden text-center bg-white shadow-xl" :class="{ 'transform translate-y-24': isOffset(index) }">
          <a @click.prevent="openModal(item)">
            <div class="colCenter w-full space-y-6">
              <div class="lg:h-32 colCenter w-full overflow-hidden">
                <NuxtImg format="webp" quality="80" width="1200px" :src="`/img/portfolio/${item.titleImg}`" :alt="`이엔미디어 포트폴리오 업체 ${item.title} 썸네일 이미지`" class="group-hover/portfolio:scale-100 w-full transition-all duration-700 ease-in-out scale-150" />
              </div>
              <div class="colCenter px-4 space-y-4">
                <NuxtImg :src="`/img/portfolio/${item.logo}`" :alt="`이엔미디어 포트폴리오 업체 ${item.title} 로고`" class="w-16" />
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
      <div class="shadow-black-800/60 flex flex-col items-center justify-between w-full max-w-5xl bg-white shadow-lg">
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
          <div class="max-w-[40%] size-full aspect-1 overflow-hidden rounded-full colCenter shadow-inner">
            <NuxtImg format="webp" quality="80" width="1200px" v-zoom :src="`/img/portfolio/${selectedItem.titleImg}`" :alt="`이엔미디어 포트폴리오 업체 ${selectedItem.title} 타이틀 이미지`" class="hover:scale-125 object-cover z-[999999] w-full h-full transition-all duration-500 ease-in-out shadow-inner" />
          </div>
          <div class="flex flex-col w-full max-w-[60%] space-y-6 items-start justify-center">
            <div class="flex items-center justify-start w-full space-x-4">
              <NuxtImg :src="`/img/portfolio/${selectedItem.logo}`" :alt="`이엔미디어 포트폴리오 업체 ${selectedItem.title} 로고`" class="w-14" />
              <div class="text-black-800 w-fit text-3xl font-bold">{{ selectedItem.title }}</div>
              <div class="text-black-500 w-fit text-base font-light">{{ selectedItem.titleSub }}</div>
            </div>

            <div class="grid items-start justify-start w-full grid-cols-3 gap-2">
              <span class="text-black-800 text-lg font-bold text-left"><b class="text-primary-500">-</b> 업종</span>
              <span class="text-black-700 col-span-2 font-light text-left">{{ selectedItem.type }}</span>
              <span class="text-black-800 text-lg font-bold text-left"><b class="text-primary-500">-</b> 홈페이지</span>
              <div class="col-span-2">
                <NuxtLink :to="`${selectedItem.homepage}`" target="_blank" class="has-[:hover]:text-primary-500 has-[:hover]:underline-offset-4 has-[:hover]:underline flex w-fit items-center text-black-700 justify-start space-x-1">
                  <span class="font-semibold text-left">{{ selectedItem.homepage }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </NuxtLink>
              </div>
              <span class="text-black-800 text-lg font-bold text-left"><b class="text-primary-500">-</b> 작업매체</span>
              <span class="text-black-700 col-span-2 font-light text-left">{{ selectedItem.media }}</span>
              <div class="grid items-center justify-start w-full grid-cols-4 col-span-3 gap-2 my-2 text-center">
                <div v-for="(historyItem, index) in selectedItem.history" :key="`history-${index}`" class="text-black-500 border-black-500 hover:text-primary-500 hover:border-primary-500 px-2 py-1 text-xs font-medium border rounded-full">
                  {{ historyItem }}
                </div>
              </div>
              <span class="text-black-800 text-lg font-bold text-left"><b class="text-primary-500">-</b> TARGET</span>
              <span class="text-black-700 col-span-2 font-light text-left">{{ selectedItem.target }}</span>
              <span class="text-black-800 text-lg font-bold text-left"><b class="text-primary-500">-</b> STRATEGY</span>
              <span class="text-black-700 col-span-2 font-light text-left">{{ selectedItem.strategy }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

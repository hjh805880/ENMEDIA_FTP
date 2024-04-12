<script setup>
const props = defineProps({
  item: Object,
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<template>
  <div>
    <div v-if="item" class="fixed top-0 left-0 z-[999999] bg-black-800/60 flex items-center justify-center w-screen h-screen list-none">
      <div class="shadow-black-800/60 lg:max-w-5xl flex flex-col items-center justify-between w-full max-w-[90%] bg-white shadow-lg">
        <div class="bg-primary-500 lg:px-8 flex items-center justify-between w-full px-5 py-6 text-white">
          <div class="lg:rowCenter lg:space-x-8 lg:space-y-0 flex flex-col items-start justify-center space-y-2">
            <div class="rowCenter lg:space-x-4 space-x-2">
              <span class="lg:text-2xl text-xl font-bold">{{ item.title }}</span>
              <span class="lg:text-base text-sm font-light">{{ item.titleSub }}</span>
            </div>
            <div class="lg:rowCenter grid grid-cols-2 space-x-2 text-center">
              <div v-for="(workItem, index) in item.work" :key="`work-${index}`" class="text-primary-500 lg:px-4 lg:text-sm px-2 py-1 text-xs font-medium bg-white rounded-full">
                {{ workItem }}
              </div>
            </div>
          </div>
          <button @click="closeModal" class="lg:pl-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:size-8 size-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
        <div class="lg:py-14 lg:px-16 lg:rowCenter colCenter lg:space-x-12 lg:space-y-0 justify-center w-full px-6 py-8 space-y-6">
          <div class="lg:max-w-[40%] max-w-[40vmin] size-full aspect-1 overflow-hidden rounded-full colCenter shadow-inner">
            <NuxtImg format="webp" quality="80" width="1200px" v-zoom :src="`/img/portfolio/${item.titleImg}`" :alt="`이엔미디어 포트폴리오 업체 ${item.title} 타이틀 이미지`" class="hover:scale-[1.15] object-cover z-[999999] w-full h-full transition-all duration-500 ease-in-out shadow-inner" />
          </div>
          <div class="flex flex-col w-full lg:max-w-[60%] max-w-full space-y-6 items-start justify-center">
            <div class="lg:space-x-8 flex items-center justify-start w-full space-x-6">
              <NuxtImg :src="`/img/portfolio/${item.logo}`" :alt="`이엔미디어 포트폴리오 업체 ${item.title} 로고`" class="lg:max-w-14 lg:max-h-14 max-w-16 max-h-16 w-full" />
              <div class="lg:rowCenter lg:space-x-4 flex flex-col items-start justify-center">
                <div class="text-black-800 w-fit lg:text-3xl whitespace-nowrap text-2xl font-bold">{{ item.title }}</div>
                <div class="text-black-500 w-fit lg:text-base text-sm font-light">{{ item.titleSub }}</div>
              </div>
            </div>

            <div class="grid items-start justify-start w-full grid-cols-3 gap-2">
              <li class="text-black-800 lg:text-lg text-base font-bold text-left"><b class="text-primary-500">-</b> 업종</li>
              <li class="text-black-700 lg:text-base col-span-2 text-sm font-light text-left">{{ item.type }}</li>
              <li class="text-black-800 lg:text-lg text-base font-bold text-left"><b class="text-primary-500">-</b> 홈페이지</li>
              <div class="col-span-2">
                <NuxtLink :to="`${item.homepage}`" target="_blank" rel="nofollow noopener noreferrer" class="has-[:hover]:text-primary-500 has-[:hover]:underline-offset-4 has-[:hover]:underline flex w-fit items-center text-black-700 justify-start space-x-1">
                  <li class="lg:text-base w-fit text-sm font-semibold text-left">{{ item.homepage }}</li>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </NuxtLink>
              </div>
              <li class="text-black-800 lg:text-lg text-base font-bold text-left"><b class="text-primary-500">-</b> 작업매체</li>
              <li class="text-black-700 lg:text-base col-span-2 text-sm font-light text-left">{{ item.media }}</li>
              <div class="lg:grid-cols-4 whitespace-nowrap lg:gap-4 grid items-center justify-start w-full grid-cols-3 col-span-3 gap-1 my-2 text-center">
                <div v-for="(historyItem, index) in item.history" :key="`history-${index}`" class="text-black-500 border-black-500 hover:text-primary-500 hover:border-primary-500 lg:px-2 w-full px-0 py-1 lg:text-xs text-[.6875rem] font-medium border rounded-full">
                  {{ historyItem }}
                </div>
              </div>
              <li class="text-black-800 lg:text-lg text-base font-bold text-left"><b class="text-primary-500">-</b> TARGET</li>
              <li class="text-black-700 lg:text-base col-span-2 text-sm font-light text-left">{{ item.target }}</li>
              <li class="text-black-800 lg:text-lg text-base font-bold text-left"><b class="text-primary-500">-</b> STRATEGY</li>
              <li class="text-black-700 lg:text-base col-span-2 text-sm font-light text-left">{{ item.strategy }}</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

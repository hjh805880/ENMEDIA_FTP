<template>
  <!-- SUBTOP 시작 -->
  <article id="subtop" class="text-center">
    <div class="flex flex-col items-center justify-center w-full lg:h-[300px] h-[200px] text-white relative overflow-hidden">
      <NuxtImg format="webp" quality="90" width="1920px" :src="subTopImg" :alt="`이엔미디어 ${subTopTitle} 페이지 상단이미지`" class="object-cover w-full h-full" />
      <div class="colCenter absolute lg:top-[25%] top-[22%]">
        <h2 class="lg:text-4xl z-20 text-2xl font-extrabold">
          {{ subTopTitle }}
        </h2>
        <div class="z-20 w-12 pt-3 border-b-4 border-white"></div>
        <h3 class="lg:text-xl z-20 px-8 pt-5 text-sm">
          {{ subTopDesc }}
        </h3>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  subTopImg: String,
  subTopTitle: String,
  subTopDesc: String,
});
</script>

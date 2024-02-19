<script setup lang="ts">
/* 비디오 항상 자동재생 */
const mainVideo = ref<HTMLVideoElement | null>(null);

const handleVisibilityChange = () => {
  if (!document.hidden && mainVideo.value) {
    mainVideo.value.play();
  } else if (mainVideo.value) {
    mainVideo.value.pause();
  }
};

onMounted(() => {
  document.addEventListener("visibilitychange", handleVisibilityChange);
});

onUnmounted(() => {
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});
/* -------------- */
</script>

<template>
  <!-- 섹션1 시작 -->
  <section id="section1" class="min-h-dvh w-screen h-screen overflow-hidden text-white">
    <div class="lg:block hidden">
      <video ref="mainVideo" class="lg:w-auto lg:h-auto min-h-lvh relative z-0 object-cover w-full h-full min-w-full" autoplay playsinline loop muted>
        <source src="~/assets/video/main_visual_bg.webm" type="video/webm" class="object-cover w-full h-full" />
        <source src="~/assets/video/main_visual_bg.mp4" type="video/mp4" class="object-cover w-full h-full" />
      </video>
      <div class="absolute lg:top-[32%] left-0 lg:left-[15%] z-30 col-center w-fit mainTextAfter">
        <h1 class="sr-only">주식회사 이엔미디어</h1>
        <NuxtImg width="600px" src="/img/main_visual_text.webp" alt="이엔미디어" class="lg:w-[calc(83%+1.25rem)] w-[90%]" />
      </div>
      <div class="rowCenter space-x-3 absolute lg:top-[85%] left-0 lg:left-[calc(15%+12px)] z-30">
        <div class="mainScrollMouse"></div>
        <span class="text-xl font-bold">SCROLL DOWN</span>
      </div>
    </div>
  </section>

  <!-- 섹션2 시작 -->
  <section id="section2" class="text-black-800 w-screen overflow-hidden bg-[url('/img/section2_visual_bg.webp')] bg-cover text-center bg-center bg-no-repeat">
    <div class="max-w-gui space-y-14 px-12 py-32 mx-auto">
      <div data-aos="fade-up" data-aos-duration="1000" class="colCenter space-y-4">
        <h2 class="text-4xl font-extrabold">전문적이고 체계적인 <span class="text-primary-500">최적의 솔루션</span>을 제공합니다</h2>
        <h3 class="text-black-700 text-xl font-light">결과로 증명하는 1위 대행사 이엔미디어가 같이 가겠습니다.</h3>
      </div>
      <div class="grid grid-cols-4 gap-8">
        <NuxtLink data-aos="fade-up" data-aos-duration="1000" to="/company" class="aspect-1 group/company hover:border-primary-500 colCenter border-black-700 w-full p-4 space-y-4 bg-white border-2 rounded-full">
          <MainCompanyIcon />
          <h4 class="text-black-700 group-hover/company:text-primary-500 text-2xl font-bold">COMPANY</h4>
        </NuxtLink>
        <NuxtLink data-aos="fade-up" data-aos-duration="1200" to="/service" class="aspect-1 group/service colCenter hover:border-primary-500 border-black-700 w-full p-4 space-y-4 bg-white border-2 rounded-full">
          <MainServiceIcon />
          <h4 class="text-black-700 group-hover/service:text-primary-500 text-2xl font-bold">SERVICE</h4>
        </NuxtLink>
        <NuxtLink data-aos="fade-up" data-aos-duration="1400" to="/solution" class="aspect-1 group/solution colCenter hover:border-primary-500 border-black-700 w-full p-4 space-y-4 bg-white border-2 rounded-full">
          <MainSolutionIcon />
          <h4 class="text-black-700 group-hover/solution:text-primary-500 text-2xl font-bold">SOLUTION</h4>
        </NuxtLink>
        <NuxtLink data-aos="fade-up" data-aos-duration="1600" to="/portfolio" class="aspect-1 group/portfolio colCenter hover:border-primary-500 border-black-700 w-full p-4 space-y-4 bg-white border-2 rounded-full">
          <MainPortfolioIcon />
          <h4 class="text-black-700 group-hover/portfolio:text-primary-500 text-2xl font-bold">PORTFOLIO</h4>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- 섹션3 시작 -->
  <section id="section3" class="text-white w-screen overflow-hidden bg-fixed bg-[url('/img/section3_visual_bg.webp')] bg-cover bg-center text-center bg-no-repeat">
    <div class="max-w-gui space-y-14 colCenter px-12 py-32 mx-auto">
      <div data-aos="fade-up" data-aos-duration="1000" class="colCenter space-y-4">
        <h2 class="pb-4 text-4xl font-extrabold">PORTFOLIO</h2>
        <div class="w-12 border-b-8 border-white"></div>
        <h3 class="pt-1 text-xl font-light">BRAND의 성장으로 가기위한 모든 길을 만들어 갑니다.</h3>
      </div>
      <PortfolioList data-aos="fade-up" data-aos-duration="1200" :maxItems="10" :showCategoryButtons="true" />
      <NuxtLink data-aos="fade-up" data-aos-duration="1200" to="/portfolio" class="hover:bg-white hover:text-primary-500 px-6 py-1 text-lg font-bold border-2 border-white rounded-full"> MORE PORTFOLIO </NuxtLink>
    </div>
  </section>

  <!-- 섹션4 시작 -->
  <section id="section4" class="text-black-800 w-screen overflow-hidden bg-[url('/img/section4_visual_bg.webp')] bg-cover text-center bg-center bg-no-repeat">
    <div class="max-w-gui space-y-14 colCenter px-12 py-32 mx-auto">
      <div data-aos="fade-up" data-aos-duration="1000" class="colCenter space-y-4">
        <h2 class="pb-4 text-4xl font-extrabold">창의적인 생각과 <span class="text-primary-500">Creative</span>한 아이디어로<br /><span class="text-secondary-500">확실한 성과</span>를 만들어냅니다</h2>
      </div>
      <MainCreativeIcon data-aos="fade-up" data-aos-duration="1200" />
      <div class="flex items-start justify-between w-full">
        <div data-aos="fade-right" data-aos-duration="1200" class="flex flex-col items-start justify-start space-y-2">
          <h3 class="text-primary-500 text-2xl font-bold">Performance Marketing</h3>
          <h4 class="text-black-700 flex items-center w-full space-x-3 text-lg font-light text-left">
            <span class="">SearchAD</span>
            <span class="">Retargeting AD</span>
          </h4>
          <h4 class="text-black-700 flex items-center w-full space-x-3 text-lg font-light text-left">
            <span class="">Display AD</span>
            <span class="">SNS</span>
          </h4>
        </div>
        <div data-aos="fade-left" data-aos-duration="1200" class="flex flex-col items-end justify-end space-y-2">
          <h3 class="text-secondary-500 text-2xl font-bold">Brand Marketing</h3>
          <h4 class="text-black-700 flex items-center justify-end w-full space-x-3 text-lg font-light text-right">
            <span class="">Video Ad</span>
            <span class="">OOH</span>
          </h4>
          <h4 class="text-black-700 flex items-center justify-end w-full space-x-3 text-lg font-light text-right">
            <span class="">Brand Consulting</span>
            <span class="">ATL</span>
          </h4>
          <h4 class="text-black-700 flex items-center justify-end w-full space-x-3 text-lg font-light text-right">
            <span class="">Creative Strategy</span>
            <span class="">BTL</span>
          </h4>
        </div>
      </div>
    </div>
  </section>

  <!-- 섹션5 시작 -->
  <section id="section5" class="bg-[url('/img/section5_visual_bg.webp')] w-screen overflow-hidden min-h-lvh text-center text-white bg-center bg-no-repeat bg-cover">
    <div class="max-w-gui space-y-80 colCenter px-12 py-32 mx-auto">
      <div data-aos="fade-up" data-aos-duration="1000" class="colCenter space-y-4">
        <h2 class="pb-4 text-4xl font-extrabold">SERVICE</h2>
        <div class="w-12 border-b-8 border-white"></div>
        <h3 class="pt-1 text-xl font-light">더 많은 소비자에게 도달할 수 있는 키워드 검색 광고를 집행합니다.</h3>
      </div>
      <ServiceObject data-aos="fade-up" data-aos-duration="1200" />
    </div>
  </section>
</template>

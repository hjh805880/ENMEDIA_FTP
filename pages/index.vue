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
/* 포트폴리오 모달 */
const selectedItem = ref(null);

const closeModal = () => {
  selectedItem.value = null;
};
/* -------------- */
</script>

<template>
  <div>
    <!-- 섹션1 시작 -->
    <section id="section1" class="min-h-lvh w-screen h-screen overflow-hidden text-white">
      <div class="">
        <video ref="mainVideo" class="lg:w-auto lg:h-auto min-h-lvh relative z-0 object-cover w-full h-full min-w-full" autoplay playsinline loop muted>
          <source src="~/assets/video/main_visual_bg.webm" type="video/webm" class="object-cover w-full h-full" />
          <source src="~/assets/video/main_visual_bg.mp4" type="video/mp4" class="object-cover w-full h-full" />
        </video>
        <div class="lg:px-0 px-4 absolute lg:top-[32%] md:top-[28%] sm:top-[30%] left-0 lg:left-[15%] top-[35%] z-30 col-center w-fit mainTextAfter">
          <h1 class="sr-only">주식회사 이엔미디어</h1>
          <img src="~/assets/img/main_visual_text.webp" alt="이엔미디어" class="lg:w-[calc(83%+1.25rem)] w-[90%] md:w-[80%] sm:w-[70%]" />
        </div>
        <div class="rowCenter space-x-3 absolute lg:top-[85%] md:top-[70%] sm:top-[68%] top-[75%] left-0 px-6 lg:px-0 lg:left-[calc(15%+12px)] z-30">
          <div class="mainScrollMouse"></div>
          <span class="lg:text-xl text-base font-bold">SCROLL DOWN</span>
        </div>
      </div>
    </section>

    <!-- 섹션2 시작 -->
    <section id="section2" class="text-black-800 w-screen overflow-hidden bg-[url('~/assets/img/section2_visual_bg.webp')] bg-cover text-center bg-center bg-no-repeat">
      <div class="lg:max-w-gui lg:space-y-14 lg:px-12 lg:py-40 max-w-full px-4 py-32 mx-auto space-y-16">
        <div data-aos="fade-up" data-aos-duration="1000" class="colCenter space-y-4">
          <h2 class="lg:text-4xl text-3xl font-extrabold">전문적이고 체계적인 <span class="text-primary-500">최적의 솔루션</span>을 제공합니다</h2>
          <h3 class="text-black-700 lg:text-xl text-lg font-light">결과로 증명하는 1위 대행사 이엔미디어가 같이 가겠습니다.</h3>
        </div>
        <div class="lg:grid-cols-4 lg:gap-8 grid grid-cols-2 gap-4">
          <NuxtLink data-aos="fade-up" data-aos-duration="1000" to="/company" class="aspect-1 group/company hover:border-primary-500 colCenter border-black-700 w-full p-8 space-y-4 bg-white border-2 rounded-full">
            <MainCompanyIcon />
            <h4 class="text-black-700 group-hover/company:text-primary-500 lg:text-2xl text-xl font-bold">COMPANY</h4>
          </NuxtLink>
          <NuxtLink data-aos="fade-up" data-aos-duration="1200" to="/service" class="aspect-1 group/service colCenter hover:border-primary-500 border-black-700 w-full p-8 space-y-4 bg-white border-2 rounded-full">
            <MainServiceIcon />
            <h4 class="text-black-700 group-hover/service:text-primary-500 lg:text-2xl text-xl font-bold">SERVICE</h4>
          </NuxtLink>
          <NuxtLink data-aos="fade-up" data-aos-duration="1400" to="/solution" class="aspect-1 group/solution colCenter hover:border-primary-500 border-black-700 w-full p-8 space-y-4 bg-white border-2 rounded-full">
            <MainSolutionIcon />
            <h4 class="text-black-700 group-hover/solution:text-primary-500 lg:text-2xl text-xl font-bold">SOLUTION</h4>
          </NuxtLink>
          <NuxtLink data-aos="fade-up" data-aos-duration="1600" to="/portfolio" class="aspect-1 group/portfolio colCenter hover:border-primary-500 border-black-700 w-full p-8 space-y-4 bg-white border-2 rounded-full">
            <MainPortfolioIcon />
            <h4 class="text-black-700 group-hover/portfolio:text-primary-500 lg:text-2xl text-xl font-bold">PORTFOLIO</h4>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 섹션3 시작 -->
    <section id="section3" class="text-white w-screen overflow-hidden bg-fixed bg-[url('~/assets/img/section3_visual_bg.webp')] bg-cover bg-center text-center bg-no-repeat">
      <div class="lg:max-w-gui space-y-14 colCenter lg:px-12 lg:py-40 max-w-full px-4 py-32 mx-auto">
        <div data-aos="fade-up" data-aos-duration="1000" class="colCenter space-y-4">
          <h2 class="lg:text-4xl lg:pb-4 pb-2 text-3xl font-extrabold">PORTFOLIO</h2>
          <div class="lg:w-12 w-10 border-b-8 border-white"></div>
          <h3 class="lg:text-xl pt-1 text-lg font-light">BRAND의 성장으로 가기위한 모든 길을 만들어 갑니다.</h3>
        </div>
        <PortfolioList data-aos="fade-up" data-aos-duration="1200" :maxItems="10" :categoryButtons="false" @selectItem="selectedItem = $event" />
        <NuxtLink data-aos="fade-up" data-aos-duration="1200" to="/portfolio" class="hover:bg-white hover:text-primary-500 px-6 py-1 text-lg font-bold border-2 border-white rounded-full"> MORE PORTFOLIO </NuxtLink>
      </div>
    </section>
    <PortfolioListModal :item="selectedItem" @close="closeModal" />

    <!-- 섹션4 시작 -->
    <section id="section4" class="text-black-800 w-screen overflow-hidden bg-[url('~/assets/img/section4_visual_bg.webp')] bg-cover text-center bg-center bg-no-repeat">
      <div class="lg:max-w-gui space-y-14 colCenter lg:px-12 lg:py-40 max-w-full px-4 py-32 mx-auto">
        <div data-aos="fade-up" data-aos-duration="1000" class="colCenter space-y-4">
          <h2 class="pb-4 text-4xl font-extrabold">창의적인 생각과 <span class="text-primary-500">Creative</span>한 아이디어로<br /><span class="text-secondary-500">확실한 성과</span>를 만들어냅니다</h2>
        </div>
        <MainCreativeIcon data-aos="fade-up" data-aos-duration="1200" class="pc-only"/>
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
        <NuxtLink data-aos="fade-up" data-aos-duration="1200" to="/company" class="hover:bg-black-800 hover:text-white border-black-800 px-6 py-1 text-lg font-bold border-2 rounded-full"> MORE COMPANY </NuxtLink>
      </div>
    </section>

    <!-- 섹션5 시작 -->
    <section id="section5" class="bg-[url('~/assets/img/section5_visual_bg.webp')] w-full overflow-visible text-center text-white bg-center bg-no-repeat bg-cover">
      <div class="lg:max-w-gui max-w-full colCenter relative lg:px-12 px-4 lg:pt-40 pt-32 lg:pb-[42%] mx-auto">
        <div data-aos="fade-up" data-aos-duration="1000" class="colCenter space-y-4 overflow-hidden">
          <h2 class="pb-4 text-4xl font-extrabold">SERVICE</h2>
          <div class="w-12 border-b-8 border-white"></div>
          <h3 class="pt-1 text-xl font-light">더 많은 소비자에게 도달할 수 있는 키워드 검색 광고를 집행합니다.</h3>
        </div>
        <ServiceObject data-aos="fade-up" data-aos-duration="1200" class="lg:mt-80 lg:mb-14 pc-only" />
        <NuxtLink data-aos="fade-up" data-aos-duration="1200" to="/service" class="hover:bg-white hover:text-black-800 px-6 py-1 text-lg font-bold border-2 border-white rounded-full"> MORE SERVICE </NuxtLink>
        <!-- 여기부터 솔루션 시작 -->
        <div data-aos="fade-up" data-aos-duration="1000" class="shadow-black-600/60 space-y-14 rounded-sm lg:-bottom-[28%] text-black-800 absolute w-full lg:px-16 px-4 lg:py-40 py-32 bg-white shadow-xl">
          <div class="colCenter space-y-4 overflow-hidden">
            <h2 class="pb-4 text-4xl font-extrabold">SOLUTION</h2>
            <div class="border-primary-500 w-12 border-b-8"></div>
            <h3 class="pt-1 text-xl font-light">체계적인 시스템과 전문 인력 구성으로 보다 더 만족도 높은 솔루션을 제공합니다.</h3>
          </div>
          <SolutionObject data-aos="fade-up" data-aos-duration="1200" class="pb-28 pc-only" />
          <NuxtLink data-aos="fade-up" data-aos-duration="1200" to="/solution" class="hover:bg-black-800 hover:text-white border-black-800 px-6 py-1 text-lg font-bold border-2 rounded-full"> MORE SOLUTION </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 섹션6 시작 -->
    <section id="section6" class="text-black-800 z-10 lg:mt-[40%] w-full h-full text-center bg-white">
      <div class="lg:max-w-gui colCenter lg:px-12 lg:pb-40 relative max-w-full px-4 pb-32 mx-auto space-y-16">
        <div data-aos="fade-up" data-aos-duration="1000" class="colCenter space-y-4 overflow-hidden">
          <h2 class="pb-4 text-4xl font-extrabold">LOCATION</h2>
          <div class="border-primary-500 w-12 border-b-8"></div>
          <h3 class="pt-1 text-xl font-light">이엔미디어는 성장하고자 하는 모든 비즈니스에 열려있습니다.</h3>
        </div>
        <KakaoMap />
        <div class="grid w-full grid-cols-1 px-2 space-y-6">
          <div class="flex flex-col items-start justify-center space-y-2">
            <h4 class="before:content-['-'] before:text-3xl before:mr-2 before:text-primary-500 text-2xl font-bold">ADDRESS</h4>
            <h5 class="text-black-700 text-lg">서울특별시 강서구 공항대로 227, 마곡센트럴타워 5층 501호</h5>
          </div>
          <div class="flex flex-col items-start justify-center space-y-2">
            <h4 class="before:content-['-'] before:text-3xl before:mr-2 before:text-primary-500 text-2xl font-bold">WAY TO COME</h4>
            <h5 class="text-black-700 text-lg">발산역 9번출구에서 300M 직진</h5>
          </div>
          <div class="flex flex-col items-start justify-center space-y-2">
            <h4 class="before:content-['-'] before:text-3xl before:mr-2 before:text-primary-500 text-2xl font-bold">CONTACT INFO</h4>
            <NuxtLink to="tel:02-3429-3161" class="rowCenter hover:underline hover:underline-offset-4 space-x-2">
              <div class="bg-black-700 colCenter aspect-1 p-1.5 text-xs text-white rounded-full">
                <i class="fa-solid fa-phone"></i>
              </div>
              <h5 class="text-black-700 text-lg">02) 3429-3161</h5>
            </NuxtLink>
            <NuxtLink to="mailto:ads_com@naver.com" class="rowCenter hover:underline hover:underline-offset-4 space-x-2">
              <div class="bg-black-700 colCenter aspect-1 p-1.5 text-xs text-white rounded-full">
                <i class="fa-solid fa-paper-plane"></i>
              </div>
              <h5 class="text-black-700 text-lg">ads_com@naver.com</h5>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

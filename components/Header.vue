<script setup lang="ts">
const isScrolled = ref(false);
const isIndexPage = ref(false);
const isModalOpen = ref(false);
const route = useRoute();

watch(
  () => route.path,
  (newPath) => {
    isIndexPage.value = newPath === "/";
    if (!isIndexPage.value) {
      isScrolled.value = true;
    }
  },
  { immediate: true },
);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  if (isIndexPage.value) {
    window.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

watch(isIndexPage, (newValue) => {
  if (newValue) {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  } else {
    window.removeEventListener("scroll", handleScroll);
  }
});

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<template>
  <!-- 데스크탑 헤더 -->
  <header :isScrolled="isScrolled" id="header" class="top-0 flex items-center max-w-full justify-between w-full h-fit py-[2.5vmin] transition-all ease-in-out delay-100 duration-500 text-white lg:py-2 lg:h-fit z-[999998]" :class="{ fixed: isIndexPage, sticky: !isIndexPage, 'bg-white/80 backdrop-blur-md text-black-800 lg:px-[3%] px-4': isScrolled, 'bg-transparent text-white lg:px-[10%] px-7': !isScrolled, 'translate-y-0': !isModalOpen, '-translate-y-full': isModalOpen }">
    <NuxtLink to="/">
      <img v-if="isScrolled" src="~/assets/img/logo.svg" alt="이엔미디어 로고" id="logo" class="lg:w-36 w-28 mx-auto" />
      <img v-else src="~/assets/img/logo_w.svg" alt="이엔미디어 로고" id="logo" class="lg:w-56 w-44 mx-auto" />
    </NuxtLink>
    <nav class="rowCenter lg:flex whitespace-nowrap hidden text-lg font-bold" :class="{ 'space-x-10': isScrolled, 'space-x-14': !isScrolled }">
      <NuxtLink to="/company" class="navText" :class="{ 'after:hover:border-primary-500 text-black-800 text-base font-medium': isScrolled }">COMPANY</NuxtLink>
      <NuxtLink to="/service" class="navText" :class="{ 'after:hover:border-primary-500 text-black-800 text-base font-medium': isScrolled }">SERVICE</NuxtLink>
      <NuxtLink to="/solution" class="navText" :class="{ 'after:hover:border-primary-500 text-black-800 text-base font-medium': isScrolled }">SOLUTION</NuxtLink>
      <NuxtLink to="/portfolio" class="navText" :class="{ 'after:hover:border-primary-500 text-black-800 text-base font-medium': isScrolled }">PORTFOLIO</NuxtLink>
      <!-- <NuxtLink to="/portfolio/gallery" class="navText" :class="{ 'after:hover:border-primary-500 text-black-800 text-base font-medium': isScrolled }">GALLERY</NuxtLink> -->
      <NuxtLink to="/contact" class="navText" :class="{ 'after:hover:border-primary-500 text-black-800 text-base font-medium': isScrolled }">CONTACT US</NuxtLink>
      <NuxtLink to="/2024_04_ENMEDIA_INTRODUCE.pdf" external class="rowCenter px-6 py-2 space-x-2" :class="{ 'text-white text-sm font-bold bg-primary-500 hover:bg-primary-400': isScrolled, 'text-primary-500 text-base bg-white/60 mix-blend-overlay hover:bg-white backdrop-blur-md': !isScrolled }">
        <span>회사소개서</span>
        <i class="fa-solid fa-file-arrow-down"></i>
      </NuxtLink>
    </nav>

    <svg @click="toggleModal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:hidden" :class="{ 'size-8 text-primary-500': isScrolled, 'size-10 text-white': !isScrolled }">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  </header>

  <!-- 모바일 모달 헤더 -->
  <div v-auto-animate class="lg:hidden z-[999999] w-full max-w-[70%] fixed left-0 top-0 h-full bg-white/90 backdrop-blur-md text-black-800 flex flex-col items-start justify-between transition-all duration-500 delay-100 ease-in-out" :class="{ '-translate-x-full': !isModalOpen, 'translate-x-0': isModalOpen }">
    <div class="bg-primary-500 h-fit flex items-center justify-start w-full px-4 py-3">
      <svg @click="toggleModal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </div>
    <div class="grid items-start grid-cols-1 gap-6 px-4 *:before:content-['-'] *:before:text-primary-500 *:before:mr-2 *:before:font-bold *:before:text-xl text-lg font-medium">
      <NuxtLink to="/company" @click="toggleModal">COMPANY</NuxtLink>
      <NuxtLink to="/service" @click="toggleModal">SERVICE</NuxtLink>
      <NuxtLink to="/solution" @click="toggleModal">SOLUTION</NuxtLink>
      <NuxtLink to="/portfolio" @click="toggleModal">PORTFOLIO</NuxtLink>
      <!-- <NuxtLink to="/portfolio/gallery" @click="toggleModal">GALLERY</NuxtLink> -->
      <NuxtLink to="/contact" @click="toggleModal">CONTACT US</NuxtLink>
    </div>
    <div class="w-fit grid items-start justify-center grid-cols-1 px-4 space-y-4">
      <NuxtLink to="/2024_04_ENMEDIA_INTRODUCE.pdf" external class="bg-primary-500 hover:bg-primary-400 flex items-center justify-start px-8 py-2 space-x-2 text-sm font-bold text-white rounded-sm">
        <div class="text-primary-500 aspect-1 colCenter p-2 text-sm bg-white rounded-full">
          <i class="fa-solid fa-file-arrow-down"></i>
        </div>
        <span>회사소개서</span>
      </NuxtLink>
      <NuxtLink to="tel:02-3429-3161" class="bg-primary-500 hover:bg-primary-400 flex items-center justify-start px-8 py-2 space-x-2 text-sm font-bold text-white rounded-sm">
        <div class="text-primary-500 aspect-1 colCenter p-2 text-sm bg-white rounded-full">
          <i class="fa-solid fa-phone"></i>
        </div>
        <span>전화상담</span>
      </NuxtLink>
      <NuxtLink to="mailto:contact@en-media.kr" class="bg-primary-500 hover:bg-primary-400 flex items-center justify-start px-8 py-2 space-x-2 text-sm font-bold text-white rounded-sm">
        <div class="text-primary-500 aspect-1 colCenter p-2 text-sm bg-white rounded-full">
          <i class="fa-solid fa-share"></i>
        </div>
        <span>메일전송</span>
      </NuxtLink>
    </div>
    <div class="bg-black-800 h-fit flex flex-col items-start justify-center w-full px-4 py-3 space-y-2">
      <span class="text-black-300 text-xs">서울특별시 강서구 공항대로 227<br />(마곡동, 마곡센트럴타워Ⅰ) 5층 501호</span>
      <span class="text-black-500 text-xs">Copyrights 2024. <span class="font-medium">주식회사 이엔미디어</span> All Rights Reserved.</span>
    </div>
  </div>
</template>

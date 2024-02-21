<script setup lang="ts">
const isScrolled = ref(false);
const isIndexPage = ref(false);
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
</script>

<template>
  <header :isScrolled="isScrolled" id="header" class="top-0 flex items-center lg:justify-between justify-center w-full h-16 py-[3vmin] transition-all ease-in-out delay-100 duration-500 text-white lg:py-2 lg:h-fit z-50" :class="{ fixed: isIndexPage, sticky: !isIndexPage, 'bg-white text-black-800 lg:px-[3%]': isScrolled, 'bg-transparent text-white lg:px-[10%]': !isScrolled }">
    <NuxtLink to="/">
      <img v-if="isScrolled" src="~/assets/img/logo.svg" alt="이엔미디어 로고" id="logo" class="lg:w-36 mx-auto" />
      <img v-else src="~/assets/img/logo_w.svg" alt="이엔미디어 로고" id="logo" class="lg:w-56 mx-auto" />
    </NuxtLink>
    <nav class="rowCenter text-lg font-bold" :class="{ 'space-x-10': isScrolled, 'space-x-14': !isScrolled }">
      <NuxtLink to="/company" class="navText" :class="{ 'after:hover:border-primary-500 text-black-800 text-base font-medium': isScrolled }">COMPANY</NuxtLink>
      <NuxtLink to="/service" class="navText" :class="{ 'after:hover:border-primary-500 text-black-800 text-base font-medium': isScrolled }">SERVICE</NuxtLink>
      <NuxtLink to="/solution" class="navText" :class="{ 'after:hover:border-primary-500 text-black-800 text-base font-medium': isScrolled }">SOLUTION</NuxtLink>
      <NuxtLink to="/portfolio" class="navText" :class="{ 'after:hover:border-primary-500 text-black-800 text-base font-medium': isScrolled }">PORTFOLIO</NuxtLink>
      <NuxtLink to="/contact" class="navText" :class="{ 'after:hover:border-primary-500 text-black-800 text-base font-medium': isScrolled }">CONTACT US</NuxtLink>
      <a href="/2024_ENMEDIA_INTRODUCE.pdf" download class="rowCenter px-6 py-2 space-x-2" :class="{ 'text-white text-sm font-bold bg-primary-500 hover:bg-primary-400': isScrolled, 'text-primary-500 text-base bg-white/60 mix-blend-overlay hover:bg-white backdrop-blur-md': !isScrolled }">
        <span>회사소개서</span>
        <i class="fa-solid fa-file-arrow-down"></i>
      </a>
    </nav>
  </header>
</template>

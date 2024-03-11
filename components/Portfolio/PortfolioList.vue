<script setup>
const props = defineProps({
  maxItems: Number,
  categoryButtons: Boolean,
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

const emit = defineEmits(["selectItem"]);
const selectItem = (item) => {
  emit("selectItem", item);
};

const windowWidth = ref(0); 

onMounted(() => {
  windowWidth.value = window.innerWidth;

  const handleResize = () => {
    windowWidth.value = window.innerWidth;
  };

  window.addEventListener('resize', handleResize);

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
});

const isMobile = computed(() => windowWidth.value <= 768);

const isOffset = (index) => {
  if (isMobile.value) {
    return index % 2 === 0;
  }
  return index % 5 === 1 || index % 5 === 3;
};

const isLastItemOffset = computed(() => {
  const lastIndex = filteredPortfolio.value.length - 1;
  return isOffset(lastIndex);
});
</script>

<template>
  <div>
    <div class="lg:max-w-gui w-full h-full max-w-full pb-56 mx-auto space-y-24" :style="isLastItemOffset ? 'padding-bottom: 14rem;' : ''">
      <div data-aos="fade-up" data-aos-duration="1000" v-if="categoryButtons" class="lg:rowCenter grid grid-cols-3 category-buttons lg:space-x-6 whitespace-nowrap lg:gap-0 gap-4 text-lg lg:text-xl text-center font-bold *:lg:px-6 *:py-1 *:px-4 *:rounded-full">
        <button @click="setCategory('법무법인')" :class="{ 'text-primary-500 bg-white border-2 border-white': selectedCategory === '법무법인', 'bg-transparent text-white border-2 border-white': selectedCategory !== '법무법인' }">법무법인</button>
        <button @click="setCategory('프랜차이즈')" :class="{ 'text-primary-500 bg-white border-2 border-white': selectedCategory === '프랜차이즈', 'bg-transparent text-white border-2 border-white': selectedCategory !== '프랜차이즈' }">프랜차이즈</button>
        <button @click="setCategory('쇼핑몰')" :class="{ 'text-primary-500 bg-white border-2 border-white': selectedCategory === '쇼핑몰', 'bg-transparent text-white border-2 border-white': selectedCategory !== '쇼핑몰' }">쇼핑몰</button>
        <button @click="setCategory('병원/의료업')" :class="{ 'text-primary-500 bg-white border-2 border-white': selectedCategory === '병원/의료업', 'bg-transparent text-white border-2 border-white': selectedCategory !== '병원/의료업' }">병원/의료업</button>
        <button @click="setCategory('그 외')" :class="{ 'text-primary-500 bg-white border-2 border-white': selectedCategory === '그 외', 'bg-transparent text-white border-2 border-white': selectedCategory !== '그 외' }">그 외</button>
      </div>
      <div class="lg:grid-cols-5 grid grid-cols-2 gap-4">
        <div v-for="(item, index) in filteredPortfolio" :key="item.slug" class="shadow-primary-700/60 group/portfolio text-black-800 lg:rounded-2xl rounded-xl lg:pb-14 relative w-full col-span-1 pb-8 overflow-hidden text-center bg-white shadow-xl" :class="{ 'transform translate-y-24': isOffset(index) }">
          <a @click.prevent="selectItem(item)">
            <div class="colCenter lg:space-y-10 w-full space-y-6">
              <div class="lg:h-36 colCenter h-28 w-full overflow-hidden">
                <NuxtImg format="webp" quality="90" width="1200px" :src="`/img/portfolio/${item.titleImg}`" :alt="`이엔미디어 포트폴리오 업체 ${item.title} 썸네일 이미지`" class="group-hover/portfolio:scale-100 w-full object-cover min-w-[calc(100%+4px)] transition-all duration-700 ease-in-out lg:scale-[1.15] scale-100" />
              </div>
              <div class="colCenter px-4 space-y-4">
                <NuxtImg :src="`/img/portfolio/${item.logo}`" :alt="`이엔미디어 포트폴리오 업체 ${item.title} 로고`" class="lg:max-w-20 max-w-16 max-h-16 lg:max-h-20 w-full" />
                <div class="space-y-1">
                  <h4 class="lg:text-2xl text-xl font-bold">{{ item.title }}</h4>
                  <p class="text-black-500 lg:text-base text-sm font-medium">{{ item.titleSub }}</p>
                </div>
              </div>
              <div class="bg-primary-500 group-hover/portfolio:bottom-0 absolute left-0 rowCenter lg:block hidden transition-all duration-300 ease-in-out -bottom-[100%] w-full h-8 text-white">
                <i class="fa-solid fa-circle-plus animate-spin animate-duration-[3000ms] text-xl"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

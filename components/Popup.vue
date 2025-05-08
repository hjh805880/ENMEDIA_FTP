<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Props {
  storageKey?: string;
}

const props = defineProps<Props>();

const show = ref(false);

const key = props.storageKey || "popup_hidden";

onMounted(() => {
  const disabled = localStorage.getItem(key);
  if (!disabled) {
    show.value = true;
  }
});

function close() {
  show.value = false;
}

function disableForever() {
  localStorage.setItem(key, "true");
  show.value = false;
}
</script>

<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="relative bg-white rounded-lg overflow-hidden shadow-lg">
      <NuxtLink to="https://ads.naver.com/adguide/agency/sa" target="_blank" rel="noopener noreferrer">
        <NuxtImg src="/img/popup.webp" format="webp" quality="100" loading="lazy" densities="x1 x2" alt="주식회사 이엔미디어 공식대행사 선정 안내 팝업이미지" class="lg:block hidden w-full h-auto" />
        <NuxtImg src="/img/popup_mo.webp" format="webp" quality="100" loading="lazy" densities="x1 x2" alt="주식회사 이엔미디어 공식대행사 선정 안내 팝업이미지" class="block lg:hidden w-full h-auto" />
      </NuxtLink>
      <div class="flex justify-end space-x-2 p-2 bg-black-100">
        <button @click="disableForever" class="px-3 py-1 text-sm bg-black-400 text-white rounded hover:bg-black-500">다시 보지 않기</button>
        <button @click="close" class="px-3 py-1 text-sm bg-black-500 text-white rounded hover:bg-black-600">닫기</button>
      </div>
    </div>
  </div>
</template>

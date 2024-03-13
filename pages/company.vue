<script setup>
import { onMounted, ref } from 'vue';

const textContent = ref(""); // 텍스트 내용을 저장할 ref
const cursor = ref(""); // 커서 문자
let text = "Data & Creative"; // 표시할 전체 텍스트
let index = 0;
let delay = 120; // 타이핑 지연 시간 (ms)
let loop = true; // 무한 반복 여부

function type() {
  if (index < text.length) {
    textContent.value = text.substring(0, index + 1);
    index++;
    setTimeout(type, delay);
  } else {
    if (loop) {
      setTimeout(() => {
        index = 0;
        type(); // 무한 반복
      }, 3500);
    } else {
      cursor.value = ""; // 마지막에 커서 제거
    }
  }
}

onMounted(() => {
  type(); // 컴포넌트 마운트 시 타이핑 시작
});
</script>

<template>
  <div>
    <SubTop subTopImg="/img/subtop_visual_company.webp" subTopTitle="COMPANY" subTopDesc="전문적이고 체계적인 최적의 솔루션을 제공하는 이엔미디어 입니다." />
    <section id="section1" class="text-black-800 w-screen overflow-hidden text-center">
      <div class="w-full text-left bg-fixed bg-[url('~/assets/img/company/section1_visual_bg.webp')] shadow-xl shadow-black/60 bg-cover bg-center bg-no-repeat">
        <div class="max-w-gui lg:px-12 lg:py-40 lg:flex-row flex flex-col items-center justify-between px-4 py-32 mx-auto">
          <div class="flex flex-col items-start justify-center">
            <span class="text-5xl font-bold leading-snug tracking-tight">{{ textContent }}<b class="cursor animate-pulse animate-duration-500 text-black-500 animate-ease-in-out border-black-600 pt-4 ml-1 text-xl border-r-2">{{ cursor }}</b></span>
            <span class="text-8xl text-primary-500 font-extrabold leading-snug tracking-tight">ENMEDIA</span>
            <span class="text-black-700 mt-4 text-xl font-light"><span class="font-semibold">데이터는 이엔미디어의 핵심이고 창의성은 저희가 살아가는 방식입니다.</span><br />Trend를 따라가는 것에 본질을 놓치지 않고<br />저희만의 노하우를 반영하여<br />데이터 기반의 <span class="border-black-700 pb-1 font-semibold border-b">Creative 광고 솔루션</span>을 제공합니다.</span>
          </div>
          <div class="border-primary-500 flex flex-col items-start justify-between pl-8 space-y-6 border-l-2">
            <div class="flex flex-col items-start justify-center space-y-2">
              <span class="text-3xl font-bold before:content-['·'] before:mr-2 before:text-primary-500">Data</span>
              <span class="text-black-700 text-lg font-light">
                7년간의 경험을 바탕으로<br />
                최적화된 솔루션을 제공하는<br />
                이엔미디어만의 노하우 입니다.
              </span>
            </div>
            <div class="flex flex-col items-start justify-center space-y-2">
              <span class="text-3xl font-bold before:content-['·'] before:mr-2 before:text-primary-500">Creative</span>
              <span class="text-black-700 text-lg font-light">
                열려있는 사고와 창의성으로<br />
                보다 전문적이고 체계적인<br />
                최적의 솔루션을 제공합니다.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:max-w-gui colCenter lg:px-12 lg:py-40 lg:space-y-40 max-w-full px-4 py-32 mx-auto space-y-20"></div>
    </section>
  </div>
</template>

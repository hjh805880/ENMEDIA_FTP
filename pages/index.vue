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
  document.addEventListener('visibilitychange', handleVisibilityChange);
});

onUnmounted(() => {
  document.removeEventListener('visibilitychange', handleVisibilityChange);
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
      <div class="absolute lg:top-[32%] left-0 lg:left-[15%] z-20 col-center w-fit">
        <NuxtImg src="/main_visual_text.webp" alt="이엔미디어" class="lg:w-[calc(83%+1.25rem)] w-[90%]" />
      </div>
    </div>
  </section>
</template>

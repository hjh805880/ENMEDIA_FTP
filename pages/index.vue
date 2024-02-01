<script setup></script>

<template>
  <!-- 섹션1 시작 -->
  <section id="section1" class="min-h-dvh relative w-screen h-screen overflow-hidden text-white">
    <video class="lg:w-auto lg:h-auto min-h-lvh absolute z-0 block object-cover w-full h-full min-w-full" autoplay playsinline loop muted>
      <source src="~/assets/video/main_visual_bg.webm" type="video/webm" class="object-cover w-full h-full" />
      <source src="~/assets/video/main_visual_bg.mp4" type="video/mp4" class="object-cover w-full h-full" />
    </video>
    <div class="absolute lg:top-[16%] left-0 z-20 col-center w-fit">
       <NuxtImg src="/main_visual_text.webp" alt="이엔미디어" class="lg:w-[70%] w-[90%]" />
    </div>
  </section>
</template>

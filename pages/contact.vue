<script setup></script>

<template>
  <div>
    <SubTop subTopImg="/img/subtop_visual_contact.webp" subTopTitle="CONTACT US" subTopDesc="이엔미디어는 성장하고자 하는 모든길에 열려있습니다." />
    <section id="section1" class="text-black-800 w-screen overflow-hidden text-center">
      <div data-aos="fade-up" data-aos-duration="1000" class="lg:space-y-14 lg:py-40 py-32 space-y-16">
        <div class="lg:max-w-gui lg:space-y-14 max-w-full mx-auto space-y-16">
          <div data-aos="fade-up" data-aos-duration="1000" class="colCenter mx-4 space-y-4 overflow-hidden">
            <h2 class="lg:text-4xl text-2xl font-extrabold">광고문의 및 제안</h2>
            <h3 class="lg:text-2xl text-black-700 text-xl">아래 내용을 자세히 작성해주시면 빠른 답변을 드릴 수 있도록 최선을 다하겠습니다.</h3>
            <div class="lg:w-12 border-primary-500 w-10 border-b-8"></div>
            <div class="rowCenter lg:space-x-6 pt-2">
              <NuxtLink to="tel:02-3429-3161" class="lg:text-lg text-black-700 border-black-800 lg:pr-6 pr-4 text-base font-light border-r"><span class="text-primary-500 mr-1 font-bold">Tel</span> 02-3429-3161</NuxtLink>
              <NuxtLink to="mailto:contact@en-media.kr" class="lg:text-lg text-black-700 text-base font-light"><span class="text-primary-500 mr-1 font-bold">E-Mail</span> contact@en-media.kr</NuxtLink>
            </div>
            <h4 class="lg:text-lg text-black-700 text-base font-light">서울특별시 강서구 강서로56가길 141 케이엠빌딩, 6층</h4>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  </div>
</template>

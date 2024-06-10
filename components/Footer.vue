<template>
  <footer id="footer" class="bg-black-800 lg:text-left lg:px-12 lg:pb-32 pt-14 w-full px-4 pb-24 text-center text-white">
    <div class="lg:max-w-gui mb-14 flex w-full max-w-full mx-auto">
      <div class="border-black-500 text-black-500 whitespace-nowrap lg:items-start lg:justify-start lg:space-x-10 flex flex-row items-center justify-center w-full pb-4 border-b">
        <div class="rowCenter lg:flex hidden space-x-10">
          <NuxtLink to="/company" class="text-black-400 font-medium">
            <span class="">회사소개</span>
          </NuxtLink>
          <NuxtLink to="/service" class="text-black-400 font-medium">
            <span class="">서비스소개</span>
          </NuxtLink>
          <NuxtLink to="/solution" class="text-black-400 font-medium">
            <span class="">솔루션안내</span>
          </NuxtLink>
          <NuxtLink to="/portfolio" class="text-black-400 font-medium">
            <span class="">포트폴리오</span>
          </NuxtLink>
          <!-- <NuxtLink to="/portfolio/gallery" class="text-black-400 font-medium">
            <span class="">갤러리</span>
          </NuxtLink> -->
          <NuxtLink to="/contact" class="text-black-400 font-medium">
            <span class="">광고문의</span>
          </NuxtLink>
        </div>
        <div class="rowCenter lg:space-x-10 lg:text-base space-x-4 text-sm">
          <NuxtLink to="/service/개인정보처리방침" class="">
            <span class="">개인정보처리방침</span>
          </NuxtLink>
          <!-- <NuxtLink to="/service/" class="">
            <span class="">찾아오시는길</span>
          </NuxtLink> -->
          <NuxtLink to="/service/이메일무단수집거부" class="">
            <span class="">이메일무단수집거부</span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="lg:flex-row lg:max-w-gui lg:space-x-8 flex flex-col-reverse items-center justify-between w-full max-w-full mx-auto">
      <div class="lg:items-start lg:space-y-6 flex flex-col items-center justify-center space-y-8">
        <img src="~/assets/img/logo_w.svg" alt="이엔미디어 로고" class="lg:w-64 w-56" />
        <ul class="text-black-400 lg:space-y-3 pt-6 space-y-6">
          <div class="text-black-200 lg:flex-row lg:space-x-4 flex flex-col items-center justify-start font-medium">
            <li class=""><b>회사명 :</b> <span>주식회사 이엔미디어</span></li>
            <li class=""><b>대표 :</b> <span>이희주</span></li>
            <li class=""><b>사업자번호 :</b> <span>183-87-00290</span></li>
          </div>
          <li class=""><b>통신판매업신고번호 :</b> <span>2016-서울강서-1348</span></li>
          <li class=""><b>주소 :</b> <span>서울특별시 강서구 강서로56가길 141 케이엠빌딩, 6층</span></li>
          <li class=""><b>이메일 :</b> <span>contact@en-media.kr</span></li>
          <div class="lg:flex-row lg:space-x-4 flex flex-col items-center justify-start font-light">
            <li class=""><b>대표번호 :</b> <span>02-3429-3161</span></li>
            <li class=""><b>팩스 :</b> <span>0505-369-1729</span></li>
          </div>
          <div class="lg:flex-row lg:space-x-4 flex flex-col items-center justify-start font-light">
            <li class=""><b>근무시간 :</b> <span>09:00~18:00</span></li>
            <li class=""><b>점심시간 :</b> <span>12:00~13:10</span></li>
            <li class=""><b>쉬는시간 :</b> <span>15:30~15:50</span></li>
          </div>
        </ul>
        <NuxtLink to="/admin" class="text-black-500 border-black-500 lg:text-base hover:text-black-400 hover:border-black-400 px-6 py-1 text-sm font-bold border-2 rounded-full">관리자페이지 1.0v 이동</NuxtLink>
        <p class="text-black-500 font-extralight lg:text-base pt-1 text-sm">Copyrights 2024. <span class="font-medium">주식회사 이엔미디어</span> All Rights Reserved.</p>
      </div>
      <FooterMap class="lg:mb-0 mb-12" />
    </div>
  </footer>
</template>

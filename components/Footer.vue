<template>
  <footer id="footer" class="bg-black-800 lg:text-left lg:px-12 lg:py-32 w-full px-4 py-24 text-center text-white">
    <div class="lg:flex-row lg:max-w-gui lg:space-x-8 flex flex-col-reverse items-center justify-between w-full max-w-full mx-auto">
      <div class="lg:items-start lg:space-y-6 flex flex-col items-center justify-center space-y-8">
        <img src="~/assets/img/logo_w.svg" alt="이엔미디어 로고" class="lg:w-80 w-56" />
        <div class="text-black-400 border-black-500 lg:space-y-3 pt-6 space-y-6 border-t">
          <div class="text-black-200 lg:flex-row lg:space-x-4 flex flex-col items-center justify-start font-medium">
            <p class=""><b>회사명 :</b> 주식회사 이엔미디어</p>
            <p class=""><b>대표 :</b> 이희주</p>
            <p class=""><b>사업자번호 :</b> 183-87-00290</p>
          </div>
          <p class=""><b>통신판매업신고번호 :</b> 2016-서울강서-1348</p>
          <p class=""><b>주소 :</b> 서울특별시 강서구 공항대로 227 (마곡동, 마곡센트럴타워Ⅰ) 5층 501호</p>
          <p class=""><b>이메일 :</b> contact@en-media.kr</p>
          <div class="lg:flex-row lg:space-x-4 flex flex-col items-center justify-start font-light">
            <p class=""><b>대표번호 :</b> 02-3429-3161</p>
            <p class=""><b>팩스 :</b> 0505-369-1729</p>
          </div>
          <div class="lg:flex-row lg:space-x-4 flex flex-col items-center justify-start font-light">
            <p class=""><b>근무시간 :</b> 09:00~18:00</p>
            <p class=""><b>점심시간 :</b> 12:00~13:10</p>
            <p class=""><b>쉬는시간 :</b> 15:30~15:50</p>
          </div>
        </div>
        <NuxtLink to="/admin" class="text-black-500 border-black-500 lg:text-base hover:text-black-400 hover:border-black-400 px-6 py-1 text-sm font-bold border-2 rounded-full">관리자페이지 1.0v 이동</NuxtLink>
        <p class="text-black-500 font-extralight lg:text-base pt-1 text-sm">Copyrights 2024. <span class="font-medium">주식회사 이엔미디어</span> All Rights Reserved.</p>
      </div>
      <FooterMap class="lg:mb-0 mb-12"/>
    </div>
  </footer>
</template>

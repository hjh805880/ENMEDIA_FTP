<template>
  <div class="rowCenter space-x-36 pb-56">
    <div class="aspect-1 rowCenter after:border after:absolute after:border-white after:w-64 after:left-[100%] relative p-8 text-4xl font-bold border-4 border-white rounded-full">CLIENT</div>
    <div class="rowCenter pr-10">
      <div class="relative">
        <div class="size-[400px] flex items-center aspect-1 relative justify-center bg-primary-500 rounded-full after:size-[600px] after:border-white after:border after:rounded-full after:aspect-1 after:z-10 z-20">
          <div class="colCenter absolute w-full h-full p-20 space-y-2 text-2xl">
            <div class="flex items-center justify-between w-full">
              <span class="text-left">효율적인<br />광고비</span>
              <span class="text-right">디자인&<br />퍼블리싱</span>
            </div>
            <div class="after:absolute after:w-[320px] after:border after:border-white after:-left-28 after:z-10 after:top-1/2 relative">
              <div class="after:absolute after:h-[320px] after:border after:border-white after:left-1/2 after:z-10 after:-top-28 relative">
                <img src="~/assets/img/symbol.svg" alt="이엔미디어 로고 심볼" class="aspect-1 border-primary-500 relative z-20 w-24 p-4 bg-white border-8 rounded-full" />
              </div>
            </div>
            <div class="flex items-center justify-between w-full">
              <span class="text-left">잠재고객<br />확보</span>
              <span class="text-right">효과적인<br />주말입찰</span>
            </div>
          </div>
        </div>
        <div class="text-black-500 text-2xl font-bold leading-snug">
          <div class="left-[75%] -top-2 absolute transform -translate-x-1/2 -translate-y-full z-20 group/naver overflow-hidden">
            <div class="size-40 colCenter relative bg-black-300 rounded-full has-[:hover]:bg-white hover:bg-white transition-all duration-1000 delay-75 ease-in-out *:transition-all *:duration-500 *:ease-in-out *:delay-75">
              <span class="group-hover/naver:-top-full top-[40%] absolute">NAVER</span>
              <img src="~/assets/img/logo_naver.svg" alt="이엔미디어 네이버 로고" class="group-hover/naver:bottom-0 -bottom-full absolute p-12" />
            </div>
          </div>
          <div class="left-[25%] -top-2 absolute transform group/daum -translate-x-1/2 -translate-y-full z-20 overflow-hidden">
            <div class="size-40 colCenter relative bg-black-300 rounded-full has-[:hover]:bg-white hover:bg-white transition-all duration-1000 delay-75 ease-in-out *:transition-all *:duration-500 *:ease-in-out *:delay-75">
              <span class="group-hover/daum:-top-full top-[40%] absolute">DAUM</span>
              <img src="~/assets/img/logo_daum.svg" alt="이엔미디어 다음 로고" class="group-hover/daum:bottom-[15%] -bottom-full absolute p-12" />
            </div>
          </div>
          <div class="top-14 -right-16 group/kakao absolute z-20 overflow-hidden transform translate-x-1/2 -translate-y-1/2">
            <div class="size-40 colCenter relative bg-black-300 rounded-full has-[:hover]:bg-white hover:bg-white transition-all duration-1000 delay-75 ease-in-out *:transition-all *:duration-500 *:ease-in-out *:delay-75">
              <span class="group-hover/kakao:-top-full top-[40%] absolute">KAKAO</span>
              <img src="~/assets/img/logo_kakao.svg" alt="이엔미디어 카카오 로고" class="group-hover/kakao:bottom-0 -bottom-full absolute p-12" />
            </div>
          </div>
          <div class="top-14 -left-16 group/tg absolute z-20 overflow-hidden transform -translate-x-1/2 -translate-y-1/2">
            <div class="size-40 colCenter relative bg-black-300 rounded-full has-[:hover]:bg-white hover:bg-white transition-all duration-1000 delay-75 ease-in-out *:transition-all *:duration-500 *:ease-in-out *:delay-75">
              <span class="group-hover/tg:-top-full top-[40%] absolute">TG</span>
              <img src="~/assets/img/logo_tg.png" alt="이엔미디어 타게팅 로고" class="group-hover/tg:bottom-0 -bottom-full absolute p-12" />
            </div>
          </div>
          <div class="right-[75%] -bottom-2 absolute transform group/mobon overflow-hidden translate-x-1/2 translate-y-full z-20">
            <div class="size-40 colCenter relative bg-black-300 rounded-full has-[:hover]:bg-white hover:bg-white transition-all duration-1000 delay-75 ease-in-out *:transition-all *:duration-500 *:ease-in-out *:delay-75">
              <span class="group-hover/mobon:-top-full top-[40%] absolute">MOBON</span>
              <img src="~/assets/img/logo_mobon.png" alt="이엔미디어 모비온 로고" class="group-hover/mobon:bottom-0 -bottom-full absolute p-12" />
            </div>
          </div>
          <div class="right-[25%] -bottom-2 absolute transform group/insta overflow-hidden translate-x-1/2 translate-y-full z-20">
            <div class="size-40 colCenter relative bg-black-300 rounded-full has-[:hover]:bg-white hover:bg-white transition-all duration-1000 delay-75 ease-in-out *:transition-all *:duration-500 *:ease-in-out *:delay-75">
              <span class="group-hover/insta:-top-full top-[40%] absolute">INSTA</span>
              <img src="~/assets/img/logo_insta.svg" alt="이엔미디어 인스타 로고" class="group-hover/insta:bottom-0 -bottom-full absolute p-12" />
            </div>
          </div>
          <div class="bottom-14 -left-16 group/meta absolute z-20 overflow-hidden transform -translate-x-1/2 translate-y-1/2">
            <div class="size-40 colCenter relative bg-black-300 rounded-full has-[:hover]:bg-white hover:bg-white transition-all duration-1000 delay-75 ease-in-out *:transition-all *:duration-500 *:ease-in-out *:delay-75">
              <span class="group-hover/meta:-top-full top-[40%] absolute">META</span>
              <img src="~/assets/img/logo_meta.svg" alt="이엔미디어 메타 로고" class="group-hover/meta:bottom-0 -bottom-full absolute p-12" />
            </div>
          </div>
          <div class="bottom-14 -right-16 group/google absolute z-20 overflow-hidden transform translate-x-1/2 translate-y-1/2">
            <div class="size-40 colCenter relative bg-black-300 rounded-full has-[:hover]:bg-white hover:bg-white transition-all duration-1000 delay-75 ease-in-out *:transition-all *:duration-500 *:ease-in-out *:delay-75">
              <span class="group-hover/google:-top-full top-[40%] absolute">GOOGLE</span>
              <img src="~/assets/img/logo_google.svg" alt="이엔미디어 구글 로고" class="group-hover/google:bottom-0 -bottom-full absolute p-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="aspect-1 rowCenter after:border after:absolute after:border-white after:w-[188px] after:right-[100%] after:z-10 after relative p-8 text-4xl font-bold border-4 border-white bg-white text-primary-500 rounded-full">
      <div class="after:w-[320px] after:border-4 after:border-primary-500 after:z-30 after:absolute after:animate-duration-[1200ms] after:aspect-1 after:animate-pulse after:rounded-full relative w-full h-full colCenter">
        <div class="after:w-[280px] after:border-2 after:border-primary-500 after:animate-duration-1000 after:z-30 after:absolute after:aspect-1 after:animate-pulse after:rounded-full relative w-full h-full colCenter">
          <span class="">GROWTH</span>
        </div>
      </div>
    </div>
  </div>
</template>

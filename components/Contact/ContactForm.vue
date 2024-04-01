<template>
  <div>
    <div class="bg-[url('~/assets/img/contact/form_visual_bg.webp')] w-full bg-center bg-cover bg-no-repeat lg:py-16">
      <form action="" class="lg:max-w-gui max-w-full mx-auto">
        <div class="lg:px-4 grid items-center justify-center grid-cols-10 gap-8 text-right">
          <label for="company" class="lg:text-xl col-span-1 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">회사명</label>
          <input type="text" id="company" class="col-span-4 p-4 rounded-md" placeholder="회사명을 입력해주세요." required />
          <label for="name" class="lg:text-xl col-span-1 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">담당자명</label>
          <input type="text" id="name" class="col-span-4 p-4 rounded-md" placeholder="담당자명을 입력해주세요." required />
          <label for="contact" class="lg:text-xl col-span-1 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">연락처</label>
          <input type="tel" id="contact" class="col-span-4 p-4 rounded-md" placeholder="연락처를 입력해주세요." required />
          <label for="email" class="lg:text-xl col-span-1 font-bold text-white">이메일</label>
          <input type="email" id="email" class="col-span-4 p-4 rounded-md" placeholder="이메일을 입력해주세요." />
          <label for="homepage" class="lg:text-xl col-span-1 font-bold text-white">홈페이지</label>
          <input type="text" id="homepage" class="col-span-9 p-4 rounded-md" placeholder="홈페이지 URL을 입력해주세요." />
          <label for="request" class="lg:text-xl self-start col-span-1 mt-2 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">문의내용</label>
          <textarea type="text" id="request" class="lg:h-52 col-span-9 p-4 overflow-scroll rounded-md resize-none" placeholder="문의내용을 자세하게 입력해주세요." required />
          <div class="rowCenter w-full col-span-10 px-2 space-x-6 text-left">
            <label for="privacy" class="lg:text-base flex flex-row items-center justify-start space-x-2 tracking-normal text-white">
              <input class="size-6 focus:ring-white checked:text-primary-500 checked:border-white hover:border-white text-lg font-bold bg-transparent border-2 border-white rounded-full" type="checkbox" id="privacy" name="privacy" checked required />
              <NuxtLink data-modal-target="defaultModal" data-modal-toggle="defaultModal" to="javascript:void(0);" class="underline-offset-4 font-bold underline">개인정보처리방침</NuxtLink>에 동의합니다.
            </label>
          </div>
          <button type="submit" class="place-self-center w-1/2 col-span-10 p-2 mt-2 text-xl font-bold text-white bg-transparent border-2 border-white rounded-md">문의 신청하기</button>
        </div>
      </form>
    </div>
  </div>
</template>

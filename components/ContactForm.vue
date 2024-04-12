<script setup lang="ts">
import { initFlowbite } from "flowbite";
import { useContactFormStore } from "@/stores/ContactFormStore";

onMounted(() => {
  initFlowbite();
});

export interface ContactForm {
  company: string;
  name: string;
  contact: string;
  email: string;
  homepage: string;
  request: string;
  privacy: boolean;
}

const store = useContactFormStore();

const form = ref<ContactForm>({
  company: "",
  name: "",
  contact: "",
  email: "",
  homepage: "",
  request: "",
  privacy: true,
});

const submitForm = () => {
  store.submitForm(form.value);
};
</script>
<template>
  <div>
    <div class="bg-[url('~/assets/img/contact/form_visual_bg.webp')] w-full bg-center bg-cover bg-no-repeat py-16 px-4">
      <form data-aos="fade-up" data-aos-duration="1000" @submit.prevent="submitForm" class="lg:max-w-gui max-w-full mx-auto" autocomplete="off">
        <div class="lg:px-4 lg:grid-cols-10 lg:gap-8 lg:text-right grid items-center justify-center grid-cols-1 gap-3 text-left">
          <label for="company" class="lg:w-full w-fit ml-1 lg:text-xl col-span-1 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">회사명</label>
          <input v-model="form.company" type="text" id="company" class="lg:col-span-4 lg:p-4 w-full col-span-1 p-3 rounded-md" placeholder="회사명을 입력해주세요." />
          <label for="name" class="lg:w-full w-fit ml-1 lg:text-xl col-span-1 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">담당자명</label>
          <input v-model="form.name" type="text" id="name" class="lg:col-span-4 lg:p-4 w-full col-span-1 p-3 rounded-md" placeholder="담당자명을 입력해주세요." />
          <label for="contact" class="lg:w-full w-fit ml-1 lg:text-xl col-span-1 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">연락처</label>
          <input v-model="form.contact" type="tel" id="contact" class="lg:col-span-4 lg:p-4 w-full col-span-1 p-3 rounded-md" placeholder="연락처를 입력해주세요." />
          <label for="email" class="lg:w-full w-fit ml-1 lg:text-xl col-span-1 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">이메일</label>
          <input v-model="form.email" type="email" id="email" class="lg:col-span-4 lg:p-4 w-full col-span-1 p-3 rounded-md" placeholder="이메일을 입력해주세요." />
          <label for="homepage" class="lg:w-full w-fit lg:text-xl col-span-1 ml-1 font-bold text-white">홈페이지</label>
          <input v-model="form.homepage" type="text" id="homepage" class="lg:col-span-9 lg:p-4 w-full col-span-1 p-3 rounded-md" placeholder="홈페이지 URL을 입력해주세요." />
          <label for="request" class="lg:w-full w-fit ml-1 lg:text-xl self-start col-span-1 mt-2 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">문의내용</label>
          <textarea v-model="form.request" type="text" id="request" class="lg:h-52 lg:col-span-9 lg:p-4 w-full h-32 col-span-1 p-3 overflow-scroll rounded-md resize-none" placeholder="문의내용을 자세하게 입력해주세요." />
          <div class="rowCenter lg:col-span-10 lg:mt-0 w-full col-span-1 px-2 mt-4 space-x-6 text-left">
            <label for="privacy" class="lg:text-base flex flex-row items-center justify-start space-x-2 text-sm tracking-normal text-white">
              <input class="size-6 focus:ring-white checked:text-primary-500 checked:border-white hover:border-white checked:hover:border-white text-lg font-bold bg-transparent border-2 border-white rounded-full" type="checkbox" id="privacy" name="privacy" checked />
              <NuxtLink data-modal-target="defaultModal" data-modal-toggle="defaultModal" to="javascript:void(0);" class="underline-offset-4 font-bold underline">개인정보처리방침</NuxtLink>에 동의합니다.
            </label>
          </div>
          <ContactPrivacy />
          <button type="submit" :disabled="store.isSending" class="place-self-center disabled:border-white/50 disabled:text-white/50 lg:col-span-10 lg:mt-2 lg:w-1/2 lg:text-xl w-full col-span-1 p-2 mt-4 text-lg font-bold text-white transition-all bg-transparent border-2 border-white rounded-md">문의 신청하기</button>
          <div v-if="store.isSending" class="place-self-center lg:col-span-10 lg:w-1/2 w-full col-span-1 mt-4">
            <div class="bg-primary-400 w-full overflow-hidden rounded-full">
              <div class="bg-white h-1.5 rounded-full animate-[loading] animate-duration-1000 animate-infinite animate-ease-in-out"></div>
            </div>
          </div>
        </div>
      </form>
      <div v-if="store.alertType === 'success'" id="toast-success" class="dark:text-gray-400 dark:bg-gray-800 animate-flip-up shadow-black-700/40 z-[9999] lg:w-fit text-black-600 lg:mt-2 bottom-6 right-[1%] fixed flex items-center w-fit col-span-1 lg:py-4 lg:px-6 px-4 py-2 mx-auto mt-4 bg-white rounded-lg shadow-lg" role="alert">
        <div class="dark:bg-green-800 dark:text-green-200 inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        </div>
        <div class="ms-3 text-sm font-normal">상담 신청에 성공했습니다. 빠른 시일 내로 연락드리겠습니다.</div>
      </div>
      <div v-if="store.alertType === 'error'" id="toast-failed" class="dark:text-gray-400 dark:bg-gray-800 animate-flip-up shadow-black-700/40 z-[9999] lg:w-fit text-black-600 lg:mt-2 bottom-6 right-[1%] fixed flex items-center w-fit col-span-1 lg:py-4 lg:px-6 px-4 py-2 mx-auto mt-4 bg-white rounded-lg shadow-lg" role="alert">
        <div class="dark:bg-red-800 dark:text-red-200 inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
          </svg>
          <span class="sr-only">Error icon</span>
        </div>
        <div class="ms-3 text-sm font-normal">상담 신청에 실패했습니다. 다시 시도해주세요.</div>
      </div>
      <div v-if="store.alertType === 'warning'" id="toast-warning" class="dark:text-gray-400 dark:bg-gray-800 animate-flip-up shadow-black-700/40 z-[9999] lg:w-fit text-black-600 lg:mt-2 bottom-6 right-[1%] fixed flex items-center w-fit col-span-1 lg:py-4 lg:px-6 px-4 py-2 mx-auto mt-4 bg-white rounded-lg shadow-lg" role="alert">
        <div class="dark:bg-orange-700 dark:text-orange-200 inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
          </svg>
          <span class="sr-only">Warning icon</span>
        </div>
        <div class="ms-3 text-sm font-normal">양식의 필수 요소를 전부 입력해주세요.</div>
      </div>
    </div>
  </div>
</template>

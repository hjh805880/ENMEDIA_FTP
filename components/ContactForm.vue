<script setup>
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});

const form = ref({
  company: '',
  name: '',
  contact: '',
  email: '',
  homepage: '',
  request: '',
  privacy: true,
});

const isSending = ref(false);

const submitForm = async () => {
  if (isSending.value) return;
  isSending.value = true;
  
  try {
    const { data } = await useFetch('/api/sendMail', {
      method: 'POST',
      body: form.value,
    });

    if (data.value.success) {
      alert('상담 신청에 성공했습니다. 빠른 시일내로 연락드리겠습니다.');
      form.value = {
        company: '',
        name: '',
        contact: '',
        email: '',
        homepage: '',
        request: '',
        privacy: true,
      };
      isSending.value = false; 
    } else {
      console.error('메일 전송 실패:', data.value.message);
      alert('상담 신청에 실패했습니다. 다시 시도해주세요.');
      form.value = {
        company: '',
        name: '',
        contact: '',
        email: '',
        homepage: '',
        request: '',
        privacy: true,
      };
      isSending.value = false; 
    }
  } catch (error) {
    console.error('메일 전송 중 에러 발생:', error);
    alert('상담 신청 중 문제가 발생했습니다. 다시 시도해주세요.');
    isSending.value = false; 
  }
};

</script>
<template>
  <div>
    <div class="bg-[url('~/assets/img/contact/form_visual_bg.webp')] w-full bg-center bg-cover bg-no-repeat py-16 px-4">
      <form @submit.prevent="submitForm" class="lg:max-w-gui max-w-full mx-auto" autocomplete="off">
        <div class="lg:px-4 lg:grid-cols-10 lg:gap-8 lg:text-right grid items-center justify-center grid-cols-1 gap-3 text-left">
          <label for="company" class="lg:w-full w-fit ml-1 lg:text-xl col-span-1 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">회사명</label>
          <input v-model="form.company" type="text" id="company" class="lg:col-span-4 lg:p-4 w-full col-span-1 p-3 rounded-md" placeholder="회사명을 입력해주세요." required />
          <label for="name" class="lg:w-full w-fit ml-1 lg:text-xl col-span-1 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">담당자명</label>
          <input v-model="form.name" type="text" id="name" class="lg:col-span-4 lg:p-4 w-full col-span-1 p-3 rounded-md" placeholder="담당자명을 입력해주세요." required />
          <label for="contact" class="lg:w-full w-fit ml-1 lg:text-xl col-span-1 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">연락처</label>
          <input v-model="form.contact" type="tel" id="contact" class="lg:col-span-4 lg:p-4 w-full col-span-1 p-3 rounded-md" placeholder="연락처를 입력해주세요." required />
          <label for="email" class="lg:w-full w-fit ml-1 lg:text-xl col-span-1 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">이메일</label>
          <input v-model="form.email" type="email" id="email" class="lg:col-span-4 lg:p-4 w-full col-span-1 p-3 rounded-md" placeholder="이메일을 입력해주세요." required />
          <label for="homepage" class="lg:w-full w-fit lg:text-xl col-span-1 ml-1 font-bold text-white">홈페이지</label>
          <input v-model="form.homepage" type="text" id="homepage" class="lg:col-span-9 lg:p-4 w-full col-span-1 p-3 rounded-md" placeholder="홈페이지 URL을 입력해주세요." />
          <label for="request" class="lg:w-full w-fit ml-1 lg:text-xl self-start col-span-1 mt-2 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">문의내용</label>
          <textarea v-model="form.request" type="text" id="request" class="lg:h-52 lg:col-span-9 lg:p-4 w-full h-32 col-span-1 p-3 overflow-scroll rounded-md resize-none" placeholder="문의내용을 자세하게 입력해주세요." required />
          <div class="rowCenter lg:col-span-10 lg:mt-0 w-full col-span-1 px-2 mt-4 space-x-6 text-left">
            <label for="privacy" class="lg:text-base flex flex-row items-center justify-start space-x-2 text-sm tracking-normal text-white">
              <input class="size-6 focus:ring-white checked:text-primary-500 checked:border-white hover:border-white checked:hover:border-white text-lg font-bold bg-transparent border-2 border-white rounded-full" type="checkbox" id="privacy" name="privacy" checked required />
              <NuxtLink data-modal-target="defaultModal" data-modal-toggle="defaultModal" to="javascript:void(0);" class="underline-offset-4 font-bold underline">개인정보처리방침</NuxtLink>에 동의합니다.
            </label>
          </div>
          <ContactPrivacy/>
          <button type="submit" :disabled="isSending" class="place-self-center disabled:border-white/50 disabled:text-white/50 lg:col-span-10 lg:mt-2 lg:w-1/2 lg:text-xl w-full col-span-1 p-2 mt-4 text-lg font-bold text-white transition-all bg-transparent border-2 border-white rounded-md">문의 신청하기</button>
          <div v-if="isSending" class="place-self-center lg:col-span-10 lg:w-1/2 w-full col-span-1 mt-4">
            <div class="bg-primary-400 w-full overflow-hidden rounded-full">
              <div class="bg-white h-2.5 rounded-full animate-[loading] animate-duration-1000 animate-infinite animate-ease-in-out"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

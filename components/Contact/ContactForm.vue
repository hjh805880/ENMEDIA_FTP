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
    <div class="bg-[url('~/assets/img/contact/form_visual_bg.webp')] w-full bg-center bg-cover bg-no-repeat lg:py-16">
      <form @submit.prevent="submitForm" class="lg:max-w-gui max-w-full mx-auto" autocomplete="off">
        <div class="lg:px-4 grid items-center justify-center grid-cols-10 gap-8 text-right">
          <label for="company" class="lg:text-xl col-span-1 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">회사명</label>
          <input v-model="form.company" type="text" id="company" class="col-span-4 p-4 rounded-md" placeholder="회사명을 입력해주세요." required />
          <label for="name" class="lg:text-xl col-span-1 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">담당자명</label>
          <input v-model="form.name" type="text" id="name" class="col-span-4 p-4 rounded-md" placeholder="담당자명을 입력해주세요." required />
          <label for="contact" class="lg:text-xl col-span-1 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">연락처</label>
          <input v-model="form.contact" type="tel" id="contact" class="col-span-4 p-4 rounded-md" placeholder="연락처를 입력해주세요." required />
          <label for="email" class="lg:text-xl col-span-1 font-bold text-white">이메일</label>
          <input v-model="form.email" type="email" id="email" class="col-span-4 p-4 rounded-md" placeholder="이메일을 입력해주세요." required />
          <label for="homepage" class="lg:text-xl col-span-1 font-bold text-white">홈페이지</label>
          <input v-model="form.homepage" type="text" id="homepage" class="col-span-9 p-4 rounded-md" placeholder="홈페이지 URL을 입력해주세요." />
          <label for="request" class="lg:text-xl self-start col-span-1 mt-2 font-bold text-white relative after:content-['*'] after:absolute after:text-red-500 after:top-0 after:-right-4 after:text-lg">문의내용</label>
          <textarea v-model="form.request" type="text" id="request" class="lg:h-52 col-span-9 p-4 overflow-scroll rounded-md resize-none" placeholder="문의내용을 자세하게 입력해주세요." required />
          <div class="rowCenter w-full col-span-10 px-2 space-x-6 text-left">
            <label for="privacy" class="lg:text-base flex flex-row items-center justify-start space-x-2 tracking-normal text-white">
              <input class="size-6 focus:ring-white checked:text-primary-500 checked:border-white hover:border-white checked:hover:border-white text-lg font-bold bg-transparent border-2 border-white rounded-full" type="checkbox" id="privacy" name="privacy" checked required />
              <NuxtLink data-modal-target="defaultModal" data-modal-toggle="defaultModal" to="javascript:void(0);" class="underline-offset-4 font-bold underline">개인정보처리방침</NuxtLink>에 동의합니다.
            </label>
          </div>
          <ContactPrivacy/>
          <button type="submit" :disabled="isSending" class="place-self-center disabled:border-white/50 disabled:text-white/50 w-1/2 col-span-10 p-2 mt-2 text-xl font-bold text-white transition-all bg-transparent border-2 border-white rounded-md">문의 신청하기</button>
          <div v-if="isSending" class="place-self-center w-1/2 col-span-10 mt-4">
            <div class="bg-primary-400 w-full overflow-hidden rounded-full">
              <div class="bg-white h-2.5 rounded-full animate-[loading] animate-duration-1000 animate-infinite animate-ease-in-out"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

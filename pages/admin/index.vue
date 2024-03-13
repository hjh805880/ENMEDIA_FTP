<script setup>
const url = ref("");
const name = ref("");

const { data } = useFetch("/api/authCheck");

onMounted(async () => {
  if (!data.value.allowed) {
    alert("특정IP 이외 IP의 접근이 거부되었습니다.");
    return navigateTo("/", { redirectCode: 403 });
  }
});

const kakaoLink = ref(null);

async function fetchKakaoLink() {
  try {
    const response = await fetch('/api/kakaoWork');
    if (response.ok) {
      const data = await response.json();
      kakaoLink.value = data;
    } else {
      console.error('Failed to fetch the link from API');
    }
  } catch (error) {
    console.error('Error fetching link:', error);
  }
}

onMounted(() => {
  fetchKakaoLink();
});

const submitData = async () => {
  try {
    const response = await fetch("/api/homepages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url.value, name: name.value }),
    });

    if (!response.ok) {
      throw new Error("등록 실패");
    }

    alert("등록 성공");
    url.value = ""; // 입력 필드 초기화
  } catch (error) {
    console.error("등록 실패", error);
    alert("등록 실패");
  }
};
</script>

<template>
  <div>
    <div class="text-black-800 bg-black-100 w-full h-full py-56 mx-auto space-y-24">
      <div class="lg:max-w-gui w-full max-w-full mx-auto space-y-20">
        <form @submit.prevent="submitData" class="shadow-black-400/60 grid items-center justify-center w-1/2 grid-cols-4 gap-4 px-20 py-32 mx-auto bg-white shadow-md">
          <div class="rowCenter col-span-4 mx-auto mb-2">
            <img src="~/assets/img/symbol.svg" class="w-10 mr-6" alt="" />
            <span class="text-primary-500 text-3xl font-extrabold">네이버 이엔업체 등록</span>
          </div>
          <label class="text-lg font-bold" for="name">담당자명</label>
          <input id="name" class="w-full col-span-3" v-model="name" required placeholder="담당자명을 작성해주세요." />
          <label class="text-lg font-bold" for="url">광고표시URL</label>
          <input id="url" class="w-full col-span-3" v-model="url" required placeholder="URL 전체를 입력해주세요. (표시URL만 가능)" />
          <button class="bg-primary-500 hover:bg-primary-500/80 col-span-4 px-4 py-2 mt-2 text-xl font-bold text-white">등록</button>
        </form>
        <div class="colCenter w-1/2 mx-auto text-center">
          <div class="flex items-start justify-center w-full space-x-4 text-lg font-medium text-white">
            <div v-if="kakaoLink" class="colCenter space-y-2">
              <NuxtLink :to="kakaoLink.link || '#'" target="_blank" class="bg-black-800 px-4 py-1.5 rounded-sm rowCenter space-x-2 hover:shadow-lg hover:shadow-black-600/70 hover:transition-all hover:duration-500 hover:ease-in-out">
                <span class="">카카오워크 가입링크 바로가기</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </NuxtLink>
              <span class="lg:text-sm text-black-500 px-10 font-light text-left">* 가입링크의 기간은 30일로 만료 됐을 경우<br />제작팀으로 연락주시면 갱신해드리겠습니다.</span>
            </div>
            <NuxtLink to="https://www.kakaowork.com/download" target="_blank" class="bg-black-700 px-4 py-1.5 rounded-sm rowCenter space-x-2 hover:shadow-lg hover:shadow-black-600/70 hover:transition-all hover:duration-500 hover:ease-in-out">
              <span class="">카카오워크 다운로드 바로가기</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

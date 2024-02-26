<template>
  <div>
    <div class="text-black-800 bg-black-100 w-full h-full py-56 mx-auto space-y-24">
      <form @submit.prevent="submitData" class="max-w-gui shadow-black-400/60 grid items-center justify-center w-1/2 grid-cols-4 gap-4 px-20 py-32 mx-auto bg-white shadow-md">
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
    </div>
  </div>
</template>

<script setup>
const url = ref("");
const name = ref("");

const { data } = useFetch('/api/authCheck');

onMounted(async () => {
  if (!data.value.allowed) {
    alert('특정IP 이외 IP의 접근이 거부되었습니다.');
    return navigateTo('/',{ redirectCode: 403 });
  }
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

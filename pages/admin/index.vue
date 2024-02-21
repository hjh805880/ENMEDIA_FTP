<template>
  <div>
    <input v-model="url" placeholder="URL 입력" />
    <button @click="submitUrl">등록</button>
  </div>
</template>

<script setup>
// definePageMeta({
//   middleware: ["auth"],
// });

import { ref } from "vue";
import { useFetch, useNuxtApp } from "#app";

const url = ref("");

const submitUrl = async () => {
  const { $fetch } = useNuxtApp();
  const name = user.name; // 로그인한 사용자의 이름

  // URL 유효성 검사 로직 추가 (예시)
  if (!url.value.startsWith("http://") && !url.value.startsWith("https://")) {
    alert("올바른 URL을 입력해주세요.");
    return;
  }

  await $fetch("/api/homepages", {
    method: "POST",
    body: { url: url.value, name },
  });

  url.value = ""; // 입력 필드 초기화
};
</script>

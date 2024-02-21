<template>
  <div>

    <form @submit.prevent="join">
      <input v-model="name" type="text" placeholder="Name" />
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Join</button>
    </form>
  </div>
</template>

<script setup>
const name = ref("");
const username = ref("");
const password = ref("");
const router = useRouter();

const join = async () => {
  const response = await fetch("/api/join", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name.value, username: username.value, password: password.value }),
  });

  const data = await response.json();
  if (data.success) {
    alert("계정등록에 성공하였습니다.");
    router.push("/admin/login");
  } else {
    alert(data.message);
  }
};
</script>

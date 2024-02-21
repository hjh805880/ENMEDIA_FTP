<template>
  <div>
<section id="" class=""></section>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
const username = ref("");
const password = ref("");
const router = useRouter();

const login = async () => {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username.value, password: password.value }),
  });

  const data = await response.json();
  if (data.success) {
    alert(data.message);
    router.push("/admin");
  } else {
    alert(data.message);
  }
};
</script>

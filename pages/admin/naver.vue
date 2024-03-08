<template>
  <div>
    <div class="lg:max-w-gui max-w-full colCenter w-full h-full py-56 mx-auto space-y-24">
      <div class="colCenter mt-20">
        <input v-model="customerId" placeholder="CUSTOMER_ID" required />
        <input v-model.number="setAmount" type="number" placeholder="설정 금액" required />
        <input v-model="accessLicense" placeholder="ACCESS_LICENSE (선택)" />
        <input v-model="secretKey" placeholder="SECRET_KEY (선택)" />
        <button @click="saveAccountInfo">계정 정보 저장</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const customerId = ref("");
const setAmount = ref(0);
const accessLicense = ref("");
const secretKey = ref("");

const saveAccountInfo = async () => {
  try {
    const response = await fetch("/api/saveAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerId: customerId.value,
        setAmount: setAmount.value,
        accessLicense: accessLicense.value || "0100000000e04f93afda353b32deb7b0960c1d8ca187697b5f4f74300335d44777f29c6297",
        secretKey: secretKey.value || "AQAAAAApnLWK+Qr2yU75Tq735mNd44T42PBMin0oGtfSopdNEw==",
      }),
    });

    const data = await response.json();
    if (data.error) {
      error.value = data.error;
    } else {
      alert("계정 정보가 성공적으로 저장되었습니다.");
    }
  } catch (e) {
    error.value = e.message;
  }
};
</script>

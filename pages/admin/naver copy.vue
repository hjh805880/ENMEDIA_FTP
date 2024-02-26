<template>
    <div>
      <h1>Bizmoney 잔액 정보</h1>
      <div v-if="balance !== null">잔액: {{ formattedBalance }}원</div>
      <div v-if="error">오류: {{ error }}</div>
      <div class="colCenter mt-20">
        <input v-model="accessLicense" placeholder="ACCESS_LICENSE" required/>
        <input v-model="secretKey" placeholder="SECRET_KEY" required/>
        <input v-model="customerId" placeholder="CUSTOMER_ID" required/>
        <input v-model.number="thresholdPercentage" type="number" placeholder="Threshold Percentage" required/>
        <button @click="fetchBizmoney">비즈머니 정보 가져오기</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  const accessLicense = ref('');
  const secretKey = ref('');
  const customerId = ref('');
  const thresholdPercentage = ref(0);
  const balance = ref(null);
  const error = ref(null);
  
  // 숫자를 형식화하여 표시하는 computed 속성
  const formattedBalance = computed(() => {
    if (balance.value !== null) {
      return new Intl.NumberFormat('ko-KR').format(balance.value);
    }
    return null;
  });
  
  onMounted(() => {
    accessLicense.value = localStorage.getItem('accessLicense') || '';
    secretKey.value = localStorage.getItem('secretKey') || '';
    customerId.value = localStorage.getItem('customerId') || '';
    thresholdPercentage.value = parseFloat(localStorage.getItem('thresholdPercentage')) || 0;
  });
  
  const fetchBizmoney = async () => {
    try {
      const response = await fetch('/api/bizmoney', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accessLicense: accessLicense.value,
          secretKey: secretKey.value,
          customerId: customerId.value,
          thresholdPercentage: thresholdPercentage.value,
        }),
      });
  
      const data = await response.json();
      if (data.error) {
        error.value = data.error;
      } else {
        balance.value = data.bizmoney;
      }
    } catch (e) {
      error.value = e.message;
    }
  };
  </script>
  
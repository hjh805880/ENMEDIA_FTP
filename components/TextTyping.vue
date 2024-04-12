<script setup>
const props = defineProps({
  text: String,
  delay: {
    type: Number,
    default: 120,
  },
  loop: {
    type: Boolean,
    default: true,
  },
});

const textContent = ref("");
const cursorVisible = ref(true);
let index = 0;

function type() {
  if (index < props.text.length) {
    textContent.value = props.text.substring(0, index + 1);
    index++;
    setTimeout(type, props.delay);
    if (index === props.text.length) {
      cursorVisible.value = false; // 타이핑 완료 후 커서 숨김
    }
  } else if (props.loop) {
    setTimeout(() => {
      index = 0;
      cursorVisible.value = true; // 다시 타이핑 시작 전 커서 보임
      type();
    }, 3500);
  }
}

onMounted(() => {
  type();
});
</script>

<template>
  <span>
    {{ textContent }}
    <span v-if="cursorVisible" class="cursor animate-pulse font-extralight">|</span>
  </span>
</template>

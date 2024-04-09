<script setup>
const props = defineProps({
  title: String,
  targetNumber: Number,
  unit: String,
  duration: Number, // ms로 받음
});

const displayNumber = ref(0);
let animationFrameId = null;

const animateNumber = (target, duration) => {
  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    displayNumber.value = Math.floor(progress * target);

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(step);
    } else {
      displayNumber.value = target;
    }
  };

  animationFrameId = requestAnimationFrame(step);
};

const numberContainer = ref(null);

onMounted(() => {
  nextTick(() => {
    if (numberContainer.value) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateNumber(props.targetNumber, props.duration);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 },
      );

      observer.observe(numberContainer.value);

      onUnmounted(() => {
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId);
        }
        observer.disconnect();
      });
    }
  });
});
</script>

<template>
  <div ref="numberContainer" class="number-animation-container">
    <div class="aspect-1 rounded-xl shadow-primary-800 colCenter lg:p-8 lg:shadow-2xl w-full p-4 text-center bg-white shadow-lg">
      <h5 class="lg:text-xl text-black-500 text-lg font-medium">{{ title }}</h5>
      <h6 class="lg:text-7xl text-primary-500 text-4xl font-extrabold tracking-tight">
        {{ displayNumber }}
        <span class="lg:text-3xl text-black-800 text-2xl font-medium">
          {{ unit }}
        </span>
      </h6>
    </div>
  </div>
</template>

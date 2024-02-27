<script setup lang="ts">
import site from "@/site";
import AOS from "aos";
import "aos/dist/aos.css";

useSchemaOrg([
  defineWebSite({
    name: site.name,
  }),
  defineWebPage(),
]);

onMounted(() => {
  AOS.init({
    once: false,
  });
});
</script>

<template>
  <div>
    <HeadAndMeta />
    <NuxtLayout>
      <NuxtLoadingIndicator :height="4" :color="false" class="bg-gradient-to-tr to-primary-500 from-secondary-500" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
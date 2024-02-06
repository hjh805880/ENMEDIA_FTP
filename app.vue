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
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

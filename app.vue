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
      <NuxtLoadingIndicator :color="false" class="bg-primary-500" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

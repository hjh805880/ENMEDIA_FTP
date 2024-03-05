<script setup lang="ts">
import site from "@/site";

useSchemaOrg([
  defineWebSite({
    name: site.name,
  }),
  defineWebPage(),
]);
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
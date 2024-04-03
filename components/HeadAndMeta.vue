<script setup lang="ts">
import site from "@/site";
const { name, description, url, author, keywords } = site;

const route = useRoute();
const pageTitle = computed(() => {
  const currentPath = route.path;
  const navItem = site.nav.find(item => item.link === currentPath);
  return navItem ? `${navItem.text}` : site.name;
});
const theDescription = computed(() => (route.meta.description || description) as string);
const title = computed(() => route.meta.title);
const theTitle = computed(() => (title.value ? `${title.value} - ${name}` : name));

watch(() => route.path, () => {
    useHead({
      title: pageTitle.value,
      htmlAttrs: { lang: "ko" },

      // 메타태그 설정
      meta: [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          name: "keywords",
          content: keywords,
        },
        {
          property: "og:image",
          content: "/og_img.png",
        },
        // 파비콘 설정
        { name: "msapplication-TileColor", content: "#ffffff" },
        {
          name: "msapplication-config",
          content: "/favicon/browserconfig.xml",
        },
        { name: "theme-color", content: "#ffffff" },
        // 네이버 검색엔진 최적화
        { name: "naver-site-verification", content: "6d7fd71bc63e5a6d43e9cb616ea24d9898bb715a" },
        { name: "theme-color", content: "#ffffff" },
      ],

      link: [
        // canonical 설정
        {
          rel: "canonical",
          href: url,
        },
        // 링크 설정
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
        },
        // 파비콘 설정
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
        {
          rel: "mask-icon",
          href: "/favicon/safari-pinned-tab.svg",
          color: "#ffffff",
        },
        { rel: "shortcut icon", href: "/favicon/favicon.ico" },
      ],

      // 스크립트 설정
      script: [],
    });

    useServerSeoMeta({
      charset: "utf-8",
      author,
      viewport: "width=device-width, initial-scale=1",
      keywords: keywords,
      description: theDescription,
      ogTitle: theTitle,
      ogDescription: description,
      ogType: "website",
      ogImageAlt: theTitle,
      ogUrl: url,
      ogSiteName: theTitle,
      twitterTitle: theTitle.value,
      twitterDescription: theDescription,
      twitterImageAlt: theTitle.value,
    });
  },
  { immediate: true },
);
</script>

<template>
  <div></div>
</template>

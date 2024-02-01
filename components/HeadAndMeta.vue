<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "ko" },
  title: "이엔미디어",

  // 메타태그 설정
  meta: [
    { charset: "UTF-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    {
      name: "description",
      content: "설명글",
    },
    {
      name: "keywords",
      content: "키워드",
    },
    {
      property: "og:title",
      content: "이엔미디어",
    },
    {
      property: "og:description",
      content: "설명글",
    },
    {
      property: "og:url",
      content: "",
    },
    {
      property: "og:image",
      content: "/og_img.png",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content: "이엔미디어",
    },

    // 파비콘 설정
    { name: "msapplication-TileColor", content: "#ffffff" },
    {
      name: "msapplication-config",
      content: "/favicon/browserconfig.xml",
    },
    { name: "theme-color", content: "#ffffff" },
  ],

  // 링크 설정
  link: [
    { rel: "canonical", href: "" },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
    },

    // 파비콘 설정
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    { rel: "manifest", href: "/site.webmanifest" },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#946efa",
    },
    { rel: "shortcut icon", href: "/favicon.ico" },
  ],

  // 스크립트 설정
  script: [],
});
</script>

<template>
  <div>
    
  </div>
</template>
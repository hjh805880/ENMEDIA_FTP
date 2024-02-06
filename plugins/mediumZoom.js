import { defineNuxtPlugin } from "#app";
import mediumZoom from "medium-zoom";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("zoom", {
    // 이미지가 바인딩될 때 줌 기능 활성화
    mounted(el) {
      mediumZoom(el, {
        background: 'rgba(66, 66, 66,0.8)',
        zIndex: 999999,
      });
    },
  });
});

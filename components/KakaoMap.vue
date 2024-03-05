<template>
  <div id="kakaoMap" class="aspect-2 w-full h-full"></div>
</template>

<script setup lang="ts">
import markerEnmedia from "~/assets/img/en_marker.svg";

useHead({
  script: [{ src: "https://dapi.kakao.com/v2/maps/sdk.js?appkey=3e218304cbc3b53ea69efa2513502500&autoload=false", async: true }],
});

onMounted(() => {
  window.kakao.maps.load(() => {
    const mapContainer = document.getElementById("kakaoMap"); // 지도를 표시할 div
    if (!mapContainer) return;

    const mapOption = {
      center: new kakao.maps.LatLng(37.5596003426585, 126.832686373319), // 지도의 중심좌표
      level: 4, // 지도의 확대 레벨
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    const content = `<a href="https://kko.to/Io6hs4G4Ui" target="_blank" rel="noopener noreferrer" style="width: 300px; height: 140px; display: block;"><img src="${markerEnmedia}" style="width: 100%;" /></a>`;

    const ogPosition = new kakao.maps.LatLng(37.5596003426585, 126.832686373319);
    const adPosition = new kakao.maps.LatLng(ogPosition.getLat() + 0.0035, ogPosition.getLng());

    const customOverlay = new kakao.maps.CustomOverlay({
      position: adPosition,
      content: content,
    });

    map.setZoomable(false);
    customOverlay.setMap(map);
  });
});
</script>

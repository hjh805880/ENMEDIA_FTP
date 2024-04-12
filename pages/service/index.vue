<script setup></script>

<template>
  <div>
    <SubTop subTopImg="/img/subtop_visual_service.webp" subTopTitle="SERVICE" subTopDesc="전문적이고 체계적인 최적의 솔루션을 제공하는 이엔미디어 입니다." />
    <section id="section1" class="text-black-800 w-screen text-center">
      <div class="w-full text-center bg-[url('~/assets/img/service/section1_visual_bg.webp')] bg-cover bg-center bg-no-repeat px-4 lg:px-0">
        <div class="max-w-gui lg:px-12 lg:py-40 colCenter px-4 py-24 mx-auto space-y-16">
          <div data-aos="fade-up" data-aos-duration="1000" class="colCenter space-y-4">
            <h2 class="lg:text-8xl text-6xl font-extrabold leading-tight tracking-tight">
              <span class="text-primary-500">WHY </span>
              <TextTyping :text="'ENMEDIA?'" :delay="120" :loop="true" />
            </h2>
            <h3 class="text-black-700 lg:text-xl lg:mt-4 mt-2 text-lg font-light"><b>기존 대행사와의 차이점</b>이 뭐길래 많은 광고주 분들이 이용하시는걸까요?</h3>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1200" class="lg:grid-cols-4 lg:gap-12 grid items-center justify-center w-full grid-cols-2 gap-4 text-center text-white">
            <div class="bg-primary-500 rounded-xl lg:space-y-6 flex flex-col items-center justify-start w-full h-full p-4 space-y-4">
              <div class="rounded-xl colCenter lg:h-28 lg:mb-10 w-full h-24 px-6 py-4 bg-white">
                <img src="~/assets/img/service/section1_visual_01.svg" alt="이엔미디어 주말/공휴일 광고 입찰 및 피드백 아이콘" class="h-full" />
              </div>
              <h4 class="lg:px-8 lg:pb-8 lg:text-xl px-2 py-4 text-base">
                <b>주말/공휴일</b><br />
                광고 입찰 및 피드백
              </h4>
            </div>
            <div class="bg-primary-500 rounded-xl lg:space-y-6 flex flex-col items-center justify-start w-full h-full p-4 space-y-4">
              <div class="rounded-xl colCenter lg:h-28 w-full h-24 px-6 py-4 bg-white">
                <img src="~/assets/img/service/section1_visual_02.svg" alt="이엔미디어 주말/공휴일 광고 입찰 및 피드백 아이콘" class="h-full" />
              </div>
              <h4 class="lg:px-8 lg:pb-8 lg:text-xl px-2 py-4 text-base">
                성과형 효과보고서 발행 및 전환/ 추적 스크립터 설치를 통해
                <b>정확한 데이터 분석</b>
              </h4>
            </div>
            <div class="bg-primary-500 rounded-xl lg:space-y-6 flex flex-col items-center justify-start w-full h-full p-4 space-y-4">
              <div class="rounded-xl colCenter lg:h-28 lg:mb-4 w-full h-24 px-6 py-4 bg-white">
                <img src="~/assets/img/service/section1_visual_03.svg" alt="이엔미디어 주말/공휴일 광고 입찰 및 피드백 아이콘" class="h-full" />
              </div>
              <h4 class="lg:px-8 lg:pb-8 lg:text-xl px-2 py-4 text-base">
                빠른 피드백을 통한 효율증대로 이어지는
                <b>매출/문의 증가</b>
              </h4>
            </div>
            <div class="bg-primary-500 rounded-xl lg:space-y-6 flex flex-col items-center justify-start w-full h-full p-4 space-y-4">
              <div class="rounded-xl colCenter lg:h-28 lg:mb-10 w-full h-24 px-6 py-4 bg-white">
                <img src="~/assets/img/service/section1_visual_04.svg" alt="이엔미디어 주말/공휴일 광고 입찰 및 피드백 아이콘" class="h-full" />
              </div>
              <h4 class="lg:px-8 lg:pb-8 lg:text-xl px-2 py-4 text-base">
                심층분석 및
                <b>상세/디자인타게팅 광고기법</b>
              </h4>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" class="colCenter space-y-10">
            <h5 class="lg:text-xl text-black-700 text-lg">이엔미디어는 모든 성장의 길에 열려있습니다. 언제든 문의주세요.</h5>
            <NuxtLink to="/contact" class="bg-primary-500 lg:text-xl rowCenter px-6 py-1 space-x-4 text-lg font-medium text-white">
              <span>GO CONTACT!</span>
              <i class="fa-solid fa-arrow-right"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section id="section2" class="text-black-800 w-screen text-center">
      <div class="w-full text-center bg-[url('~/assets/img/service/section2_visual_bg.webp')] bg-cover bg-center bg-no-repeat px-4 lg:px-0">
        <div class="max-w-gui lg:px-12 lg:py-40 colCenter px-4 py-24 mx-auto">
          <div data-aos="fade-up" data-aos-duration="1000" class="colCenter lg:px-12 px-4 space-y-4 text-white">
            <h3 class="lg:text-2xl text-xl">더 많은 소비자에게 도달할 수 있는</h3>
            <h2 class="lg:text-4xl text-2xl font-extrabold">키워드 검색 광고를 집행합니다</h2>
            <div class="lg:w-12 w-10 border-b-8 border-white"></div>
            <h4 class="lg:text-lg pt-1 text-base font-light">검색 니즈에 따라 노출되는 타겟팅, 다수의 잠재고객을 확보가 가능하며<br />CPC광고는 클릭시에만 과금되어 합리적인 광고 운영이 가능합니다.</h4>
          </div>
          <ServiceObject data-aos="zoom-in-up" data-aos-duration="1200" class="lg:mt-80 lg:mb-14 mt-40 mb-12 text-white" />
          <span data-aos="fade-up" data-aos-duration="1000" class="lg:text-lg text-black-300 lg:leading-relaxed font-light"> 실시간으로 광고 변경이 가능하여 효율에 따른 유연한 대응이 가능하다는 장점이 있고<br />능동적인 고객 유입으로 높은 전환율의 공고가 집행 가능합니다.<br /><b>또한, 기업의 규모와 관계없이 입찰순위에 따라 상위 게재가 가능하여 많은 광고주분들이 이용하고 계십니다.</b></span>
        </div>
      </div>
    </section>

    <section id="section3" class="text-black-800 w-screen text-center">
      <div class="w-full text-center bg-[url('~/assets/img/service/section3_visual_bg.webp')] bg-cover bg-center bg-no-repeat px-4 lg:px-0">
        <div class="max-w-gui lg:px-12 lg:py-40 colCenter px-4 py-24 mx-auto space-y-16">
          <div data-aos="fade-up" data-aos-duration="1000" class="colCenter lg:px-12 px-4 space-y-4">
            <h3 class="lg:text-2xl text-xl">더 나은 솔루션의 진행을 위해</h3>
            <h2 class="lg:text-4xl text-2xl font-extrabold"><span class="text-primary-500">다방면으로 검색광고를 집행</span>하고 있습니다</h2>
            <div class="lg:w-12 border-primary-500 w-10 border-b-8"></div>
            <h4 class="lg:text-lg pt-1 text-base font-light">데이터 기반의 크리에이티브로 더 강력한 마케팅 전략을 제공합니다.</h4>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" class="colCenter border-primary-500 w-full lg:w-[60%] pt-4 space-y-8 border-t-4">
            <div class="lg:flex-row lg:items-center lg:px-6 lg:space-y-0 flex flex-col items-start justify-between w-full px-2 space-y-4">
              <div class="flex flex-col items-start justify-center">
                <h5 class="lg:text-4xl text-primary-500 text-3xl font-bold">01</h5>
                <p class="text-black-700 font-light">(클릭초이스·쇼핑검색광고)</p>
                <h6 class="lg:text-3xl text-2xl font-bold"><span class="text-primary-500">네이버</span> 검색광고</h6>
              </div>
              <div class="text-black-700 lg:text-lg flex flex-col items-start max-w-full lg:max-w-[40%] justify-center space-y-2 font-light text-left">
                <p class="">- 대한민국 공식 CPC광고</p>
                <p class="">- 높은 매체력을 기반으로 한 노출량을 통해 광고 효과를 올릴 수 있으며 관리방법에 따라 천차만별의 효과가 나타나는 광고 솔루션</p>
              </div>
            </div>
            <div class="lg:grid-cols-2 grid w-full grid-cols-1 gap-6">
              <img src="~/assets/img/service/section3_visual_naver_01.webp" alt="이엔미디어 서비스 네이버 검색광고" class="object-cover w-full" />
              <img src="~/assets/img/service/section3_visual_naver_02.webp" alt="이엔미디어 서비스 네이버 검색광고" class="object-cover w-full" />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" class="colCenter border-primary-500 w-full lg:w-[60%] pt-4 space-y-8 border-t-4">
            <div class="lg:flex-row lg:items-center lg:px-6 lg:space-y-0 flex flex-col items-start justify-between w-full px-2 space-y-4">
              <div class="flex flex-col items-start justify-center">
                <h5 class="lg:text-4xl text-primary-500 text-3xl font-bold">02</h5>
                <p class="text-black-700 font-light">(Google ADS, GTM)</p>
                <h6 class="lg:text-3xl text-2xl font-bold"><span class="text-primary-500">구글</span> 검색광고</h6>
              </div>
              <div class="text-black-700 lg:text-lg flex flex-col items-start max-w-full lg:max-w-[40%] justify-center space-y-2 font-light text-left">
                <p class="">- 구글 검색을 활용하는 유저 및 키워드 볼륨 증가</p>
                <p class="">- 높은 전환율</p>
                <p class="">- 구글 검색을 통해 들어온 유저들의 이탈율이 타 매체보다 낮고 체류시간이 상대적으로 길게 나타남</p>
              </div>
            </div>
            <div class="lg:grid-cols-2 grid w-full grid-cols-1 gap-6">
              <img src="~/assets/img/service/section3_visual_google_01.webp" alt="이엔미디어 서비스 구글 검색광고" class="object-cover w-full" />
              <img src="~/assets/img/service/section3_visual_google_02.webp" alt="이엔미디어 서비스 구글 검색광고" class="object-cover w-full" />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" class="colCenter border-primary-500 w-full lg:w-[60%] pt-4 space-y-8 border-t-4">
            <div class="lg:flex-row lg:items-center lg:px-6 lg:space-y-0 flex flex-col items-start justify-between w-full px-2 space-y-4">
              <div class="flex flex-col items-start justify-center">
                <h5 class="lg:text-4xl text-primary-500 text-3xl font-bold">03</h5>
                <p class="text-black-700 font-light">(Kakao Business)</p>
                <h6 class="lg:text-3xl text-2xl font-bold"><span class="text-primary-500">카카오</span> 검색광고</h6>
              </div>
              <div class="text-black-700 lg:text-lg flex flex-col items-start max-w-full lg:max-w-[40%] justify-center space-y-2 font-light text-left">
                <p class="">- 모바일이 대세인 요즘, 다음카카오의 모바일 플랫폼인 카카오톡을 시작으로 셀 수 없이 다양한 광고 상품을 통해 광고주의 브랜드와 상품을 소비자에게 어필하는 광고 솔루션</p>
              </div>
            </div>
            <div class="lg:grid-cols-2 grid w-full grid-cols-1 gap-6">
              <img src="~/assets/img/service/section3_visual_google_01.webp" alt="이엔미디어 서비스 구글 검색광고" class="object-cover w-full" />
              <img src="~/assets/img/service/section3_visual_google_02.webp" alt="이엔미디어 서비스 구글 검색광고" class="object-cover w-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

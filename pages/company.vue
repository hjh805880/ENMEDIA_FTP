<script setup>
const textContent = ref("");
const cursor = ref("");
let text = "Data & Creative";
let index = 0;
let delay = 120;
let loop = true;

function type() {
  if (index < text.length) {
    textContent.value = text.substring(0, index + 1);
    index++;
    setTimeout(type, delay);
  } else {
    if (loop) {
      setTimeout(() => {
        index = 0;
        type();
      }, 3500);
    } else {
      cursor.value = "";
    }
  }
}

onMounted(() => {
  type();
});

const yearRanges = ["2023~2020", "2019", "2018", "2017", "2016"];
const selectedYearRange = ref("2023~2020");
</script>

<template>
  <div>
    <SubTop subTopImg="/img/subtop_visual_company.webp" subTopTitle="COMPANY" subTopDesc="전문적이고 체계적인 최적의 솔루션을 제공하는 이엔미디어 입니다." />
    <section id="section1" class="text-black-800 w-screen text-center">
      <div class="w-full text-left bg-[url('~/assets/img/company/section1_visual_bg.webp')] shadow-xl shadow-black/60 bg-cover bg-center bg-no-repeat">
        <div class="max-w-gui lg:px-12 lg:py-40 lg:flex-row flex flex-col items-center justify-between px-4 py-32 mx-auto">
          <div class="flex flex-col items-start justify-center">
            <span class="text-5xl font-bold leading-snug tracking-tight"
              >{{ textContent }}
              <b class="cursor animate-pulse animate-duration-500 text-black-500 animate-ease-in-out border-black-600 pt-4 ml-1 text-xl border-r-2">{{ cursor }}</b>
            </span>
            <span class="text-8xl text-primary-500 font-extrabold leading-snug tracking-tight">ENMEDIA</span>
            <span class="text-black-700 mt-4 text-xl font-light"><span class="font-semibold">데이터는 이엔미디어의 핵심이고 창의성은 저희가 살아가는 방식입니다.</span><br />Trend를 따라가는 것에 본질을 놓치지 않고<br />저희만의 노하우를 반영하여<br />데이터 기반의 <span class="border-black-700 pb-1 font-semibold border-b">Creative 광고 솔루션</span>을 제공합니다.</span>
          </div>
          <div class="border-primary-500 flex flex-col items-start justify-between pl-8 space-y-6 border-l-2">
            <div class="flex flex-col items-start justify-center space-y-2">
              <span class="text-3xl font-bold before:content-['·'] before:mr-2 before:text-primary-500">Data</span>
              <span class="text-black-700 text-lg font-light">
                7년간의 경험을 바탕으로<br />
                최적화된 솔루션을 제공하는<br />
                이엔미디어만의 노하우 입니다.
              </span>
            </div>
            <div class="flex flex-col items-start justify-center space-y-2">
              <span class="text-3xl font-bold before:content-['·'] before:mr-2 before:text-primary-500">Creative</span>
              <span class="text-black-700 text-lg font-light">
                열려있는 사고와 창의성으로<br />
                보다 전문적이고 체계적인<br />
                최적의 솔루션을 제공합니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section2" class="text-black-800 w-screen overflow-hidden text-center">
      <div class="lg:space-y-14 lg:py-40 py-32 space-y-16">
        <div class="lg:max-w-gui lg:space-y-14 max-w-full mx-auto space-y-16">
          <div data-aos="fade-up" data-aos-duration="1000" class="colCenter lg:px-12 px-4 space-y-4">
            <h3 class="text-black-700 lg:text-2xl text-xl">고객과 브랜드와 함께 성장하며</h3>
            <h2 class="lg:text-4xl text-3xl font-extrabold">지금의 <span class="text-primary-500">ENMEDIA</span>가 탄생했습니다</h2>
            <div class="border-primary-500 lg:w-12 w-10 border-b-8"></div>
            <h4 class="lg:text-lg pt-1 text-base font-light">열정과 노력으로 같이 걸어 온 길이 지금의 이엔미디어를 만들었습니다.<br />함께 성장하기 위해 앞으로도 같이 걸어가겠습니다.</h4>
          </div>
          <div class="lg:grid-cols-5 lg:gap-12 lg:px-12 grid w-full px-4">
            <button v-for="yearRange in yearRanges" :key="yearRange" @click="selectedYearRange = yearRange" :class="yearRange === selectedYearRange ? 'bg-primary-500 text-white selectHistory' : 'border-black-800 border-2 text-black-800'" class="lg:text-lg relative z-10 px-4 py-1.5 font-bold rounded-full rowCenter">
              <span>{{ yearRange }}</span>
            </button>
          </div>
        </div>
        <div class="bg-black-100 selectHistoryBack relative w-full min-h-[700px]" :class="{'before:left-[calc(20%+1px)]': selectedYearRange == '2023~2020', 'before:left-[calc(34%+10px)]': selectedYearRange == '2019', 'before:left-[calc(49%+1px)]': selectedYearRange == '2018', 'before:left-[calc(63%+10px)]': selectedYearRange == '2017', 'before:left-[calc(78%+1px)]': selectedYearRange == '2016'}">
          
          <div v-if="selectedYearRange == '2023~2020'" class="lg:max-w-gui lg:px-12 lg:gap-20 lg:py-24 grid w-full max-w-full grid-cols-2 px-4 mx-auto text-left">
            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-3xl font-extrabold">2023</span>
                <ul class="text-black-800 lg:text-lg flex flex-col items-start justify-center text-base *:before:content-['-'] *:before:text-primary-500 *:lg:before:text-xl *:before:font-bold *:before:mr-2">
                  <li class="">Digital markting & Displays markting 부서설립</li>
                  <li class="">VIRAL markting 부서설립</li>
                  <li class="">CPA markting 부서설립</li>
                </ul>
              </div>
            </div>

            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-3xl font-extrabold">2022</span>
                <ul class="text-black-800 lg:text-lg flex flex-col items-start justify-center text-base *:before:content-['-'] *:before:text-primary-500 *:lg:before:text-xl *:before:font-bold *:before:mr-2">
                  <li class="">삼성화재 마케팅 대행</li>
                </ul>
              </div>
            </div>

            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-3xl font-extrabold">2021</span>
                <ul class="text-black-800 lg:text-lg flex flex-col items-start justify-center text-base *:before:content-['-'] *:before:text-primary-500 *:lg:before:text-xl *:before:font-bold *:before:mr-2">
                  <li class="">법무법인 효성 홈페이지 제작·광고대행</li>
                  <li class="">법무법인 강건 홈페이지 제작·광고대행</li>
                  <li class="">약 700여건 검색광고 대행관리 달성</li>
                </ul>
              </div>
            </div>

            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-3xl font-extrabold">2020</span>
                <ul class="text-black-800 lg:text-lg flex flex-col items-start justify-center text-base *:before:content-['-'] *:before:text-primary-500 *:lg:before:text-xl *:before:font-bold *:before:mr-2">
                  <li class="">이승혜 법률사무소 홈페이지 제작 및 광고대행</li>
                  <li class="">순수치킨/달리는커피/응급실떡볶이/소소떡볶이/누들보쌈/심봉사고로케 등 프랜차이즈 업종 성공사례 관리</li>
                  <li class="">약 2,000여건 홈페이지 제작 달성</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div v-else-if="selectedYearRange == '2019'" class="lg:max-w-gui lg:px-12 lg:gap-20 lg:py-24 grid w-full max-w-full grid-cols-2 px-4 mx-auto text-left">
            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-3xl font-extrabold">2019</span>
                <ul class="text-black-800 lg:text-lg flex flex-col items-start justify-center text-base *:before:content-['-'] *:before:text-primary-500 *:lg:before:text-xl *:before:font-bold *:before:mr-2">
                  <li class="">소상공인 우수대행사 선정</li>
                </ul>
              </div>
            </div>
          </div>

          <div v-else-if="selectedYearRange == '2018'" class="lg:max-w-gui lg:px-12 lg:gap-20 lg:py-24 grid w-full max-w-full grid-cols-2 px-4 mx-auto text-left">
            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-3xl font-extrabold">2018</span>
                <ul class="text-black-800 lg:text-lg flex flex-col items-start justify-center text-base *:before:content-['-'] *:before:text-primary-500 *:lg:before:text-xl *:before:font-bold *:before:mr-2">
                  <li class="">SNS마케팅 파트너 제휴(페이스북, 인스타)</li>
                  <li class="">DA광고 사업부 확장</li>
                  <li class="">Ketchap_studio 여성의류 자사 쇼핑몰 운영</li>
                </ul>
              </div>
            </div>
          </div>

          <div v-else-if="selectedYearRange == '2017'" class="lg:max-w-gui lg:px-12 lg:gap-20 lg:py-24 grid w-full max-w-full grid-cols-2 px-4 mx-auto text-left">
            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-3xl font-extrabold">2017</span>
                <ul class="text-black-800 lg:text-lg flex flex-col items-start justify-center text-base *:before:content-['-'] *:before:text-primary-500 *:lg:before:text-xl *:before:font-bold *:before:mr-2">
                  <li class="">SA검색광고 사업부 확장</li>
                  <li class="">Search 솔루션 도입</li>
                </ul>
              </div>
            </div>
          </div>

          <div v-else-if="selectedYearRange == '2016'" class="lg:max-w-gui lg:px-12 lg:gap-20 lg:py-24 grid w-full max-w-full grid-cols-2 px-4 mx-auto text-left">
            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-3xl font-extrabold">2016</span>
                <ul class="text-black-800 lg:text-lg flex flex-col items-start justify-center text-base *:before:content-['-'] *:before:text-primary-500 *:lg:before:text-xl *:before:font-bold *:before:mr-2">
                  <li class="">주식회사 이엔미디어 법인 설립</li>
                  <li class="">Naver/Daum/Google 대대행사 업무계약</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 타이핑 애니메이션 관련
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

// 연혁 관련
const yearRanges = ["2023~2020", "2019", "2018", "2017", "2016"];
const selectedYearRange = ref("2023~2020");
</script>

<template>
  <div>
    <SubTop subTopImg="/img/subtop_visual_company.webp" subTopTitle="COMPANY" subTopDesc="전문적이고 체계적인 최적의 솔루션을 제공하는 이엔미디어 입니다." />
    <section id="section1" class="text-black-800 w-screen text-center">
      <div class="w-full text-left bg-[url('~/assets/img/company/section1_visual_bg.webp')] shadow-xl shadow-black/60 bg-cover bg-center bg-no-repeat px-4 lg:px-0">
        <div class="max-w-gui lg:px-12 lg:py-40 lg:flex-row lg:space-y-0 lg:items-center flex flex-col items-start justify-between px-4 py-24 mx-auto space-y-16">
          <div class="flex flex-col items-start justify-center">
            <span class="lg:text-5xl text-3xl font-bold leading-snug tracking-tight"
              >{{ textContent }}
              <b class="cursor animate-pulse animate-duration-500 text-black-500 animate-ease-in-out border-black-600 lg:text-xl lg:pt-4 pt-2 ml-1 text-lg border-r-2">{{ cursor }}</b>
            </span>
            <span class="lg:text-8xl text-primary-500 text-6xl font-extrabold leading-snug tracking-tight">ENMEDIA</span>
            <span class="text-black-700 lg:text-xl lg:mt-4 mt-2 text-lg font-light"><span class="font-semibold">데이터는 이엔미디어의 핵심이고 창의성은 저희가 살아가는 방식입니다.</span><br />Trend를 따라가는 것에 본질을 놓치지 않고<br />저희만의 노하우를 반영하여<br />데이터 기반의 <span class="border-black-700 pb-1 font-semibold border-b">Creative 광고 솔루션</span>을 제공합니다.</span>
          </div>
          <div class="border-primary-500 lg:pl-8 flex flex-col items-start justify-between pl-6 space-y-6 border-l-2">
            <div class="flex flex-col items-start justify-center space-y-2">
              <span class="lg:text-3xl text-2xl font-bold before:content-['·'] before:mr-2 before:text-primary-500">Data</span>
              <span class="text-black-700 lg:text-lg text-base font-light">
                7년간의 경험을 바탕으로<br />
                최적화된 솔루션을 제공하는<br />
                이엔미디어만의 노하우 입니다.
              </span>
            </div>
            <div class="flex flex-col items-start justify-center space-y-2">
              <span class="lg:text-3xl text-2xl font-bold before:content-['·'] before:mr-2 before:text-primary-500">Creative</span>
              <span class="text-black-700 lg:text-lg text-base font-light">
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
      <div data-aos="fade-up" data-aos-duration="1000" class="lg:space-y-14 lg:py-40 py-32 space-y-16">
        <div class="lg:max-w-gui lg:space-y-14 max-w-full mx-auto space-y-16">
          <div class="colCenter lg:px-12 px-4 space-y-4">
            <h3 class="text-black-700 lg:text-2xl text-xl">고객과 브랜드와 함께 성장하며</h3>
            <h2 class="lg:text-4xl text-2xl font-extrabold">지금의 <span class="text-primary-500">ENMEDIA</span>가 탄생했습니다</h2>
            <div class="border-primary-500 lg:w-12 w-10 border-b-8"></div>
            <h4 class="lg:text-lg text-black-700 pt-1 text-base font-light">열정과 노력으로 같이 걸어 온 길이 지금의 이엔미디어를 만들었습니다.<br />함께 성장하기 위해 앞으로도 같이 걸어가겠습니다.</h4>
          </div>
          <div class="lg:grid-cols-5 lg:gap-12 lg:px-12 grid w-full grid-cols-2 gap-4 px-4">
            <button v-for="yearRange in yearRanges" :key="yearRange" @click="selectedYearRange = yearRange" :class="yearRange === selectedYearRange ? 'bg-primary-500 text-white lg:selectHistory' : 'border-black-800 border-2 text-black-800'" class="lg:text-lg relative z-10 px-4 py-1.5 font-bold rounded-full rowCenter">
              <span>{{ yearRange }}</span>
            </button>
          </div>
        </div>

        <div class="bg-black-100 lg:decoText lg:after:-right-[15%] lg:after:-rotate-90 lg:after:top-[30%] lg:after:content-['HISTORY'] relative w-full lg:min-h-[43.75rem] min-h-[50rem] overflow-hidden">
          <div v-if="selectedYearRange == '2023~2020'" class="lg:max-w-gui lg:px-12 lg:gap-20 lg:py-24 grid w-full max-w-full grid-cols-2 gap-8 px-4 py-20 mx-auto text-left">
            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-2xl font-extrabold">2023</span>
                <ul class="text-black-800 lg:text-lg flex flex-col items-start justify-center text-base *:before:content-['-'] *:before:text-primary-500 *:lg:before:text-xl *:before:font-bold *:before:mr-2">
                  <li class="">Digital marketing & Displays marketing 부서설립</li>
                  <li class="">VIRAL marketing 부서설립</li>
                  <li class="">CPA marketing 부서설립</li>
                </ul>
              </div>
            </div>

            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-2xl font-extrabold">2022</span>
                <ul class="text-black-800 lg:text-lg flex flex-col items-start justify-center text-base *:before:content-['-'] *:before:text-primary-500 *:lg:before:text-xl *:before:font-bold *:before:mr-2">
                  <li class="">삼성화재 마케팅 대행</li>
                  <li class="">27개소 법무법인 홈페이지 제작·광고대행</li>
                  <li class="">89개 병원·의료업 대행관리 달성</li>
                </ul>
              </div>
            </div>

            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-2xl font-extrabold">2021</span>
                <ul class="text-black-800 lg:text-lg flex flex-col items-start justify-center text-base *:before:content-['-'] *:before:text-primary-500 *:lg:before:text-xl *:before:font-bold *:before:mr-2">
                  <li class="">17개소 법무법인 홈페이지 제작·광고대행</li>
                  <li class="">11개 대형병원 홈페이지 제작·광고대행</li>
                  <li class="">약 700여건 검색광고 대행관리 달성</li>
                </ul>
              </div>
            </div>

            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-2xl font-extrabold">2020</span>
                <ul class="text-black-800 lg:text-lg flex flex-col items-start justify-center text-base *:before:content-['-'] *:before:text-primary-500 *:lg:before:text-xl *:before:font-bold *:before:mr-2">
                  <li class="">이승혜 법률사무소 홈페이지 제작 및 광고대행</li>
                  <li class="">순수치킨/달리는커피/응급실떡볶이/소소떡볶이/누들보쌈/심봉사고로케 등 프랜차이즈 업종 성공사례 관리</li>
                  <li class="">약 2,000여건 홈페이지 제작 달성</li>
                </ul>
              </div>
            </div>
          </div>

          <div v-else-if="selectedYearRange == '2019'" class="lg:max-w-gui lg:px-12 lg:gap-20 lg:py-24 grid w-full max-w-full grid-cols-2 gap-8 px-4 py-20 mx-auto text-left">
            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-2xl font-extrabold">2019</span>
                <ul class="text-black-800 lg:text-lg flex flex-col items-start justify-center text-base *:before:content-['-'] *:before:text-primary-500 *:lg:before:text-xl *:before:font-bold *:before:mr-2">
                  <li class="">소상공인 우수대행사 선정</li>
                </ul>
              </div>
            </div>
          </div>

          <div v-else-if="selectedYearRange == '2018'" class="lg:max-w-gui lg:px-12 lg:gap-20 lg:py-24 grid w-full max-w-full grid-cols-2 gap-8 px-4 py-20 mx-auto text-left">
            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-2xl font-extrabold">2018</span>
                <ul class="text-black-800 lg:text-lg flex flex-col items-start justify-center text-base *:before:content-['-'] *:before:text-primary-500 *:lg:before:text-xl *:before:font-bold *:before:mr-2">
                  <li class="">SNS마케팅 파트너 제휴(페이스북, 인스타)</li>
                  <li class="">DA광고 사업부 확장</li>
                  <li class="">Ketchap_studio 여성의류 자사 쇼핑몰 운영</li>
                </ul>
              </div>
            </div>
          </div>

          <div v-else-if="selectedYearRange == '2017'" class="lg:max-w-gui lg:px-12 lg:gap-20 lg:py-24 grid w-full max-w-full grid-cols-2 gap-8 px-4 py-20 mx-auto text-left">
            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-2xl font-extrabold">2017</span>
                <ul class="text-black-800 lg:text-lg flex flex-col items-start justify-center text-base *:before:content-['-'] *:before:text-primary-500 *:lg:before:text-xl *:before:font-bold *:before:mr-2">
                  <li class="">SA검색광고 사업부 확장</li>
                  <li class="">Search 솔루션 도입</li>
                </ul>
              </div>
            </div>
          </div>

          <div v-else-if="selectedYearRange == '2016'" class="lg:max-w-gui lg:px-12 lg:gap-20 lg:py-24 grid w-full max-w-full grid-cols-2 gap-8 px-4 py-20 mx-auto text-left">
            <div class="border-black-500 before:border-t-4 before:border-primary-500 before:absolute relative w-full border-t before:w-[25%] z-20 before:-z-10 before:left-0 before:-top-[2px]">
              <div class="flex flex-col items-start justify-center w-full p-2">
                <span class="text-primary-500 lg:text-4xl text-2xl font-extrabold">2016</span>
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

    <section id="section3" class="text-white bg-[url('~/assets/img/company/section3_visual_bg.webp')] relative lg:decoText lg:after:text-primary-100/15 lg:after:-left-[19.5%] lg:after:rotate-90 lg:after:top-[34%] lg:after:content-['OVERVIEW'] bg-center bg-cover bg-no-repeat w-screen overflow-hidden text-center">
      <div class="lg:space-y-14 lg:py-40 py-32 space-y-16">
        <div class="lg:max-w-gui lg:space-y-14 max-w-full mx-auto space-y-16">
          <div data-aos="fade-up" data-aos-duration="1000" class="colCenter lg:px-12 px-4 space-y-4">
            <h3 class="lg:text-2xl text-xl">효율적이고 체계적인 솔루션으로</h3>
            <h2 class="lg:text-4xl text-2xl font-extrabold">지속적인 성장을 함께 하고 있습니다</h2>
            <div class="lg:w-12 w-10 border-b-8 border-white"></div>
            <h4 class="lg:text-lg pt-1 text-base font-light">확실한 성과로 오랜기간 장기적인 관계를 유지하며 신뢰에 보답하고 있습니다.</h4>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1200" class="lg:grid-cols-4 text-black-800 lg:px-12 lg:gap-10 grid grid-cols-2 gap-4 px-4">
            <CompanyShuffle :title="'취급고'" :targetNumber="168" :unit="'억'" :duration="2200" />
            <CompanyShuffle :title="'고객과 함께 성장한'" :targetNumber="9" :unit="'년'" :duration="1200" />
            <CompanyShuffle :title="'광고유지율'" :targetNumber="88.7" :unit="'%'" :duration="1800" />
            <CompanyShuffle :title="'평균 광고 지속기간'" :targetNumber="4.2" :unit="'년'" :duration="1000" />
          </div>
        </div>
      </div>
    </section>

    <!-- <section id="section4" class="text-black-800 w-screen overflow-hidden text-center lg:decoText lg:after:text-black-100 relative lg:after:-right-[29%] lg:after:-rotate-90 lg:after:top-[43%] lg:after:content-['ORGANIZATION']">
      <div class="lg:max-w-gui colCenter lg:px-12 lg:py-40 relative max-w-full px-4 py-32 mx-auto space-y-16">
        <div data-aos="fade-up" data-aos-duration="1000" class="colCenter space-y-4 overflow-hidden">
          <h3 class="lg:text-2xl text-black-700 text-xl">체계적인 시스템과 전문 인력 구성으로</h3>
          <h2 class="lg:text-4xl text-2xl font-extrabold">보다 더 <span class="text-primary-500">만족도 높은 솔루션</span>을 제공합니다</h2>
          <div class="lg:w-12 border-primary-500 w-10 border-b-8"></div>
          <h4 class="lg:text-lg text-black-700 pt-1 text-base font-light">각 분야의 핵심 역량을 가진 팀원들은 언제나<br />가장 빠르고 확실한 솔루션을 제공해드립니다.</h4>
        </div>
        <div class="colCenter space-y-6">
          <div data-aos="fade-up" data-aos-duration="1200" class="lg:grid-cols-3 after:border-2 after:absolute after:border-dashed lg:gap-6 after:aspect-1 lg:h-auto after:w-full after:border-primary-500 after:-z-10 after:rounded-full before:border before:absolute before:border-dashed before:aspect-1 before:w-full before:scale-[.90] after:animate-spin after:animate-duration-[3000ms] before:border-primary-500 before:-z-10 before:rounded-full relative grid items-center justify-center w-full grid-cols-2 gap-2">
            <div class="colCenter border-primary-500 text-primary-500 lg:p-14 lg:-mb-20 aspect-1 w-full p-4 space-y-2 bg-white border-2 rounded-full">
              <h6 class="lg:text-xl text-base font-bold">Marketing<br><span class="font-light">Team</span></h6>
              <h5 class="lg:text-lg text-base font-bold">마케팅팀</h5>
            </div>
            <div class="colCenter border-primary-500 text-primary-500 lg:p-14 lg:mb-20 aspect-1 lg:h-auto w-full h-full p-4 space-y-2 bg-white border-2 rounded-full">
              <h6 class="lg:text-xl text-base font-bold">Sales<br><span class="font-light">Team</span></h6>
              <h5 class="lg:text-lg text-base font-bold">영업팀</h5>
            </div>
            <div class="colCenter border-primary-500 lg:col-span-1 text-primary-500 lg:p-14 lg:-mb-20 lg:w-full lg:h-auto aspect-1 w-fit place-self-center h-full col-span-2 p-4 space-y-2 bg-white border-2 rounded-full">
              <h6 class="lg:text-xl text-base font-bold">Publishing<br><span class="font-light">Team</span></h6>
              <h5 class="lg:text-lg text-base font-bold">개발팀</h5>
            </div>
            <div class="border-primary-500 border-4 lg:border-[6px] place-self-center lg:col-span-3 col-span-2 h-full lg:h-auto rounded-full aspect-1 colCenter lg:w-64 lg:p-10 p-4 w-32">
              <img src="~/assets/img/logo_col.svg" alt="이엔미디어 로고 세로형" class="w-full" />
            </div>
            <div class="colCenter border-primary-500 lg:col-span-1 text-primary-500 lg:p-14 lg:-mt-20 lg:w-full w-fit place-self-center aspect-1 lg:h-fit h-full col-span-2 p-4 space-y-2 bg-white border-2 rounded-full">
              <h6 class="lg:text-xl text-base font-bold">HR<br><span class="font-light">Team</span></h6>
              <h5 class="lg:text-lg text-base font-bold">인사팀</h5>
            </div>
            <div class="colCenter border-primary-500 text-primary-500 lg:p-14 lg:mt-20 aspect-1 lg:h-auto w-full h-full p-4 space-y-2 bg-white border-2 rounded-full">
              <h6 class="lg:text-xl text-base font-bold">Manage<br><span class="font-light">Team</span></h6>
              <h5 class="lg:text-lg text-base font-bold">회계팀</h5>
            </div>
            <div class="colCenter border-primary-500 text-primary-500 lg:p-14 lg:-mt-20 aspect-1 lg:h-auto w-full h-full p-4 space-y-2 bg-white border-2 rounded-full">
              <h6 class="lg:text-xl text-base font-bold">Design<br><span class="font-light">Team</span></h6>
              <h5 class="lg:text-lg text-base font-bold">디자인팀</h5>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

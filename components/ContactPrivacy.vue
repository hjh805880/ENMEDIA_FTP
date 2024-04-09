<template>
  <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed bg-black-800/70 top-0 left-0 right-0 z-[999999] text-black-700 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
      <div class="dark:bg-gray-700 relative bg-white shadow">
        <div class="dark:border-gray-600 flex items-start justify-between p-4 border-b rounded-t">
          <h3 class="dark:text-white text-xl font-bold text-gray-900">개인정보취급방침</h3>
          <button type="button" class="hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white inline-flex items-center justify-center w-8 h-8 ml-auto text-sm text-gray-400 bg-transparent rounded-lg" data-modal-hide="defaultModal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">팝업닫기</span>
          </button>
        </div>
        <div class="p-6 space-y-4 text-left">
          <div class="space-y-1">
            <p class="dark:text-gray-600 text-black-800 text-base font-bold leading-relaxed">1.수집하는 개인정보의 항목 및 수집 방법</p>
            <p class="text-sm">주식회사 이엔미디어(이하, 회사라함)는 귀하의 서비스 이용을 위해 최소한의 개인정보를 수집하며, 다음과 같은 개인정보를 수집할 수 있습니다.</p>
            <ul class="dark:text-gray-400 text-black-600 pl-6 text-sm font-light leading-relaxed list-disc">
              <li>성명, 연락처 (이메일 주소, 전화번호 등)</li>
              <li>주소, 우편번호</li>
              <li>서비스 이용기록, 접속 로그 등</li>
            </ul>
          </div>

          <div class="space-y-1">
            <p class="dark:text-gray-600 text-black-800 text-base font-bold leading-relaxed">2.개인정보의 수집 및 이용목적</p>
            <p class="text-sm">회사는 수집한 개인정보를 다음의 목적으로 이용합니다.</p>
            <ul class="dark:text-gray-400 text-black-600 pl-6 text-sm font-light leading-relaxed list-disc">
              <li>서비스 제공, 상담 및 문의 응답</li>
              <li>서비스 이용에 대한 통계, 설문조사 등의 기록과 분석</li>
              <li>법적 의무의 이행</li>
            </ul>
          </div>

          <div class="space-y-1">
            <p class="dark:text-gray-600 text-black-800 text-base font-bold leading-relaxed">3.개인정보의 보유 및 이용기간</p>
            <p class="text-sm">회사는 개인정보를 귀하가 동의한 기간 동안 보유 및 이용하며, 그 기간이 만료된 경우에는 지체 없이 파기합니다. 다만, 관련 법령에 따라 보존할 필요성이 있는 경우에는 해당 법령에서 정한 기간 동안 개인정보를 보관할 수 있습니다.</p>
          </div>

          <div class="space-y-1">
            <p class="dark:text-gray-600 text-black-800 text-base font-bold leading-relaxed">4.개인정보의 제3자 제공</p>
            <p class="text-sm">회사는 귀하의 개인정보를 제3자에게 제공하지 않으며, 귀하의 동의 없이 개인정보를 외부에 제공, 공유하지 않습니다. 단, 다음의 경우에는 예외로 합니다.</p>
            <ul class="dark:text-gray-400 text-black-600 pl-6 text-sm font-light leading-relaxed list-disc">
              <li>법령에 따른 의무적 제출 요건이 있는 경우</li>
              <li>귀하가 사전에 동의한 경우</li>
            </ul>
          </div>

          <div class="space-y-1">
            <p class="dark:text-gray-600 text-black-800 text-base font-bold leading-relaxed">5.개인정보의 파기</p>
            <p class="text-sm">회사는 개인정보의 수집 및 이용목적이 달성되거나, 귀하의 동의 철회 시 지체 없이 귀하의 개인정보를 파기합니다. 파기된 개인정보는 복구 및 재이용이 불가능하도록 안전하게 처리됩니다.</p>
          </div>

          <p class="dark:text-gray-300 text-black-500 pt-2 text-xs font-light">※ 귀하는 동의를 거부할 권리가 있으나, 이에 대한 동의가 없을 경우 상담신청 등이 불가능할 수 있음을 알려드립니다.</p>
        </div>
        <div class="dark:border-gray-600 flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
          <button data-modal-hide="defaultModal" type="button" class="text-white bg-primary-500 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-800">동의</button>
          <button data-modal-hide="defaultModal" type="button" class="text-black-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-black-700 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">닫기</button>
        </div>
      </div>
    </div>
  </div>
</template>

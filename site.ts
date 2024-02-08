export default {
  name: '주식회사 이엔미디어',
  description: '전문적이고 체계적인 최적의 솔루션을 제공하는 이엔미디어는 언제나 결과로 증명합니다.',
  keywords: '주식회사 이엔미디어,검색광고,SA광고,',
  author: '주식회사 이엔미디어',
  url: 'https:en-media.kr',
  defaultLocale: 'ko',
  identity: {
    type: 'Organization',
  } as any,
  trailingSlash: false,
  titleSeparator: '|',
  nav: [
    {
      text: 'ENMEDIA',
      link: '/',
      type: 'primary',
    },
    {
      text: 'COMPANY',
      link: '/company',
      type: 'secondary',
    },
    {
      text: 'SERVICE',
      link: '/service',
      type: 'secondary',
    },
    {
      text: 'SOLUTION',
      link: '/solution',
      type: 'secondary',
    },
    {
      text: 'PORTFOLIO',
      link: '/portfolio',
      type: 'secondary',
    },
    {
      text: 'CONTACT US',
      link: '/contact',
      type: 'secondary',
    },
  ],
}

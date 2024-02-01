/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "*.{js,vue,ts}",
    "/*.{js,vue,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    fontFamily: {
      sans: ["'Pretendard'", 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          100: '#eae2fe',
          200: '#d4c5fd',
          300: '#bfa8fc',
          400: '#a98bfb',
          500: '#946efa',
          600: '#7658c8',
          700: '#594296',
          800: '#3b2c64',
          900: '#1e1632',
        },
        secondary: {
          100: '#e2e2fe',
          200: '#c6c6fd',
          300: '#a9a9fb',
          400: '#8d8dfa',
          500: '#7070f9',
          600: '#5a5ac7',
          700: '#434395',
          800: '#2d2d64',
          900: '#161632',
        },
        black: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#757575',
          600: '#616161',
          700: '#424242',
          800: '#242424',
        },
        naver: {
          logo: '#3baf4a',
        },
        kakao: {
          logo: '#f8e112',
        },
        youtube: {
          logo: '#ec2c29',
        },
      },
      fontSize: {
        xs: [
          '.75rem',
          {
            lineHeight: '1.125rem',
          },
        ],
        sm: [
          '.875rem',
          {
            lineHeight: '1.3125rem',
          },
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.5rem',
          },
        ],
        lg: [
          '1.125rem',
          {
            lineHeight: '1.6875rem',
          },
        ],
        xl: [
          '1.3125rem',
          {
            lineHeight: '2rem',
          },
        ],
        '2xl': [
          '1.625rem',
          {
            lineHeight: '2.4375rem',
          },
        ],
        '3xl': [
          '1.9375rem',
          {
            lineHeight: '2.9375rem',
          },
        ],
        '4xl': [
          '2.5rem',
          {
            lineHeight: '3.75rem',
          },
        ],
        '5xl': [
          '3rem',
          {
            lineHeight: '4.5rem',
          },
        ],
        '6xl': [
          '3.75rem',
          {
            lineHeight: '5.625rem',
          },
        ],
        '7xl': [
          '4.5rem',
          {
            lineHeight: '6.75rem',
          },
        ],
        '8xl': [
          '6rem',
          {
            lineHeight: '9rem',
          },
        ],
        '9xl': [
          '8rem',
          {
            lineHeight: '12rem',
          },
        ],
        '10xl': [
          '9rem',
          {
            lineHeight: '13.5rem',
          },
        ],
        '11xl': [
          '12rem',
          {
            lineHeight: '18rem',
          },
        ],
        '12xl': [
          '15rem',
          {
            lineHeight: '22.5rem',
          },
        ],
      },
    },
    corePlugins: {
      aspectRatio: false,
    },
  },
  mode: 'jit',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animated'),
    require('flowbite/plugin'),
  ],
};

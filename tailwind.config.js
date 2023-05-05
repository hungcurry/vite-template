/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,vue}'],
  // 白名單
  safelist: ['bg-red-500', 'text-3xl', 'lg:text-4xl', 'h-[627px]'],
  darkMode: 'class', // 'media自動' or 'class手動'
  important: true,
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          // sm: '1.5rem',
          // lg: '2rem',
        },
      },
      colors: {
        primary: '#613215',
        secondary: '#e38d28',
        thirdly: '#190014',
        fourthly: '#efefef',
        muted: '#707070',
        dark: '#242424',
      },
      spacing: {
        1: '0.4rem',
        1.5: '0.6rem',
        2: '0.8rem',
        2.5: '1rem',
        3: '1.2rem',
        3.5: '1.4rem',
        4: '1.6rem',
        4.5: '1.8rem',
        5: '2rem',
        5.5: '2.2rem',
        6: '2.4rem',
        7: '2.8rem',
        8: '3.2rem',
        9: '3.6rem',
        10: '4rem',
        11: '4.4rem',
        12: '4.8rem',
        13: '5.2rem',
        14: '5.6rem',
        15: '6rem',
      },
      // leading-[36px]
      lineHeight: {
        none: '0',
        base: '1',
      },
      // text-[50px]
      fontSize: {
        xs: ['1.2rem', { lineHeight: '1' }],
        sm: ['1.4rem', { lineHeight: '1.25' }],
        base: ['1.6rem', { lineHeight: '1.5' }],
        m: ['2rem', { lineHeight: '1.5' }],
        lg: ['2.4rem', { lineHeight: '1.5' }],
        xl: ['2.8rem', { lineHeight: '1.5' }],
        '2xl': ['3.2rem', { lineHeight: '1.5' }],
        '3xl': ['3.6rem', { lineHeight: '1.5' }],
        '4xl': ['4rem', { lineHeight: '1.5' }],
        '5xl': ['4.4rem', { lineHeight: '1.5' }],
        '6xl': ['4.8rem', { lineHeight: '1.5' }],
        '7xl': ['5.2rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      // font-[100]
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
      },
    },
  },
  plugins: [],
};

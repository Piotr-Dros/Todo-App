import { createThemes } from 'tw-colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: 'hsl(220, 98%, 61%)',
      },
      backgroundImage: {
        gradient:
          'linear-gradient(to bottom right,hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        'light-desktop': "url('/src/assets/images/bg-desktop-light.jpg')",
        'light-mobile': "url('/src/assets/images/bg-mobile-light.jpg')",
        'dark-desktop': "url('/src/assets/images/bg-desktop-dark.jpg')",
        'dark-mobile': "url('/src/assets/images/bg-mobile-dark.jpg')",
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        default: '#000',
        neutral: {
          default: 'hsl(0, 0%, 98%)', // background
          paper: 'hsl(0, 0%, 100%)',
        },
        blue: {
          main: 'hsl(235, 19%, 35%)',
          disabled: 'hsl(236, 33%, 92%)',
          placeholder: 'hsl(233, 11%, 84%)',
        },
      },
      dark: {
        default: '#fff',
        neutral: {
          default: 'hsl(235, 21%, 11%)', // background
          paper: 'hsl(235, 24%, 19%)', // main elements bg
        },
        blue: {
          main: 'hsl(234, 39%, 85%)', // input, todos
          disabled: 'hsl(237, 14%, 26%)',
          placeholder: 'hsl(233, 14%, 35%)',
        },
      },
    }),
  ],
};

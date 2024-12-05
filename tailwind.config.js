/* eslint-disable */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/theme/**/*.{js,jsx}',
    './src/assets/**/*.{js,jsx}',
    './docs/**/**/*.{md,mdx}',
  ],
  corePlugins: {
    preflight: false,
  },
  plugins: [require('@tailwindcss/line-clamp')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', defaultTheme.fontFamily.sans],
        mono: ['"Inconsolata"', defaultTheme.fontFamily.mono],
      },
      screens: {
        lg: '1193px',
        max: '1440px',
      },
      /* // colors: {
      //   primary: {
      //     DEFAULT: 'var(--docs-color-primary)',
      //     100: 'var(--docs-color-primary-100)',
      //   },
      //   text: {
      //     DEFAULT: 'var(--docs-color-text)',
      //     100: 'var(--docs-color-text-100)',
      //   },
      //   border: 'var(--docs-color-border)',
      //   background: {
      //     DEFAULT: 'var(--docs-color-background)',
      //     100: 'var(--docs-color-background-100)',
      //     200: 'var(--docs-color-background-200)',
      //     300: 'var(--docs-color-background-300)',
      //   },
      // }, */
    },
  },
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }        
    },
  },
}
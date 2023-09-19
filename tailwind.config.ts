import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'Poppins', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '2xs': '0.625rem',
      },
      screens: {
        xs: '420px',
        '2xs': '360px',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
      },
      colors: {
        brownPrimary: '#915B44',
        brownCard: '#3C2C26',
        brownPressed: '#52392E',
        white: '#FFF4F1',
        backgroundLight: '#F0E6E3',
        'white1/2': '#C7BCBA',
        dark: '#1D1212',
        subText: '#9FA2B4',
        pureWhite: '#Fff',
        danger: '#DC3545',
        smokyGray: '#0B0C10',
        smokyGrayText: '#777C89',
        grayShade: '#E5E9F2',
      },
    },
  },
  plugins: [],
}
export default config

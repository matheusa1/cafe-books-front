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
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      colors: {
        brownPrimary: '#915B44',
        brownCard: '#3C2C26',
        brownPressed: '#52392E',
        white: '#FFF4F1',
        backgroundLight: '#F0E6E3',
      },
    },
  },
  plugins: [],
}
export default config

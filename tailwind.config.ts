import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brownPrimary: '#915B44',
        brownCard: '#3C2C26',
        brownPressed: '#52392E',
        white: '#FFF4F1',
      },
    },
  },
  plugins: [],
}
export default config

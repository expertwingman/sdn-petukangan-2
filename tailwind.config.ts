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
        primary: { DEFAULT: '#1A4A6B', foreground: '#FFFFFF' },
        accent: { DEFAULT: '#E8A838', foreground: '#1A1A2E' },
      },
    },
  },
  plugins: [],
}
export default config

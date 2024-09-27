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
        'bg-color': '#F9F9EB',
        'accent-color': '#F59E0B',
        search: '#6E7375',
        'select-input': '#E9E9E9',
        instagran: '#2563EB',
      },
    },
  },
  plugins: [],
}
export default config

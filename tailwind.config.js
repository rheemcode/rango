
// const colors = require("tailwindcss/colors");

const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/partials/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ["Poppins"],
        inter: ['var(--font-inter)'],
        quicksand: ['var(--font-quicksand)'],
        spacegrotesk: ['var(--font-spacegrotesk)'],
      },
    },
  },
  plugins: [],
}
export default config

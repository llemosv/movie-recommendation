/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        highlights: {
          purple: '#8323FF',
          'purple-light': '#A462FF',
          pink: '#ff2daf',
          yellow: '#FEEA35',
        },
        base: {
          100: '#FFFFFF',
          200: '#8B8D9B',
          300: '#373745',
          400: '#2B2B37',
          500: '#1e1f28',
        },
      },
    },
  },
  plugins: [],
};

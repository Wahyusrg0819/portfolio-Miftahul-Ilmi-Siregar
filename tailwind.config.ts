import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sakura': {
          50: '#fff0f7',
          100: '#ffe4f3',
          200: '#ffc9e7',
          300: '#ff9ed3',
          400: '#ff65b6',
          500: '#ff3399',
          600: '#ff007f',
          700: '#e6005c',
          800: '#cc0052',
          900: '#b30047',
        },
        'lavender': {
          50: '#f7f0ff',
          100: '#f3e4ff',
          200: '#e7c9ff',
          300: '#d39eff',
          400: '#b665ff',
          500: '#9933ff',
          600: '#7f00ff',
          700: '#5c00e6',
          800: '#5200cc',
          900: '#4700b3',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;

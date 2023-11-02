import type { Config } from 'tailwindcss';
const theme = require("./theme");
const {fontFamily, colors, backgroundColor, backgroundImage, boxShadow} = theme;

const config: Config = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/container/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xl-1': '1281px',
      },
      height: {
        'custom-100': 'calc(100vh - 5rem)',
      },
      fontFamily,
      colors,
      backgroundColor,
      backgroundImage,
      boxShadow,
    },
  },
  plugins: [],
}
export default config

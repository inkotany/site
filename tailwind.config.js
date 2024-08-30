/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E2A5E',
        'secondary': '#271E5E',
        'black': '#232325',
        'highlight': '#EBEBFF',
        'grey': '#D9D9D9'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90.17deg, #1E2A5E 0.15%, #37467B 61.47%, #55679C 99.85%)',
      },
      textColor: {
        'gradient': 'transparent',
      },
    }
  },
  plugins: [],
};

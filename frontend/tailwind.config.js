/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        biru1: '#1172B4',
        biru2: '#009CDC',
        abang: '#DD0000',
      },
    },
  },
  plugins: [],
}

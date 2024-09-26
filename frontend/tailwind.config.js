/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        biru1: '#2563EB', // text-blue-600
        biru2: '#3B82F6', // text-blue-500
        biru3: '#60A5FA', // text-blue-400
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

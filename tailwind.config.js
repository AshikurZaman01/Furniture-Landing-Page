/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'primary': '#E58411',
        'secondary': '#1E1E1E',
        'secondary-bg': "#f7f7f7"
      },
      fontFamily: {
        'primary': ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}


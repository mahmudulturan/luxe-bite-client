/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        'textCol': "#081B21",
        'backgroundCol': "#FFFFFF",
        'primaryCol': "#FF7029",
        'secondaryCol': "#B9E1EE",
        'accentCol': "#B14C2B"
      }
    },
  },
  plugins: [require("daisyui")],
}


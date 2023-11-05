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
        'textCol': "#0D0203",
        'backgroundCol': "#F9DCDD",
        'primaryCol': "#CF262E",
        'secondaryCol': "#F3BEC0",
        'accentCol': "#C2242B",
        'darkText': "#C2242B",
        'darkBackground': "#230607",
        'darkPrimary': "#D93039",
        'darkSecondary': "#410C0E",
        'darkAccent': "#DB3D45"
      }
    },
  },
  plugins: [require("daisyui")],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      "sm":"640px",
      "md":"1200px"
    },
    extend: {
      backgroundImage: {
        'hero': "url('/Assets/Background.png')",
      }
    },
  },
  plugins: [],
}


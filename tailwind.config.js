/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
          "2xl": "1140px",
      },
  },
    extend: {
      backgroundImage: {
        'hero-image': "url('../public/assets/images/webp/hero-bg.webp')"
      },
      fontSize: {
        'custom-6xl': '61px',
        'custom-xl': '22px',
        'custom-sm': '13px'
      },
      colors: {
        'off-grey': '#525252',
        'off-blue': '#0046AD',
        'dark-blue': '#023DA0'
      },
      lineHeight:{
        'custom-sm':'150%',
        'custom-md': '136%'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs:'389px',
      sm: '480px',
      md: '769px',
      lg: '1208px',
      xl: '1440px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        cprimary: "#000000",
        cdimblack: "#1a1d1f",
        cyellow: "#58CBFE",
        cdimwhite: "#fff"
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',  // 512px
        '144': '36rem',  // 576px
      },
      height: {
        '128': '32rem',  // 512px
        '144': '36rem',  // 576px
      }

    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand': {
          100:'#00cc66' ,
          200:'#00cc00' ,
          300:'#009933' ,
          400:'#336600' ,
        }
      },
    },
  },
  plugins: [],
}


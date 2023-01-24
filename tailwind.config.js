/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto',],
      },
      colors: {
        'regal-grey': '#A6A8AD',
        'regal-black': '#121214',
        'regal-blue': '#0033FF',
      },
      spacing: {
        '412': '412px',
      },
      maxWidth: {
        '1150': '1145px',
        '1200': '1200px',
      },
      backgroundImage: {
        'hero': "url('/imge/IMAGE-2.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

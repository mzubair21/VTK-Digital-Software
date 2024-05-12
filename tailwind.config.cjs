/** @type {import('tailwindcss').Config} */
export default {
  content: ["./dist/**/*.{html,js}","./dist/*.{html,js}","./*.{html,js}","./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "gray-primary": "#59595E",
        "gray-secondary": "#404044",
        "orange-secondary": "#FF714F",
        "blue-secondary":"#8B8BDC",
        "blue-primary":" #03085E",
        "black-secondary":"#251F1F8C",
        "purple-secondary": "#7A64D3",


      },
      fontSize:{
        "xss":'0.7rem'
      },
      height:{
        '464':'29rem',
        '480':'30rem',
        '512':'32rem',
        '560':'35rem',
      }
    },
  },
  plugins: [],
};

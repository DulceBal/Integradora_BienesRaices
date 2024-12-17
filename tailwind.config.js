/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {
      colors: {
        //morado: '#A3FF9A', // Tono más oscuro de morado
      golden: '#ff69b4',
      verde: '#A3FF9A',        //verde
      rosa: '#E9B8DE', //rosa
      azul: '#B6FFFF',//azul
      transparent: 'transparent',
      current: 'currentcolor',
      redd: '#D62828', 
    },
    },
  },
  plugins: [],
}


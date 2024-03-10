/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#0C359E',
        'secondary' : '#EE99C2',
        'third' : '#FFE3CA',
        'fourth' : '#F6F5F5'
      },
      fontFamily:{
        'poppins':['poppins', 'sans-serif'],
        'roboto':['roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}


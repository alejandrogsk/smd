module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      primary: ['Poppins', 'sans-serif'],
      secondary: ['Yellowtail', 'cursive']
    },
    extend: {

      colors: {
        "ui": {
          
          "black": "#1A1A1A",
          "orange":{
            "main":"#F84525",
            "light":"#F95639"
          },
          "yellow":"#FCD042",
          "gray": {
            "main":"#C4C4C4",
            "light":"#ECECEC",
          },
          "white":"#fff"
        }
      },
      screens: {
        'mobile-custom': "480px",
        'hero-custom': '1100px',
      },
    },
  },
  plugins: [],
}

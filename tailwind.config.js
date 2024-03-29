/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        white: '#E8EBF7',
        burnt: '#E76F51',
        sandy: '#F4A261',
        crayola: '#E9C46A',
        green: '#2A9D8F',
        charcoal: '#264653',
        redHighlight: '#B73225',
        blue: '#004e7c'
      },
      backgroundImage: {
        bridge: "linear-gradient(to top, rgb(0,0,0,0), rgba(0,0,0, 0.7)), url('./assets/snow-bridge.jpg')",
        gamegroupproject: "linear-gradient(to right, rgb(0,0,0,0), rgba(0,0,0, 1)), url('./assets/game-group-project.png')",
        nasagroupproject: "linear-gradient(to left, rgb(0,0,0,0), rgba(0,0,0, 1)), url('./assets/nasa-group-project.png')",
      },
      // backgroundImage: (theme) => ({
      //   // "gradient-rainbow": "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
      //   "gradient-red-yellow": "linear-gradient(90deg, #AD5D4E 14.53%, #EB6534 69.36%, #EFCA08 107.73%)",
      // }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        serifjp: ["Noto Serif Japanese", "serif"]
      },
      content: {
        splatter: "url('./assets/splatter.png')",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
        xl: "1400px"
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

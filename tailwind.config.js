/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        orange: '#EB6534',
        redwood: '#AD5D4E',
        purple: '#40476D',
        frostblue: "#829CBC",
        darkblue: '#001D4A',
        indigo: '#27476E',
        white: '#E8EBF7',
        burnt: '#E76F51',
        sandy: '#F4A261',
        crayola: '#E9C46A',
        green: '#2A9D8F',
        charcoal: '#264653',
      },
      // backgroundImage: {
      //   bridge: "url('./assets/snow-bridge.jpg')",
      // },
      backgroundImage: (theme) => ({
        // "gradient-rainbow": "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-red-yellow": "linear-gradient(90deg, #AD5D4E 14.53%, #EB6534 69.36%, #EFCA08 107.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"]
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
}

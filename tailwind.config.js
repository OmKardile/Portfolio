/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       chathura: [ 'Chathura', 'sans-serif'],
      },
      keyframes:{
        wiggle:{
          "0%,100%":{transform:"rotate(-3deg)"},
          "50%":{transform:"rotate(3deg)"}
        }
      }
    },
    animation:{
      wiggle:"wiggle 200ms ease-in-out"
    }
  },
  plugins: [],
}